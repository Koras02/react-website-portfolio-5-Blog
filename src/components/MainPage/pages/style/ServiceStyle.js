import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
export const MainWrapper = styled.div`
   width:100%;
   height:9211.3px;
   display:block;
`

export const ServiceWrapper = styled.div`
    width:100%;
    height:771px;
    padding:120px 0px;
    border:1px solid red;
    // background:red;
    position:relative;
    top:11%;
`;


export const ServiceContainer = styled.div`
  padding:0px 15px;
  margin:auto;
  border:1px solid #000;
  max-width:1230px;
  height:771px;

@media screen and (min-width: 1200px) {
    max-width:1260px;
}
`

export const ServiceContainerRow = styled.div`
  display:flex;
  flex-wrap;wrap;
  margin-right:-15px;
  margin-left:-15px;
`;

export const ServiceContainerCol = styled.div`
   position:relative;
   width:100%;
   height:771px;
   padding: 0px 15px;
   border:1px solid red;
`

export const ServiceContainerColRow = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin:0px -15px;
    border:1px solid #000;
    // width:100%;
    max-width:1260px;
    // width:100%
    height:771px;
`

export const ServiceContainerColRowColBox2 = styled.div`
    @media screen and (max-width: 992px) {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    width:390px;
    height:369px;
    border:1px solid #000;
    padding:0px 0px;
    margin:10px;
`;


export const ServiceContainerColRowColBox2Link = styled(LinkR)`
   width:390px;
   height:369px;
   display:flex;
   
  
`;