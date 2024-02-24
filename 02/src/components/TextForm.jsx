import { useState } from 'react';
import Form from 'react-bootstrap/Form';
function TextForm(props) {
    const [text, setText] = useState("");

    function clickHandler() {
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    function clickloHandler() {
        console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    function onChangeHandler(e) {
        console.log("OnChange");
        setText(e.target.value)
    }
    function clearTextHandler(e) {
       let newText = ""
        setText(newText);
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
                <button className='btn btn-primary mx-2' onClick={clickHandler} >Convert to UpperCase</button>
                <button className='btn btn-primary' onClick={clickloHandler} >Convert to LowerCase</button>
                <button className='btn btn-primary mx-2' onClick={clearTextHandler} >Clear Text</button>
            </div>
            <div className='container my-3'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and  and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}  Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm
