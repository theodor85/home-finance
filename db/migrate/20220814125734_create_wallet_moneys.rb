class CreateWalletMoneys < ActiveRecord::Migration[7.0]
  def change
    create_table :wallet_moneys do |t|
      t.references :user, null: false, foreign_key: true
      t.datetime :w_datetime
      t.references :wallet, null: false, foreign_key: true
      t.integer :sum
    end
  end
end
