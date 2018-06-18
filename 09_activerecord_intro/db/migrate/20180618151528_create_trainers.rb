class CreateTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table :trainers do |t|
      t.string :name
      t.integer :age
      t.boolean :is_bad
      t.string :hometown
    end
  end
end
