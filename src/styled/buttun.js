import styled from "styled-components";

export const Button = styled.button`
  padding:10px 18px;
  border-radius: 5px;
  background:rgb(0, 0, 0);
  color: #fff;
  width: 180px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.4s ease-in;
  height: 40px;
  &:hover{
    background: #fff;
    color: rgb(0, 0, 0);
    border: 1px solid rgb(0, 0, 0);
    transition: all 0.3s ease-in;
  }
`;

export const ReverseStyle = styled(Button)`
  background: #fff;
  color: rgb(0, 0, 0);
  border: 1px solid black;

  &:hover {
    background: black;
    color: white;
    border: 1px solid transparent;
    transition: all 0.3s ease-in;
  }
`;
