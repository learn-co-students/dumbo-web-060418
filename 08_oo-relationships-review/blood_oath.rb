class BloodOath
  # follower, cult instance variables/attributes
  # can point to instances of follower and cult
  attr_accessor :follower, :cult

  @@all = []

  def initialize(follower, cult)
    @follower = follower
    @cult = cult

    @@all << self
  end

  # BloodOath.all ==> [<#BloodOath q39r8y143> ]
  
  def self.all
    @@all
  end

end
