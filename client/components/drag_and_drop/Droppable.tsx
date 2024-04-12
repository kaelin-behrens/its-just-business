import { useDroppable } from '@dnd-kit/core'

import './Droppable.css'
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export function Droppable({ bars }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: bars.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: '#5bc0beff',
    width: '80%',
    margin: '10px',
    padding: '10px',
  }

  return (
    // <div className="drop" ref={setNodeRef} style={style}>
    //* {props.children} *
    <div>
      <SortableContext items={bars} strategy={verticalListSortingStrategy}>
        {bars.map((bar) => (
          <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            key={bar.id}
          >
            {bar.name}
          </div>
        ))}
      </SortableContext>
    </div>
    //* </div> *
  )
}
