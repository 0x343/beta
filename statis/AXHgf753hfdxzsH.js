document.getElementById("AXHgf753hfdxzsH").innerHTML = `
<div class="section">
      <center><button id="walletButton">Connect Wallet</button></center>
      <small><p id="accountInfo" class="info-text"></p>
      <p id="ethBalance" class="info-text">Loading...</p>
      <p id="tokenBalance" class="info-text"></p></small>
    </div>

    <div class="section hidden">
  <h2>Task Mandatory</h2>

  <div class="task" data-task="task1">
    <p>1. Follow Twitter</p>
    <button onclick="openLinkThenVerify(this, 'https://twitter.com/youraccount')">Join</button>
    <button style="display:none;" onclick="showCheckbox(this)">Verification</button>
    <input type="checkbox" style="display:none;" onchange="completeTask(this)">
    <img src="img/success.svg" class="checkmark" style="display:none;" alt="Done" width="20">
  </div>

  <div class="task" data-task="task2">
    <p>2. RT, Like & Comment 'GM'</p>
    <button onclick="openLinkThenVerify(this, 'https://twitter.com/youraccount/status/1234567890')">Join</button>
    <button style="display:none;" onclick="showCheckbox(this)">Verification</button>
    <input type="checkbox" style="display:none;" onchange="completeTask(this)">
    <img src="img/success.svg" class="checkmark" style="display:none;" alt="Done" width="20">
  </div>

  <div class="task" data-task="task3">
    <p>3. Join Discord Server</p>
    <button onclick="openLinkThenVerify(this, 'https://discord.gg/yourinvite')">Join</button>
    <button style="display:none;" onclick="showCheckbox(this)">Verification</button>
    <input type="checkbox" style="display:none;" onchange="completeTask(this)">
    <img src="img/success.svg" class="checkmark" style="display:none;" alt="Done" width="20">
  </div>

  <div class="task" data-task="task4">
    <p>4. Join Telegram Channel</p>
    <button onclick="openLinkThenVerify(this, 'https://t.me/yourchannel')">Join</button>
    <button style="display:none;" onclick="showCheckbox(this)">Verification</button>
    <input type="checkbox" style="display:none;" onchange="completeTask(this)">
    <img src="img/success.svg" class="checkmark" style="display:none;" alt="Done" width="20">
  </div>

  <div class="task" data-task="task5">
    <p>5. Join Telegram Group</p>
    <button onclick="openLinkThenVerify(this, 'https://t.me/yourgroup')">Join</button>
    <button style="display:none;" onclick="showCheckbox(this)">Verification</button>
    <input type="checkbox" style="display:none;" onchange="completeTask(this)">
    <img src="img/success.svg" class="checkmark" style="display:none;" alt="Done" width="20">
  </div>

  <div class="task" data-task="task6">
    <p>6. Follow Facebook & Share Post</p>
    <button onclick="openLinkThenVerify(this, 'https://facebook.com/yourpage')">Join</button>
    <button style="display:none;" onclick="showCheckbox(this)">Verification</button>
    <input type="checkbox" style="display:none;" onchange="completeTask(this)">
    <img src="img/success.svg" class="checkmark" style="display:none;" alt="Done" width="20">
  </div>
    </div>
  
    <div class="section hidden">
      <h2>Daily Faucet Claim</h2>
      <h5>Faucet starts every <span style="color: #ffb833;">00:00 UTC</span></h5>
       <h5>Time: <span class="utcClock"></span></h5><br>
      <center><button id="checkIn">Faucet 1 Lpoint</button></center>
    <small><p id="checkInStatus" class="info-text"></p></small>
      <h3>Your Faucet History</h3>
    <small><ul id="checkInHistory" class="info-text"></ul></small>
<div class="pagination" id="checkInPagination"></div>
    </div>

<div class="section hidden">
  <h2>Place a Bet</h2>
  <h5>Place a Bet starts every <span style="color: #ffb833;">00:00 UTC</span></h5>
  <h5>Time: <span class="utcClock"></span></h5><br>
  <div class="input-group">
    <label for="betNumber">Betting Number</label><br>
    <br><input id="betNumber" type="number" min="0" max="9999" placeholder="Enter: 2D, 3D, or 4D">
  </div>

  <div class="input-group">
    <label for="betTimes">Multiplication (1× - 5×)<</label><br>
    <br><input id="betTimes" type="number" min="1" max="5" step="1" placeholder="1 - 5">
  </div>

  <div class="input-group">
    <label for="payoutAmount">Reward Amount (Fixed 10 Points)</label><br>
    <br><input id="payoutAmount" type="number" min="10" max="10" placeholder="10" value="10" readonly>
  </div>

  <div class="input-group">
    <label><small>Total Cost</small></label><br>
    <br><small id="betCost" style="color: yellow;">-</small>
  </div>

  <center><button id="placeBetButton" onclick="placeBet()">Submit Ticket</button></center>

  <div id="betStatus" style="margin-top: 15px; text-align: center;"></div>
</div>
    
<div class="section hidden">
  <h2>Your Ticket History</h2>
  <div id="userBetHistoryContainer" style="max-height: 400px; overflow-y: auto;">
  <small><ul id="userBetHistory" class="info-text"></ul></small>
  </div>
</div>

    <div class="section hidden">
      <h2>Global Ticket History</h2>
      <div id="globalBetHistoryContainer" style="max-height: 400px; overflow-y: auto;">
      <small><ul id="globalBetHistory" class="info-text"></ul></small>
      </div>
    </div>

    <div class="section hidden">
      <h2>Referral</h2>
      <div class="input-group">
      <small><p id="referralLink" class="info-text">Your Referral Link: Loading...</p></small>
        <center><button id="copyLink">Copy Link</button></center>
      <small><p id="refereeCount" class="info-text">Invited Friends: Loading...</p></small>
      <small><p id="referralReward" class="info-text">Reward: Loading...</p></small>
      </div>
      <br><h4>Your Invited Friends List</h4><br>
    <small><ul id="refereeList" class="info-text"></ul></small>
<div id="refereePagination" class="pagination"></div> 
    </div>

    <div id="prizes" class="section hidden">
      <center><h2>4D USDT Reward Payout</h2></center>
      <table>
        <tr>
          <th>Bet Type</th>
          <th>Const</th>
          <th>USDT Mainnet Reward</th>
        </tr>
        <tr>
          <td style="color: orange; font-weight: bold;">4D</td>
          <td style="color: #00ca09; font-weight: bold;">1× / 5×</td>
          <td style="color: #1a88ff; font-weight: bold;">0.75 USDT</td>
        </tr>
        <tr>
          <td style="color: orange; font-weight: bold;">3D</td>
          <td style="color: #00ca09; font-weight: bold;">1× / 5×</td>
          <td style="color: #1a88ff; font-weight: bold;">0.5 USDT</td>
        </tr>
        <tr>
          <td style="color: orange; font-weight: bold;">2D</td>
          <td style="color: #00ca09; font-weight: bold;">1× / 5×</td>
          <td style="color: #1a88ff; font-weight: bold;">0.25 USDT</td>
        </tr>
      </table>
      <br><p style="color: red; text-align: center; font-size: 12px; font-weight: bold; animation: blink 2s infinite; opacity: 1;">
  Note: Prizes can be claimed after accumulation of 3× wins 2D 3D or 4D.
      </p>
    </div>

        <footer>
    <div class="social-icons">
        <a href="https://x.com/FaylottoXyz" target="_blank"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://t.me/FaylottoXyz" target="_blank"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://t.me/Faylotto" target="_blank"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://discord.gg/6uMYTdCZwJ" target="_blank"><i class="fa-brands fa-discord"></i></a>
        <a href="https://facebook.com/Faylotto" target="_blank"><i class="fa-brands fa-facebook"></i></a>
    </div>
    <p>
  © Powered By Faylotto.
  <span>
    <a href="https://docs.faylotto.xyz/policy/AllRightsReserved" style="color: #007bff; text-decoration: none;" target="_blank">
      2025 All rights reserved.
    </a>
  </span>
  Play responsibly.
    </p>
        </footer>
  </div>
`;
