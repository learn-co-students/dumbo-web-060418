require 'pry'

require_relative './painter.rb'
require_relative './painting.rb'


prince = Painter.new("Prince", 10000, "Modernism")
daniel = Painter.new("Daniel", 1, "Expressionist")
# (painter, style, title, year, owner)
cheese2 = Painting.new(prince, 'extra-cheesy', "The great cheese v.2", "1991", "arren")


binding.pry

# making sure pry starts
