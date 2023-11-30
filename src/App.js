
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import FilterFunc from './FilterFunc';


function App() {
  
  return (
    <div className="App">
      < Header />
      <FilterFunc/>
     {/* <Products/>*/}
      < Footer />
     
    </div>
  );
}

export default App;
