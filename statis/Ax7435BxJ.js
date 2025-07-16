const contractAddress = "0x1587c1a6e1a23F6A6b284d777714756706341e01";
    const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"CheckIn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"dayUTC","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"CheckInLogCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"number","type":"string"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"PlaceBet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"string","name":"referralId","type":"string"}],"name":"ReferralIdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":true,"internalType":"address","name":"referee","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ReferralReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"referee","type":"address"},{"indexed":true,"internalType":"address","name":"referrer","type":"address"},{"indexed":false,"internalType":"string","name":"referralId","type":"string"}],"name":"Referred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"BET_COST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BET_REWARD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"POINTS_PER_CHECKIN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REFERRAL_REWARD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_lastBetDayUTC","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"_lastCheckIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"betHistory","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"cost","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkIn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"checkInHistory","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"dayUTC","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"a","type":"string"},{"internalType":"string","name":"b","type":"string"}],"name":"compareStrings","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getBet","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"cost","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct HKBetaTestnet.Bet","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBetHistoryLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getCheckInCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getCheckInLog","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"dayUTC","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"}],"internalType":"struct HKBetaTestnet.CheckInLog","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"getRefereeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"referrer","type":"address"}],"name":"getReferees","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getUserBet","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"cost","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct HKBetaTestnet.Bet","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserBetCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_number","type":"string"},{"internalType":"uint256","name":"_times","type":"uint256"},{"internalType":"uint256","name":"_payoutAmount","type":"uint256"}],"name":"placeBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"referees","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralIdOf","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralInfo","outputs":[{"internalType":"string","name":"referralId","type":"string"},{"internalType":"string","name":"referrerId","type":"string"},{"internalType":"address","name":"referrer","type":"address"},{"internalType":"uint256","name":"referralBalance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referralRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referredBy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"referralId","type":"string"}],"name":"setReferralById","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"referralId","type":"string"}],"name":"setReferralId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"str","type":"string"},{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"substring","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transfer","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userBets","outputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"cost","type":"uint256"},{"internalType":"uint256","name":"reward","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"userByReferralId","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
    const costPerBet = 1;
    
    let web3;
    let contract;
    let userAccount;
    let globalHistoryOffset = 0;
    const globalHistoryBatchSize = 15;
    let totalGlobalCount = 0;
    let isFetching = false;
    let userHistoryOffset = 0;
    const userHistoryBatchSize = 10;
    let totalUserCount = 0;
    let isUserFetching = false;
    let isSettingReferral = false;
    let isHandlingReferral = false;
    let referrerIdFromURL = null;
    let checkInHistoryOffset = 0;
    const checkInBatchSize = 10;
    let totalCheckInCount = 0;

    const cache = {
      decimals: null,
      symbol: null,
      betEvents: {},
      checkInEvents: {},
    };

    const CONNECTION_VALIDITY = 7 * 24 * 60 * 60 * 1000;
    const BASE_URL = "https://beta.faylotto.xyz";

    const generateUID = () => 'uid_' + Math.random().toString(36).substr(2, 9);

    const setLoading = (elementId, isLoading) => {
      const element = document.getElementById(elementId);
      if (isLoading) {
        element.innerHTML = '<li class="loading">Loading...</li>';
      } else if (element.innerHTML.includes('class="loading"')) {
        element.innerHTML = '';
      }
    };

    const toggleSectionsVisibility = (isConnected) => {
      document.querySelectorAll('.section').forEach((section, index) => {
        if (index === 0) return;
        section.classList.toggle('hidden', !isConnected);
      });
    };

    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };

    const initWeb3 = async (forceConnect = false, retries = 3, delay = 3000) => {
  if (!window.ethereum) {
    alert("MetaMask is not installed. Please install MetaMask to use this DApp.");
    return false;
  }

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      console.log(`Attempting to initialize Web3 (attempt ${attempt}/${retries})`);
      web3 = new Web3(window.ethereum);

      const isMetaMaskLocked = await window.ethereum.request({ method: "eth_accounts" });
      if (isMetaMaskLocked.length === 0 && forceConnect) {
        console.log("MetaMask is locked or no accounts available");
      }

      const chainId = await web3.eth.getChainId();
      const sepoliaBaseTestnetChainId = 84532;
      if (chainId !== sepoliaBaseTestnetChainId) {
        console.log(`Switching to Base Sepolia Testnet (chainId: ${sepoliaBaseTestnetChainId})`);
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: `0x${sepoliaBaseTestnetChainId.toString(16)}` }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            console.log("Adding Base Sepolia Testnet to MetaMask");
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [{
                chainId: `0x${sepoliaBaseTestnetChainId.toString(16)}`,
                chainName: "Base Sepolia Testnet",
                rpcUrls: ["https://sepolia.base.org"],
                nativeCurrency: {
                  name: "ETH",
                  symbol: "ETH",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://sepolia.basescan.org"],
              }],
            });
          } else {
            console.error("Error switching chain:", switchError);
            throw switchError;
          }
        }
      }

      if (forceConnect || checkStoredConnection()) {
        try {
          console.log("Requesting MetaMask accounts");
          const accounts = await Promise.race([
            window.ethereum.request({ method: "eth_requestAccounts" }),
            new Promise((_, reject) => setTimeout(() => reject(new Error("MetaMask request timeout")), 10000)),
          ]);
          if (accounts.length === 0) {
            alert("No accounts found. Please unlock MetaMask or connect an account.");
            return false;
          }
          userAccount = accounts[0];
          contract = new web3.eth.Contract(contractABI, contractAddress);
          updateWalletUI(true);
          storeConnection(userAccount);
          await handleReferralFromURL();
          await loadCriticalData();
          setTimeout(() => {
            loadCheckInHistory();
            loadUserBetHistory();
            loadGlobalBetHistory();
            loadTokenHolders();
          }, 100);
          console.log(`Wallet connected successfully: ${userAccount}`);
          return true;
        } catch (error) {
          console.error(`Error requesting accounts (attempt ${attempt}/${retries}):`, error);
          if (error.code === 4001) {
            alert("Connection rejected. Please approve the connection in MetaMask.");
            return false;
          } else if (error.code === -32002) {
            alert("MetaMask request already pending. Please check MetaMask and try again.");
            return false;
          } else if (error.message.includes("MetaMask request timeout")) {
            console.log("MetaMask request timed out");
            if (attempt === retries) {
              alert("MetaMask request timed out. Please ensure MetaMask is responsive and try again.");
              updateWalletUI(false);
              return false;
            }
          } else {
            if (attempt === retries) {
              alert(`Failed to connect to MetaMask after ${retries} attempts. Error: ${error.message}. Please ensure MetaMask is unlocked and Base Sepolia is selected.`);
              updateWalletUI(false);
              return false;
            }
          }
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      } else {
        console.log("No stored connection or forceConnect not requested");
        return false;
      }
    } catch (error) {
      console.error(`Error initializing Web3 (attempt ${attempt}/${retries}):`, error);
      if (attempt === retries) {
        alert(`Failed to initialize Web3 after ${retries} attempts. Error: ${error.message}. Please check your MetaMask installation and network connection.`);
        updateWalletUI(false);
        return false;
      }
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};
    const setAutomaticReferralId = async () => {
  if (!userAccount) return;

  try {
    const currentReferralId = await contract.methods.referralIdOf(userAccount).call();

    const hasNoReferralId = !currentReferralId || currentReferralId === "0" || currentReferralId === "0x0" || currentReferralId === "0x0000000000000000000000000000000000000000";

    if (hasNoReferralId) {
      const newReferralId = generateUID();

      let tx;
      try {
        const priorityFee = await web3.eth.getMaxPriorityFeePerGas();
        const latestBlock = await web3.eth.getBlock("pending");
        const baseFee = latestBlock.baseFeePerGas;
        const maxFeePerGas = web3.utils.toBN(baseFee).add(web3.utils.toBN(priorityFee).muln(2));

        console.log("Sending TX with EIP-1559:", {
          baseFee: web3.utils.fromWei(baseFee, 'gwei'),
          priorityFee: web3.utils.fromWei(priorityFee, 'gwei'),
          maxFeePerGas: web3.utils.fromWei(maxFeePerGas, 'gwei')
        });

        tx = await contract.methods.setReferralId(newReferralId).send({
          from: userAccount,
          maxFeePerGas,
          maxPriorityFeePerGas: priorityFee,
          gas: 100000
        });
      } catch (eipError) {
        console.warn("EIP-1559 failed, fallback to gasPrice:", eipError.message);

        const gasPrice = await web3.eth.getGasPrice();

        tx = await contract.methods.setReferralId(newReferralId).send({
          from: userAccount,
          gasPrice,
          gas: 100000
        });
      }

      console.log("Referral ID successfully set:", tx);
    } else {
      console.log("User already has a referral ID:", currentReferralId);
    }
  } catch (error) {
    console.error("Failed to set referral ID:", error);
  }
};

    const handleReferralFromURL = async () => {
  if (!userAccount) return;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const referrerId = urlParams.get("uid");

    if (referrerId) {
      const hasReferrer = await contract.methods.referredBy(userAccount).call();

      if (hasReferrer === "0x0000000000000000000000000000000000000000") {
        let tx;

        try {
          const priorityFee = await web3.eth.getMaxPriorityFeePerGas();
          const latestBlock = await web3.eth.getBlock('pending');
          const baseFee = latestBlock.baseFeePerGas;
          const maxFeePerGas = web3.utils.toBN(baseFee).add(web3.utils.toBN(priorityFee).muln(2));

          console.log("Sending referral TX with EIP-1559 gas...");

          tx = await contract.methods.setReferralById(referrerId).send({
            from: userAccount,
            maxFeePerGas,
            maxPriorityFeePerGas: priorityFee,
            gas: 150000
          });
        } catch (eipError) {
          console.warn("EIP-1559 failed, falling back to legacy gasPrice:", eipError.message);

          const gasPrice = await web3.eth.getGasPrice();

          tx = await contract.methods.setReferralById(referrerId).send({
            from: userAccount,
            gasPrice,
            gas: 150000
          });
        }

        console.log("Referral TX sent successfully:", tx);
      } else {
        console.log("User already has a referrer:", hasReferrer);
      }
    }
  } catch (error) {
    console.error("Error handling referral:", error);
  }
};

    const checkStoredConnection = () => {
      const connection = localStorage.getItem("walletConnection");
      if (!connection) return false;
      try {
        const { account, timestamp } = JSON.parse(connection);
        if (Date.now() - timestamp < CONNECTION_VALIDITY && account) {
          userAccount = account;
          return true;
        }
        localStorage.removeItem("walletConnection");
        return false;
      } catch (error) {
        console.error("Error parsing stored connection:", error);
        localStorage.removeItem("walletConnection");
        return false;
      }
    };

    const storeConnection = (account) => {
      localStorage.setItem("walletConnection", JSON.stringify({
        account,
        timestamp: Date.now(),
      }));
    };

    const disconnectWallet = () => {
      userAccount = null;
      localStorage.removeItem("walletConnection");
      cache.betEvents = {};
      cache.checkInEvents = {};
      updateWalletUI(false);
      toggleSectionsVisibility(false);
      document.getElementById("accountInfo").innerText = "Wallet disconnected";
      document.getElementById("ethBalance").innerText = "Balance: Connect wallet";
      document.getElementById("tokenBalance").innerText = "Balance: Connect wallet";
      document.getElementById("referralLink").innerText = "Your Referral Link: Connect wallet";
      document.getElementById("refereeCount").innerText = "Invited Friends: Connect wallet";
      document.getElementById("referralReward").innerText = "Reward: Connect wallet";
      ["checkInHistory", "userBetHistory", "globalBetHistory", "refereeList"].forEach(id => {
        document.getElementById(id).innerHTML = "";
      });
    };

    const updateWalletUI = (isConnected) => {
      const walletButton = document.getElementById("walletButton");
      walletButton.innerText = isConnected ? "Disconnect Wallet" : "Connect Wallet";
      walletButton.classList.toggle("disconnect", isConnected);
      document.getElementById("accountInfo").innerHTML = isConnected ? `
        <span style="font-size: 13px; color: #bd80ff;">
          <small>Connected: <a href="https://sepolia.basescan.org/address/${userAccount}" target="_blank">
            ${userAccount.slice(0, 21)}${userAccount.slice(-21)}
          </a></small>
        </span>
      ` : "";
      toggleSectionsVisibility(isConnected);
    };

    const fetchBetEvents = async (user = null, fromBlock = null) => {
      try {
        const latestBlock = await web3.eth.getBlockNumber();
        const startBlock = fromBlock || Math.max(latestBlock - 10000, 0);
        const events = await contract.getPastEvents("PlaceBet", {
          filter: user ? { user } : {},
          fromBlock: startBlock,
          toBlock: "latest",
        });
        const eventMap = {};
        events.forEach((event, index) => {
          eventMap[index] = {
            txHash: event.transactionHash,
            blockNumber: event.blockNumber,
            timestamp: event.returnValues.timestamp,
            user: event.returnValues.user,
            number: event.returnValues.number,
            cost: event.returnValues.cost,
            reward: event.returnValues.reward,
          };
        });
        cache.betEvents[user || "global"] = eventMap;
        return eventMap;
      } catch (error) {
        console.error("Error fetching PlaceBet events:", error);
        return {};
      }
    };

    const fetchCheckInEvents = async (user, fromBlock = null) => {
      try {
        const latestBlock = await web3.eth.getBlockNumber();
        const startBlock = fromBlock || Math.max(latestBlock - 10000, 0);
        const events = await contract.getPastEvents("CheckInLogCreated", {
          filter: { user },
          fromBlock: startBlock,
          toBlock: "latest",
        });
        const eventMap = {};
        events.forEach((event, index) => {
          eventMap[index] = {
            user: event.returnValues.user,
            dayUTC: event.returnValues.dayUTC,
            reward: event.returnValues.reward,
            timestamp: event.returnValues.timestamp,
          };
        });
        cache.checkInEvents[user] = eventMap;
        return eventMap;
      } catch (error) {
        console.error("Error fetching CheckInLogCreated events:", error);
        return {};
      }
    };

    const loadCriticalData = async (retries = 5, delay = 2000) => {
      if (!userAccount) return;
      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          console.log(`Loading critical data (attempt ${attempt}/${retries})`);
          if (!cache.decimals) {
            cache.decimals = await contract.methods.decimals().call();
            cache.symbol = await contract.methods.symbol().call();
            localStorage.setItem("contractDecimals", cache.decimals);
            localStorage.setItem("contractSymbol", cache.symbol);
          } else {
            cache.decimals = cache.decimals || localStorage.getItem("contractDecimals");
            cache.symbol = cache.symbol || localStorage.getItem("contractSymbol");
          }

          const [ethBalance, balance, userReferralId, refereeCount, referralReward] = await Promise.all([
            web3.eth.getBalance(userAccount),
            contract.methods.balanceOf(userAccount).call(),
            contract.methods.referralIdOf(userAccount).call(),
            contract.methods.getRefereeCount(userAccount).call(),
            contract.methods.referralRewards(userAccount).call(),
          ]);

          document.getElementById("ethBalance").innerHTML = `<small>Balance: <span style="color: #00bfff;">${web3.utils.fromWei(ethBalance, 'ether')}</span> ETH</small>`;
          document.getElementById("tokenBalance").innerHTML = `<small>Point:</small> <span style="color: #32cd32;">${(balance / 10 ** cache.decimals).toFixed(2)}<span> ${cache.symbol}`;
          document.getElementById("referralLink").innerHTML = `<small>Your Referral Link:<br><span style="color: #ffa500;">${BASE_URL}?uid=${userReferralId}</span></small>`;
          document.getElementById("refereeCount").innerHTML = `<small>Invited Friends:</small> <span style="color: #bd80ff;">${refereeCount}</span>`;
          document.getElementById("referralReward").innerHTML = `<small>Reward:</small> <span style="color: #32cd32;">${(referralReward / 10 ** cache.decimals).toFixed(2)}</span><small> Points</small>`;

          await loadRefereeList();
          console.log("Critical data loaded successfully");
          return;
        } catch (error) {
          console.error(`Error loading critical data (attempt ${attempt}/${retries}):`, error);
          if (attempt < retries) {
            await new Promise(resolve => setTimeout(resolve, delay));
          } else {
            ["ethBalance", "tokenBalance", "referralLink", "refereeCount", "referralReward"].forEach(id => {
              document.getElementById(id).innerHTML = `<small>Error: Failed to load data</small>`;
            });
            alert("Failed to load wallet data after multiple attempts. Please try again later.");
          }
        }
      }
    };

const loadRefereeList = async () => {
  if (!userAccount) return;
  setLoading("refereeList", true);
  try {
    console.log("Loading referee list");

    const refereeList = document.getElementById("refereeList");
    const pagination = document.getElementById("refereePagination");

    const referees = await contract.methods.getReferees(userAccount).call();

    let currentPage = 1;
    const initialLoad = 10;
    const itemsPerPage = 20;
    let totalItems = referees.length;
    let totalPages = Math.ceil(Math.max(totalItems - initialLoad, 0) / itemsPerPage) + 1;

    const renderPage = (page) => {
      refereeList.innerHTML = "";

      let start = 0;
      let end = 0;

      if (page === 1) {
        start = 0;
        end = initialLoad;
      } else {
        start = initialLoad + (page - 2) * itemsPerPage;
        end = start + itemsPerPage;
      }

      const pagedReferees = referees.slice(start, end);

      if (pagedReferees.length === 0) {
        refereeList.innerHTML = "<li><small>No referees found.</small></li>";
      } else {
        pagedReferees.forEach((referee, index) => {
          const li = document.createElement("li");
          li.className = "py-2";
          li.innerHTML = `
            <span style="font-size: 12.5px; color: #32cd32;">
              <small>Ref ${start + index + 1}: <a href="https://sepolia.basescan.org/address/${referee}" target="_blank">
                ${referee.slice(0, 21)}${referee.slice(-21)}
              </a></small>
            </span>
          `;
          refereeList.appendChild(li);
        });
      }

      renderPagination();
    };

    const renderPagination = () => {
      pagination.innerHTML = "";

      if (totalPages <= 1) return;

      const createButton = (content, disabled, onClick, isImage = false) => {
  const btn = document.createElement("button");
  btn.disabled = disabled;
  btn.style.margin = "0 3px";
  btn.style.padding = "5px 10px";
  btn.style.fontSize = "12px";
  btn.style.display = "flex";
  btn.style.alignItems = "center";
  btn.onclick = onClick;

  if (isImage) {
    const img = document.createElement("img");
    img.src = content;
    img.style.width = "16px";
    img.style.height = "16px";
    btn.appendChild(img);
  } else {
    btn.innerText = content;
  }

  pagination.appendChild(btn);
};

      createButton("img/first.svg", currentPage === 1, () => {
  currentPage = 1;
  renderPage(currentPage);
}, true);
      createButton("img/prev.svg", currentPage === 1, () => {
  currentPage--;
  renderPage(currentPage);
}, true);

      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
          createButton(i, currentPage === i, () => {
            currentPage = i;
            renderPage(currentPage);
          });
        }
      } else {
        if (currentPage <= 3) {
          for (let i = 1; i <= 3; i++) {
            createButton(i, currentPage === i, () => {
              currentPage = i;
              renderPage(currentPage);
            });
          }
          const dots = document.createElement("span");
          dots.innerText = "...";
          dots.style.margin = "0 5px";
          pagination.appendChild(dots);
          createButton(totalPages, false, () => {
            currentPage = totalPages;
            renderPage(currentPage);
          });
        } else if (currentPage >= totalPages - 2) {
          createButton(1, false, () => {
            currentPage = 1;
            renderPage(currentPage);
          });
          const dots = document.createElement("span");
          dots.innerText = "...";
          dots.style.margin = "0 5px";
          pagination.appendChild(dots);
          for (let i = totalPages - 2; i <= totalPages; i++) {
            createButton(i, currentPage === i, () => {
              currentPage = i;
              renderPage(currentPage);
            });
          }
        } else {
          createButton(1, false, () => {
            currentPage = 1;
            renderPage(currentPage);
          });
          const dots1 = document.createElement("span");
          dots1.innerText = "...";
          dots1.style.margin = "0 5px";
          pagination.appendChild(dots1);

          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            createButton(i, currentPage === i, () => {
              currentPage = i;
              renderPage(currentPage);
            });
          }

          const dots2 = document.createElement("span");
          dots2.innerText = "...";
          dots2.style.margin = "0 5px";
          pagination.appendChild(dots2);

          createButton(totalPages, false, () => {
            currentPage = totalPages;
            renderPage(currentPage);
          });
        }
      }

      createButton("img/next.svg", currentPage === totalPages, () => {
  currentPage++;
  renderPage(currentPage);
}, true);
      createButton("img/last.svg", currentPage === totalPages, () => {
  currentPage = totalPages;
  renderPage(currentPage);
}, true);
    };

    renderPage(currentPage);

    console.log("Referee list loaded with pagination");
  } catch (error) {
    console.error("Error loading referee list:", error);
    document.getElementById("refereeList").innerHTML = "<li><small>Error: Failed to load referees</small></li>";
  } finally {
    setLoading("refereeList", false);
  }
};

    const checkIn = async () => {
  if (!userAccount) {
    alert("Please connect your wallet first.");
    return;
  }

  const statusEl = document.getElementById("checkInStatus");
  statusEl.innerHTML = "<center><small>Processing check-in...</small></center>";

  try {
    console.log("Initiating check-in transaction");
    console.log("User Account:", userAccount);
    console.log("Contract Address:", contract.options.address);

    let tx;

    try {
      const priorityFee = await web3.eth.getMaxPriorityFeePerGas();
      const latestBlock = await web3.eth.getBlock('pending');
      const baseFee = latestBlock.baseFeePerGas;
      const maxFeePerGas = web3.utils.toBN(baseFee).add(web3.utils.toBN(priorityFee).muln(2));

      console.log("Gas Fee Details:", {
        baseFee: web3.utils.fromWei(baseFee, 'gwei'),
        priorityFee: web3.utils.fromWei(priorityFee, 'gwei'),
        maxFeePerGas: web3.utils.fromWei(maxFeePerGas, 'gwei')
      });

      tx = await contract.methods.checkIn().send({
        from: userAccount,
        maxFeePerGas,
        maxPriorityFeePerGas: priorityFee,
        gas: 350000
      });
    } catch (gasError) {
      console.warn("EIP-1559 failed or unsupported, retrying with legacy gas...");
      
      const gasPrice = await web3.eth.getGasPrice();

      tx = await contract.methods.checkIn().send({
        from: userAccount,
        gasPrice,
        gas: 350000
      });
    }

    console.log("Check-in transaction sent, hash:", tx.transactionHash);
    statusEl.innerHTML = "<center><small style='color:#aaffaa;'>Transaction sent. Waiting for confirmation...</small></center>";

    const maxAttempts = 10;
    let attempt = 0;
    let receipt = null;

    while (!receipt && attempt < maxAttempts) {
      console.log(`Polling for receipt (attempt ${attempt + 1}/${maxAttempts})`);
      receipt = await web3.eth.getTransactionReceipt(tx.transactionHash);
      if (!receipt) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        attempt++;
      }
    }

    if (!receipt) throw new Error("Transaction not confirmed after multiple attempts");

    console.log("Transaction confirmed:", receipt);
    statusEl.innerHTML = "<center><small style='color:#00ff14;'>Faucet Check-in successful! You earned 1 Point!</small></center>";

    await new Promise(resolve => setTimeout(resolve, 3000));
    await loadCriticalData();
    await loadCheckInHistory();
    console.log("UI updated after check-in");
    
  } catch (error) {
    console.error("Error checking in:", error.message, error);

    let errorMessage = "Failed to check in faucet. Please try again.";
    if (error.message.includes("already checked in faucet")) {
      errorMessage = "You have already checked in faucet today.";
    } else if (error.message.includes("Transaction not confirmed")) {
      errorMessage = "Transaction timed out. Please check Basescan and try again.";
    }

    statusEl.innerHTML = `<center><small style="color:red;">${errorMessage}</small></center>`;
    alert(errorMessage);
  }
};

const loadCheckInHistory = async (page = 1) => {
  if (!userAccount) return;
  setLoading("checkInHistory", true);

  try {
    console.log(`Loading check-in history page ${page}`);
    const historyList = document.getElementById("checkInHistory");
    historyList.innerHTML = "";

    if (totalCheckInCount === 0) {
      totalCheckInCount = await contract.methods.getCheckInCount(userAccount).call();
    }

    const start = Math.max(totalCheckInCount - (page * checkInBatchSize), 0);
    const end = Math.min(start + checkInBatchSize, totalCheckInCount);

    const promises = [];
    for (let i = end - 1; i >= start; i--) {
      promises.push(contract.methods.getCheckInLog(userAccount, i).call());
    }
    const logs = await Promise.all(promises);

    if (logs.length === 0) {
      historyList.innerHTML = "<li><small>No history found.</small></li>";
    } else {
      logs.forEach(log => {
        const date = new Date(log.timestamp * 1000).toLocaleString();
        const li = document.createElement("li");
        li.className = "py-2";
        li.innerHTML = `<small>
           ID: <span style="color: #00bfff;">${log.dayUTC}</span><br>
           Reward: <span style="color: #32cd32;">${(log.reward / 10 ** cache.decimals).toFixed(2)} Point</span><br>
           Time: <span style="color: #ffa500;">${date}</span><br>
        </small><hr style="background-color: #333333; height: 1px; border: none;">`;
        historyList.appendChild(li);
      });
    }

    renderCheckInPagination(page);
    console.log("Check-in history loaded successfully");
  } catch (error) {
    console.error("No history found.", error);
    document.getElementById("checkInHistory").innerHTML = "<li><small>No history found.</small></li>";
  } finally {
    setLoading("checkInHistory", false);
  }
};

function renderCheckInPagination(currentPage) {
  const pagination = document.getElementById("checkInPagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalCheckInCount / checkInBatchSize);
  if (totalPages <= 1) return;

  const prevButton = document.createElement("button");
  prevButton.innerHTML = "&lt;";
  prevButton.disabled = currentPage === 1;
  prevButton.onclick = () => loadCheckInHistory(currentPage - 1);
  pagination.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    if (i === currentPage) {
      pageButton.classList.add("active");
    }
    pageButton.onclick = () => loadCheckInHistory(i);
    pagination.appendChild(pageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.innerHTML = "&gt;";
  nextButton.disabled = currentPage === totalPages;
  nextButton.onclick = () => loadCheckInHistory(currentPage + 1);
  pagination.appendChild(nextButton);
}
    
    const placeBet = async () => {
  if (!userAccount) {
    alert("Please connect your wallet first.");
    return;
  }

  const numberInput = document.getElementById("betNumber");
  const timesInput = document.getElementById("betTimes");
  const payoutInput = document.getElementById("payoutAmount");
  const betStatus = document.getElementById("betStatus");

  const number = numberInput.value.trim();
  const times = parseInt(timesInput.value);
  const payoutAmount = parseInt(payoutInput.value);

  betStatus.innerHTML = "";

  if (!number || isNaN(number) || number.length < 2 || number.length > 4 || parseInt(number) < 0 || parseInt(number) > 9999) {
    betStatus.innerHTML = `<small style="color: red;">❌ Please enter a valid number (2-4 digits).</small>`;
    return;
  }

  if (!times || times < 1 || times > 5) {
    betStatus.innerHTML = `<small style="color: red;">❌ Multiplication must be between 1× and 5×.</small>`;
    return;
  }

  if (payoutAmount !== 10) {
    betStatus.innerHTML = `<small style="color: red;">❌ Reward amount must be exactly 10 points.</small>`;
    return;
  }

  const totalCost = costPerBet * times;
  document.getElementById("betCost").innerText = `${totalCost} Point`;

  try {
    betStatus.innerHTML = `<small style="color: #aaffaa;">⏳ Processing Your Ticket...</small>`;

    let tx;
    try {
      const priorityFee = await web3.eth.getMaxPriorityFeePerGas();
      const latestBlock = await web3.eth.getBlock('pending');
      const baseFee = latestBlock.baseFeePerGas;
      const maxFeePerGas = web3.utils.toBN(baseFee).add(web3.utils.toBN(priorityFee).muln(2));

      console.log("Using EIP-1559 gas");
      tx = await contract.methods.placeBet(number, times, payoutAmount).send({
        from: userAccount,
        maxFeePerGas,
        maxPriorityFeePerGas: priorityFee,
        gas: 350000
      });
    } catch (eipError) {
      console.warn("EIP-1559 failed, falling back to legacy gasPrice...", eipError.message);
      const gasPrice = await web3.eth.getGasPrice();

      tx = await contract.methods.placeBet(number, times, payoutAmount).send({
        from: userAccount,
        gasPrice,
        gas: 350000
      });
    }

    betStatus.innerHTML = `<small style="color: #00ff14;">✅ Submit Ticket Successfully!</small>`;
    numberInput.value = "";
    timesInput.value = "";
    payoutInput.value = "10";
    document.getElementById("betCost").innerText = "-";

    await fetchBetEvents();
    await fetchBetEvents(userAccount);
    await loadCriticalData();
    await loadUserBetHistory();
    await loadGlobalBetHistory();
    console.log("Bet placed and UI updated");

  } catch (error) {
    console.error("Error placing bet:", error);
    betStatus.innerHTML = `<small style="color: red;">❌ Failed to Submit Ticket. Please check your balance or try again tomorrow.</small>`;
  }
};

document.getElementById("betTimes").addEventListener("input", () => {
  const times = parseInt(document.getElementById("betTimes").value);
  if (!isNaN(times) && times >= 1 && times <= 5) {
    document.getElementById("betCost").innerText = `${costPerBet * times} Points`;
  } else {
    document.getElementById("betCost").innerText = "-";
  }
});

document.getElementById("payoutAmount").addEventListener("input", () => {
  document.getElementById("payoutAmount").value = "10";
});
    
const loadUserBetHistory = async () => {
  if (!userAccount || isUserFetching) {
    console.log("Skipping load: No userAccount or isUserFetching");
    return;
  }
  isUserFetching = true;

  try {
    console.log("Loading user bet history");
    if (totalUserCount === 0) {
      totalUserCount = await contract.methods.getUserBetCount(userAccount).call();
    }

    const historyList = document.getElementById("userBetHistory");
    if (totalUserCount === 0 && userHistoryOffset === 0) {
      historyList.innerHTML = "<li><small>No history found.</small></li>";
      return;
    }

    const end = Math.max(totalUserCount - userHistoryOffset - 1, 0);
    const start = Math.max(end - userHistoryBatchSize + 1, 0);

    const userEvents = cache.betEvents[userAccount] || {};
    const referrer = await contract.methods.referredBy(userAccount).call();
    const referrerDisplay = referrer === "0x0000000000000000000000000000000000000000"
      ? "None"
      : `<a href="https://sepolia.basescan.org/address/${referrer}" target="_blank">${referrer.slice(0, 21)}${referrer.slice(-21)}</a>`;

    for (let i = end; i >= start; i--) {
      const bet = await contract.methods.getUserBet(userAccount, i).call();
      if (!bet || !bet.timestamp) continue;

      const date = new Date(bet.timestamp * 1000).toLocaleString();
      const eventIndex = i;
      const event = userEvents[eventIndex] || {};
      const betTimes = bet.cost / (1 * 10 ** cache.decimals);

      const li = document.createElement("li");
      li.className = "py-2";
      li.innerHTML = `<small>
        Wallet: <span style="color: #bd80ff;"><a href="https://sepolia.basescan.org/address/${bet.user}" target="_blank">${bet.user.slice(0, 21)}${bet.user.slice(-21)}</a></span><br>
        BetNumber: <span style="color: #00ff14;">${bet.number}</span><br>
        BetAmount: <span style="color: #ffcc00;">${betTimes}</span><br>
        Cost: <span style="color: #00ff14;">${(bet.cost / 10 ** cache.decimals).toFixed(2)} Point</span><br>
        Reward: <span style="color: #6683ff;">${(bet.reward / 10 ** cache.decimals).toFixed(2)} Point</span><br>
        InviteBy: <span style="color: #ff9900;">${referrerDisplay}</span><br>
        Time: <span style="color: #ffb833;">${date}</span><br>
      </small><hr style="background-color: #333333; height: 1px; border: none;">`;
      historyList.appendChild(li);
    }

    userHistoryOffset += userHistoryBatchSize;
    console.log("User bet history loaded successfully");
  } catch (error) {
    console.error("Failed loading user bet history:", error);
    document.getElementById("userBetHistory").innerHTML = "<li><small>No history found.</small></li>";
  } finally {
    isUserFetching = false;
  }
};

const userHistoryContainer = document.getElementById("userBetHistoryContainer");
userHistoryContainer.addEventListener("scroll", () => {
  if (userHistoryContainer.scrollTop + userHistoryContainer.clientHeight >= userHistoryContainer.scrollHeight - 10) {
    if (userHistoryOffset < totalUserCount) {
      loadUserBetHistory();
    }
  }
});

    const loadGlobalBetHistory = async () => {
      if (!userAccount || isFetching) {
        console.log("Skipping load: No userAccount or isFetching");
        return;
      }
      isFetching = true;

      try {
        console.log("Loading global bet history");
        if (totalGlobalCount === 0) {
          totalGlobalCount = await contract.methods.getBetHistoryLength().call();
        }

        const historyList = document.getElementById("globalBetHistory");
        const end = Math.max(totalGlobalCount - globalHistoryOffset - 1, 0);
        const start = Math.max(end - globalHistoryBatchSize + 1, 0);

        const globalEvents = cache.betEvents["global"] || {};

        for (let i = end; i >= start; i--) {
          const bet = await contract.methods.getBet(i).call();
          const date = new Date(bet.timestamp * 1000).toLocaleString();
          const referrer = await contract.methods.referredBy(bet.user).call();
          const referrerDisplay = referrer === "0x0000000000000000000000000000000000000000"
            ? "None"
            : `<a href="https://sepolia.basescan.org/address/${referrer}" target="_blank">${referrer.slice(0, 21)}${referrer.slice(-21)}</a>`;
          const eventIndex = i;
          const event = globalEvents[eventIndex] || {};
          const txHash = event.txHash || "N/A";
          const blockNumber = event.blockNumber || "N/A";
          const betTimes = bet.cost / (1 * 10 ** cache.decimals);

          const li = document.createElement("li");
          li.className = "py-2";
          li.innerHTML = `<small>
            User: <span style="color: #bd80ff;"><a href="https://sepolia.basescan.org/address/${bet.user}" target="_blank">${bet.user.slice(0, 21)}${bet.user.slice(-21)}</a></span><br>
            BetNumber: <span style="color: #00ff14;">${bet.number}</span><br>
            BetAmount: <span style="color: #ffcc00;">${betTimes}</span><br>
            Cost: <span style="color: #00ff14;">${(bet.cost / 10 ** cache.decimals).toFixed(2)} Point</span><br>
            Reward: <span style="color: #6683ff;">${(bet.reward / 10 ** cache.decimals).toFixed(2)} Point</span><br>
            InviteBy: <span style="color: #ff9900;">${referrerDisplay}</span><br>
            Time: <span style="color: #ffb833;">${date}</span><br>
          </small><hr style="background-color: #333333; height: 1px; border: none;">`;
          historyList.appendChild(li);
        }

        globalHistoryOffset += globalHistoryBatchSize;
        console.log("Global bet history loaded successfully");
      } catch (error) {
        console.error("Failed loading global bet history:", error);
        document.getElementById("globalBetHistory").innerHTML = "<li><small>No history found.</small></li>";
      } finally {
        isFetching = false;
      }
    };

    const globalHistoryContainer = document.getElementById("globalBetHistoryContainer");

globalHistoryContainer.addEventListener("scroll", async () => {
  const nearBottom = globalHistoryContainer.scrollTop + globalHistoryContainer.clientHeight >= globalHistoryContainer.scrollHeight - 15;
  
  if (nearBottom && !isFetching && globalHistoryOffset < totalGlobalCount) {
    await loadGlobalBetHistory();
  }
});

    const copyReferralLink = () => {
      if (!userAccount) {
        console.log("No user account connected");
        alert("Please connect your wallet first.");
        return;
      }

      const linkElement = document.getElementById("referralLink");
      if (!linkElement) {
        console.error("Referral link element not found");
        alert("Referral link not available. Please try again.");
        return;
      }

      const linkText = linkElement.innerText.replace("Your Referral Link:\n", "").trim();
      console.log("Attempting to copy link:", linkText);

      navigator.clipboard.writeText(linkText).then(() => {
        console.log("Link copied successfully");
        alert("Referral link copied!");
      }).catch((err) => {
        console.error("Failed to copy link:", err);
        alert("Failed to copy link. Please try again.");
      });
    };
    
    document.getElementById("walletButton").addEventListener("click", async () => {
      if (userAccount) {
        disconnectWallet();
      } else {
        await initWeb3(true);
        await setAutomaticReferralId();
      }
    });
    
    document.getElementById("checkIn").addEventListener("click", checkIn);
    document.getElementById("copyLink").addEventListener("click", copyReferralLink);
    
    window.addEventListener("load", async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const referrerIdFromURL = urlParams.get("uid");
      console.log("Stored referrerId from URL:", referrerIdFromURL);

      if (!window.ethereum) {
        alert("Please install MetaMask to use this DApp.");
        return;
      }

      await initWeb3(false);

      window.ethereum.on("accountsChanged", debounce(async (accounts) => {
        if (accounts.length === 0) {
          disconnectWallet();
        } else {
          userAccount = accounts[0];
          storeConnection(userAccount);
          contract = new web3.eth.Contract(contractABI, contractAddress);
          updateWalletUI(true);
          await loadCriticalData();
          await loadCheckInHistory();
          await loadUserBetHistory();
          await loadGlobalBetHistory();
        }
      }, 1000));

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    });

    function updateDateTime() {
  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
  const day = String(now.getUTCDate()).padStart(2, '0');
  const hours = String(now.getUTCHours()).padStart(2, '0');
  const minutes = String(now.getUTCMinutes()).padStart(2, '0');
  const seconds = String(now.getUTCSeconds()).padStart(2, '0');
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC`;
  document.querySelectorAll('.utcClock').forEach(el => {
    el.textContent = formattedDateTime;
  });
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    function toggleMenu() {
      document.getElementById("navMenu").classList.toggle("show");
    }

    const loadTokenHolders = async () => {
      console.log("loadTokenHolders not implemented");
    };
