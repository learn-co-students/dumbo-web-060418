class Cult
  # has a name and a location as attributes

  attr_accessor :location, :name, :leader

  @@all = []

  def initialize(name, location)
    @name = name
    @location = location

    @@all << self
  end

  def self.all
    @@all
  end

  def blood_oaths # should only be called on one instance
    BloodOath.all.select do |oath|
      self == oath.cult
    end
  end

  def followers
    # associated blood oath array
    self.blood_oaths.map do |oath|
      oath.follower
    end
  end

  # instance of cult can recruit a new follower -- or make a new blood_oath

  def recruit_follower(follower)
    BloodOath.new(follower, self)
  end


  # def self.least_popular
  #   # compare the cults
  #   # cult with the lowest amount of followers should be returned
  #   # iterate over each instance of cult
  #   min = 1.0/0.0
  #   least_popular = ''
  #
  #   self.all.each do |cult|
  #     if cult.followers.count < min
  #       min = cult.followers.count
  #       least_popular = cult
  #     end
  #   end
  #   least_popular
  # end


  def self.least_popular
    self.all.min do |cult1, cult2|
      cult1.followers.count <=> cult2.followers.count
    end
  end

  def self.find_by_location(location)
    self.all.select do |cult|
      cult.location == location
    end
  end

end














#
