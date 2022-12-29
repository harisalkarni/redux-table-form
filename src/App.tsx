import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UserList from './components/UserList'
import {Routes, Route} from 'react-router-dom'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto px-2 max-w-5xl pt-5 md:pt-16">
      <h1 className='text-center font-bold text-2xl text-gray-700 mb-10'>Crud With Redux</h1>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/edit-user/:id' element={<EditUser />} />
      </Routes>
      
    </div>
  )
}

export default App
