import React from 'react';
import ReactDOM from 'react-dom/client';
import Logo from './assets/logo.png';
import './index.css';
import Button from "./Button/Button";
import DiscordLogo from './assets/discord.svg';
import TwitterLogo from './assets/twitter.svg';
import YouTubeLogo from './assets/youtube.svg';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <img src={Logo} className="logo" alt="logo" />
      <h1 className="appName typography">Vanilla</h1>
      <p className="typography subtitle">Your new way to chat. <br/>Vanilla is your new drop-in replacement for Discord that focuses on privacy, simplicity and speed. <br/>Coming soon.</p>
      <div className="buttonContainer">
          <Button href="https://discord.gg/mXZZzSHGnR" target="_blank">
              <img src={DiscordLogo} alt="Discord" />
              Discord
          </Button>
          <Button href="https://twitter.com/@VanillaChat0" target="_blank">
              <img src={TwitterLogo} alt="Twitter" />
              Twitter
          </Button>
          <Button href="https://youtube.com/@VanillaChat" target="_blank">
              <img src={YouTubeLogo} alt="YouTube" />
              YouTube
          </Button>
      </div>
  </React.StrictMode>,
)
