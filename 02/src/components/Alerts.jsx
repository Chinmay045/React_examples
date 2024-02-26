import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';

function Alerts(props) {
    const [show, setShow] = useState(true);

    function capitalize(str) {
        const lower = str.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    if (show) {
        return (
            props.alert && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading></Alert.Heading>
                <p>
                    <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
                </p>
            </Alert>
        );
    }
    return
    //  <Button onClick={() => setShow(true)}></Button>;
}

export default Alerts;