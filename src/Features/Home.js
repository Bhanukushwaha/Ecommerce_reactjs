import React from 'react';
import { FaCoffee } from "react-icons/fa";
import { Carousel, Col, Container, FloatingLabel, Row, Image, Card, Button,
Nav, Form, Navbar } from 'react-bootstrap';
function Home(){
  return (
    <Container>
      <Navbar style={{backgroundColor:'#C84C05'}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><FaCoffee style={{ fontSize: '30px'}} /> Coffee Cafe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">our Coffees</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src="./images/banner1.jpg" alt="First slide"style={{ height: '500px' }}/>
          <Carousel.Caption style={{ textAlign: 'left', left: '10%', bottom: '20vh' }}>
            <h1 style={{color:'white'}}>Elite Coffee Brand</h1>
            <p style={{color: 'white', width:'60%'}}>Coffee Shop is the place where you can get flavorful coffee strains
              from global elite brands and roasters at very affordable price. Lorem ipsum
              dolor sit amet elit. Non, explicabo et sit amet.
            </p>
            <Button style={{ backgroundColor:'#FF9100', borderColor:'#FF9100'}}>Reed Mode</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./images/banner.jpg" alt="First slide"style={{ height: '500px' }}/>
          <Carousel.Caption style={{ textAlign: 'left', left: '10%', bottom: '20vh' }}>
            <h1 style={{color:'white'}}>Hot and tasty Coffee</h1>
            <p style={{color: 'white', width:'60%'}}>Coffee Shop is the place where you can get flavorful coffee strains
            from global elite brands and roasters at very affordable price. Lorem ipsum dolor sit amet elit. Non, explicabo et sit amet.
            </p>
            <Button style={{ backgroundColor:'#FF9100', borderColor:'#FF9100'}}>Reed Mode</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./images/2.jpg" alt="First slide"style={{ height: '500px' }}/>
          <Carousel.Caption style={{ textAlign: 'left', left: '10%', bottom: '20vh' }}>
            <h1 style={{color:'white'}}>Dedicated coffee fans</h1>
            <p style={{color: 'white', width:'60%'}}>Coffee Shop is the place where you can get flavorful coffee strains
            from global elite brands and roasters at very affordable price. Lorem ipsum dolor sit amet elit. Non, explicabo et sit amet.
            </p>
            <Button style={{ backgroundColor:'#FF9100', borderColor:'#FF9100'}}>Reed Mode</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel><br/>
      <Card style={{ width: '80rem' }}>
        <Card.Body>    
          <Row>
            <Col Item>
            <span class="title-small mb-2">Best for you</span>
            <h3 class="title-big mx-0"> Who we are.</h3>
            <p class="mt-lg-4 mt-3">We make the delicious coffee for the coffee lovers. We are a team of dedicated
             coffee fans who celebrate exceptional coffee brands and roasters. Lorem ipsum feugiat.
            </p>
            <Button style={{ backgroundColor:'#FF9100', borderColor:'#FF9100'}}>Reed Mode</Button>
            </Col>
            <Col Item >
              <Image style={{ height:'330px',  width:'18rem',borderRadius :"12px"}} src="./images/a1.jpg"/>
            </Col>
            <Col Item>
              <Image style={{ height:'330px', width:'18rem',borderRadius :"12px"}} src="./images/a2.jpg"/>
            </Col>
            <Col Item>
              <Image style={{ height:'330px', width:'18rem',borderRadius :"12px"}} src="./images/a3.jpg"/>
            </Col>            
          </Row>
        </Card.Body>
      </Card><br/>

      <Card className="text-center">
        <span class="title-small mb-2">OUR SERVICES</span>
        <h1 class="title-big mb-md-5 mb-4" style={{ fontSize: '40px', color:"#2A3663"}}>Our Product</h1>
        <Card.Body>           
          <Row>
            <Col Item>
              <img className="d-block w-10" style={{ height: '250px' }} src="./images/1.jpg" alt="First slide"/>
              <Col >
                <Card.Title>Espresso Americano</Card.Title>
                <h4>Consectetur elit, sed do eiusmod tempor sed et dolor init.</h4>
              </Col>
            </Col> 
            <Col >
              <img className="d-block w-10" style={{ height: '250px' }} src="./images/2.jpg" alt="First slide"/>
              <Col>
                <Card.Title>Cappuccino coffee</Card.Title>
                <h4>Consectetur elit, sed do eiusmod tempor sed et dolor init</h4>
              </Col>
            </Col>
            <Col Item>
              <img className="d-block w-10" style={{ height: '250px' }} src="./images/3.jpg" alt="First slide"/>
              <Col >
                  <Card.Title>Cold brew coffee</Card.Title>
                  <h4>Consectetur elit, sed do eiusmod tempor sed et dolor ini.</h4>
                </Col>
            </Col>
          </Row>
        </Card.Body>
      </Card><br/>
      <Row>
      <Card style={{ width: '80rem' }}>
        <Card.Body>
          <Row>
            <Col Item>
            <span class="title-small">Blend Coffee</span>
              <h3 style={{color:'#22177A'}}class="title-big mx-0"> Our Services.</h3>
              <p class="mt-3">We make the delicious coffee for the coffee lovers. We are a team of dedicated
              coffee fans who celebrate exceptional coffee brands and roasters. Lorem ipsum viverra feugiat.
              Pellen tesque libero ut justo, in ligula. Semper at.</p>
              <p class="mt-3">We make the delicious coffee for the coffee lovers. We are a team of dedicated
                coffee fans who celebrate exceptional coffee brands and roasters, ipsum dolor.
              </p>
              <Button style={{ backgroundColor:'#FF9100', borderColor:'#FF9100'}}>Reed Mode</Button>
            </Col>
            <Col >
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card><br/>   
      <Carousel data-bs-theme="dark" >
        <Carousel.Item>
          <Row  className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src="pexels-julius-silver-240301-753325.jpg" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row  className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src="pexels-julius-silver-240301-753325.jpg" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row  className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src="pexels-julius-silver-240301-753325.jpg" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit
                      longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      </Carousel><br/>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card><br/>
        <Col Item>
          <img className="d-block w-30" style={{ height: '250px' }} src="pexels-julius-silver-240301-753325.jpg" alt="First slide"/>
          <Col >
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Col>
        </Col> 
        <Col >
          <img className="d-block w-30" style={{ height: '250px' }} src="pexels-julius-silver-240301-753325.jpg" alt="First slide"/>
          <Col >
          <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Col>
        </Col>
        <Col Item>
          <img className="d-block w-30" style={{ height: '250px' }} src="pexels-julius-silver-240301-753325.jpg" alt="First slide"/>
          <Col >
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Col>
        </Col>
      </Row><br/>
      <Card style={{ width: '80rem' }}>
        <Card.Body>    
          <Card.Title>Card title</Card.Title>
          <Col >
            <img className="d-block w-100" src="pexels-julius-silver-240301-753325.jpg" alt="First slide" style={{ height: '300px' }}/>
          </Col>
        </Card.Body>
      </Card><br/>      
      <Card Item className="text-center">
        <Card.Body>
          <span title-small mb-1>Coffee gallery</span>
          <h1>Portfolio Gallery</h1>
          <Row>
            <Col Item className="mt-3" >
              <Image style={{ height:'240px',  width:'18rem',borderRadius :"8px"}} src="./images/blog1.jpg"/>
            </Col>
            <Col Item className="mt-3">
              <Image style={{ height:'240px', width:'18rem',borderRadius :"8px"}} src="./images/blog2.jpg"/>
            </Col>
            <Col Item className="mt-3">
              <Image style={{ height:'240px', width:'18rem',borderRadius :"8px"}} src="./images/blog3.jpg"/>
            </Col>
            <Col Item className="mt-3">
              <Image style={{ height:'240px', width:'18rem',borderRadius :"8px"}} src="./images/blog4.jpg"/>
            </Col>
            <Col Item className="mt-3">
              <Image style={{ height:'240px', width:'18rem',borderRadius :"8px"}} src="./images/blog5.jpg"/>
            </Col>
            <Col Item className="mt-3">
              <Image style={{ height:'240px', width:'18rem',borderRadius :"8px"}} src="./images/blog6.jpg"/>
            </Col>
            <Col Item className="mt-3">
              <Image style={{ height:'240px', width:'18rem',borderRadius :"8px"}} src="./images/blog2.jpg"/>
            </Col>
            <Col Item className="mt-3">
              <Image style={{ height:'240px', width:'18rem',borderRadius :"8px"}} src="./images/blog1.jpg"/>
            </Col>
          </Row>
        </Card.Body>
      </Card><br/>
      <Card className="text-center">
        <p>OUR TEAM</p>
        <h2 style={{color:'#091057' }}>Teem Members</h2>
        <Card.Body>
          <Row>
            <Col Item >
              <Image style={{ height:'400px',  width:'18rem',borderRadius :"12px"}} src="./images/team1.jpg"/>
            </Col>
            <Col Item >
              <Image style={{ height:'400px',  width:'18rem',borderRadius :"12px"}} src="./images/team2.jpg"/>
            </Col>
            <Col Item>
              <Image style={{ height:'400px', width:'18rem',borderRadius :"12px"}} src="./images/team3.jpg"/>
            </Col>
            <Col Item>
              <Image style={{ height:'400px', width:'18rem',borderRadius :"12px"}} src="./images/team4.jpg"/>
            </Col>            
          </Row>
        </Card.Body>
      </Card><br/>      
      <Card>
        <Card.Body>         
          <Row>
            <Col Item>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="First name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Last name" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>your Email Address</Form.Label>
                  <Form.Control type="email" placeholder="your Email Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>
                <FloatingLabel  className="mb-3" controlId="floatingTextarea2" label="Comments">
                  <Form.Control as="textarea"  placeholder="Leave a comment here" style={{ height: '100px' }}/>
                </FloatingLabel>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Col>
            <Col >
              <Card.Text>
                <iframe className="map" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871439.016314207!2d73.01802178576894!3d20.593684692104775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0a8a499d9bfb3%3A0x42c140cdca91d8a5!2sIndia!5e0!3m2!1sen!2sin!4v1642496355732!5m2!1sen!2sin" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Google Map of India">
                </iframe>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card><br/>
      <Card>
        <Card.Body  className="text-center">
          <p>LESTIMONIALS</p>
          <h1 style={{color:"#001A6E"}}>What is your coustomers say</h1>
        </Card.Body>
        <Carousel data-bs-theme="dark">
          <Carousel.Item className=" w-100" style={{ height: '400px'}}>
            <Carousel.Caption>
              <img className="w-20" src="./images/team1.jpg" alt="First slide" style={{objectFit: 'cover', height: '120px', width: '120px', borderRadius: '50%' }}/>
              <h3 style={{color:"#133E87"}}>Tommy sakura</h3>
              <q style={{color:"#5E686D"}}>Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium Quas minima sunt natus tempore, maiores aliquid modi felis vitae
              facere aperiam sequi optio lacinia id ipsum non velit, culpa. voluptate rem ullam dolore nisi est quasi, doloribus tempora.</q>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className=" w-100" style={{ height: '400px' }}>
            <Carousel.Caption>
              <img className="w-20" src="./images/team2.jpg" alt="First slide" style={{objectFit: 'cover', height: '120px', width: '120px', /* Ensure it's a square */borderRadius: '50%' }}/>
              <h3 style={{color:"#133E87"}}>Roy Linderson</h3>
              <q>Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium Quas minima sunt natus tempore, maiores aliquid modi felis vitae
              facere aperiam sequi optio lacinia id ipsum non velit, culpa. voluptate rem ullam dolore nisi est quasi, doloribus tempora.</q>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className=" w-100" style={{ height: '400px', backgroundColor:"white"}}>
            <Carousel.Caption>
            <img className="w-20" src="./images/team3.jpg" alt="First slide" style={{objectFit: 'cover', height: '120px', width: '120px', /* Ensure it's a square */borderRadius: '50%' }}/>
              <h3 style={{color:"#133E87"}}>Dennis wilson</h3>
              <q>Lorem ipsum dolor sit amet int consectetur adipisicing elit. Velita beatae laudantium Quas minima sunt natus tempore, maiores aliquid modi felis vitae 
              facere aperiam sequi optio lacinia id ipsum non velit, culpa. voluptate rem ullam dolore nisi est quasi, doloribus tempora.</q>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card><br/>
      <Card Item>
        <span className="mt-3" title-small mb-1 style={{ textAlign: 'center' }}>Our Coffee blog</span>
        <h1 style={{ textAlign: 'center', color:'#091057' }}>Latest Blog Posts</h1>
        <Card.Body>
          <Row>
            <Col Item>
              <img className="d-block w-40" style={{ height: '400px' }} src="./images/blog1.jpg" alt="Advantages Coffee"/><br/>
              <Col>
                <Card.Title>Advantages and Disadvantages of Coffee</Card.Title>
                <p className="mt-3">Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia cum ex ipsam autem!, earum. Fuga, soluta sequi!</p>
              </Col>
              <Button style={{ backgroundColor:'#FF9100', borderColor:'#FF9100'}}>Read More</Button>
            </Col>
            <Col>
              <img className="d-block w-40" style={{ height: '400px' }} src="./images/blog4.jpg" alt="Brewing Coffee"/><br/>
              <Card.Title>Brewing Methods of Coffee</Card.Title>
              <p className="mt-3">Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia cum ex ipsam autem!, earum. Fuga, soluta sequi!</p>
              <Button style={{ backgroundColor:'#FF9100', borderColor:'#FF9100'}}>Read More</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card><br/>
      <Card >
        <Card.Body style={{backgroundColor:'#1A1A19', color:"white"}}>
          <Card.Text className="text-center" >This is a longer card with supporting</Card.Text>
          <Row>
            <Col sm={4} className="my-1">
              <Card.Title>Coffee Cake</Card.Title>
              <p>We make the delicious coffee for the coffee lovers. We are a team of dedicated coffee fans who celebrate exceptional coffee brands and roasters by providing our guests the unique opportunity to try coffee drink</p>
            </Col>
            <Col sm={3} className="my-1">
              <Card.Title>Get in Touch</Card.Title>
              <span>E-mail :</span>
              <p class="contact-para d-inline"> 2005 Stokes Isle</p>
              <p> Apt. 896, Coffee Cafe Center, USA.</p>
              <span>E-mail :</span><a  href="mailto:info@mail.com"> info@mail.com</a><br/>
              <span>Phone :</span><p class="contact-para d-inline"> (21)-255-886-1234</p>
            </Col>
              
            <Col sm={3} className="my-1">
              <Card.Title>Newsletter</Card.Title>
              <p>Enter your email and receive the latest news from us. We'll never share your email address</p>
              <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
                <Form.Control placeholder="Inter Your Email Address" />
              </Form.Group>
              <Button style={{ backgroundColor:'#FF9100', borderColor:'#FF9100'}}>Reed Mode</Button>
            </Col>              
          </Row>
        </Card.Body>
      </Card>
    </Container>
  ) 
}
export default Home;
