import { IWallet } from "../../models/wallet"

interface WalletProps {
  wallet: IWallet
}

export function Wallet({wallet}: WalletProps) {
  return (
    <a href="#" className="collection-item wallet green lighten-1 white-text">
      <div>{ wallet.name }<div className="secondary-content white-text">{ wallet.sum }</div></div>
    </a>
  )
}
