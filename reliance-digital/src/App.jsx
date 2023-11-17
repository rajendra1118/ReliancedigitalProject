import { Navbar } from "./routes/navbar";
import './App.css'
import { BottomNavbar } from "./routes/BottomNavbar";

import { AllRoutes } from "./routes/AllRoutes";
import { Footer } from "./Footer/Footer";
// import { SideNavbar } from "./SidepageNav/SideNavbar";





function App() {
  return (
    <div className="App">


      <Navbar />
      <BottomNavbar />

      <AllRoutes />
      <Footer />



    </div>
  );
}

export default App;
