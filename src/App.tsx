import React from 'react';
import logo from './logo.svg';
import './App.css';
import {liff} from "@line/liff";
import {useParams} from "react-router-dom";

function App() {
  const params = useParams();
  const liffId = params.liffId as string;

  const openLiff = async (url: string) => {
    await liff.init({
      liffId: liffId,
    });
    await liff.subWindow.open({url: url});
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <br/>
        <button className="open-button" onClick={() => {
          openLiff("https://liff.line.me/2005519827-Kpj8doYd")
        }}>
          Open Liff - Tall
        </button>
        <br/>
        <button className="open-button" onClick={() => {
          openLiff("https://liff.line.me/2005519827-pArMwjaw")
        }}>
          Open Liff - Compact
        </button>
        <br/>
        <a
            className="App-link"
            href="https://liff.line.me/2005519827-pArMwjaw"
            target="_blank"
            rel="noopener noreferrer"
        >
          Open Liff - no lib
        </a>
        <br/>
        <a
            className="App-link"
            href={`https://kaleidoscopic-mermaid-dbb2f7.netlify.app?liffId=${liffId}`}
            target="_blank"
            rel="noopener noreferrer"
        >
          Open IAB
        </a>
      </header>
    </div>
  );
}

export default App;
