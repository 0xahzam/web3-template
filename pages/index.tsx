import type { NextPage } from 'next';
import type { FC } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Home: NextPage = () => {
  return (
    <div className='main'>  
      <h1 className='text-5xl font-bold mt-6'>Project Name</h1> <br></br>
      <div className='btn'>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Home;
