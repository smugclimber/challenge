import React from "react";

const Card = () => (
    <div className="mobile-card-div">
        <div className="card text-center border-light" style={{width: '18rem'}}>
            <img className="card-img-top w-50 mx-auto d-block" src='data:image/svg+xml;charset=UTF-8,<svg%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20xmlns%3Axlink%3D"http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink"%20width%3D"50px"%20height%3D"50px"%20viewBox%3D"0%200%2050%2050"%20preserveAspectRatio%3D"xMidYMid%20meet"%20><rect%20id%3D"svgEditorBackground"%20x%3D"0"%20y%3D"0"%20width%3D"50"%20height%3D"50"%20style%3D"fill%3A%20none%3B%20stroke%3A%20none%3B"%2F><circle%20id%3D"e1_circle"%20cx%3D"25"%20cy%3D"25"%20style%3D"fill%3Agray%3Bstroke%3Anone%3Bstroke-width%3A1px%3B"%20r%3D"23.2594066992"%2F><%2Fsvg>' alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">Heading</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-secondary">View details >></a>
            </div>
        </div>
    </div>
    );

export default Card;