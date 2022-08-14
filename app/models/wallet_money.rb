class WalletMoney < ApplicationRecord
  belongs_to :user
  belongs_to :wallet
end
