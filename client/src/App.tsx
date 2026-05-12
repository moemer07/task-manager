import { useState } from 'react'

interface Task {
  id: number
  title: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setValue] = useState('')

  const addTask = () => {
    if (!input.trim()) return
    setTasks([...tasks, { id: Date.now(), title: input, completed: false }])
    setValue('')
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div style={{ maxWidth: '600px', margin: '60px auto', fontFamily: 'sans-serif', padding: '0 20px' }}>
      <h1>Task Manager</h1>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        <input
          type="text"
          value={input}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          placeholder="Add a new task..."
          style={{ flex: 1, padding: '8px 12px', fontSize: '16px', borderRadius: '6px', border: '1px solid #ccc' }}
        />
        <button
          onClick={addTask}
          style={{ padding: '8px 16px', fontSize: '16px', borderRadius: '6px', background: '#4f46e5', color: 'white', border: 'none', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>

      {tasks.length === 0 && (
        <p style={{ color: '#888' }}>No tasks yet. Add one above!</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', marginBottom: '8px', background: '#f9f9f9', borderRadius: '6px' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#888' : '#000' }}>
              {task.title}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ background: 'none', border: 'none', color: '#e53e3e', cursor: 'pointer', fontSize: '16px' }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
