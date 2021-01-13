import React, { useRef } from 'react';
import { Form, Container, Button } from 'react-bootstrap';

//set props to send over to sockets component
// eslint-disable-next-line react/prop-types
function ChatWindow({ message, sendMessage, setMessage }) {
    const messageRef = useRef();

    //function to handle the change in the input field
    function handleChange(e) {
        setMessage(e.target.value);
    }

    //function to take the value of the form ro be used later
    function handleSubmit(e) {
        e.preventDefault();
        sendMessage();
    }

    return (
        <Container className="align-items-center d-flex">
            <Form className="w-100">
                <Form.Group>
                    <Form.Control type="text" ref={messageRef} value={message} onChange={handleChange} />
                </Form.Group>
                <Button type="submit" className="mr-2" onClick={handleSubmit}>Submit</Button>
            </Form>
        </Container>
    );
}


export default ChatWindow;