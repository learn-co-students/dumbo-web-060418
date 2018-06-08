class Painting
  # painter, style, title, year, gallery

  # Creates reader **methods** - only let's read an attribute
  attr_reader :painter, :style, :title, :year

  # Creates reader and **writer methods**
  attr_accessor :gallery


  @@all = []

  # We're saying that these are are ALL required to make a
  # Painting come about
  def initialize(painter, title, style, year, gallery)
    @painter = painter
    @style = style
    @title = title
    @year = year
    @gallery = gallery

    @@all << self
  end

  # We ask the Painter to give us their name
  def painter_name
    # Return back the name of my painter
    self.painter.name
  end

  def self.all
    @@all
  end





end
