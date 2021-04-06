import logo from './logo.svg';
import './App.css';
import HeaderBanner from './components/headerBanner'
import Events from './components/Events'
import {getEvents} from './fetch/fetchEvents'
import {React, useState, useEffect} from 'react'

function App() {
  const [events,setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchText,setSearchText] = useState('')

  

  const fetchEvents = async () => {
    const apiEvents = await getEvents();
    setEvents(apiEvents.results)
  }

  useEffect(  () => { 
    fetchEvents();  
  },[]);

  const handleSearch = (e) => {

  setSearchText(e.currentTarget.value)
   const filteredEvents = events.filter((ev) => {
      return ev.eventname.toLowerCase().includes(e.currentTarget.value.toLowerCase())
    })
    setFilteredEvents(filteredEvents)
    
  }
  return (
    <div className="App">
      <HeaderBanner handleSearch = {handleSearch}/> 
      <Events events = {filteredEvents} searchValue = {searchText}/>
    </div>
  );
}

export default App;
