class AuthorsController < ApplicationController

  # Index Action for showing all authors
  get '/authors' do
    @authors = Author.all
    erb :'authors/index.html'
  end
end
