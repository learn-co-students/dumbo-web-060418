class Gallery
  attr_reader :name

  def initialize(name)
    @name = name
  end

  # We ask for data from the Painting class to give
  # us all the paintings that *this* gallery owns.
  def paintings
    Painting.all.select do |painting|
      # Checking if the painting's gallery is equal to self (aka the instance of the gallery)
      painting.gallery == self
    end
  end

  # Since we have a method that reveals all paintings that belong to the gallery
  # we can look on each painting instance and say, "Hey, give me back your painter".
  # This allows us to get all the painters that have paintings in our gallery.
  def painters
    self.paintings.map do |painting|
      painting.painter
    end
  end
end
