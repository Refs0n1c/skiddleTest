import logo from './logo.svg';
import './App.css';
import HeaderBanner from './components/headerBanner'
import {getEvents} from './fetch/fetchEvents'
import {React, useState, useEffect} from 'react'

function App() {
  const [events,setEvents] = useState('')
  

  useEffect(  () => {
    const fetch = async () => {
      const apiEvents = await getEvents();
      setEvents(apiEvents)
    }
   fetch();
    
  },[]);

  const handleSearch = (e) => {
    alert(JSON.stringify(events))
  }
  return (
    <div className="App">
      <HeaderBanner handleSearch = {handleSearch}/> 
    </div>
  );
}

export default App;
