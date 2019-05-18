class CreateBanks < ActiveRecord::Migration[5.2]
  def change
    create_table :banks do |t|
      t.integer :account_number
      t.integer :routing_number
      t.string :bank_address
      t.string :bank_nickname

      t.timestamps
    end
  end
end
