import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  color: black;
  border: 0;
  outline: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #5f7f95;
  color: #ffffff;
  transition: all 0.5s ease;
  &:hover {
    background: #384b57;
  }
`;

export const Input = styled.input`
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #42f2f7;
  color: #ffffff;
  border-radius: 0;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: 0;
    border-color: #5f7f95;
  }
`;
