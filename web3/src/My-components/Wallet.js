import React from 'react'
import { GiWallet } from "react-icons/gi";
import {Button} from 'react-bootstrap';

export default function Wallet() {
  return (
    <>
    <div className='div-wallet'>
    <i class="fa-solid fa-wallet"></i>
        < GiWallet className='GiWallet-icon'/>
      <h1 id="please-wallet">please connect wallet</h1>
      <Button className='connect-button' variant="outline-dark">Connect Wallet</Button>
      </div>
      </>
  )
}
