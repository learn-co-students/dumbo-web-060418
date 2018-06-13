class Follower
  # has a name as an attribute

  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def self.all
    @@all
  end

  def blood_oaths
    BloodOath.all.select do |oath|
      self == oath.follower
    end
  end

  def cults
    self.blood_oaths.map do |oath|
      # self
      oath.cult
    end
  end

  def join_cult(cult)
    BloodOath.new(self, cult)
  end

  def self.most_active_follower
    # iterate over all followers
    # return the instance that has made the most blood_oaths
    # use follower.blood_oaths.count ==> 2

    # make an empty hash
    # iterate over the array
    # if the follower instance doesn't exist as a key in the hash make it a key and give a value if one

    active_hash = {}

    self.all.each do |follower|
      active_hash[follower.name] = follower.blood_oaths.count
    end

    max_blood_oaths = active_hash.values.max
    
    self.all.select do |follower|
      follower.blood_oaths.count == max_blood_oaths
    end
  end



end









#
