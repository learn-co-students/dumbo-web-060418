class PostsController < ApplicationController
  before_action :authorized

  def new
    @post = Post.new
  end
end
