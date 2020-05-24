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
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Team extends React.Component {
  state = {};
  render() {
    return (
      <div className="section section-typo">
        <a name="team" className="text-hide">Meet the team</a>
        <div className="space-50" />
      
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path3.png")}
        />
      <Container>
        <h3 className="title">Meet the Team</h3>
        
        <div id="images">
            <Row>
              <Col sm="4" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow"
                  src={require("assets/img/joseph.png")}
                  style={{ width: "150px" }}
                />
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  Joseph McManus
                </small>
              </Col>
              <Col sm="4" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow"
                  src={require("assets/img/justin.png")}
                  style={{ width: "150px" }}
                />
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  Justin Boggs
                </small>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="4" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/kip.png")}
                  style={{ width: "150px" }}
                />
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  Kip Madden
                </small>
              </Col>
            </Row>
            <Row>
              <Col className="mt-5 mt-sm-0" sm="4" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/sean.jpg")}
                  style={{ width: "150px" }}
                />
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  Sean Kendrick Del Alcazar
                </small>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="4" xs="6">
                <img
                  alt="..."
                  className="img-fluid rounded shadow-lg"
                  src={require("assets/img/scott.png")}
                  style={{ width: "150px" }}
                />
                <small className="d-block text-uppercase font-weight-bold mb-4">
                Scott Whigham
                </small>
              </Col>
            </Row>
          </div>
          
          <div className="space-50" />      
          
          <div className="btn-wrapper mb-3">
                    <Button
                      color="info"
                      href="/thedata"
                    >
                      On to the data! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="tim-icons icon-triangle-right-17" />
                    </Button>
                  </div>

      </Container>
      </div>
    );
  }
}

export default Team;