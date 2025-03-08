import React, { useEffect } from 'react';
// import { supabase } from './supabase'
// import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Reservation from './pages/reservation/Reservation';
import ReservationDetails from './pages/reservationDetails/ReservationDetail';
import Header from './components/header/Header';

const App = () => {
  return (
    <Router>
       <Header/>
      <Routes>
       
        <Route path="/" element={<Reservation/>} />
        <Route path="/details" element={<ReservationDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;




// const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Reservation />} />
//       <Route path="/details" element={<ReservationDetails />} />
//     </Routes>
//   );
// };

// export default App;
