class BloodOath
  attr_reader :follower, :cult

  @@all = []

  # first step is intialize
  def initialize(follower, cult)
    @follower = follower
    @cult = cult

    @@all << self
  end

  def self.all
    @@all
  end
end
