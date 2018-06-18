# rake db:create_migration NAME=create_pokemons
class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      # level, name, species_name, type
      t.integer :level
      t.string :name
      t.string :species_name
      t.string :type1
    end
  end
end
