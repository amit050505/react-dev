import { Outlet } from 'react-router-dom';
import './App.css';
import NavigationHeader from './components/navigation-header/navigation-header.js';

function App() {
  return (
    <>
      <NavigationHeader />
      <Outlet />
    </>
  )
}

export default App;
