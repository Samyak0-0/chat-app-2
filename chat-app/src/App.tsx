
import './index.css'
import axios from 'axios'

import Routes from './assets/Routes.js';

function App() {

  axios.defaults.baseURL = 'https://chat-app-2-omega.vercel.app';
  axios.defaults.withCredentials = true;
  

  return (

    
   <div className=' bg-slate-400'>
      <Routes />
   </div>
  )
}

export default App
