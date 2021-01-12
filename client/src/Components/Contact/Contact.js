import React, {useState, useRef } from 'react'
import { Jumbotron, Button, Overlay} from 'react-bootstrap'
import './../Contact/Contact.css'

function Contact(){
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    
    return(
        
        <div>
             <div>
      <Jumbotron>
        <h1 className="display-3">Contact information</h1>
        <p className="lead">Click on the button to send an email</p>
  
        <hr className="my-2" />
        <p className="lead">
          {/* <Button variant="info" onClick="sendMail(); return: false">Contact Me</Button> */}
          <Button variant="info" href="mailto:parkerjmartin883@gmail.com" ref={target} onMouseOver={() => setShow(!show)}>
        Send me an Email
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'teal',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            parkerjmartin883@gmail.com
          </div>
        )}
      </Overlay>
        </p>
      </Jumbotron>
    </div>
</div>


)
}
export default Contact;