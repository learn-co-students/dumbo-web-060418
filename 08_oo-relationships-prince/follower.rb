class Follower

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name

    @@all << self
  end

  def blood_oaths
    BloodOath.all.select do |blood_oath|
      # Something truthy
      blood_oath.follower == self
    end
  end

  def cults
    self.blood_oaths.collect do |blood_oath|
      blood_oath.cult
    end
  end

  def self.most_active_follower
    # who has the most blood_oaths?

    # iterate through all followers
    # sort them by the number of blood oaths
    # return back the one with the most

    # taking our followers, mapping them to the blood oath count
    # and returning the one largest

    # Follower.all.map { |follower|
    #   {follower: follower, count: follower.blood_oaths.count }
    # }.sort_by { | follower_hash| follower_hash.count }.last[:follower]

    # a.max_by { |x| x.length }   #=> "albatross"
    # self.all.max_by { |follower| follower.blood_oaths.length  }
    # self.all.sort_by { |follower| follower.blood_oaths.length }[-1]
    self.all.sort_by { |follower| follower.blood_oaths.length }.last
  end

  def join_cult(cult)
    # cult => Cult instance
    BloodOath.new(self, cult)
  end

  def self.all
    @@all
  end

end
