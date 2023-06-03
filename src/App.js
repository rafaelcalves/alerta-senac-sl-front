import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonPage from './pages/ButtonPage/ButtonPage';
import StatusPage from './pages/StatusPage/StatusPage';
function App() {
  return (
    <Router>
           <Routes>

        <Route exact path="/" element={<ButtonPage/>} />
        <Route path="/status" element={ <StatusPage/> } />
        </Routes>

    </Router>
  );
}

export default App;