require 'pry'

require_relative './blood_oath'
require_relative './cult'
require_relative './follower'

  jjs = Cult.new("Jibber-Jabbers", "Salem")
  cheese = Cult.new("CheeseHeads", "Wisconsin")
  rooby = Cult.new("Rooby-Dooby-Doo", "Baton Rouge")
  # cog = Cult.new("City of God", "Oklahoma")

  arren = Follower.new("Arren")
  james = Follower.new("James")
  chris = Follower.new("Chris")
  quinn = Follower.new("Quinn")
  mark = Follower.new("Mark")
  robert = Follower.new("Robert")

  bo1 = BloodOath.new(arren, jjs)
  bo2 = BloodOath.new(arren, cheese)
  bo3 = BloodOath.new(mark, cheese)
  bo4 = BloodOath.new(quinn, cheese)
  bo5 = BloodOath.new(chris, rooby)
  bo6 = BloodOath.new(james, cheese)
  bo7 = BloodOath.new(james, rooby)
  bo8 = BloodOath.new(robert, jjs)

  chris.join_cult(jjs)


binding.pry
