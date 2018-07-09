Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, except: [:index]
  resources :posts, only: [:new, :create]
  get '/login', to: "sessions#new", as: 'login'
  delete '/sessions', to: 'sessions#destroy', as: 'logout'
  post '/sessions', to: "sessions#create", as: 'sessions'
end
