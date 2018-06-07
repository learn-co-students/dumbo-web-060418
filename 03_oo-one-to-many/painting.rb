class Painting
  # painter, style, title, year, owner

  attr_reader :painter, :style, :title, :year
  attr_accessor :owner


  # ALL is the same as @@all -- class variable
  ALL = []

  def initialize(painter, title, style, year, owner)
    @painter = painter
    @style = style
    @title = title
    @year = year
    @owner = owner

    ALL << self
  end

  def self.all
    ALL
  end





end
