import styled from 'styled-components';
import Image from '../Images/Talk.jpg'
import { Link as LinkR } from 'react-router-dom'


export const HomeWrapper = styled.div`
width:100%;
max-width:100%;
   height:900px;
   position:absolute;
   box-sizing:border-box;
   display:block;
   // display:block;
position:absolute;
overflow:hidden;
left:0%;
right:0%;
// background:red;;


 
`;

export const HomeOverlay = styled.div`
   width:100%;
   height:950px;
   background:#000;
   z-index:2;
   opacity:99%;
   
`

export const HomeWrapperBg = styled.div`
width:100%;
// max-width:1884px;
height:950px;
z-index:-999;
background: url(${Image}) no-repeat;
// opacity:80%;
background-size:cover;
position:relative;
// overflow:hidden;
 overflow:hidden;
margin:auto;
 
`;

export const HomeWrapperContainer = styled.div`
width:100%;
height:950px;
padding:230px 0px 230px 0px;
overflow: hidden;
border:1px solid blue;
margin:auto;
`

export const HomeWrapperContainerSlide = styled.div`
  width:100%;
  max-width:1200px;
  height:436px;
  padding: 0px 0px;
//   background:red;
  margin:auto;
  
  @media screen and (min-width:1200px) {
     max-width: 1260px;
  }
`

export const HomeWrapperContainerSlideRow = styled.div`
   display:flex;
   flex-wrap: wrap;
   padding: 0px -15px;
   max-width:100%;
   height:436px;
   // background:pink;
   box-sizing:border-box;
`

export const HomeWrapperContainerSlideCol = styled.div`
   position:relative;
   width:100%;
   padding:0px 30px;
   max-width:1200px;
   height:436px;
   // border:1px solid red;
`;

export const HomeWrapperContainerInnerText = styled.div`
    position:relative;
    max-width:1230px;
    height:336px;
    margin-top:100px;
    text-align:center;
   //  border:1px solid #000;
`

export const HomeWrapperContainerInnerTextTitle = styled.div`
    color:#fff;
    font-size:100px;
    font-weight:900;
    text-transform: uppercase;
    font-family: Montserrat,sans-serif;
    line-height:130px;
    display:inline-block;
    color:rgb(248, 31, 1);
`

export const HomeWrapperContainerInnerTextP = styled.div`
   color:#c6c9d8;
   font-size: 24px;
   line-height:40px;
   margin:0;
   padding: 0 16%;
   color:#fff;
   font-weight:300;
`

export const HomeWrapperContainerInnerTextBtn = styled(LinkR)`
   margin-top:50px;
   box-sizing:border-box;
   display:block;

`

export const HomeWrapperContainerInnerTextBtnLink = styled(LinkR)`
   color:#c6c9d8;
   font-size:16px;
   text-transform: uppercase;
   letter-spacing:2px;
   border:2px solid #00ffd0;
   padding:15px 40px;
   background:#dfdcf2;
   color:#00ffd0;
   display:inline-block;
   font-weight:500;
   text-decoration:none;
   transition:.3s;

   &:hover {
      background: red;
      position:relative;
      bottom:4px;
      // transition:10s;
    }
`