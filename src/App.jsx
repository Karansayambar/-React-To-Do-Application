import { Provider } from 'react-redux'
import './App.css'
import MainPage from './pages/MainPage'
import store from './components/redux/store'

function App() {

  return (
    <>
      <Provider store={store}>
        <MainPage/>
      </Provider>
    </>
  )
}

export default App


