require 'pry'

class Painter

  attr_accessor :name, :style       # Accessors - Both readers and writers
  attr_reader :age, :paintings                  # Readers - can only read an attribute
  # attr_writer :name, :age, :style # Writers - can only write to an attribute

  @@all = []                        # Class variable, we'll store all instances
                                    # inside of this variable

  # Initialize - A lifecycle method
  # ===============================
  # - We only hit this method if we say Painter.new
  # - We need three arguments because we defined it as such
  def initialize(name, age, style)
    # - We assign our attributes (instance variables) here!
    @name = name
    @age = age
    @style = style
    # - As well as pushed all instances inside of our @@all
    @@all << self
  end

  # A Class Method (look at where self is with `def`)
  # ===============================
  # Can only be called on the class
  # So what would that look like? `Painter.all`
  def self.all
    @@all
  end

  # An Instance Method (notice no self with `def`)
  # ===============================
  # Can only be called on an instance!
  # So we will need to create an instance of our Painter
  # Then we will be able to call them here `prince.whoami`
  def whoami
    puts "Who am I?: #{self.name}"
    # SELF IS THE INSTANCE INSIDE OF AN INSTANCE METHOD
  end


  # An Instance Method
  # ===============================
  # build a method to find all of a painters paintings

  # build a method for a painter to create a new painting
  # painter, style, title, year, owner
  #
  def make_painting(title, style, year, gallery)
    painting = Painting.new(self, title, style, year, owner)
  end


  def paintings
    # we want self to access the instance of painter
    # access to Painting.all
    # iterate over painting.all array and return the paintings for a specific painter

    Painting.all.select do |painting|
      painting.painter == self
    end
  end


  # what styles has a painter painted??
  # utilizes paintings method

  def get_styles
    # what is self? ==> painter instance

    self.paintings.map do |painting|
      # return the array with just the style string
      # paintng.style

      # return hash for a painting title and style
      {style: painting.style, title: painting.title}
    end.uniq

  end




  # Attribute Readers
  # They expose instance variables to the world
  # def name
  #   @name
  # end
  #
  # def style
  #   @style
  # end
  #
  # def age
  #   @age
  # end

  # Attribute Writer
  # Only to change the instance variable
  # def style=(style)
  #    @style = style
  # end
  #
  # def age=(age)
  #   @age = age
  # end
  #
  # def name=(name)
  #   @name = name
  # end
end
