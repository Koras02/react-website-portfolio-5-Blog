import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'


export const HeaderWrapper = styled.div`
   width:100%;
   height:100px;
   padding:0px 50px 0px 0px;
   top:0;
   right:0;
   left:0;
   z-index:1030;
   border:1px solid #000;
   position:fixed;
   top:${({ scrollNav }) => scrollNav ? '0px' : '-10px'};
   background:${({ scrollNav }) => scrollNav ? 'none' : '#fff'};
   transition: ${({ scrollNav }) => scrollNav ? '2s' : '1.5s'};
   `

export const HeaderWrapperContainer = styled.div`
   width:100%;
   height:07px;
   padding:20px 0px;
   transition:.3s;
   display:flex;
   justify-content: space-between;
   felx-wrap:wrap;
   // border:1px solid red;
   margin:auto;
   position:absolute;
   left:0px;
   // border:1px solid
   right:0px;
   
   `;

export const HeaderLeft = styled(LinkR)`
width:166px;
height:60px;
   float:left;
   position:relative;
   left:20px;
   `

export const HeaderLogo = styled.div`
   width:70px;
   height:70px;
   //    border:1px solid #000;
   border-radius:100%;
   background:#fff;
   float:left;
   position:relative;
   
   `;

export const HeaderLeftLink = styled(LinkS)`
   position: relative;
   left:120%;
   top:20%;
   color:${({ scrollNav }) => scrollNav ? '#fff' : '#000'};
   transition: ${({ scrollNav }) => scrollNav ? '2s' : '1.5s'};
   width:200px;
   font:bold 24px/24px arial;
   float:left;
 
`

export const HeaderRight = styled.div`
     width:1200px;
     height:67px;
     display:flex;
     align-items:center;
     flex-wrap:wrap;
     
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

export const HeaderRightBlockMenuListLink = styled(LinkS)`
   width:58px;
   height:27px;
   padding:20px -10px;
   position:relative;
   bottom:10px;
   left:120px;
   text-decoration:none;

   &.active {
       color:blue;
       border-bottom:4px solid red;
       padding-bottom:10px;
   }
 
`

export const HeaderRightBlockMenuBtn = styled.div`
width: 119.859px;
height: 46px;
margin - left: 50px;
display: block;
border:2px solid #000;
border-radius:10%;
position: relative;
left:25%;
top: 10px;
`

export const HeaderRightBlockMenuListBox = styled.div`
width: 119px;;
height: 27px;
padding: 20px 0px;
// border:1px solid #000;
position: relative;
bottom: 10px;
left: 0px;
text - decoration: none;
color:#000;
`

export const Box = styled.div`
width: 65px;
height: 42px;
padding: 0 25px;
line - height: 42px;
// border: 1px solid #b1b4c1;
border - radius: 6px;
color:#c6c9d8
font - size: 14px;
position: relative;
z - index: 2;
text - decoration: none;
`