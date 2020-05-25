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

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// reactstrap components
import { 
  Button,
  Container
} from "reactstrap";


class CrazyTimes extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />

        <div className="wrapper">
        <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />

        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">FannieSaves.WIN</h1>

            <h3 className="d-none d-sm-block">
              Let the power of AI & Machine Learning show you how to save HUGE money 
              by avoiding defaults and only buying loans that will close!
            </h3>

            <Button color="warning" to="/home" tag={Link}>Let's get started -></Button>

          </div>

        </Container>

      </div>
      

          <Footer />

        </div>
      </>
    );
  }
}

export default CrazyTimes;
