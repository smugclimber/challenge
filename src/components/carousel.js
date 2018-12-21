import React from "react";
import { Carousel } from 'react-bootstrap';


const CarouselComp = () => (
    <div className="col-12">

        <Carousel>
            <Carousel.Item>
                <img
                className="d-inline-block w-20"
                src='data:image/svg+xml;charset=UTF-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20xmlns%3Axlink%3D"http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink"%20width%3D"2500px"%20height%3D"500px"%20viewBox%3D"0%200%202500%20500"%20preserveAspectRatio%3D"xMidYMid%20meet"%20><rect%20id%3D"svgEditorBackground"%20x%3D"0"%20y%3D"0"%20width%3D"2500"%20height%3D"500"%20style%3D"fill%3Adimgray%3Bstroke%3Anone%3B"%2F><%2Fsvg>'
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{textAlign: 'left'}}>Example Headline.</h3>
                <p style={{textAlign: 'left'}}>Bacon ipsum dolor amet bacon brisket shankle capicola. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" class="btn btn-primary float-left mb-5">Sign up today</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-20"
                src='data:image/svg+xml;charset=UTF-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20xmlns%3Axlink%3D"http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink"%20width%3D"2500px"%20height%3D"500px"%20viewBox%3D"0%200%202500%20500"%20preserveAspectRatio%3D"xMidYMid%20meet"%20><rect%20id%3D"svgEditorBackground"%20x%3D"0"%20y%3D"0"%20width%3D"2500"%20height%3D"500"%20style%3D"fill%3Adimgray%3Bstroke%3Anone%3B"%2F><%2Fsvg>'
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 style={{textAlign: 'left'}}>Example Headline.</h3>
                <p style={{textAlign: 'left'}}>Bacon ipsum dolor amet bacon brisket shankle capicola. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" class="btn btn-primary float-left mb-5">Sign up today</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-20"
                src='data:image/svg+xml;charset=UTF-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20xmlns%3Axlink%3D"http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink"%20width%3D"2500px"%20height%3D"500px"%20viewBox%3D"0%200%202500%20500"%20preserveAspectRatio%3D"xMidYMid%20meet"%20><rect%20id%3D"svgEditorBackground"%20x%3D"0"%20y%3D"0"%20width%3D"2500"%20height%3D"500"%20style%3D"fill%3Adimgray%3Bstroke%3Anone%3B"%2F><%2Fsvg>'
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={{textAlign: 'left'}}>Example Headline.</h3>
                <p style={{textAlign: 'left'}}>Bacon ipsum dolor amet bacon brisket shankle capicola. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button type="button" class="btn btn-primary float-left mb-5">Sign up today</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>
    );

export default CarouselComp;