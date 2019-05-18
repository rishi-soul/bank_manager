Rails.application.routes.draw do
root to: redirect('/banks')

  get 'banks', to: 'site#index'
  get 'banks/new', to: 'site#index'
  get 'banks/:id', to: 'site#index'
  get 'banks/:id/edit', to: 'site#index'


  namespace :api do
    resources :banks, only: %i[index show create destroy update]
  end
end
