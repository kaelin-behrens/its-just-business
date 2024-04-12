import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import { Bar } from './Bar'

import './Graph.css'

export const Graph = ({ bars }) => {
  return (
    <div className="graph">
      <SortableContext items={bars} strategy={verticalListSortingStrategy}>
        {bars.map((bar) => (
          <Bar key={bar.id} id={bar.id} title={bar.title} />
        ))}
      </SortableContext>
    </div>
  )
}
