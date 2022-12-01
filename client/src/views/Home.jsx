import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';
// import {} from '../store/actions/actionCreator'

import Slideshow from "../components/Slideshow";
import TopProject from '../components/TopProject'
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home(){
	return (
		<>
            <Slideshow />
            <TopProject />
            <About />
            <Footer />

            {/* <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <header className="App-header">
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header> */}
        </>
	)
}