Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cheeses, only: [:new, :index, :show, :create, :edit, :update]
  # get '/cheeses_galore', to: 'cheeses#index', as: 'lotza_motza'

end
