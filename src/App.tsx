import * as React from "react"
import { GridColDef, GridRowsProp } from "@mui/x-data-grid-pro"

import DataGrid from "./datagrid"

import rows from "./_data/persons.json"

const columns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    editable: true
  },
  {
    field: "gender",
    headerName: "Gender",
    type: "singleSelect",
    valueOptions: ["Male", "Female"],
    editable: true
  },
  { field: "weight", headerName: "Weight", type: "number", editable: true },
  { field: "birthday", headerName: "Birthday", type: "date", editable: true },
  {
    field: "bio",
    headerName: "BIO",
    type: "xhtml",
    editable: true,
    width: 400
  },
  {
    field: "status",
    headerName: "Status",
    type: "boolean",
    editable: true
  }
]

export default function App() {
  return (
    <div id="app">
      <div className="grid-container">
        <DataGrid cols={columns} rows={rows} treeKey="hierarchy" />
      </div>
    </div>
  )
}
