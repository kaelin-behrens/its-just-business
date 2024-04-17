import { useState } from 'react'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  closestCorners,
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'

import { Graph } from './Graph'

import './DnD.css'
import PasswordPopup from '../PasswordPopup'

export default function DnD(props) {
  const fragment = props.clues[3]
  const correctOrder = [1, 5, 2, 4, 3] //TODO make dynamic
  const [win, setWin] = useState(false)
  const [bars, setBars] = useState([
    { id: 1, title: 'barOne' },
    { id: 2, title: 'barTwo' },
    { id: 3, title: 'barThree' },
    { id: 4, title: 'barFour' },
    { id: 5, title: 'barFive' },
  ])

  const [duplicate, setDuplicate] = useState(['Total Company Profits'])
  const [title, setTitile] = useState(['Profits'])
  const handleClick = () => {
    setDuplicate([...duplicate, 'Profits'])
    setTitile([...title, 'here at company, we value your contribution'])
  }

  const sensors = useSensors(useSensor(PointerSensor))

  const getBarPos = (id) => bars.findIndex((bar) => bar.id === id)

  const handleDragEnd = (event) => {
    const { active, over } = event
    checkOrder()
    if (active.id === over.id) return
    setBars((bars) => {
      const originalPos = getBarPos(active.id)
      const newPos = getBarPos(over.id)
      return arrayMove(bars, originalPos, newPos)
    })
  }

  const checkOrder = () => {
    const currentOrder = bars.map((bar) => bar.id)
    if (currentOrder.toString() === correctOrder.toString()) {
      setWin(true)
      console.log('WIN')
    }
  }

  return (
    <div className="graphBg">
      {win && <PasswordPopup password={fragment} />}
      <p className="glitch Graphtitle">
        Layoffs of Workers vs{' '}
        <button onClick={handleClick} className="remove title">
          {title}
        </button>
      </p>

      <div className="row">
        <p className="xaxis">Quarterly Layoffs</p>
        <div className="elementTwo">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
          >
            <Graph id="toDo" bars={bars} />
          </DndContext>
        </div>
      </div>
      <p onClick={handleClick} className="yaxis">
        {duplicate}
      </p>
    </div>
  )
}
