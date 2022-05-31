import { DeleteIcon } from './Icons'

export default function Task({ item, handleDelete, handleTaskChange }) {
  const id = item.id
  const done = item.done
  return (
    <li  className="m-2" key={item.id}>
      <div className={`hover:cursor-pointer border-2 rounded-2xl w-60 lg:w-72 h-28 lg:h-32 text-white text-center ${!item.done ? 'bg-marine border-gray' : 'bg-danger border-black' }`}>
        <div className="flex justify-end p-2">
          <button onClick={() => handleDelete(id)}>{DeleteIcon()}</button>
        </div>
        <div onClick={() => handleTaskChange(id, done)} className={`p-2 overflow-hidden ${!item.done ? '' : 'line-through'}`}>{item.name}</div>
      </div>
    </li>
  )
}
