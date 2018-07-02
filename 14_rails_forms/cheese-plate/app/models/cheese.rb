class Cheese < ApplicationRecord
  # validation is going to protect the data that is submitted
  # ensure that name exists or is present when saved to our database
  # validations are from activeRecord

  validates :name, :age, :smelliness, presence: true

end
