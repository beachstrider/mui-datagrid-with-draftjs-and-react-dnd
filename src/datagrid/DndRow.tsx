import { GridRow } from "@mui/x-data-grid-pro"
import { useDrop } from "react-dnd"

const RowGapElement = (props: any) => {
  const { forwardRef, ...rest } = props

  return (
    <div ref={forwardRef} {...rest}>
      <div />
    </div>
  )
}

const RowGapFirst = (props: any) => {
  const { row, index, apiRef } = props

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "ROW",
      drop: () => ({ id: 0, as: "sibling" }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      })
    }),
    [row]
  )

  if (index % apiRef.current.state.pagination.pageSize !== 0) return <></>

  return (
    <RowGapElement
      className={`MuiDataGrid-rowGap first ${
        isOver && canDrop ? "MuiDataGrid-rowGap--dragHovering" : ""
      }`}
      forwardRef={drop}
    />
  )
}

const RowGapDown = (props: any) => {
  const { row, treeKey } = props

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "ROW",
      canDrop: (source: any) => {
        const target = row

        if (source.id === target.id) return false // dropping into itself
        if (target[treeKey].includes(source.id)) return false // parent into child

        return true
      },
      drop: () => ({ ...row, as: "sibling" }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      })
    }),
    [row]
  )

  return (
    <RowGapElement
      className={`MuiDataGrid-rowGap ${
        isOver && canDrop ? "MuiDataGrid-rowGap--dragHovering" : ""
      }`}
      forwardRef={drop}
    />
  )
}

const Row = (allProps: any) => {
  const { apiRef, treeKey, row, ...props } = allProps

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: "ROW",
      canDrop: (source: any) => {
        const target = row

        if (source.id === target.id) return false // dropping into itself
        if (target[treeKey].includes(source.id)) return false // parent into child

        return true
      },
      drop: () => ({ ...row, as: "child" }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
      })
    }),
    [row]
  )

  return (
    <div className="MuiDataGrid-dndRowContainer">
      <RowGapFirst index={props.index} row={row} apiRef={apiRef} />
      <GridRow
        row={row}
        ref={drop}
        {...props}
        className={isOver && canDrop ? "MuiDataGrid-row--dragHovering" : ""}
      />
      <RowGapDown row={row} treeKey={treeKey} />
    </div>
  )
}

export default Row
