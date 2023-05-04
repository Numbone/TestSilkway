import { useContext, useEffect } from "react";
import Footer from "../entities/Footer";
import Header from "../entities/Header";
import Routing from "../pages";
import "./styles.scss";
import { Context } from "..";


function App() {
  const { user } = useContext(Context);
 
      
 useEffect(()=>{
  if ((localStorage.getItem("access")?.length > 0)) {
    user.setIsAuth(true);
    user.setRole(localStorage.getItem('role'))
    user.setUser(localStorage.getItem('username'))
  }else{
    user.setIsAuth(false)
  }
 },[user])
  return (
    <>
      <div className="app">
        <div className="top">
          <Header />
        </div>
        <div className="container">
          <div className="content">
            <Routing />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
