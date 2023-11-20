import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from './views/DefaultPage';
import Home from './views/Home';
import Roadmap from './views/Roadmap';
import Designs from './views/Designs';
import Developments from './views/Developments';
import Contact from './views/Contact';
import SignUp from './views/SignUp';
import NotFound from './views/NotFound';
import './style/app.css';
import runTests from './tests/runTests.js';

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DefaultPage />}>
                            <Route index element={<Home />} />
                            <Route path="roadmap" element={<Roadmap />} />
                            <Route path="designs" element={<Designs />} />
                            <Route path="developments" element={<Developments />} />
                            <Route path="contact" element={<Contact />} />
                            <Route path="sign-up" element={<SignUp />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }

    componentDidMount(){
        //setTimeout(() => console.log(runTests()), 250);
        let rest = window.setInterval(() => {
            runTests();
            window.clearInterval(rest);
        }, 250);
    }
}

export default App;
