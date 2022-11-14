import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import mauerSWLogo from './images/mauerSW-Logo.png'

const Footer = () => {
return (
    <>
      <Row className="footer">
        <Container>
            <Row>
                <Col>
                    <img src={mauerSWLogo} width="85" height="75" alt=""/>
                </Col>
                <Col>
                <p>Mauer Software Development Blog</p>
                </Col>
                <Col>
                    <Row>
                        <Col xs={10}/>
                        <Col>
                            <a href="https://www.facebook.com/corymauer" data-toggle="tooltip" data-placement="bottom" title="Facebook">
                                <i class="fa fa-facebook"/>
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/corymauer/" data-toggle="tooltip" data-placement="bottom" title="Linkdin">
                                <i class="fa fa-linkedin"/>
                            </a>
                        </Col>
                    </Row>
                </Col>

            <Row>
                <Col></Col>
                <Col>
                    <div class="newsletter-widget text-left">
                    <form class="form-inline">
                        <input type="text" class="form-control" placeholder="Enter your email address"/>
                        <button type="submit" class="btn btn-primary">SUBMIT</button>
                    </form>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            </Row>
            <Row>
             <br/>
                <div class="copyright">&copy; Mauer Software: <a href="/home">HTML Design</a>.</div>

            </Row>
        </Container>
      </Row>
    </>
);
};

export default Footer;
