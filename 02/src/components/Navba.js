import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

function Navba(props) {
    return (
        <div>
            <Navbar className={` navbar-${props.mode} bg-${props.mode} expand=lg`}>
                <Container>
                    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">{props.about}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Form mx-7>
                    <h7>Enable Dark Mode</h7>
                    <Form.Check onClick={props.toggleMode} // prettier-ignore
                        type="switch"
                        id="custom-switch"
                    // "Enable Dark Mode"
                    />
                </Form>

            </Navbar>
        </div>
    )
}

Navba.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
};

export default Navba
