# ApplicationController
# =====================
#  - Represents the top-level controller for our application
#  - A controller will **inherit** from Sinatra::Base
class ApplicationController < Sinatra::Base

  # Since we are writing a non-standard Sinatra application
  # (a.k.a. we are writing it with folders and a modular pattern),
  # we need to say where the root is and where the app is supposed
  # to find its views.
  set :root, File.join(File.dirname(__FILE__), '..')
  set :views, File.join(root, "views")

  # Index action
  # ====================
  # Its goal is to get all of a particular resource, so when I go to `/books`
  # I expect to see all of the items within my database. That's why we end up
  # searching for Book.all
  get '/books' do
    @books = Book.all
    erb :'index.html'
  end

  # New action
  # ====================
  # Its goal is to send us to the new form! We haven't build this out just quite yet
  get '/books/new' do
    # New Form
    'Hello World'
  end

  # Show action
  # ====================
  # Its goal is to show is an individual item within our resource. It is based upon
  # something that can uniquely identify it! That's the reason why we need to use
  # the id of a thing! No matter the data, this will always tell us what object
  # are we looking at.
  get '/books/:id' do
    # `params` is a special method inside of Sinatra that let's us find out what
    # data is being passed within our request. Whether it is in the URL or any
    # other piece of data, check out this method!
    @book = Book.find(params["id"])
    erb :'show.html'
  end
end
