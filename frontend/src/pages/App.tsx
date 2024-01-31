import './App.css';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import RecipeFilters from '../components/RecipeFilters';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-body">
        <h1>Welcome to the Oddbox Recipe Finder!</h1>
      </section>
    </div>
  );
}

export default App;
