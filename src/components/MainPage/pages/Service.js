import React from 'react';
import About from './About';
import Services from './Services';
import { ServicesWrapper } from './style/ServiceStyle';

function Service() {
    return (
        <ServicesWrapper>
            <Services />
            <hr />
            <About />
        </ServicesWrapper>
    );
}


export default Service;