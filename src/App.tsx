import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <>
    <BrowserRouter>
		    <AppRouter></AppRouter>
		</BrowserRouter>
    </>
  )
}

export default App
