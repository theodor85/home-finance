class CreateWallets < ActiveRecord::Migration[7.0]
  def change
    create_table :wallets do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name, limit: 50, null: false
      t.boolean :active, default: true
    end
  end
end
