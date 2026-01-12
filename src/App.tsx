import Fondo from './components/Fondo'
import AppRouter from './routes/routes'

function App() {

  return (
    <>
      <div className=''>
        <Fondo>
          <AppRouter />
        </Fondo>
      </div>
    </>
  )
}

export default App
