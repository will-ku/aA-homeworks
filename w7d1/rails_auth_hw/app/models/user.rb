class User < ApplicationRecord
    validates :username, :session_token, presence: true
    validates :password_digest, presence: true

end
