Rails.application.routes.draw do
  # scope :api do
    resources :comments
    resources :watchlists
    resources :movie
    resources :popular
    resources :search
    resources :users, except: [:create]
    post 'register', to: 'authentications#register'
    post 'login', to: 'authentications#login'
  # end
end
