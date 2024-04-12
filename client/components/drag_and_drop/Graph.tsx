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

import { Bar } from './Bar'

import './Graph.css'
import { Droppable } from './Droppable'
import { Draggable } from './Draggable'

export default function Graph() {
  const [parent, setParent] = useState(null)
  const draggable = <Draggable id="draggable">Go ahead, drag me.</Draggable>

  const [bars, setBars] = useState([
    { id: 1, name: 'barOne' },
    { id: 2, name: 'barTwo' },
    { id: 3, name: 'barThree' },
    { id: 4, name: 'barFour' },
    { id: 5, name: 'barFive' },
  ])

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const getBarPosition = (id) => bars.findIndex((bar) => bar.id === id)

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (active.id === over.id) return

    setBars((bars) => {
      const originalPos = getBarPosition(active.id)
      const newPos = getBarPosition(over.id)

      return arrayMove(bars, originalPos, newPos)
      checkOrder()
    })
  }

  function checkOrder() {
    if (bars) {
      return false
    } else {
      return true
    }
  }

  return (
    <>
      <div className="graphBg">
        <p className="graphTitle">Welcome to quarterly productivity profits</p>
        <ul>
          {bars.map((bar) => (
            <li key={bar.id}>
              {/* <button className="graphBar">{bar.name}</button> */}
              <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragEnd={handleDragEnd}
              >
                {!parent ? draggable : null}
                <Droppable id="droppable" className="graphBar">
                  {parent === 'droppable' ? draggable : 'Drop here'}
                </Droppable>
              </DndContext>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
