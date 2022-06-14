import './App.css';
import NavBar from './components/NavBar';
import Imagen from './imagenes/Imagen';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
    
  const onAdd = (count) => {
    alert(`sumaste ${count} productos`);
  }


  return (
    <div className="App">
        <NavBar />
        <Imagen />
        <ItemDetailContainer />
        {/* <ItemListContainer/> */}
        {/* <ItemCount inicial = {1} max={12} onAdd = {onAdd} /> */}
    </div>
  );
}

export default App;
