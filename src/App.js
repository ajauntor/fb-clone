import Header from './Component/Header';
import './App.css';
import SideBar from './Component/SideBar';
import Feed from './Component/Feed';
import Widgets from './Component/Widgets';
import Login from './Component/Login';

function App() {

  const user = "AJ";


  return (
    <div className="app">

      {!user ? (
        <Login /> 
        ) : (
        <>
        <Header/>
        <div className="app_body">
        <SideBar/>
        <Feed />
        <Widgets />
        </div>
        </>
      )}
    </div>
  );
}

export default App;
