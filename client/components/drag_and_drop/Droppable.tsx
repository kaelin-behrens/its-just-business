import { useDroppable } from '@dnd-kit/core'

import './Droppable.css'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export function Droppable({ bars }) {
  // const { isOver, setNodeRef } = useDroppable({
  //   id: props.id,
  // })
  // const style = {
  //   opacity: isOver ? 1 : 0.5,
  // }

  return (
    // <div className="drop" ref={setNodeRef} style={style}>
    //* {props.children} *
    <div className="column">
      <SortableContext items={bars} strategy={verticalListSortingStrategy}>
        {bars.map((bar) => (
          <Bar key={bar.id} id={bar.id} name={bar.name} />
        ))}
      </SortableContext>
    </div>
    //* </div> *
  )
}
