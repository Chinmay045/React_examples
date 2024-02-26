import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
// import Button from 'react-bootstrap/Button';

function About() {

    const [myStyle, setMyStyle] = useState({
        color: "yellow",
        backgroundColor: "black",
       
    })

    const [btnText, setBtnNext] = useState("");

    function toggleStyleHandler() {
        if (myStyle.color === "yellow") {
            setMyStyle({
                color: "red",
                backgroundColor: "white",
                border:'1px solid white'
            })
            setBtnNext("Enable Dark Mode")
        }
        else {
            setMyStyle({
                color: "yellow",
                backgroundColor: "black"
            })
            setBtnNext("Enable Light Mode")
        }
    }


    return (
        <div className='container' style={myStyle} >
            <Accordion defaultActiveKey="0" style={myStyle} >
                <Accordion.Item eventKey="0" style={myStyle}>
                    <h1 className='my-3 mx-2' style={myStyle}>About Us</h1>
                    <Accordion.Header >Accordion Item #1</Accordion.Header>
                    <Accordion.Body style={myStyle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" style={myStyle}>
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <div className="container">
                {/* <Button variant="primary my-3" onClick={toggleStyleHandler} >{btnText}</Button>{' '} */}
            </div>

        </div>
    )
}

export default About
