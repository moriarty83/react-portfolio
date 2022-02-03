import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header mode="dark" />
      <Main mode="dark" />
      <Footer ></Footer>
    </div>
  );
}

export default App;
