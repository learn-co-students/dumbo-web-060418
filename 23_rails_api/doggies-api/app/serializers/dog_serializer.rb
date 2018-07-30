class DogSerializer < ActiveModel::Serializer
  attributes :name, :id, :breed

  belongs_to :owner, serializer: OwnerSerializer, key: :human
end
