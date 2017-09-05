class User < ApplicationRecord
    has_secure_password
    validates :username, :email , presence: true, uniqueness: true 
    has_one :watchlist
    has_many :comments
end
