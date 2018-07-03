class Follower < ApplicationRecord
  has_many :blood_oaths
  has_many :cults, through: :blood_oaths

  validates :name, length: { minimum: 2, maximum: 40}
end
