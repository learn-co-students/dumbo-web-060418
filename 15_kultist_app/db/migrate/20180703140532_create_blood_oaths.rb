class CreateBloodOaths < ActiveRecord::Migration[5.2]
  def change
    create_table :blood_oaths do |t|
      t.integer :follower_id
      t.integer :cult_id

      t.timestamps
    end
  end
end
