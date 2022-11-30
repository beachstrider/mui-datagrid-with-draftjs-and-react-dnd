import { useRef } from "react"

import { useDrop, useDrag } from "react-dnd"

const Header = (props: any) => {
  const { onColumnHeaderOrderChange, setIsColHeaderDragging } = props

  const col = { field: props.field }
  const ref = useRef(null)

  const [, drag] = useDrag(() => ({
    type: "HEADER",
    item: { field: props.field },
    end: async (source, monitor) => {
      setIsColHeaderDragging(false)
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  const [, drop] = useDrop(() => ({
    accept: "HEADER",
    hover(source, monitor) {
      const target = col

      if (!ref.current) {
        return
      }

      onColumnHeaderOrderChange(source, target)
    },
    drop: () => col,
    canDrop: (source: any) => {
      if (source.field === col.field) return false // dropping into itself

      return true
    },
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    }
  }))

  drag(drop(ref))

  return (
    <div>
      <div className="MuiDataGrid-dndColumn" ref={ref} />
      {props.colDef.headerName}
    </div>
  )
}

export default Header
