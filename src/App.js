import "./App.css";
import logo from "./logo.png";
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom"
import Playlist_Modal from "./Components/Playlist_Modal/Playlist_Modal";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main__container">
        <Sidebar />
        <div className="main__pages">
          <Outlet />
          <Playlist_Modal />
        </div>
      </main>
    </div>
  );
}

export default App;
