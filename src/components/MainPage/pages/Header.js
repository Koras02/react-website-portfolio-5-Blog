import React from 'react';
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
    Box
} from './style/HeaderStyle';
import { FcNightPortrait } from 'react-icons/fc'
import './style/Header.css'
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <HeaderWrapper>
            <HeaderWrapperContainer>
                <HeaderLeft to="/">
                    <HeaderLogo>
                        <FcNightPortrait size="50px" className="FcNight" />
                        <h1 className="H1">Header</h1>
                    </HeaderLogo>
                </HeaderLeft>
                <HeaderRight>
                    <HeaderRightBlock>
                        <HeaderRightBlockMenu>
                            <HeaderRightBlockMenuList>
                                <HeaderRightBlockMenuListLink to="">
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
    );
}


export default Header;