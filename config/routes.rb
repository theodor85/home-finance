Rails.application.routes.draw do
  get 'home/index'
  devise_for :users
  root to: "landing#index"

  resources :wallets
end
