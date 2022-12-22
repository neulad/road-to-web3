/* eslint-disable react-hooks/exhaustive-deps */
import { ethers } from 'ethers';
import getConfig from 'next/config';
import { useEffect, useState } from 'react';
import BuyMeACoffeeAbi from '../constants/BuyMeAcoffee.json';

interface EthereumWindow {
  ethereum: any;
}

const BuyCoffee = () => {
  let provider: ethers.providers.Web3Provider;
  let buyMeACoffee: ethers.Contract;
  let signer: ethers.providers.JsonRpcSigner;

  const { publicRuntimeConfig: config } = getConfig();
  const [account, setAccount] = useState();
  const [memos, setMemos] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        console.error('Install Metamask!');
      }

      const accounts = await window.ethereum.request!({
        method: 'eth_requestAccounts',
      });

      setAccount(accounts[0]);
    } catch (err) {
      if (err instanceof Error) {
        console.error(`Error while connecting: ${err.message}`);
      } else console.error(err);
    }
  };

  const getMemos = async () => {
    try {
      if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        signer = provider.getSigner();
        buyMeACoffee = new ethers.Contract(
          config.BuyMeACoffeeAddress,
          BuyMeACoffeeAbi,
          signer
        );

        const memos = await buyMeACoffee.getMemos();
        console.log(memos);
        setMemos(memos);
      } else {
        console.log('Metamask is not connected');
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };

  const isWalletConnected = async () => {
    try {
      const accounts = await window.ethereum.request!({
        method: 'eth_accounts',
      });

      if (accounts.length > 0) {
        setAccount(accounts[0]);
      } else {
        console.error('No accounts found!');
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };

  const buyCoffee = async (name: string, comment: string) => {
    try {
      if (!window.ethereum) return console.error('MetaMask not connected!');
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      buyMeACoffee = new ethers.Contract(
        config.BuyMeACoffeeAddress,
        BuyMeACoffeeAbi,
        signer
      );

      const txRes = await buyMeACoffee.buyCoffee(
        name ? name : 'anon',
        comment ? comment : 'nocomment',
        {
          value: ethers.utils.parseEther('0.001'),
        }
      );
      setName('');
      setComment('');
      await txRes.wait(1);

      alert('Coffee is bought');
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };

  const buyHugeCoffee = async (name: string, comment: string) => {
    try {
      if (!window.ethereum) return console.error('MetaMask not connected!');
      provider = new ethers.providers.Web3Provider(window.ethereum);
      signer = provider.getSigner();
      buyMeACoffee = new ethers.Contract(
        config.BuyMeACoffeeAddress,
        BuyMeACoffeeAbi,
        signer
      );

      const txRes = await buyMeACoffee.buyCoffee(
        name ? name : 'anon',
        comment ? comment : 'nocomment',
        {
          value: ethers.utils.parseEther('0.01'),
        }
      );
      setName('');
      setComment('');
      await txRes.wait(1);

      alert('Coffee is bought');
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  };

  const onNewMemo = (from: any, timestamp: any, name: any, message: any) => {
    setMemos(prev => [
      ...prev,
      { from, timestamp: new Date(timestamp * 1000), message, name },
    ]);
  };

  useEffect(() => {
    if (!account) return;
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    buyMeACoffee = new ethers.Contract(
      config.BuyMeACoffeeAddress,
      BuyMeACoffeeAbi,
      signer
    );

    getMemos();
    isWalletConnected();

    buyMeACoffee.on('NewMemo', onNewMemo);

    return () => {
      buyMeACoffee.off('NewMemo', onNewMemo);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-5">
        Please, buy me a coffee!
      </h1>
      {account ? (
        <div>
          <form className="flex flex-col items-center mb-4">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Name"
              onChange={e => {
                setName(e.target.value);
              }}
              className="p-2 border-2 border-r-2"
            />

            <label htmlFor="name" className="block">
              Comment
            </label>
            <input
              id="comment"
              type="text"
              value={comment}
              onChange={e => {
                setComment(e.target.value);
              }}
              placeholder="Comment"
              className="p-2 border-2 border-r-2 mb-5"
            />
            <button
              type="button"
              onClick={() => {
                buyCoffee(name, comment);
              }}
              className="p-2 mb-4 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black"
            >
              Buy coffee!
            </button>
            <button
              type="button"
              onClick={() => {
                buyHugeCoffee(name, comment);
              }}
              className="p-2 bg-red-600 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black"
            >
              Buy huge coffee!
            </button>
          </form>
          <div className="flex flex-col items-center gap-4 p-2">
            {memos.map(memo => (
              <div
                key={memo.timestamp}
                className="p-2 bg-stone-600 text-white rounded-lg"
              >
                <p>Address: {memo.from}</p>
                <p>Name: {memo.name}</p>
                <p>Comment: {memo.message}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button
            onClick={connectWallet}
            className="p-2 bg-slate-500 rounded-md grow-0 hover:bg-white hover: text-black hover:border-2 hover:border-black"
          >
            Connect wallet!
          </button>
        </div>
      )}
    </div>
  );
};

export default BuyCoffee;
