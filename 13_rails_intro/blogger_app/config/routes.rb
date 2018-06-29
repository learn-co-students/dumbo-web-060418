Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/cars', to: 'cars#index'
  # get '/cars/new', to: 'cars#new'       # Shows cars new form
  # get '/cars/:id/edit', to: 'cars#edit' # Shows cars edit form
  # get '/cars/:id', to: 'cars#show'
  #
  #
  # post '/cars', to: 'cars#create'
  # patch '/cars/:id', to: 'cars#update'
  get '/cars/kachow', to: 'cars#kachow'
  resources :cars, only: [:index, :create, :new, :update, :edit, :show]
end
