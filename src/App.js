import React, { Component } from 'react';
import Navbar from "./components/navbar";
import CarouselComp from "./components/carousel";
import Card from "./components/card";
import Featurette1 from "./components/featurette1";
import Featurette2 from "./components/featurette2";
import Featurette3 from "./components/featurette3";
import Footer from "./components/footer";
import 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className='container'> */}
          <nav className="row"> {/* end of header row */}
           <Navbar/>
          </nav> {/* end of header row */}

          <div className="row"> {/* end of carousel row */}
              <CarouselComp/>
          </div> {/* end of carousel row */}

          <div className="row"> {/* page row */}
            <div className="mobile-page">
              <div className="row d-flex justify-content-center mobile-card">
                <Card/>
                <Card/>
                <Card/>
              </div>
              <hr/>

              <div className="row">
                <Featurette1/>
                <Featurette2/>
                <Featurette3/>
              </div>

            </div>
          </div> {/* end of page row */}

          <footer> {/* footer row */}
           <Footer/>
          </footer> {/* end of footer row */}

        {/* </div> end of container */}
      </div>
    );
  }
}

export default App;
