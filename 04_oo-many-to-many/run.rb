require 'pry'

require_relative './painter.rb'
require_relative './painting.rb'
require_relative './gallery.rb'


prince = Painter.new("Prince", 10000, "Modernism")
daniel = Painter.new("Daniel", 1, "Expressionist")
# (painter, style, title, year, owner)

met = Gallery.new("The Met")
louvre = Gallery.new("Louvre")
moma = Gallery.new("MoMA")

prince.make_painting("The Great Cheese v10", "Modernism", "1990", met)
daniel.make_painting("Art", "WeWorkism", "2018", moma)
daniel.make_painting("Success", "OPTIMISM", "2019", moma)


Pry.start



# making sure pry starts
