import React from 'react';
import Header from './pages/Header';
import Home from './pages/Home';
// import Service from './pages/Service';
import '../../index.css';
// import Service from './pages/Service';
import { MainWrapper } from './pages/style/ServiceStyle';
import Service from './pages/Service';

// import Service from './pages/Service';




export function MainPage() {
    return (
        <>
            <MainWrapper>
                <Header />
                <Home />
                <Service />
            </MainWrapper>
        </>
    );
}


export default MainPage;