import React from 'react'
import "./App.css"
import Header from './Header'
// import ContactCard from './ContactCard'
// import ContactList from './ContactList'
import AddContact from './AddContact'
import ContactList from './ContactList'


const App = () => {
  const contacts =[
    {
        id:1,
        Name:"hrishikesh",
        Email: "hrishikeshh8@gmail.com"
    },
    {
        id:2,
        Name:'ram',
        Email:"ram@gmail.com"
    },
  ]
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default App
