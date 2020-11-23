import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import FirstImage from './components/FirstImage'
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div>
      <Navbar/>
      {/* <FirstImage/> */}
      <Typography>Hey!</Typography>
    </div>
  );
}

export default App;
