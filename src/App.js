import Header from './Component/Header';
import './App.css';
import SideBar from './Component/SideBar';
import Feed from './Component/Feed';

function App() {
  return (
    <div className="app">

    <Header/>

    <div className="app_body">
    <SideBar/>
    <Feed />
    {/* Widgets */}
    </div>



    </div>
  );
}

export default App;
