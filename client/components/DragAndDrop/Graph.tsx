import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import { Bar } from './Bar'

import './Graph.css'

export const Graph = ({ tasks }) => {
  return (
    <div className="graph">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <Bar key={task.id} id={task.id} title={task.title} />
        ))}
      </SortableContext>
    </div>
  )
}
