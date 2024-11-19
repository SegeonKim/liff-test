import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {liff} from "@line/liff";

function App() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const liffId = urlParams.get('liffId') as string;
  const [stripePaymentUrl, setStripePaymentUrl] = useState("");

  const openLiff = async (url: string) => {
    console.log(liffId)
    await liff.init({
      liffId: liffId,
    });
    await liff.subWindow.open({url: url});
  };

  const createStripeCheckout = async () => {
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sk_test_51OCwvZKewluFfHAS8RbHZzah0P3qPnLKtC8i7x2b34CNZjIDlYfjhpVE4YB9nSWKNndFOJZOYYJ74f1iiK9QzvCu00tDwXSacE',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'success_url': encodeURI('https://dosi.world/payment-callback/success'),
        'cancel_url': encodeURI('https://dosi.world/payment-callback/cancel'),
        'line_items[0][price_data][currency]': 'krw',
        'line_items[0][price_data][product_data][name]': 'Checkout Test',
        'line_items[0][price_data][product_data][images][0]': 'https://obs.line-scdn.net/0hoPTqjcuxMH9pCCKFTQZPKDFbNgQbbzI3BjY0RhtNcB0fOTJVCS8nS09VKTAybSp6CSh8SS5jJS4ieTFWDQV-eCpoMhohOT5BMAV_SilvKjMiajx5Izw5YhBSZjM0/w1200',
        'line_items[0][price_data][unit_amount]': '1100',
        'line_items[0][quantity]': '1',
        'mode': 'payment',
      }),
    });

    const session = await response.json();
    console.log(session);
    setStripePaymentUrl(session.url)

    window.open(session.url, '_blank');
  }

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
        <button className="open-button" onClick={async () => {
          await openLiff("https://liff.line.me/2005519827-pArMwjaw")
        }}>
          Open Liff - Compact
        </button>
        <br/>
        <button className="open-button" onClick={async () => {
          await createStripeCheckout();
        }}>
          Stripe Checkout
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
            href={`https://uit-bluefruit.line-apps-beta.com/ko-KR/1st_sale/sales/82650/`}
            target="_blank"
            rel="noopener noreferrer"
        >
          DOSI Test
        </a>

      </header>
    </div>
  );
}

export default App;
