class SessionsController < ApplicationController

  # Logging in
  def new
  end

  def create
    # byebug
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user_path(user)
    else
      redirect_to login_path
    end
  end

  def destroy
    session.delete(:user_id)
  end
end
