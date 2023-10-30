import Home from './pages/home'
import Dashboard from './pages/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./main.scss"
import "../src/styles/_tasks.scss"
import "../src/styles/_dashboard.scss"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {["/", "/all", "/completed", "/pending"].map((path: string, index: number) =>
            <Route path={path} key={index} element={<Home />}></Route>
          )}
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
