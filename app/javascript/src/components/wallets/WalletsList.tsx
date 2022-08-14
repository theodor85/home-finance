import { IWallet } from "../../models/wallet"
import { Wallet } from "./Wallet"
import { Loader } from "../common/Loader"
import { ErrorMessage } from "../common/ErrorMessage"

import { useWallets } from "../../hooks/wallets"


export function WalletsList() {
  const {wallets, loading, error} = useWallets()

  return (
    <>
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }
      <div className="row">
        <div className="col s7 m7 offset-m2 offset-s2">
          <div className="collection">

            {wallets.map(wallet => <Wallet wallet={wallet} key={wallet.id} />)}

          </div>
        </div>
      </div>

      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red">
          <i className="large material-icons">add</i>
        </a>
      </div>
    </>
  )
}
