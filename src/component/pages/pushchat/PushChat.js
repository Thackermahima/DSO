import React from 'react'
import * as PushAPI from "@pushprotocol/restapi";
import { Chat } from "@pushprotocol/uiweb";
const PushChat = () => {
   const userAdd = localStorage.getItem("userAddress");
  return (

<Chat
   account = { userAdd} //user address
   supportAddress="0x49c85E433896351b88d7B92b890747DE98768487" //support address
   apiKey="jVPMCRom1B.iDRMswdehJG7NpHDiECIHwYMMv6k2KzkPJscFIDyW8TtSnk4blYnGa8DIkfuacU0"
    env="staging"
 />  )
}

export default PushChat