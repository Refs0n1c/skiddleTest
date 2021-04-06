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
      setEvents(apiEvents.results)
    }
   fetch();
    
  },[]);

  const handleSearch = (e) => {
    events.filter((event) => {
      return event.title.contains(e.currentTarget.value)
    })
  }
  return (
    <div className="App">
      <HeaderBanner handleSearch = {handleSearch}/> 
    </div>
  );
}

export default App;
