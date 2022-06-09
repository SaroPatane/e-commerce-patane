import './App.css';
import NavBar from './components/NavBar';
import Imagen from './imagenes/Imagen';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';


function App() {
    
  const onAdd = (count) => {
    alert(`sumaste ${count} productos`);
  }


  return (
    <div className="App">
        <NavBar />
        <Imagen />
        <ItemListContainer/>
        {/* <ItemCount inicial = {1} max={12} onAdd = {onAdd} /> */}
    </div>
  );
}

export default App;
