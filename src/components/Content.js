import Container from './Container'
import { useState } from 'react'

const Content = ({ superList, nameLists, dedupe, showMessage }) => {

  // const showMessage = () => setMessageShown(true)
  // const hideMessage = () => setMessageShown(false)

  return (
    <div className='content'>
      <Container icon='/Talkie.png' heading='Heading 2' text='Integer accumsan molestie nisl, id faucibus urna accumsan quis. Proin vulputate, mauris semper maximus. ' />
      <Container icon='/Rabbit.png' heading='Heading 2' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'/>
      <Container icon='/Shield.png' heading='Heading 2' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'/>
      <div className='textArea'>
        <h1><u>Heading</u> One</h1>
        <p>Remove the duplicates in 2 Javascript objects (found in readme), add the results to an array and output the list of distinct names in an unordered list below this paragraph when <a className='dedupe' onClick={superList.length > 0 ? showMessage : dedupe}>this link</a> is clicked. If the operation has been completed already, notify the user that this has already been done. </p>
      </div>
      
        {/* {nameLists.map((nameList, i) => (
              <div key={'nameList' + i} className='listArea'> <h3>{i}</h3>
                {nameList.map((name, j) => (<p key={'name' + i + j}>{name}</p>))}
              </div>
            )
          )
        } */}
        {superList.length > 0 ?
        <div className='listArea'>
          <h3>List</h3>
          {superList.map((name, i) => (<p key={'superListName' + i}>{name}</p>))}
        </div> 
        : ''
        }
    </div>
  )
}

export default Content