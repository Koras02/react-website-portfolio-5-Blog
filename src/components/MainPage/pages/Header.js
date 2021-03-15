/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import {
    HeaderLeft,
    HeaderLogo,
    HeaderRight,
    HeaderRightBlock,
    HeaderWrapper,
    HeaderWrapperContainer,
    HeaderRightBlockMenu,
    HeaderRightBlockMenuList,
    HeaderRightBlockMenuListLink,
    HeaderRightBlockMenuListBox,
    HeaderRightBlockMenuBtn,
    Box,
    HeaderLeftLink
} from './style/HeaderStyle';
import { FcNightPortrait } from 'react-icons/fc'
import './style/Header.css'
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

export function Header() {
    const [scrollNav, setscrollNav] = useState(true);

    const changeNav = () => {
        if (window.scrollY > 80) {
            setscrollNav(false)
        } else (
            setscrollNav(true)
        );
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <HeaderWrapper scrollNav={scrollNav}>
                <HeaderWrapperContainer>
                    <HeaderLeft to="/">
                        <HeaderLogo scrollNav={scrollNav}>
                            <FcNightPortrait size="50px" className="FcNight" />
                            <HeaderLeftLink
                                to=""
                                scrollNav={scrollNav}
                            >My BLOG</HeaderLeftLink>
                        </HeaderLogo>
                    </HeaderLeft>
                    <HeaderRight>
                        <HeaderRightBlock>
                            <HeaderRightBlockMenu>
                                <HeaderRightBlockMenuList>
                                    <HeaderRightBlockMenuListLink
                                        to="Header"
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                    >
                                        Home
                                </HeaderRightBlockMenuListLink>
                                </HeaderRightBlockMenuList>
                                <HeaderRightBlockMenuList>
                                    <HeaderRightBlockMenuListLink to="">
                                        Service
                                </HeaderRightBlockMenuListLink>
                                </HeaderRightBlockMenuList>
                                <HeaderRightBlockMenuList>
                                    <HeaderRightBlockMenuListLink to="">
                                        About
                                </HeaderRightBlockMenuListLink>
                                </HeaderRightBlockMenuList>
                                <HeaderRightBlockMenuList>
                                    <HeaderRightBlockMenuListLink to="">
                                        Portfolio
                                </HeaderRightBlockMenuListLink>
                                </HeaderRightBlockMenuList>
                                <HeaderRightBlockMenuList>
                                    <HeaderRightBlockMenuListLink to="">
                                        Team
                                </HeaderRightBlockMenuListLink>
                                </HeaderRightBlockMenuList>
                                <HeaderRightBlockMenuList>
                                    <HeaderRightBlockMenuListLink to="">
                                        Testimonial
                                </HeaderRightBlockMenuListLink>
                                </HeaderRightBlockMenuList>
                                <HeaderRightBlockMenuList>
                                    <HeaderRightBlockMenuListLink to="">
                                        Contact
                                </HeaderRightBlockMenuListLink>
                                </HeaderRightBlockMenuList>
                                <HeaderRightBlockMenuBtn>
                                    <HeaderRightBlockMenuListBox>
                                        <Box>
                                            <Link to="" className="Link">
                                                Buy Now
                                       </Link>
                                        </Box>
                                    </HeaderRightBlockMenuListBox>
                                </HeaderRightBlockMenuBtn>
                            </HeaderRightBlockMenu>
                        </HeaderRightBlock>
                    </HeaderRight>
                </HeaderWrapperContainer>
            </HeaderWrapper>
        </>
    );
}


export default Header;