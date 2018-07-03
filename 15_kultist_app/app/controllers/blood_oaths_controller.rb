class BloodOathsController < ApplicationController


  def create


    follower = Follower.find_or_create_by(name: blood_oath_params["follower"])
    @blood_oath = BloodOath.new

    byebug
    @blood_oath.follower = follower
    @blood_oath.cult_id = blood_oath_params["cult_id"]

    #   if blood_oath_params["follower"].length > 0
    #   @blood_oath.follower = Follower.create(name: blood_oath_params["follower"])
    # else
    #   @blood_oath.follower_id = blood_oath_params["follower_id"]
    # end
    #
    # @blood_oath.cult_id = blood_oath_params["cult_id"]

    if @blood_oath.valid? && follower.valid?
      @blood_oath.save
      # byebug
      redirect_to cult_path(@blood_oath.cult)
    else
      redirect_to new_blood_oath_path
    end
  end

  def new
    @blood_oath = BloodOath.new
    render :new
  end

  private
  def blood_oath_params
    params.require(:blood_oath).permit(:cult_id, :follower)
  end
end
