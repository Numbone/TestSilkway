import { useContext, useEffect } from "react";
import Footer from "../entities/Footer";
import Header from "../entities/Header";
import Routing from "../pages";
import "./styles.scss";
import { Context } from "..";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const { user } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("access")?.length > 0) {
      user.setIsAuth(true);
      user.setRole(localStorage.getItem("role"));
      user.setUser(localStorage.getItem("username"));
    } else {
      user.setIsAuth(false);
    }
  }, [user]);
  return (
    <>
      <div className="app">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
