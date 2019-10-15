import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const images = ['icon1.png', 'icon2.png', 'icon3.png', 'icon4.png'];

class App extends Component {
    render() {
        const image = "images/react-logo.svg"
        const logo = "images/ironhack-logo.svg"


        return (

            <div className="App" style={{ backgroundColor: '#fff000', backgroundImage: `url(${image})` }}>


                <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                    <header className="masthead mb-auto">
                        <div className="inner">
                            <h3 className="masthead-brand">Ironhack</h3>
                            <img src={logo} alt={"Ironhack-logo"}/> 
                            <nav className="nav nav-masthead justify-content-center">
                                <a className="nav-link active" href="#">Home</a>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Contact</a>
                            </nav>
                        </div>
                    </header>
                </div>

                <h1>Say hello to ReactJS</h1>

                <h3>Say hello to ReactJS</h3>
                <Button color="danger">Danger!</Button>


                <div className="Hero" style={{ backgroundColor: '#fff' }}>


                    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
                        <header className="masthead mb-auto">
                            <div className="inner">
                                {images.map(imageUrl => {
                                    const url = `/images/${imageUrl}`;
                                    return <img src={url} />;
                                })}
                            </div>
                        </header>
                    </div>

                </div>
            </div>

        );
    }
}

export default App;