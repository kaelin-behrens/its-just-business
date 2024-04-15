import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import { Bar } from './Bar'

import './Graph.css'
import { useState } from 'react'

export const Graph = ({ bars }) => {
  const [duplicate, setDuplicate] = useState(['Profits'])
  const handleClick = () => {
    setDuplicate([...duplicate, 'Profits'])
  }
  return (
    <div className="graph">
      <SortableContext items={bars} strategy={verticalListSortingStrategy}>
        {bars.map((bar) => (
          <Bar key={bar.id} id={bar.id} title={bar.title} />
        ))}
      </SortableContext>
      {duplicate.map((title) => (
        <button className="yTitle" onClick={handleClick} key={title}>
          {title}
        </button>
      ))}
    </div>
  )
}
