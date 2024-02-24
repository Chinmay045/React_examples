import { useState } from 'react';
import Form from 'react-bootstrap/Form';
function TextForm(props) {
    const [text, setText] = useState("Enter text here");
    function clickHandler() {
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    function onChangeHandler(e) {
        console.log("OnChange");
        setText(e.target.value)
    }
    return (
        <>

            <div className='container'>
                <Form>
                    <h2>{props.heading}</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" id='mybox' >
                        <Form.Control as="textarea" rows={8} value={text} onChange={onChangeHandler} />
                    </Form.Group>
                </Form>
                <button className='btn btn-primary' onClick={clickHandler}>Convert to UpperCase</button>
            </div>
            <div className='container my-3'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and  and {text.length} characters</p>
            </div>
        </>
    )
}

export default TextForm
