import  { useState } from 'react';

import './App.css';

import MyMenu from './components/menu';

import Dashboard from './components/dashboard';
import Users from './components/users';




function App() {


  const [section, setSection] = useState<"Dashboard"|"Utenti">('Dashboard')
  const swapSection = (sectionName: "Dashboard"|"Utenti")=>{
       setSection(sectionName)
 }

 


  return (
    <div className="App">
      
      <MyMenu swapSection={swapSection}></MyMenu>
      
      
      {section === "Dashboard" && <Dashboard></Dashboard>}
      {section === "Utenti" && <Users></Users>}
    </div>
  );
}

export default App;
