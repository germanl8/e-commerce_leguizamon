import './App.css';
import './components/NavBar/NavBar.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {


  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer greeting={'Bienvenido a Click&Go'}/>
    </div>
  );
}

export default App;
