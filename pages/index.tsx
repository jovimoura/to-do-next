import React, { useState, KeyboardEvent } from 'react'
import Head from 'next/head'
import { Item } from '../types/item'
import { AddIcon, NoteIcon } from '../components/Icons'
import Task from '../components/Task'

// React.FC is a React Functional Component
const Home: React.FC = () => {
  const [input, setInput] = useState('')
  const [items, setItems] = useState<Item[]>([])

  const addTask = (task: string) => {
    if (input !== '') {
      let newList = [...items]
      newList.push({
        id: items.length + 1,
        name: task,
        done: false
      })
      setItems(newList)
      setInput('')
    }
  }

  const handleTaskChange = (id: number, done: boolean) => {
    console.log('olha nos ae', id, done)
    let newList = [...items]
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = !done
      }
    }
    setItems(newList)
  }

  const handleDelete = (id: number) => {
    let auxArray = items.filter(item => item.id !== id)
    setItems(auxArray)
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && input !== '') {
      addTask(input)
      setInput('')
    }
  }

  return (
    <div className="p-0 lg:p-10 bg-darkBlue">
      <Head>
        <title>Reminders</title>
        <link
          rel="shortcut icon"
          href="https://img.icons8.com/color/48/000000/notepad.png"
          type="image/x-icon"
        />
      </Head>

      <div className="flex fixed ">
        <a className="text-gray mr-1">{NoteIcon()}</a>
        <h1 className=" text-gray font-bold text-2xl text-center">Reminders</h1>
      </div>
      <main className="flex flex-col h-screen  items-center px-0 lg:px-20">
        <div className="mt-10 flex flex-row fixed overflow-hidden">
          <input
            className="bg-marine text-white border border-gray rounded-l-2xl pl-2 pr-0 lg:pr-60 py-3"
            value={input}
            placeholder="Write your note..."
            onChange={e => setInput(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <button
            className="text-white px-2 py-3 border overflow-hidden border-gray rounded-r-2xl"
            onClick={() => addTask(input)}
          >
            {AddIcon()}
          </button>
        </div>
        <div className="mt-40 overflow-hidden">
          <ul className="flex flex-wrap px-16 overflow-hidden">
            {items.map(item => (
              <Task
                item={item}
                handleTaskChange={handleTaskChange}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
