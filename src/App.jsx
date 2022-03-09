import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import './components/NavBar/NavBar.css';



function App() {


  return (

    <BrowserRouter>
      <div className="App">

        <NavBar></NavBar>

        <ItemListContainer greeting={'Bienvenido a Click&Go'} />
        <ItemDetailContainer></ItemDetailContainer>

        {/* <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenido a Click&Go'} />} />
          <Route path='/detalle' element={<ItemDetailContainer />} />
          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes> */}


      </div>
    </BrowserRouter>

  );
}

export default App;
