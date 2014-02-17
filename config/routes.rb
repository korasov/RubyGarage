Hello::Application.routes.draw do
  
  resources :tasks

  resources :todos
  
  root 'todos#index'
  
end
