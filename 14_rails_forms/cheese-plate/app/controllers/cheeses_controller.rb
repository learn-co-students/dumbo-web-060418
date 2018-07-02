class CheesesController < ApplicationController

  def index
    @cheeses = Cheese.all
    # render :index
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def new
    # nothing to see
    @cheese = Cheese.new
  end

  def create
    # create a new cheese with the params passed from the form
    # redirect to show that cheese
    # params
    @cheese = Cheese.new(cheese_params(:name, :age, :smelliness))
    byebug
    if @cheese.save
      redirect_to cheese_path(@cheese)
    else
      render :new
    end
  end

  def edit
    # nothing to see
    @cheese = Cheese.find(params[:id])
  end

  def update
    # find a cheese
    # update with the params passed from the form
    # redirect to show that cheese
    # params
    @cheese = Cheese.find(params[:id])
    if @cheese.update(cheese_params(:name, :age, :smelliness))
      redirect_to cheese_path(@cheese)
    else
      byebug
      render :edit
    end
  end

  private
  def cheese_params(*args)
    params.require(:cheese).permit(*args)
  end

end
