import Menu from "@mui/material/Menu"
import MenuList from "@mui/material/MenuList"
import MenuItem from "@mui/material/MenuItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemIcon from "@mui/material/ListItemIcon"

import AddIcon from "@mui/icons-material/Add"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import DeleteIcon from "@mui/icons-material/Delete"

import Divider from "@mui/material/Divider"

export const RowContextMenu = (props: any) => {
  const {
    apiRef,
    onDuplicate,
    onMoveToTop,
    onMoveToUp,
    onMoveToDown,
    onDelete,
    onNewSibling,
    onNewChild,
    ...newProps
  } = props

  let hasParents = false
  let selectedRowCount = 0

  if (typeof apiRef.current.getSelectedRows !== "undefined") {
    selectedRowCount = apiRef.current.getSelectedRows().size

    const [id] = apiRef.current.getSelectedRows().keys()

    if (apiRef.current.getRowNode(id) !== null) {
      hasParents = apiRef.current.getRowNode(id).parent
    }
  }

  return (
    <Menu {...newProps}>
      <MenuList>
        <MenuItem onClick={onNewChild} disabled={selectedRowCount > 1}>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>New Child</ListItemText>
        </MenuItem>
        <MenuItem onClick={onNewSibling} disabled={selectedRowCount > 1}>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>New Sibling</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onDuplicate} disabled={selectedRowCount > 1}>
          <ListItemIcon>
            <ContentCopyIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Duplicate</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onMoveToUp} disabled={selectedRowCount > 1}>
          <ListItemIcon>
            <ArrowUpwardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Move to up</ListItemText>
        </MenuItem>
        <MenuItem onClick={onMoveToDown} disabled={selectedRowCount > 1}>
          <ListItemIcon>
            <ArrowDownwardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Move to down</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={onDelete}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>
            {selectedRowCount > 1 ? "Delete rows" : "Delete"}
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
