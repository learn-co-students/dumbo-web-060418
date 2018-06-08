class Painting
  # painter, style, title, year, gallery

  attr_reader :painter, :style, :title, :year
  attr_accessor :gallery


  # ALL is the same as @@all -- class variable
  @@all = []

  def initialize(painter, title, style, year, gallery)
    @painter = painter
    @style = style
    @title = title
    @year = year
    @gallery = gallery

    @@all << self
  end

  def self.all
    @@all
  end





end
