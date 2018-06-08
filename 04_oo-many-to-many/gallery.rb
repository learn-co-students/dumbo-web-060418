class Gallery
  attr_reader :name

  # def initialize(name)
  #   @name = name
  # end

  def initialize(name)
    @name = name
  end

  def paintings

    Painting.all.select do |painting|
      # Checking if the painting's gallery is equal to self (aka the instance of the gallery)
      painting.gallery == self
    end
  end

  def painters
    self.paintings.map do |painting|
      painting.painter
    end
  end
end
