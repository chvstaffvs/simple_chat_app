import styled from "styled-components";

export const Form = styled.form`
  width: 400px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 0;
  outline: none !important;
  padding: 0.35rem;
  border-radius: 3px;
`;
export const InputWrapper = styled.div`
  padding-bottom: 5px;
  border-radius: 3px;
  background: linear-gradient(to right, #03a9f4, #0d47a1);
  margin-top: 2rem;
`;

export const Button = styled.button`
  padding: 0.35rem 0.75rem;
  border: none;
  margin-top: 2rem;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to right, #03a9f4, #0d47a1);
    color: #fff;
  }
`;
