import './App.css';
import MyForms from './components/MyForms';

function App() {
  return (
    <div className="App">
      <h1>Formulários no React</h1>
      <MyForms user={{name:"Alexandre", email:"alexandre@gmail.com"}}/>
    </div>
  );
}

export default App;
