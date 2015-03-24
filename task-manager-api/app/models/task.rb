class Task < ActiveRecord::Base
  belongs_to :category

  enum status: [:active, :complete]

  validates :name, presence: true
end
