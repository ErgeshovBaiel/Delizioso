import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { menu } from './routes/Routes'
import Reservation from './pages/reservation/Reservation'
import ReservationConfiurm from './pages/reservationConfiurm/ReservationConfiurm'
import ReservationCancel from './pages/reservationCancel/ReservationCancel'
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'
import { CartProvider } from './context/CartContext'
import PrivateRoute from './PrivateRoute';
import HomePage from './pages/HomePage/HomePage'


const App = () => {
  return (
    <Provider store={store}>
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            {menu.map(route => (
              <Route key={route.name} path={route.path} element={route.element}>
                <Route path='/reservation' element={<Reservation />} />
                <Route
                  path='/reservation-confiurm'
                  element={<ReservationConfiurm />}
                />
                <Route path='/cancel' element={<ReservationCancel />} />
                {route.children?.map(child => (
                  <Route
                    key={child.path || 'index'}
                    index={child.index}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Route>
            ))}
          </Routes>
        </Router>
      </CartProvider>
    </Provider>
  )
}

export default App
