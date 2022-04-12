import Header from './components/Header'
import Content from './components/Content'
import Contact from './components/Contact'
import AlertMessage from './components/AlertMessage'
import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

// Add Contact
const addContact = (contact) => {
  console.log(contact);
}

const App = () => {
  const [superList, setSuperList] = useState([])
  // let superList = []
  const [nameLists, setNameLists] = useState([
    [
      'Matt Johnson',
      'Matt Johnson',
      'Bart Paden',
      'Ryan Doss',
      'Jared Malcolm'
    ],
    [
      'Matt Johnson',
      'Bart Paden',
      'Bart Paden',
      'Jordan Heigle',
      'Jordan Heigle',
      'tyler Viles'
    ]
  ])

  const [messageShown, setMessageShown] = useState(false)

  const showMessage = () => setMessageShown(true)
  const hideMessage = () => setMessageShown(false)

  const dedupe = () => {
    let tempList = []
    nameLists.forEach((nameList) => {
      nameList.forEach((name) => {
        if(tempList.indexOf(name) === -1){
          tempList = [...tempList, name];
        }
       })
      })
    setSuperList(tempList);
  }

  return (
    <Router>
      {messageShown ? <AlertMessage hideMessage={hideMessage} /> : ''}
      <Header />
      <Routes>
        <Route path='/' element={<Content superList={superList} nameLists={nameLists} dedupe={dedupe} showMessage={showMessage} />} />
        <Route path='/contact' element={<Contact onAdd={addContact}/>} />
      </Routes>
    </Router>
  );
}

export default App;