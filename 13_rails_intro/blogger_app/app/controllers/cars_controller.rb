class CarsController < ApplicationController

  # Show all cars -- GET Request Route '/cars'
  def index
    @cars = Car.all

    render :index
  end

  def show
    @car = Car.find(params[:id])

    render :show
  end

  def kachow
    @car = Car.find_by(name: "Lightning McQueen")

    render :wow
  end


  def new
    render :new
  end

  def create
    @car = Car.create(car_params)

    redirect_to "/cars/#{@car.id}"
    # byebug
  end

  def edit
    # Show me the form to edit something
    # /cars/:id/edit

    @car = Car.find(params[:id])

    render :edit
  end

  def update
    @car = Car.find(params[:id])

    @car.update(car_params)

    redirect_to "/cars/#{@car.id}"
    # going to update it on the database, and redirect to
    # the show page
  end

  private
  def car_params
    params.require(:car).permit(:name, :make, :color, :year)
  end
end
