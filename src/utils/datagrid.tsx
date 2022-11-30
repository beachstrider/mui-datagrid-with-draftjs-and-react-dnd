import { GridRowId } from "@mui/x-data-grid-pro"

export const genNewId = (apiRef: any) => {
  const ids = apiRef.current.getAllRowIds().map((el: any) => Number(el))
  const maxId = ids.length ? Math.max(...ids) : 0
  const id = maxId + 1
  return id
}

export const getChildrenIds = (id: GridRowId, apiRef: any) => {
  let childrenIds = apiRef.current.getRowNode(id)?.children
  childrenIds = typeof childrenIds === "undefined" ? [] : childrenIds
  return childrenIds
}
