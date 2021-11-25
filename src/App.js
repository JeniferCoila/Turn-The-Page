import './App.scss';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/home/item-list-cont/ItemListContainer';

const App = () => {
  return (
    <div className="vlp-body">
      <h1 style= {{display: 'none'}}>Hello World</h1>
      <header className="vlp-header">
        <NavBar></NavBar>
      </header>
      <ItemListContainer greeting= "Descubre tus libros favoritos"></ItemListContainer>
    </div>
  );
}

export default App;
