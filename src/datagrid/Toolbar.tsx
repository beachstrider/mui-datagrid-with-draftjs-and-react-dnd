import { useState, useCallback, useEffect } from "react"

import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarQuickFilter
} from "@mui/x-data-grid-pro"

import { Grid } from "@mui/material"

const Toolbar = (props: any) => {
  const { selectedCellParams, richToolbar } = props

  return (
    <GridToolbarContainer>
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          {(selectedCellParams?.mode !== "edit" ||
            selectedCellParams?.type !== "xhtml") && (
            <>
              <GridToolbarColumnsButton />
              <GridToolbarFilterButton />
              <GridToolbarDensitySelector />
              <GridToolbarExport />
            </>
          )}
          {selectedCellParams?.mode === "edit" &&
            selectedCellParams?.type === "xhtml" &&
            richToolbar}
        </Grid>
        <Grid item>
          <GridToolbarQuickFilter />
        </Grid>
      </Grid>
    </GridToolbarContainer>
  )
}

export default Toolbar
