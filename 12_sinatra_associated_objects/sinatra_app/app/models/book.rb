class Book < ActiveRecord::Base
  # Allows us to associate a book belonging to an author
  # Also allows us to write methods:
  #   - Readers: my_book.author
  #   - Writers: my_book.author = #<Author:0x1defa>
  belongs_to :author


  # Here we wrote a custom writer method for our attribute
  # When we are initializing a new object using mass assignment
  # it looks for a set of methods that match the keys from our hash.
  # We are OVERRIDING the default behavior so that way we can take a
  # string as an argument but create an author if we don't find one
  # or just use the one that is found but we associate the book and author
  def author=(author_name)

    found_author = Author.find_by(name: author_name)

    if found_author.nil?
      found_author = Author.create(name: author_name, age: 1, style: "Default")
    end

    self.author_id = found_author.id
  end
end
