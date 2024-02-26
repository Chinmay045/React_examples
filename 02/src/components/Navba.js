import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navba(props) {
    return (
        <div>
            <Navbar className={` navbar-${props.mode} bg-${props.mode} expand=lg`}>
                <Container>
                    <Link className="nav-link" to="/">{props.title}</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="nav-link active" to="/">Home</Link>
                            <Link className="nav-link" to="/about">{props.about}</Link>
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
