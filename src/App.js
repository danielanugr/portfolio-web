import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function App () {
  return (
    <>
      <BrowserRouter>
        <div className='h-screen flex overflow-hidden bg-white'>
          <Sidebar />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
