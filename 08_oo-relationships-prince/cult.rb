class Cult
  attr_accessor :name, :location

  @@all = []

  # Cult.new(name, location)
  # ~~~equivalent~~~
  # cult = Cult.new
  # cult.name = name
  # cult.location = location

  def initialize(name, location)
    @name = name
    @location = location

    @@all << self
  end

  def recruit_follower(follower)
    BloodOath.new(follower, self)
  end

  def blood_oaths
    BloodOath.all.select do |blood_oath|
      blood_oath.cult == self
    end
  end

  def self.least_popular
    # iterate through all cults, find the number of followers, return the least
    # self.all.sort_by{ |cult| cult.followers.length }.first
    self.all.min_by { |cult| cult.blood_oath.length }
    # Cult.all
  end

  def self.find_by_location(location)
    @@all.find do |cult|
      cult.location == location
    end

    # @@all.select do |cult|
    #   cult.location == location
    # end.first
    # all the same since we're in the Cult class
    # @@all
    # self.all
    # Cult.all
  end

  def followers
    self.blood_oaths.map { |oath| oath.follower }
  end

  def self.all
    @@all
  end
end
