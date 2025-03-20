import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservation from './pages/reservation/Reservation';
import { menu } from './routes/Routes';
import ReservationConfiurm from './pages/reservationConfiurm/ReservationConfiurm';
import ReservationCancel from './pages/reservationCancel/ReservationCancel';
import Login from './components/login/Login'
import SignUp from './components/signup/SignUp'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {menu.map(route => (
            <Route key={route.name} path={route.path} element={route.element}>
               <Route path="/reservation" element={<Reservation/>} />
               <Route path="/reservation-confiurm" element={<ReservationConfiurm/>} />
               <Route path="/cancel" element={<ReservationCancel />} />
               <Route path='/login' element={<Login />} />
               <Route path='/signup' element={<SignUp />} />
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
    </Provider>
  )
}

export default App;
