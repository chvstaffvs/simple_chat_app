import React, { useState } from "react";
import DarkButton from "./components/DarkButton";
import Routes from "./routes";
import GlobalStyle from "./styles";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <GlobalStyle darkMode={dark} />
      <DarkButton onClick={() => setDark(!dark)} darkMode={dark} />
      <Routes />
    </>
  );
}

export default App;
