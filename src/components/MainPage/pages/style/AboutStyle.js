import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const AboutWrapper = styled.div`
   width:100%;
   height:627.297px;
   padding:120px 0px;
   background: #f8f9fc;
//    background:red;
   display:block;
`;

export const AboutWrappers = styled.div`
    width:100%;
    height:627.297px;
    border:1px solid red;
`;

export const AboutContainer = styled.div`
   width:100%;
   height:627.297px;
   padding: 0px 15px;
   margin:auto;
//    border:1px solid blue;
    @media screen and (min-width:1200px) {
        max-width:1260px;
    }
`;

export const AboutContainerRow = styled.div`
    margin: 0px -35px;
    align-items:center;
    display:flex;
    flex-wrap:wrap;
`;

export const AboutContainerRowCol1 = styled.div`
   width:471.656px;
   height:627.297px;
   padding: 0px 35px;
   border:1px solid pink;
   position:relaitve;
   display:block;

   @media screen and (min-width: 992px) {
       flex: 0 0 41.666667%;
       max-width:41.666667%;
   }
`;



export const AboutContainerRowCol1thumnail = styled.div`
   position:relative;
   z-index:2;
   display:block;
   width:471.656px;
   height:627.297px;
   `;

export const AboutContainerRowCol1thumnailImage = styled.img`
   width:520.656px;
   height:620.297px;
   border-radius:2%; 
   `;


export const AboutContainerRowCol2 = styled.div`
      width:608.328px;
      height:389px;
      padding: 0px 35px;
    //   border:1px solid red;
   
      @media screen and (min-width: 992px) {
          flex: 0 0 58.333333%;
          max-width:45.333333%;
      }
   `;

export const AboutContainerRowCol2Avout = styled.div`    
margin-top:-20px;
`;

export const AboutContainerRowCol2Title = styled.div`
    width:100%;
    height:84px;
    border:1px solid red;
    margin-bottom:8px;
    font-size: 60px;
    font-weight: 700;
    color: #1f1f25;   
`;

export const AboutContainerRowCol2Description = styled.div`
    font-weight: 300;
    color:#717173;
    font-size:18px;
    line-height: 30px;
    display:inline-table;
    
    `

export const AboutContainerRowCol2DescriptionLink = styled(LinkR)`
    text-decoration:none;
    margin-left:8px;
    color:#000;

`;

export const AboutContainerRowCol2Row = styled.div`
    width:718px;
    height:167px;
    margin-top: 30px;
    display:flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left:-15px;
    border:1px solid red;
`;

export const AboutContainerRowCol2RowCol1 = styled.div`
   width:329.156px;
   height: 167px;
   padding:0px 15px;
   border:1px solid red;
   @media screen and (min-width: 992px) {
       flex: 0 0 50%;
       max-width: 43.9%;
   }

`

export const AboutContainerRowCol2RowCol1List = styled.div`
       width:329.156px;
       height: 167px;
       margin-top: 15px;

`


export const AboutContainerRowCol2RowCol1ListTitle = styled.div`
    font-size: 30px;
    margin-bottom: 20px;  
`

export const AboutContainerRowCol2RowCol1ListTitleP = styled.div`
    font-weight: 300;
    color: rgba(29,29,36,.75);
    font-size: 18px;
    line-height: 30px;
    margin: 0 0 10px;
`