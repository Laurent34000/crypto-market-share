import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => (
  <Navbar bg="dark" variant="dark" expand="sm">    
 <Container>
 <Navbar.Brand href="/crypto-market-share">
 TOP 10 CRYPTO MARKET SHARE
   </Navbar.Brand>  
   <Navbar.Toggle />
      <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="/crypto-market-share">
          <FontAwesomeIcon icon={faHome} /> Home
        </Nav.Link>
        <Nav.Link href="https://github.com/Laurent34000/crypto-market-share">
            <FontAwesomeIcon icon={faGithub} /> About
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
 </Container>
 </Navbar>
      


);

export default Header;