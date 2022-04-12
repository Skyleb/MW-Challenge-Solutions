import SubmitContact from './SubmitContact'

const Contact = ( {onAdd} ) => {
  return (
    <div className='contactGroup'>
      <div className='contactTextArea'>
        <div className='contactTextContainer'>
          <h1><u>Heading</u> One</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dos eiusmod tempor incididunt ut labore et trace dolore magna aliqua.
            <br/><br/>
            Proin sagittis nisl rhoncus mattis rhoncus. At augue eget arcu dictum varius duis at consectetur lorem</p>
        </div>
      </div>
      <div className='contactFormArea'>
        <SubmitContact onAdd={onAdd} />
      </div>
    </div>
  )
}

export default Contact