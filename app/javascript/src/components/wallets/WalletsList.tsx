import { Wallet } from "./Wallet"
import { NoWalletsYet } from "./NoWalletsYet"
import { Loader } from "../common/Loader"
import { ErrorMessage } from "../common/ErrorMessage"
import { useWallets } from "../../hooks/wallets"
import { ModalWindow } from "../common/ModalWindow"
import { Button, Icon } from "react-materialize"
import { FloatButton } from "../common/FloatButton"


export function WalletsList() {
  const {wallets, loading, error, empty} = useWallets()
  const floatButton = FloatButton({color: "red", icon: "add"})

  const modalBody = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis aliquid, maiores dolor exercitationem vero consequuntur impedit corporis possimus dolorum voluptatum vel eum, necessitatibus natus, fugiat in dicta adipisci excepturi suscipit?</p>
  const actions = [
    <Button modal="close" node="button" waves="green">Close</Button>,
    <Button flat modal="close" node="button" waves="green" onClick={()=> alert('asdasd') }>QWrt</Button>
  ]
  return (
    <>
      { loading && <Loader /> }
      { error && <ErrorMessage error={error} /> }
      { empty && <NoWalletsYet />}
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

      { floatButton }

      <ModalWindow header="Hello" trigger={ floatButton } body={modalBody} actions={actions}/>
    </>
  )
}
