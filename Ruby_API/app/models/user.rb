class User < ApplicationRecord
    has_one :watchlist
    has_many :comments
end
