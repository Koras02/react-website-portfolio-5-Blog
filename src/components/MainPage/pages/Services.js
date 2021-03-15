import React from 'react';
import {
    ServiceContainer,
    ServiceContainerRow,
    ServiceContainerCol,
    ServiceContainerColRow,
    ServiceContainerColRowColBox2,
    ServiceWrapper,
    ServiceContainerColRowColBox2Link,
    ServiceContainerColRowColBox2LinkForm,
    ServiceContainerColRowColIcon,
    ServiceContainerColRowContent,
    ServiceContainerColRowTitle,
    ServiceContainerColRowP
} from './style/ServiceStyle';
import { IoBusinessOutline } from 'react-icons/io5'

function Services() {
    return (
        <ServiceWrapper>
            <ServiceContainer>
                <ServiceContainerRow>
                    <ServiceContainerCol>
                        <ServiceContainerColRow>
                            <ServiceContainerColRowColBox2>
                                <ServiceContainerColRowColBox2Link to="/">
                                    <ServiceContainerColRowColBox2LinkForm>
                                        <ServiceContainerColRowColIcon>
                                            <IoBusinessOutline />
                                        </ServiceContainerColRowColIcon>
                                        <ServiceContainerColRowContent>
                                            <ServiceContainerColRowTitle>
                                                Business Stratagy
                                        </ServiceContainerColRowTitle>
                                            <ServiceContainerColRowP>

                                            </ServiceContainerColRowP>
                                        </ServiceContainerColRowContent>
                                    </ServiceContainerColRowColBox2LinkForm>
                                </ServiceContainerColRowColBox2Link>
                            </ServiceContainerColRowColBox2>
                            <ServiceContainerColRowColBox2>
                                <ServiceContainerColRowColBox2Link to="/">
                                    <ServiceContainerColRowColBox2LinkForm>

                                    </ServiceContainerColRowColBox2LinkForm>
                                </ServiceContainerColRowColBox2Link>
                            </ServiceContainerColRowColBox2>
                            <ServiceContainerColRowColBox2>
                                <ServiceContainerColRowColBox2Link to="/">
                                    <ServiceContainerColRowColBox2LinkForm>

                                    </ServiceContainerColRowColBox2LinkForm>
                                </ServiceContainerColRowColBox2Link>
                            </ServiceContainerColRowColBox2>
                            <ServiceContainerColRowColBox2>
                                <ServiceContainerColRowColBox2Link to="/">
                                    <ServiceContainerColRowColBox2LinkForm>

                                    </ServiceContainerColRowColBox2LinkForm>
                                </ServiceContainerColRowColBox2Link>
                            </ServiceContainerColRowColBox2>
                            <ServiceContainerColRowColBox2>
                                <ServiceContainerColRowColBox2Link to="/">
                                    <ServiceContainerColRowColBox2LinkForm>

                                    </ServiceContainerColRowColBox2LinkForm>
                                </ServiceContainerColRowColBox2Link>
                            </ServiceContainerColRowColBox2>
                            <ServiceContainerColRowColBox2>
                                <ServiceContainerColRowColBox2Link to="/">
                                    <ServiceContainerColRowColBox2LinkForm>

                                    </ServiceContainerColRowColBox2LinkForm>
                                </ServiceContainerColRowColBox2Link>
                            </ServiceContainerColRowColBox2>
                        </ServiceContainerColRow>
                    </ServiceContainerCol>
                </ServiceContainerRow>
            </ServiceContainer>
        </ServiceWrapper>
    );
}


export default Services;