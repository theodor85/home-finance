import { IWallet } from "../../models/wallet"
import { Wallet } from "./Wallet"

const wallets_list: IWallet[] = [
  {
    id: 1,
    name: "Наличные",
    sum: 30000
  },
  {
    id: 2,
    name: "Карта Сбербанка",
    sum: 150352.3,
  },
  {
    id: 3,
    name: "Крипта",
    sum: 125362,
  },
]

export function WalletsList() {
  return (
    <>
      <div className="row">
        <div className="col s7 m7 offset-m2 offset-s2">
          <div className="collection">

            {wallets_list.map(wallet => <Wallet wallet={wallet} key={wallet.id} />)}

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
