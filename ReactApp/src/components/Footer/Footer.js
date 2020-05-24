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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col md="9">
              <h2 className="title">FannieSaves.WIN</h2>
            </Col>

            <Col md="3">
              <h3 className="title">Follow us:</h3>

              <div className="btn-wrapper profile">
              
              <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/jmcmanus333"
                  id="github_joseph"
                  target="_blank"
                >
                  <img src={require('../../assets/img/joseph.png')} />
                </Button>
                <UncontrolledTooltip delay={0} target="github_joseph">
                  Joseph McManus
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/justinboggs"
                  id="github_justin"
                  target="_blank"
                >
                  <img src={require('../../assets/img/justin.png')} />
                </Button>
                <UncontrolledTooltip delay={0} target="github_justin">
                  Justin Boggs
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/kipmadden"
                  id="github_kip"
                  target="_blank"
                >
                  <img src={require('../../assets/img/kip.png')} />
                </Button>
                <UncontrolledTooltip delay={0} target="github_kip">
                  Kip Madden
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/seankda"
                  id="github_sean"
                  target="_blank"
                >
                  <img src={require('../../assets/img/sean.jpg')} />
                </Button>
                <UncontrolledTooltip delay={0} target="github_sean">
                  Sean Del Alcazar
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://github.com/bigtoga"
                  id="github_scott"
                  target="_blank"
                >
                  <img src={require('../../assets/img/scott.png')} />
                </Button>
                <UncontrolledTooltip delay={0} target="github_scott">
                  Scott Whigham
                </UncontrolledTooltip>

              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
