import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='w-100 h-100 container'>
        <ProductList/>
      </div>
    </div>
  );
}

export default App;
