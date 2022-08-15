import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from 'react-router-dom'
import Inicio from './components/inicio/inicio';
import Detalle from './components/detalle/detalle';
import Articulo from './components/articulo/articulo';
import Tipos from './components/tipos/tipos';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/breeds/:breed' element={<Detalle />} />
          <Route path='/breeds' element={<Tipos />} />
          <Route path='/article' element={<Articulo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
