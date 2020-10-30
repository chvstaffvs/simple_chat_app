import styled from "styled-components";

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 3px;
  height: 1.5rem;
  background-color: ${({ darkMode }) => (darkMode ? "#222" : "#fff")};
  color: ${({ darkMode }) => (!darkMode ? "#222" : "#fff")};
  padding: 2px 6px;
  border: ${({ darkMode }) => (!darkMode ? " 2px solid #222" : "0")};
`;
