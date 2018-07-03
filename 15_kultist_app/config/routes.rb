Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :blood_oaths, only: [:new, :create]
  resources :followers, only: [:index, :show]
  resources :cults, only: [:index, :show]
end
