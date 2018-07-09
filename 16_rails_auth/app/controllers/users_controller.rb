class UsersController < ApplicationController

  # New Users
  # Signing up
  def new
    @user = User.new
  end

  def create
    byebug

    @user = User.new(user_params)

    if @user.valid?
      @user.save
      redirect_to @user
    else
      render :new
    end
  end

  # Show User
  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
