
import './App.css';
import SignIn from './SignIn';
// import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <div className="left-section">
      <p class="title"> Board.</p>
      </div>
      <div className="right-section">

        <SignIn/>
        {/* <Dashboard /> */}
      </div>


    </div>
  );
}

export default App;
