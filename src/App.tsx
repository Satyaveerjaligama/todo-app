import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./main.scss"
import "../src/styles/_tasks.scss"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
