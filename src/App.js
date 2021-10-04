

function App() {

  const [{user}, dispatch] = useStateValue();



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
