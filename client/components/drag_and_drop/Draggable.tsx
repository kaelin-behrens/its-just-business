import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import './Draggable.css'
import { SortableContext } from '@dnd-kit/sortable'

export function Draggable(props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  })
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  }

  return (
    <>
      <button
        className="column"
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        {props.children}
      </button>
    </>
  )
}
