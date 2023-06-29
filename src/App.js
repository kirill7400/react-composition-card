import './App.css';
import Card from './ui/UICard'
import logo from './assets/logo192.png'

function App() {
  return (
    <div className="App">
      <Card/>
      <Card>
        <img src={ logo } className="card-img-top" alt="img"/>
      </Card>
    </div>
  );
}

export default App;
