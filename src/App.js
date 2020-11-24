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
      <Typography style={{alignSelf: 'center', marginTop: 20, marginRight: 20, fontSize: 20}}>Hey!</Typography>
    </div>
  );
}

export default App;
