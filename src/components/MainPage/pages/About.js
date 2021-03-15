import React from 'react';
import {
    AboutContainer,
    AboutContainerRow,
    AboutContainerRowCol1,
    AboutContainerRowCol1thumnail,
    AboutContainerRowCol1thumnailImage,
    AboutContainerRowCol2, AboutContainerRowCol2Avout, AboutContainerRowCol2Description, AboutContainerRowCol2DescriptionLink, AboutContainerRowCol2Row, AboutContainerRowCol2RowCol1, AboutContainerRowCol2RowCol1List, AboutContainerRowCol2RowCol1ListTitle, AboutContainerRowCol2RowCol1ListTitleP, AboutContainerRowCol2Title, AboutWrapper,
    AboutWrappers
} from './style/AboutStyle';
import Image from './Images/Girl.jpg'

export function About() {
    return (
        <AboutWrapper>
            <AboutWrappers>
                <AboutContainer>
                    <AboutContainerRow>
                        <AboutContainerRowCol1>
                            <AboutContainerRowCol1thumnail>
                                <AboutContainerRowCol1thumnailImage src={Image}></AboutContainerRowCol1thumnailImage>
                            </AboutContainerRowCol1thumnail>
                        </AboutContainerRowCol1>
                        <AboutContainerRowCol2>
                            <AboutContainerRowCol2Avout>
                                <AboutContainerRowCol2Title>
                                    About Us
                                </AboutContainerRowCol2Title>
                                <AboutContainerRowCol2Description>
                                    There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered
                                     <AboutContainerRowCol2DescriptionLink to="/">
                                        alteration
                                     </AboutContainerRowCol2DescriptionLink>
                                     in some form, by injected humour,
                                     or randomised words which dont look even slightly
                                     believable. If you are going to use a passage of
                                     Lorem Ipsum,
                                </AboutContainerRowCol2Description>
                                <AboutContainerRowCol2Row>
                                    <AboutContainerRowCol2RowCol1>
                                        <AboutContainerRowCol2RowCol1List>
                                            <AboutContainerRowCol2RowCol1ListTitle>
                                                Who we are
                                            </AboutContainerRowCol2RowCol1ListTitle>
                                            <AboutContainerRowCol2RowCol1ListTitleP>
                                                There are many vtions of passages of Lorem Ipsum available,
                                                but the majority have suffered.
                                            </AboutContainerRowCol2RowCol1ListTitleP>
                                        </AboutContainerRowCol2RowCol1List>
                                    </AboutContainerRowCol2RowCol1>
                                    <AboutContainerRowCol2RowCol1>
                                        <AboutContainerRowCol2RowCol1List>
                                            <AboutContainerRowCol2RowCol1ListTitle>
                                                Who we are
                                            </AboutContainerRowCol2RowCol1ListTitle>
                                            <AboutContainerRowCol2RowCol1ListTitleP>
                                                There are many vtions of passages of Lorem Ipsum available,
                                                but the majority have suffered.
                                            </AboutContainerRowCol2RowCol1ListTitleP>
                                        </AboutContainerRowCol2RowCol1List>
                                    </AboutContainerRowCol2RowCol1>
                                </AboutContainerRowCol2Row>
                            </AboutContainerRowCol2Avout>
                        </AboutContainerRowCol2>
                    </AboutContainerRow>
                </AboutContainer>
            </AboutWrappers>
        </AboutWrapper>
    );
}


export default About;