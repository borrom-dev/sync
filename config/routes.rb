Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :articles
    end
  end

  root 'application#index'
  get '*any', to: 'application#index'

end
