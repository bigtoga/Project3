/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import Team from "components/reusable/team.js"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ComponentsNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

class Homepage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <ComponentsNavbar />
        
        <div className="wrapper">

          {/*==========
          Splash screen
          =============*/}
          <div className="page-header">
            <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />
            <img
              alt="..."
              className="path2"
              src={require("assets/img/path2.png")}
            />
            <img
              alt="..."
              className="shapes triangle"
              src={require("assets/img/triunghiuri.png")}
            />
            <img
              alt="..."
              className="shapes wave"
              src={require("assets/img/waves.png")}
            />
            <img
              alt="..."
              className="shapes squares"
              src={require("assets/img/patrat.png")}
            />
            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
            <div className="content-center">
              <Row className="row-grid justify-content-between align-items-center text-left">
                <Col lg="6" md="6">
                  <h1 className="text-white">
                    Let AI & Machine Learning save <br />
                    Fannie Mae money
                  </h1>
                  <p className="text-white mb-3">
                    Use the power of our data scientists and their amazing 
                    <span className="text-danger"> machine learning prediction engine </span>
                    to find the best loans and avoid defaults!
                  </p>
                  <div className="btn-wrapper mb-3">
                    <Button
                      color="info"
                      href="#project"
                    >
                      Let's get started! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="tim-icons icon-triangle-right-17" />
                    </Button>
                  </div>
                  <div className="btn-wrapper">
                    <div className="button-container">
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button
                        className="btn-icon btn-simple btn-round btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col lg="4" md="5">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/datascientist4.png")}
                  />
                </Col>
              </Row>
            </div>
          </div>
          
          {/* 3 areas */}
          <section className="section section-lg section-coins">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path3.png")}
            />

          {/*==========
          Section 1
          =============*/}
            <Container>
              <Row>
              <div id="project"></div>
                <Col md="12">
                  <hr className="line-info" />
                  <h1>
                    <a id="FannieSaves">FannieSaves </a>
                    <span className="text-info">can help your team spot bad loans fast</span>
                  </h1>
                </Col>
              </Row>

              <Row>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/datascientist4.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Machine Learning</h4>
                          <span>Algorithms</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>Set your risk profile</ListGroupItem>
                          <ListGroupItem>Enter loan criteria</ListGroupItem>
                          <ListGroupItem>Get actionable results</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary" href="#goals">
                        Get started
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/trends.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Trend Analysis</h4>
                          <span>Reporting</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>State of the art analysis</ListGroupItem>
                          <ListGroupItem>Comprehensive analyst reports</ListGroupItem>
                          <ListGroupItem>Alerts based on your thresholds</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success" href="#goals">
                        Get started
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/team.png")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Support Team</h4>
                          <span>Help</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>Phone, email, chat plans available</ListGroupItem>
                          <ListGroupItem>Integrates with Salesforce</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info" href="#goals">
                        Contact Support
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>          
          
          {/* Large Achievements */}
          <section className="section section-lg">
            <h1><a name="goals" className="text-hide">The Project</a></h1>
            <br />
            <br />
            <br />
            <br />
            <section className="section">
              <img
                alt="..."
                className="path"
                src={require("assets/img/path4.png")}
              />

          {/*==========
          Section 2
          =============*/}
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col className="mt-lg-5" md="5">
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-zoom-split text-warning" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">Analysis</CardTitle>
                                  <p />
                                  <p className="card-category text-warning">Deeper insight</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats upper bg-default">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-coins text-white" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">Results</CardTitle>
                                  <p />
                                  <p className="card-category text-white">Show the value</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-tap-02 text-info" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">Simple</CardTitle>
                                  <p />
                                  <p className="card-category text-info">Point & Click</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <i className="tim-icons icon-spaceship text-success" />
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">AI / ML</CardTitle>
                                  <p />
                                  <p className="card-category text-success">Cutting edge</p>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md="6">
                  <div className="content-center brand">
                    <div className="pl-md-5">
                      <h1>
                        Project Goals
                      </h1>
                      <p>
                        Create an application that Fannie Mae loan analysts and underwriters
                        could use to make better and more profitable decisions related to the 
                        purchase of mortgage loans in the secondary market
                      </p>
                      <br />
                      <p>
                        The application uses machine learning and a variety of user inputs 
                        to predict whether a loan will "Close"
                        (get re-sold or paid off successfully) or whether the loan will "Default"
                        (which results in loss for Fannie Mae)
                      </p>
                      </div>
                      
          {/*==========
          Section 3
          =============*/}
          <div className="content-center brand">
                      <a
                        className="font-weight-bold text-info mt-5"
                        href="#team"
                      >
                        Meet the Team {" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>       

          <Team />
          <Footer />
        </div>
      </>
    );
  }
}

export default Homepage;
