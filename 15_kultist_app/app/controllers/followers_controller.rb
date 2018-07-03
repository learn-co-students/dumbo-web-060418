class FollowersController < ApplicationController
  def index
    @followers = Follower.all
    render :index
  end
end
