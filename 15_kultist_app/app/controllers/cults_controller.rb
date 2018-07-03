class CultsController < ApplicationController
  def index
    @cults = Cult.all
    render :index
  end

  def show
    @cult = Cult.find(params[:id])
    render :show
  end
end
