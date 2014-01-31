Hello::Application.routes.draw do
    resources :todos

	root 'todos#index'
end
