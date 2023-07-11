import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Enunciado from './components/Enunciado.jsx'

function App() {
  const styles = {
    appstyle: {

      height: '100vh',
      backgroundColor: 'gray',
      padding: '0px 30px'
    }
  }

  return (
    <div className="App" style={styles.appstyle}>
      <Header />
      <Enunciado />
      <Main />

    </div>

  );
}

export default App;
