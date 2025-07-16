const styleTag = document.createElement("style");
styleTag.innerHTML = `
body {
      width: 100%;
      background-color: #000000;
      font-family: 'Ubuntu', sans-serif;
      min-height: 100vh;
      color: #f1f1f1;
      padding-top: 70px;
    }

    .container {
  width: 100%;
  max-width: 1024px;
  margin: auto;
  padding: 4rem;
  background: #000000;
  margin-top: 20px;
    }

    h1, h2 {
      background: linear-gradient(90deg, #03a9f4, #f441a5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }

    h3, h4 {
      color: #F0F0F0;
      text-shadow: 0px 0px 10px #00aaff, 0px 0px 20px #0088ff;
      text-align: center;
    }

    h5, h6 {
      color: #F0F0F0;
      text-align: center;
    }

    a {
      color: #1a88ff;
      text-decoration: none;
    }

    .section {
      width: 100%;
      max-width: 1024px;
      margin: 0 auto 2rem auto;
      background-color: #101010;
      padding: 1.5rem;
      border-radius: 1rem;
      box-shadow: 0 0 14px rgba(0, 153, 255, 0.1725), 0 0 28.75px rgba(0, 153, 255, 0.115);
      box-sizing: border-box;
    }

    .hidden {
      display: none;
    }

    button {
      font-weight: bold;
      border: none;
      padding: 0.6rem 1.6rem;
      border-radius: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 0.5rem;
    }

    #walletButton {
      background: linear-gradient(90deg, #03a9f4, #f441a5);
      color: #fff;
    }

    #walletButton:hover {
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffffff33);
      box-shadow: 0 0 25px #03a9f4, 0 0 35px #f441a5, 0 0 10px #ffffff44;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    #walletButton.disconnect {
      background: linear-gradient(145deg, #ff3333, #cc0000);
    }

    #walletButton.disconnect:hover {
      background: linear-gradient(145deg, #ff3333, #cc0000, #ffffff33);
      box-shadow: 0 0 25px #ff3333, 0 0 35px #cc0000, 0 0 10px #ffffff44;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    #checkIn, #placeBetButton, #copyLink {
      background: linear-gradient(90deg, #03a9f4, #f441a5);
      color: #fff;
    }

    #checkIn:hover, #placeBetButton:hover, #copyLink:hover {
      background: linear-gradient(90deg, #03a9f4, #f441a5, #ffffff33);
      box-shadow: 0 0 25px #03a9f4, 0 0 35px #f441a5, 0 0 10px #ffffff44;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    input {
      width: 90%;
      max-width: 500px;
      padding: 0.75rem;
      background-color: #222;
      color: #fff;
      border: 1px solid #555;
      border-radius: 0.5rem;
    }

    input:focus {
      outline: none;
      border-color: #00bfff;
      box-shadow: 0 0 0 2px rgba(0, 255, 204, 0.3);
    }

    .input-group {
      margin-bottom: 1rem;
      text-align: center;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin-bottom: 0.5rem;
    }

    .loading {
      text-align: center;
      color: #888;
      font-size: 14px;
    }

    @media (max-width: 600px) {
      .container {
        padding: 1rem;
      }
      button, input {
        font-size: 1rem;
      }
    }

    table {
      width: 100%;
      max-width: 900px;
      border-collapse: collapse;
      margin: 20px auto;
      font-size: 18px;
      text-align: left;
    }

    th, td {
      padding: 8px;
      border: 1px solid #ddd;
    }

    th {
      background-color: #000000;
      background-image: linear-gradient(90deg, #03a9f4, #f441a5);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }

.pagination {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.pagination button {
  background-color: #f2f2f2;
  border: 1px solid #333333;
  color: #333;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pagination button:hover {
  background: linear-gradient(90deg, #03a9f4, #f441a5);
  color: white;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 12px rgba(244, 65, 165, 0.4);
  border-color: transparent;
}

.pagination button.active {
  background: linear-gradient(135deg, #9333ea, #7e22ce);
  color: white;
  font-weight: bold;
  border-color: transparent;
  box-shadow: 0 4px 8px rgba(147, 51, 234, 0.5);
}

.pagination button:disabled {
  background-color: #eee;
  color: #aaa;
  cursor: not-allowed;
  border: 1px solid #ddd;
  box-shadow: none;
  transform: none;
}

    .lottery-balls {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
    }
    
    .lottery-ball {
    width: 40px;
    height: 40px;
    background: radial-gradient(circle at 30% 30%, #03a9f4, #f441a5);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: white;
    box-shadow: 0 8px 15px rgba(0, 183, 255, 0.6), 0 4px 10px rgba(0, 0, 0, 0.4);
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
    border: 1px solid white;
        }

        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .lottery-ball:nth-child(1) { animation: bounce 1s infinite 0.1s; }
        .lottery-ball:nth-child(2) { animation: bounce 1s infinite 0.2s; }
        .lottery-ball:nth-child(3) { animation: bounce 1s infinite 0.3s; }
        .lottery-ball:nth-child(4) { animation: bounce 1s infinite 0.4s; }

    footer {
        text-align: center;
        margin-top: 20px;
        padding: 10px;
        background: #000000;
        color: #f0f0f0;
        font-size: 12px;
    }

    .social-icons {
        margin-bottom: 10px;
    }

    .social-icons a {
    background: #222222;
    border-radius: 50px;
    padding: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 15px;
    margin: 0 5px;
    text-decoration: none;
    transition: transform 0.5s ease, text-shadow 0.5s ease, box-shadow 0.5s ease;
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.6);
    backdrop-filter: blur(10px);
}

.social-icons a:hover {
    color: #1a88ff;
    text-shadow: 0 0 10px #1a88ff, 0 0 20px #1a88ff, 0 0 30px #1a88ff;
    box-shadow: 0 0 20px rgba(0, 0, 255, 1), 0 0 30px rgba(0, 0, 255, 0.8);
    transform: rotate(360deg);
}

    .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px);
    padding: 10px 20px;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 1500px;
    z-index: 1000;
    height: 60px;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-img {
    height: 40px;
    margin-right: 10px;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
}

.nav-links a:hover {
    color: #00ff66;
}

.hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}

.hamburger:hover {
    transform: rotate(90deg) scale(1.2);
    color: #00ff66;
}

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        background: #222;
        width: 200px;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(255, 255, 255, 0.2);
        transition: transform 0.3s ease-in-out;
    }

    .nav-links.show {
        display: flex;
        flex-direction: column;
        transform: translateX(0);
        animation: slideIn 0.3s ease-in-out;
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

        .utcClock {
      font-size: 14px;
      color: #ffb833;
      text-align: center;

          @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }

  p[style*="animation: blink"] {
    animation: blink 2s infinite;
  }  
`;
document.head.appendChild(styleTag);
