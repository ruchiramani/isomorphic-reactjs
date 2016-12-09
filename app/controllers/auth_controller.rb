class AuthController < ApplicationController

  def authenticate

    user = User.find_by_credentials(params[:name], params[:password])
    if user
      render json: authenticate_payload(user)
    else
      render json: {errors: ['Invalid username or password']}, status: :unauthorized
    end
end

private

def authentication_payload(user)
  return nil unless user && user.id
  {
    auth_token: AuthToken.encode({user_id: id}),
    user: {id: user.id, name: user.name}
  }
 end
end
