require 'pry'

require_relative './blood_oath'
require_relative './cult'
require_relative './follower'


flatiron_school = Cult.new("Flatiron School", "World Wide")
access_abs = Cult.new("Access Abs", "Brooklyn, New York")
prince = Follower.new("Prince")
indira = Follower.new("Indira")

mich = Follower.new("Mich")
tez = Follower.new("Tez")

mich.join_cult(access_abs)
tez.join_cult(access_abs)

prince.join_cult(flatiron_school)
tez.join_cult(flatiron_school)
indira.join_cult(flatiron_school)

# indira_flsc = BloodOath.new(indira, flatiron_school)
# prince_flsc = BloodOath.new(prince, flatiron_school)


Pry.start
