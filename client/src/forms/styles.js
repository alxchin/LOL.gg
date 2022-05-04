import styled from "styled-components";

export const Form1 = styled.div`
  form {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    input {
      padding: 10px;
      border: none;
      border-radius: 4px;
      text-align: center;
      width: 60%;
    }
    label {
      color: #fff;
      text-align: center;
      background-color: #d7385e;
      padding: 10px;
      border-radius: 4px;
      width: 15%;
      margin: 0;
    }
    button {
      color: #fff;
      background-color: #d7385e;
      padding: 10px;
      border-radius: 4px;
      cursor: pointer;
      width: 20%;
    }
      
  }
  @media(max-width: 414px){
      form{
        width: 350px;
      }
      h1{
        font-size: 20px;
      }
    }
`;