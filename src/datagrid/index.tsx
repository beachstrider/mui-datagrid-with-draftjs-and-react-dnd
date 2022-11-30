import useStateRef from "react-usestateref"
import { useState, useRef, useEffect, useCallback } from "react"
import {
  DataGridPro as DataGrid,
  useGridApiRef,
  GridColumnHeaderParams,
  GridRenderEditCellParams,
  GridRenderCellParams,
  GridEventListener,
  GridRowId,
  GridRowModesModel,
  GridRowModel,
  GridRowParams,
  GridCellParams,
  GridRowModes,
  MuiEvent,
  GridActionsCellItem,
  DataGridProProps
} from "@mui/x-data-grid-pro"

import AddIcon from "@mui/icons-material/Add"

import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"

import {
  RichCellEdit,
  BooleanCellEdit,
  StringCellEdit,
  SelectCellEdit
} from "./CellEditRender"
import Toolbar from "./Toolbar"
import { RowContextMenu } from "./ContextMenu"
import defaultValues from "./defaultValues"

import DndRow from "./DndRow"
import DndColumnHeader from "./DndColumnHeader"
import GridTreeDataGroupingCell from "./GridTreeDataGroupingCell"
import NoRowsOverlay from "./NoRowsOverlay"

import { genNewId, getChildrenIds } from "../utils/datagrid"
import { enableConsoleError, disableConsoleError } from "../utils/consoleError"

const consoleError = disableConsoleError()

interface SelectedCellParams {
  id: GridRowId
  field: string
  type: string | undefined
  mode: string | undefined
}

export const Index: React.FunctionComponent<any> = (props) => {
  const apiRef = useGridApiRef()

  const [selectedCellParams, setSelectedCellParams] =
    useState<SelectedCellParams>({ id: 0, field: "", type: "", mode: "" })

  const [rowModesModel, setRowModesModel, rowModesModelRef] =
    useStateRef<GridRowModesModel>({})

  const [richToolbar, setRichToolbar] = useState<any>()

  const [cols, setCols, colsRef] = useStateRef([
    ...props.cols.map((el: any) => ({
      ...el,
      renderCell: (params: GridRenderCellParams) => (
        <div dangerouslySetInnerHTML={{ __html: params.value }} />
      ),
      renderEditCell: (params: GridRenderEditCellParams) => {
        const type = params.colDef.type

        if (type === "xhtml")
          return (
            <RichCellEdit
              apiRef={apiRef}
              {...params}
              setRichToolbar={setRichToolbar}
              selectedCellParams={selectedCellParams}
            />
          )
        if (type === "boolean")
          return (
            <BooleanCellEdit
              apiRef={apiRef}
              selectedCellParams={selectedCellParams}
              {...params}
            />
          )
        if (type === "singleSelect")
          return (
            <SelectCellEdit
              apiRef={apiRef}
              selectedCellParams={selectedCellParams}
              {...params}
            />
          )
        if (
          type === "string" ||
          type === "number" ||
          type === "date" ||
          type === "email"
        )
          return (
            <StringCellEdit
              apiRef={apiRef}
              selectedCellParams={selectedCellParams}
              type={type}
              {...params}
            />
          )

        return params.value
      },
      renderHeader: (params: GridColumnHeaderParams) => (
        <DndColumnHeader
          {...params}
          onColumnHeaderOrderChange={handleColumnHeaderOrderChange}
          setIsColHeaderDragging={setIsColHeaderDragging}
        />
      )
    }))
  ])

  const [, setIsColHeaderDragging, isColHeaderDraggingRef] = useStateRef(false)
  const [, setHoveringHeader, isHoveringHeaderRef] = useStateRef({ field: "" })

  const handleColumnHeaderOrderChange = (source: any, target: any) => {
    if (isHoveringHeaderRef.current.field !== target.field) {
      setHoveringHeader(target)
      setIsColHeaderDragging(false)
    }

    if (isColHeaderDraggingRef.current !== true) {
      if (source.field !== target.field) {
        const oldCols = colsRef.current

        const sourceIndex = oldCols.findIndex(
          (col: any) => col.field === source.field
        )
        const targetIndex = oldCols.findIndex(
          (col: any) => col.field === target.field
        )

        const sourceCol = oldCols[sourceIndex]

        const newCols = [...oldCols]

        newCols.splice(sourceIndex, 1)
        newCols.splice(targetIndex, 0, sourceCol)

        setCols(newCols)

        setIsColHeaderDragging(true)

        console.log("onColumnHeaderOrderChange, cols:", newCols)
      }
    }
  }

  const { rows, treeKey } = props

  const [contextMenu, setContextMenu] = useState<{
    mouseX: number
    mouseY: number
  } | null>(null)

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault()

    const id = Number(event.currentTarget.getAttribute("data-id"))

    if (!apiRef.current.isRowSelected(id)) {
      apiRef.current.selectRows(apiRef.current.getAllRowIds(), false)
      apiRef.current.selectRow(id)
    }

    if (selectedCellParams.mode !== "edit") {
      setContextMenu(
        contextMenu === null
          ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 }
          : null
      )
    }
  }

  const handleContextMenuClose = () => {
    setContextMenu(null)
  }

  const handleAddRow = async () => {
    const newId = genNewId(apiRef)
    const field = cols[0].field
    const type =
      typeof cols[0].type !== "undefined" ? typeof cols[0].type : "string"
    const columns = apiRef.current.getAllColumns()
    const row: any = { id: newId, isNew: true, [treeKey]: [newId] }
    columns.map((el: any) => (row[el.field] = defaultValues[el.type]))

    setSelectedCellParams({ id: newId, field, type, mode: "edit" })

    await apiRef.current.updateRows([row])

    await setRowModesModel((oldModel: any) => ({
      ...oldModel,
      [newId]: { mode: GridRowModes.Edit }
    }))

    await apiRef.current.setPage(apiRef.current.state.pagination.pageCount)

    console.log("onAddRow")
  }

  const handleAddChild = async () => {
    const newId = genNewId(apiRef)
    const field = cols[0].field
    const type =
      typeof cols[0].type !== "undefined" ? typeof cols[0].type : "string"
    const columns = apiRef.current.getAllColumns()

    const [_id] = apiRef.current.getSelectedRows().keys()
    const _row = apiRef.current.getRow(_id)
    const parentsIds = _row[treeKey]

    const row: any = {
      id: newId,
      isNew: true,
      [treeKey]: [...parentsIds, newId]
    }
    columns.map((el: any) => (row[el.field] = defaultValues[el.type]))

    setSelectedCellParams({ id: newId, field, type, mode: "edit" })

    await apiRef.current.updateRows([row])

    setRowModesModel((oldModel: any) => ({
      ...oldModel,
      [newId]: { mode: GridRowModes.Edit }
    }))

    await apiRef.current.setRowChildrenExpansion(_id, true)

    handleContextMenuClose()

    console.log("onAddChild, parentId:", _id)
  }

  const handleAddSibling = async () => {
    const newId = genNewId(apiRef)
    const field = cols[0].field
    const type =
      typeof cols[0].type !== "undefined" ? typeof cols[0].type : "string"
    const columns = apiRef.current.getAllColumns()

    const [_id] = apiRef.current.getSelectedRows().keys()
    const _row = apiRef.current.getRow(_id)
    const treeIds = _row[treeKey]

    const row: any = {
      id: newId,
      isNew: true,
      [treeKey]: [...treeIds.slice(0, treeIds.length - 1), newId]
    }

    columns.map((el: any) => (row[el.field] = defaultValues[el.type]))

    setSelectedCellParams({ id: newId, field, type, mode: "edit" })

    await apiRef.current.updateRows([row])

    setRowModesModel((oldModel: any) => ({
      ...oldModel,
      [newId]: { mode: GridRowModes.Edit }
    }))

    handleContextMenuClose()

    console.log("onAddSibling, siblingId:", _id)
  }

  const duplicateTree = (target: any, parents: any) => {
    const newId = genNewId(apiRef)
    const newTree = [...parents, newId]

    const newRow: any = {
      ...target,
      id: newId,
      [treeKey]: newTree
    }

    apiRef.current.updateRows([newRow])

    const childrenIds = getChildrenIds(target.id, apiRef)

    childrenIds.forEach((id: any) => {
      const childRow = apiRef.current.getRow(id)
      duplicateTree(childRow, newTree)
    })
  }

  const handleDuplicateRow = () => {
    const [targetId] = apiRef.current.getSelectedRows().keys()

    const target = apiRef.current.getRow(targetId)
    const treeIds = target[treeKey]
    const targetParents = [...treeIds.slice(0, treeIds.length - 1)]

    duplicateTree(target, targetParents)
    handleContextMenuClose()

    console.log("onDuplicate, id:", targetId)
  }

  const updateTree = (id: GridRowId, parents: any) => {
    const updatedRow = {
      id,
      [treeKey]: [...parents, id]
    }

    const childrenIds = getChildrenIds(id, apiRef)

    childrenIds.forEach((childId: any) => updateTree(childId, [...parents, id]))

    apiRef.current.updateRows([updatedRow])
  }

  const handleMoveToTop = () => {
    const [id] = apiRef.current.getSelectedRows().keys()
    updateTree(id, [])

    handleContextMenuClose()
  }

  const handleMoveToUp = () => {
    const [id] = apiRef.current.getSelectedRows().keys()

    handleContextMenuClose()

    console.log("onMoveToUp, id:", id)
  }

  const handleMoveToDown = () => {
    const [id] = apiRef.current.getSelectedRows().keys()

    handleContextMenuClose()

    console.log("onMoveToDown, id:", id)
  }

  const deleteTree = (id: number) => {
    let childrenIds = getChildrenIds(id, apiRef)

    childrenIds.forEach((id: any) => {
      deleteTree(id)
    })

    apiRef.current.updateRows([{ id, _action: "delete" }])
  }

  const handleDelete = () => {
    console.log("onDelete, ids:", apiRef.current.getSelectedRows())
    apiRef.current.getSelectedRows().forEach((row) => deleteTree(row.id))

    handleContextMenuClose()
  }

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true
  }

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    event.defaultMuiPrevented = true
  }

  const handleEditClick = (id: GridRowId) => () => {
    const field = cols[0].field
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit }
    })
    const type = apiRef.current.getCellParams(id, field).colDef.type
    const mode = rowModesModelRef.current[id]?.mode
    setSelectedCellParams({ id, field, type, mode })
    console.log("onEditClick, id:", id)
  }

  const handleSaveClick = (id: GridRowId) => () => {
    const mode = GridRowModes.View
    setRowModesModel({ ...rowModesModel, [id]: { mode } })
    setSelectedCellParams({ id, field: "", type: "", mode })
  }

  const processRowUpdate = (newRow: GridRowModel) => {
    console.log("onSaveClick, row:", newRow)
    const updatedRow = { ...newRow, id: newRow.id, isNew: false }
    apiRef.current.updateRows([updatedRow])
    return updatedRow
  }

  const handleCellFocus = useCallback(
    (event: React.FocusEvent<HTMLDivElement>) => {
      const row = event.currentTarget.parentElement
      const id = Number(row!.dataset.id!)
      const field = event.currentTarget.dataset.field!
      const type = apiRef.current.getCellParams(id, field).colDef.type
      const mode = rowModesModelRef.current[id]?.mode
      setSelectedCellParams({ id, field, type, mode })
    },
    []
  )

  const handleCellDoubleClick = (
    params: GridCellParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    const { id, field } = params
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.Edit }
    })
  }

  const handleColumnVisibilityModelChange = (newModel: any) => {
    console.log("onColumnVisibilityModelChange, newModel:", newModel)
  }

  const handleColumnOrderChange = (params: any) => {
    console.log("onColumnOrderChange", params)
  }

  const groupingColDef: DataGridProProps["groupingColDef"] = {
    headerName: "Hierarchy",
    width: 160,
    renderHeader: () => (
      <GridActionsCellItem
        icon={<AddIcon />}
        label="Edit"
        className="textPrimary"
        onClick={handleAddRow}
      />
    ),
    renderCell: (params) => (
      <GridTreeDataGroupingCell
        {...params}
        className={"ddd"}
        apiRef={apiRef}
        treeKey={treeKey}
        rowModesModel={rowModesModel}
        handleSaveClick={handleSaveClick}
        handleEditClick={handleEditClick}
      />
    )
  }

  useEffect(() => {
    enableConsoleError(consoleError)
  }, [])

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <DataGrid
          apiRef={apiRef}
          columns={cols}
          rows={rows}
          treeData={typeof treeKey !== "undefined"}
          getTreeDataPath={(row: any) => row[treeKey]}
          groupingColDef={groupingColDef}
          rowsPerPageOptions={[10, 20, 50]}
          pagination={true}
          disableColumnFilter
          disableColumnReorder
          experimentalFeatures={{ newEditingApi: true }}
          autoHeight
          editMode="row"
          rowModesModel={rowModesModel}
          processRowUpdate={processRowUpdate}
          onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
          onCellDoubleClick={handleCellDoubleClick}
          onRowEditStart={handleRowEditStart}
          onRowEditStop={handleRowEditStop}
          onColumnVisibilityModelChange={handleColumnVisibilityModelChange}
          onColumnOrderChange={handleColumnOrderChange}
          getRowHeight={() => "auto"}
          // getRowHeight={({ id }: any) =>
          //   Object.keys(rowModesModel).includes(id.toString()) ? "auto" : null
          // }
          initialState={{
            pagination: {
              pageSize: 10
            }
          }}
          components={{
            Toolbar,
            NoRowsOverlay,
            Row: DndRow
          }}
          componentsProps={{
            toolbar: {
              selectedCellParams,
              richToolbar
            },
            cell: {
              onFocus: handleCellFocus
            },
            row: {
              apiRef,
              treeKey,
              style: { cursor: "context-menu" },
              onContextMenu: handleContextMenu
            }
          }}
        />
      </DndProvider>
      <RowContextMenu
        apiRef={apiRef}
        open={contextMenu !== null}
        onClose={handleContextMenuClose}
        onNewChild={handleAddChild}
        onNewSibling={handleAddSibling}
        onDuplicate={handleDuplicateRow}
        onMoveToTop={handleMoveToTop}
        onMoveToUp={handleMoveToUp}
        onMoveToDown={handleMoveToDown}
        onDelete={handleDelete}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        componentsProps={{
          root: {
            onContextMenu: (e: Event) => {
              e.preventDefault()
              handleContextMenuClose()
            }
          }
        }}
      />
    </>
  )
}

export default Index
