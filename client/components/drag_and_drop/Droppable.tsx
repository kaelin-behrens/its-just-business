import { useDroppable } from '@dnd-kit/core'

import './Droppable.css'

export function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  })
  const style = {
    opacity: isOver ? 1 : 0.5,
  }

  return (
    <div className="drop" ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}
