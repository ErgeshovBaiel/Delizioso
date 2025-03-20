import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { menu } from './routes/Routes'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {menu.map(route =>
            route.name === 'Home' ? (
              <Route key={route.name} path={route.path} element={route.element}>
                {route.children?.map(child => (
                  <Route
                    key={child.path || 'index'}
                    index={child.index}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Route>
            ) : null
          )}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
