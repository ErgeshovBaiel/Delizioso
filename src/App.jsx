import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservation from './pages/reservation/Reservation';
import ReservationDetails from './pages/reservationDetails/ReservationDetail';
import { menu } from './routes/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {menu.map(route => (
            <Route key={route.name} path={route.path} element={route.element}>
               <Route path="/reservation" element={<Reservation/>} />
               <Route path="/details" element={<ReservationDetails/>} />
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
  );
};

export default App;
