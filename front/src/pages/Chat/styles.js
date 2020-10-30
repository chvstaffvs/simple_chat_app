import styled from "styled-components";

export const Section = styled.section`
  width: 37.5rem;
  height: 31.25rem;
  display: flex;
  flex-direction: column;
`;

export const ChatContainer = styled.div`
  height: 88%;
  position: relative;
`;

export const ChatScroll = styled.div`
  position: absolute;
  width: 10px;
  height: 100%;
  right: 0;
  top: 0;
  border-radius: 7px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const ChatScrollThumb = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 7px;
`;

export const ChatDiv = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MessageWrapper = styled.div`
  padding: 0.35rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: ${({ user }) => (user ? "flex-end" : "flex-start")};
  border: 1px solid #4fc3f7;
  border-radius: 10px;
  width: 40%;
  margin-bottom: 1rem;
`;

export const MessageOwner = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${({ color }) => color};
  margin-bottom: 0.4rem;
`;

export const Message = styled.span`
  font-size: 0.9rem;
  word-wrap: break-word;
  max-width: 90%;
`;

export const InputMessage = styled.input`
  border: none;
  width: 91%;
  margin-left: 1.5rem;
  font-size: 1rem;
  align-self: center;
  padding: 0.35rem;
  outline: none;
  border-radius: 40px 0 0 40px;
`;

export const SubmitButton = styled.button`
  border: 1px solid #ddd;
  background-color: #eee;
  color: #bbb;
  height: 100%;
  width: 6%;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
  &:active {
    background-color: #ccc;
  }
`;

export const SubmitWrapper = styled.form`
  display: flex;
  margin: 1rem;
  height: 2rem;
  border-radius: 40px;
  border: 1px solid #ddd;
  background-color: #fff;
`;

export const AlwaysBottom = styled.div`
  height: 0;
  width: 0;
`;
