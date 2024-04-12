import { useState } from 'react'
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'

import { Graph } from './Graph'

import './DnD.css'

export default function DnD() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'barOne' },
    { id: 2, title: 'barTwo' },
    { id: 3, title: 'barThree' },
    { id: 4, title: 'barFour' },
    { id: 5, title: 'barFive' },
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id)

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id === over.id) return

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id)

      return arrayMove(tasks, originalPos, newPos)
    })
  }

  return (
    <div className="graphBg">
      <p className="graphTitle">Welcome to quarterly productivity profits</p>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={handleDragEnd}
      >
        <Graph id="toDo" tasks={tasks} />
      </DndContext>
    </div>
  )
}
