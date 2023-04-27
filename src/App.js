import logo from './logo.svg';
import './App.css';
function NavBar(){
  return (
    <nav>
		<ul>
			<li><a href="/">Staff Directory</a></li>
      <li><a href="/staff/add">Add Staff!</a></li>
			<li><a href="/orders">My Orders</a></li>
			<li><a href="/inventory">My Inventory</a></li>
		</ul>
	</nav>
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavBar/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
