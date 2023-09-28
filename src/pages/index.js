import Head from 'next/head';
import Navbar from '@/components/navbar';
import News from '@/components/news';
import Cards from '@/components/cards';
import Sliders from '@/components/sliders';
import ModalNews from '@/components/modalNews';
const service = [
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"},
  {"Title": "StarkNet", "Description":"Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.", "serviceLogo": "/servicelogo.png"}
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar/>
      <div className='container'>
      <div className='mt-4'>
        <div className='rounded bg-white mx-auto p-3 h-50'></div>
      <News/>
      </div>
      <Sliders service={service}/>
        <Cards service={service}/>
      </div>
    </>
  )
}
