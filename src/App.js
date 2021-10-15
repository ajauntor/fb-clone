import Header from './Component/Header';
import './App.css';
import SideBar from './Component/SideBar';
import Feed from './Component/Feed';
import Widgets from './Component/Widgets';
import Login from './Component/Login';
import { useStateValue } from './Component/StateProvider';

function App() {

  
  const [{user}, dispatch] = useStateValue();


  return (
    <div className="app">

      {!user ? (
        <Login /> 
        ) : (
        <>
        
        </div>
        </>
      )}
    </div>
  );
}

export default App;
