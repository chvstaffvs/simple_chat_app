import React, { useCallback, useEffect, useRef, useState } from "react";
import { BorderWrapper } from "../../styles/styles";
import {
  AlwaysBottom,
  ChatContainer,
  ChatDiv,
  ChatScroll,
  ChatScrollThumb,
  InputMessage,
  Message,
  MessageOwner,
  MessageWrapper,
  Section,
  SubmitButton,
  SubmitWrapper,
} from "./styles";
import { FaPaperPlane } from "react-icons/fa";
import { useParams } from "react-router-dom";
import {
  preLoadMessages,
  receiveMessages,
  sendMessage,
} from "../../services/api";
import { w3cwebsocket as W3CWebSocket } from "websocket";

function End() {
  const elementRef = useRef();
  useEffect(() => elementRef.current.scrollIntoView());

  return <AlwaysBottom ref={elementRef} />;
}

function ChatContainerScroll({ children }) {
  const [hover, setHover] = useState(0);
  const [scrollBoxTop, setScrollBoxTop] = useState(0);
  const scrollBoxHeight = 40;

  const showScrollBar = useCallback(() => setHover(1), []);

  const hideScrollBar = useCallback(() => setHover(0), []);
  const handleScroll = useCallback(() => {
    if (!scrollRef) {
      return;
    }
    const scrollHostElement = scrollRef.current;
    const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;

    let newTop =
      (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
    newTop = Math.min(newTop, offsetHeight, scrollBoxHeight);
    setScrollBoxTop(newTop);
  }, [scrollBoxHeight]);

  const scrollRef = useRef();

  useEffect(() => {
    const scrollHostElement = scrollRef.current;
    const { clientHeight, scrollHeight } = scrollHostElement;

    const scrollBoxPercentage = clientHeight / scrollHeight;

    scrollHostElement.addEventListener("scroll", handleScroll, true);

    return function cleanup() {
      scrollHostElement.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <ChatContainer ref={scrollRef}>
      {children}
      <ChatScroll
        onMouseOver={showScrollBar}
        onMouseOut={hideScrollBar}
        style={{ opacity: hover }}
      ></ChatScroll>
    </ChatContainer>
  );
}

const client = new W3CWebSocket("ws://192.168.1.5:5000/ws");

function Chat() {
  const { username } = useParams();
  const [messages, setMessages] = useState([]);

  client.onmessage = (message) => {
    setMessages(receiveMessages(message));
  };

  client.onopen = () => {
    console.log("connected");
  };

  return (
    <BorderWrapper>
      <Section>
        <ChatContainerScroll>
          <ChatDiv>
            {messages.map(({ message, owner, color }) => {
              let user = owner === username;
              return (
                <MessageWrapper user={user}>
                  <MessageOwner color={color}>{owner}</MessageOwner>
                  <Message className="text">{message}</Message>
                </MessageWrapper>
              );
            })}
            <End />
          </ChatDiv>
        </ChatContainerScroll>
        <SubmitWrapper
          onSubmit={(event) => {
            event.preventDefault();
            console.log(client.readyState);
            if (client.readyState !== client.OPEN) return;
            let message = event.target.message.value;
            event.target.message.value = "";
            sendMessage(username, message, client);
          }}
        >
          <InputMessage required name="message" />
          <SubmitButton>
            <FaPaperPlane />
          </SubmitButton>
        </SubmitWrapper>
      </Section>
    </BorderWrapper>
  );
}

export default Chat;
