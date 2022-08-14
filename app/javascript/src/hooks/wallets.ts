import axios from "axios";
import { IWallet } from "../models/wallet";
import { useState, useEffect } from "react";

export function useWallets() {
  const [wallets, setWallets] = useState<IWallet[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  function fetchWallets() {
    setLoading(true)
    axios.get('/wallets').then((response) => {
      setWallets(response.data)
      setLoading(false)
    })
    .catch((error) => {
      setLoading(false)
      setError(error.message)
    })
  }

  useEffect(()=> {
    fetchWallets()  
  }, [])

  return { wallets, loading, error }
}
