import { useState } from 'react';
import Form from 'react-bootstrap/Form';
function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    function clickHandler() {
        console.log("Uppercase was Clicked");
        setText("You have clicked on clickHandler");
    }
    function onChangeHandler(e) {
        console.log("OnChange");
        setText(e.target.value)
    }
    return (
        <div>

            <Form>
                <h2>{props.heading}</h2>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" id='mybox' >
                    <Form.Control as="textarea" rows={8} value={text} onChange={onChangeHandler} />
                </Form.Group>
            </Form>
            <button className='btn btn-primary' onClick={clickHandler}>Convert to UpperCase</button>



        </div>
    )
}

export default TextForm
