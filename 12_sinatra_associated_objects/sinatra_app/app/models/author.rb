class Author < ActiveRecord::Base
  # Allows us to associate an author having many books
  # Also allows us to write methods:
  #   - Readers: prince.books
  #   - Writers: my_book.books << #<Book:0xfads12>
  has_many :books
end
