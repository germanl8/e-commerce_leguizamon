import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';

import { CartContext } from './context/cartContext';
import './App.css';
import './components/NavBar/NavBar.css';



function App() {


  return (

      <BrowserRouter>
        <div className="App">

          <NavBar></NavBar>

          <Routes>
            <Route path='/Inicio' element={<ItemListContainer greeting={'Bienvenido a Click&Go'} />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/*' element={<Navigate to='/Inicio' replace />} />
            <Route path='/cart' element={<cart/>}></Route>
          </Routes>

        </div>
      </BrowserRouter>
    

  );
}

export default App;
