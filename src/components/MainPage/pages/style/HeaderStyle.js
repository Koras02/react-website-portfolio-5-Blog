import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const HeaderWrapper = styled.div`
   width:100%;
   height:107px;
   padding:0px 50px 0px 0px;
   position:absolute;
   top:0;
   z-index:999;
   background:transparent;
   transition:.3s;
   border:1px solid #000;
`

export const HeaderWrapperContainer = styled.div`
    max-width:1704px;
    height:67px;
    padding:20px 0px;
    transition:.3s;
    display:flex;
    justify-content: space-between;
    felx-wrap:wrap;
    border:1px solid red;
    margin:auto;
    position:relative;
    left:0px;
    right:0px;

`;

export const HeaderLeft = styled(LinkR)`
    width:166px;
    height:60px;
`

export const HeaderLogo = styled.div`
   width:70px;
   height:70px;
//    border:1px solid #000;
   border-radius:100%;
   background:#fff;
   float:left;
`


export const HeaderRight = styled.div`
     width:100%;
     height:67px;
     display:flex;
     align-items:center;
     flex-wrap:wrap;
     border:1px solid #000;
     position:relative;
     left:20%;
     box-sizing:border-box;
`

export const HeaderRightBlock = styled.div`
   width:672.344px;
   height:67px;
   @media screen and (min-width:992px) {
   display:block;
   }
   
`

export const HeaderRightBlockMenu = styled.div`
    width:100%;
    height:200px;
    display:flex;

`

export const HeaderRightBlockMenuList = styled.div`
    width:100%;
    height:200px;
    // border:1px solid #000;
    margin:30px;
`;

export const HeaderRightBlockMenuListLink = styled(LinkR)`
   width:58px;
   height:27px;
   padding:20px 0px;
   position:relative;
   bottom:10px;
   left:200px;
   text-decoration:none;
   color:#000;
`

export const HeaderRightBlockMenuBtn = styled.div`
    width:119.859px;
    height:46px;
    margin-left:50px;
    display:block;
    // border:1px solid #000;
    position:relative;
    left:30%;
    top:10px;
`

export const HeaderRightBlockMenuListBox = styled.div`
width:119px;;
height:27px;
padding:20px 0px;
// border:1px solid #000;
position:relative;
bottom:20px;
left:-40px;
text-decoration:none;
color:#000;
`

export const Box = styled.div`
  width:65px;
  height:42px;
  padding:0 25px;
  line-height:42px;
  border:1px solid #b1b4c1;
  border-radius:6px;
  color:#c6c9d8
  font-size:14px;
  position:relative;
  z-index:2;
  text-decoration:none;
`