import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assets/eth.png'
import magicLogo from '../assets/MagicswapLogo.png'
import { TransactionContext } from '../context/TransactionContext'

const style = {
    wrapper: `p-4 w-screen flex justify-between items-center`,
    headerLogo: `flex w-1/4 items-center justify-start`,
    nav: `flex-1 flex justify-center items-center`,
    navItemsContainer: `flex bg-[#191b1F] rounded-3xl`,
    navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
    activeNavItem: `bg-[#20242A]`,
    buttonContainer: `flex w-1/4 items-center justify-end`,
    button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] cursor-pointer font-semibold`,
    buttonPadding: `p-2`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center w-8 h-8`,
    buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169]  h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`
}

const Header = () => {
  const [selectedNav, setSelectedNav] = useState('swap')
  const { connectWallet, currentAccount } = useContext(TransactionContext)

  return (
    <div className={style.wrapper}>
      <div className={style.headerLogo}>
        <Image src={magicLogo} alt="MagicSwap" height={100} width={100} />
      </div>
      <div className={style.nav}>
        <div className={style.navItemsContainer}>
          <div
            onClick={() => setSelectedNav('swap')}
            className={`${style.navItem} ${
              selectedNav === 'swap' && style.activeNavItem
            }`}
          >
            Swap
          </div>
          <div
            onClick={() => setSelectedNav('pool')}
            className={`${style.navItem} ${
              selectedNav === 'pool' && style.activeNavItem
            }`}
          >
            Pool
          </div>
          <div
            onClick={() => setSelectedNav('stake')}
            className={`${style.navItem} ${
              selectedNav === 'stake' && style.activeNavItem
            }`}
          >
            Stake
          </div>
          <div
            onClick={() => setSelectedNav('farm')}
            className={`${style.navItem} ${
              selectedNav === 'farm' && style.activeNavItem
            }`}
          >
            Farm
          </div>
          <a href="https://uniswap.org" target="_blank" rel="noreferrer">
            <div
              onClick={() => setSelectedNav('bridge')}
              className={`${style.navItem} ${
                selectedNav === 'bridge' && style.activeNavItem
              }`}
            >
              Bridge 
            </div>
          </a>
          <a href="https://uniswap.org" target="_blank" rel="noreferrer">
            <div
              onClick={() => setSelectedNav('charts')}
              className={`${style.navItem} ${
                selectedNav === 'charts' && style.activeNavItem
              }`}
            >
              Charts <FiArrowUpRight />
            </div>
          </a>
        </div>
      </div>
      <div className={style.buttonContainer}>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={style.buttonIconContainer}>
            <Image src={ethLogo} alt="Ethereum Logo" height={20} width={20} />
          </div>
          <p>Ethereum</p>
          <div className={style.buttonIconContainer}>
            <AiOutlineDown></AiOutlineDown>
          </div>
        </div>
        <div
         onClick={() => connectWallet()}
          className={`${style.button} ${style.buttonPadding}`}
        >
          <div className={`${style.buttonAccent} ${style.buttonPadding}`}>Connect Wallet</div>
        </div>
        <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
          <HiOutlineDotsVertical />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
