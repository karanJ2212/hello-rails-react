Rails.application.routes.draw do
  namespace :api do
    get 'random_greeting', to: 'messages#random_greeting'
  end

  # Your other routes go here...

  # This will render your static view for the root of your app
  root 'static#index'
end
