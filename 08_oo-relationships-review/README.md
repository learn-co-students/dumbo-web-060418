# CULTS, FOLLOWERS AND BLOOD_OATHS

 - A cult has many followers through blood_oaths
 - A follower has many cults through blood_oaths
 - A blood_oath belongs to a cult and a follower

* Each cult has a name and location
* Cult#blood_oaths
* Cult#followers

* Cult#recruit_follower
*  Cult.least_popular
*  Cult.find_by_location

* Each follower has a name
* Follower#blood_oaths
* Follower#cults
* Follower#join_cult
* Follower.most_active_follower => returns the follower who has joined the most cults

* Each blood_oath has a follower and a cult
* BloodOath#follower
* BloodOath#cult
