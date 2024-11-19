import React from 'react';
import logo from './logo.svg';
import './App.css';
import {liff} from "@line/liff";

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const liffId = urlParams.get('liffId') as string;

  const openLiff = async (url: string) => {
    console.log(liffId)
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
        <button className="open-button" onClick={async () => {
          await openLiff("https://liff.line.me/2005519827-Kpj8doYd");
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
        <br/>
        <a
            className="App-link"
            href={`https://checkout.stripe.com/c/pay/cs_test_a1UvHAgSAs2hJzs5oE0IZeKWSewpIWIUI8xefLWBWTfOuKSxqqoorRyz5K#fidkdWxOYHwnPyd1blpxYHZxWjA0SkZyc19OYHJpcENjTURWVHNuZ3M2V0txYGdIdnRTdWRfUmAzY0hJaUxWanRzd2tNcUhfX1U0N3BWaUpPNW9sNmxnSGRtbTNWaHJUU2FWd3ZudFw9QVFyNTVMPXxQS3JgdScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl`}
            target="_blank"
            rel="noopener noreferrer"
        >
          Open STRIPE
        </a>
      </header>
    </div>
  );
}

export default App;
