class DogsController < ApplicationController
  before_action :set_dog, only: [:show, :edit, :update, :destroy]

  # GET /dogs
  # GET /dogs.json
  def index
    @dogs = Dog.all
    # render erb: 'dogs/index'
    render json: @dogs
  end

  # GET /dogs/1
  # GET /dogs/1.json
  def show
    render json: @dog
  end

  # POST /dogs
  # POST /dogs.json
  def create
    @dog = Dog.new(dog_params)

    if @dog.save
      render json: @dog, status: 201
    else
      render json: {
        errors: @dog.errors
      }
    end
  end

  # PATCH/PUT /dogs/1
  # PATCH/PUT /dogs/1.json
  def update
      if @dog.update(dog_params)
        redirect_to @dog, notice: 'Dog was successfully updated.'
      else
        render :edit
      end
  end

  # DELETE /dogs/1
  # DELETE /dogs/1.json
  def destroy
    @dog.destroy
    redirect_to dogs_url, notice: 'Dog was successfully destroyed.'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_dog
      @dog = Dog.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def dog_params
      params.require(:dog).permit(:name, :image, :breed)
    end
end
