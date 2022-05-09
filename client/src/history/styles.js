import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Header = styled.div`
display: flex;
color: #edc988;
align-items:center;
flex-direction:column;
justify-items:center;
`
export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin:0 auto;
border-radius: var(--main-border-radius);
-webkit-box-shadow:0 0 24px 7px rgba(0, 0,0,0.2);
box-shadow: 0 0 24px 7px rgba(0,0,0,0.2);
background-color: var(--bg-color-ccard);
color: white;
width:85%;
max-width:675px;
min-height: 1000px;
flex-direction:column;
`;

export const SectionBlock = styled.div`
border: 5px solid red;
display: flex;
justify-content: center;
color:yellow;
margin: auto;
width: 50%;
padding: 10px;
`

export const MatchBox = styled.div`
position: relative;
display:flex;
align-items:center;
width:100%;
height:100%;
border: solid 2px red;
flex-direction:column;
p{
dispaly:flex;
justify-content:center;       
text-align:center; 
}

`
export const ReturnHome = styled.div`
  cursor: pointer;
  float: left;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    size: 24px;
    color: white;;
  }
`;