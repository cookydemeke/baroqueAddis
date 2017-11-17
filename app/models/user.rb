class User < ApplicationRecord
  has_one :username
  has_one :password
end
