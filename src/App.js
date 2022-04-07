import "./App.css";
import logo from "./logo.png";
import Navbar from "./Components/Navbar/Navbar"
import Sidebar from "./Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom"
import Playlist_Modal from "./Components/Playlist_Modal/Playlist_Modal";

import toast,{ Toaster, resolveValue } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: '',
          style: {
            border: '1px solid #713200',
            padding: '16px',
            color: '#713200',
            fontSize:"1.5rem"
          },
        }}
      />
      <Navbar />
      <Toaster style={{fontSize:"1.5rem"}}/>
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
