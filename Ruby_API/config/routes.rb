
Rails.application.routes.draw do
  resources :comments
  resources :watchlists
  resources :movies
  resources :users
  resources :popular
  resources :search
end
