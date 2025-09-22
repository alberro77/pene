import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HabitList from './pages/HabitList'
import NewHabit from './pages/NewHabit'
import Report from './pages/Report'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HabitList />} />
        <Route path="nuevo-habito" element={<NewHabit />} />
        <Route path="reporte" element={<Report />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
