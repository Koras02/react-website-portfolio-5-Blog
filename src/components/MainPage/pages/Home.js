import React from 'react';
// import Service from './Service';
import {
    HomeOverlay,
    HomeWrapper,
    HomeWrapperBg,
    HomeWrapperContainer,
    HomeWrapperContainerInnerText,
    HomeWrapperContainerInnerTextBtn,
    HomeWrapperContainerInnerTextBtnLink,
    HomeWrapperContainerInnerTextP,
    HomeWrapperContainerInnerTextTitle,
    HomeWrapperContainerSlide,
    HomeWrapperContainerSlideCol,
    HomeWrapperContainerSlideRow
} from './style/HomeStyle';


function Home() {
    return (
        <>
            <HomeWrapper id="Header">
                <HomeOverlay>
                    <HomeWrapperBg>
                        <HomeWrapperContainer>
                            <HomeWrapperContainerSlide>
                                <HomeWrapperContainerSlideRow>
                                    <HomeWrapperContainerSlideCol>
                                        <HomeWrapperContainerInnerText>
                                            <HomeWrapperContainerInnerTextTitle>
                                                Creative
                                    </HomeWrapperContainerInnerTextTitle>
                                            <HomeWrapperContainerInnerTextP>
                                                There are many variations of passages of Lorem Ipsum available but
                                                the majority have suffered alteration.
                                    </HomeWrapperContainerInnerTextP>
                                            <HomeWrapperContainerInnerTextBtn to="/">
                                                <HomeWrapperContainerInnerTextBtnLink to="">
                                                    contact us
                                         </HomeWrapperContainerInnerTextBtnLink>
                                            </HomeWrapperContainerInnerTextBtn>
                                        </HomeWrapperContainerInnerText>
                                    </HomeWrapperContainerSlideCol>
                                </HomeWrapperContainerSlideRow>
                            </HomeWrapperContainerSlide>
                        </HomeWrapperContainer>
                    </HomeWrapperBg>
                </HomeOverlay>
            </HomeWrapper>

        </>
    );
}


export default Home;