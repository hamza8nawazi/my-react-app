import './App.css';
import Home from './pages/home';
import Button from './components/button';
import List from './components/lists';


function App() {
   const myitems = ['List item 1', 'List item 2', 'List item 3', 'List item 4']
  return (
    <div>
      <Home />
      <Button label="Click Me" />
      <List item={myitems}/>
    </div>
  );
}

export default App;
