import { Provider } from 'react-redux'
import './App.css'
import MainPage from './pages/MainPage'
import store from './components/redux/store'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <ToastContainer/>
      <Provider store={store}>
        <MainPage/>
      </Provider>
    </>
  )
}

export default App


