import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer (){
    return(
        <footer className="mt-5">
      <Container fluid>
        <Row className="text-center">
          <Col>
            <a href="https://www.facebook.com/"><FaFacebook size={32} /></a>
          </Col>
          <Col>
            <a href="https://github.com/"><FaGithub size={32} /></a>
          </Col>
          <Col>
            <a href="https://twitter.com/"><FaTwitter size={32} /></a>
          </Col>
          <Col>
            <a href="https://www.instagram.com/"><FaInstagram size={32} /></a>
          </Col>
        </Row>
      </Container>
    </footer>

    );
}
export default Footer;