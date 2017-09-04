class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :email, uniqueness: true, presence: true
    has_one :watchlist
    has_many :comments
end
