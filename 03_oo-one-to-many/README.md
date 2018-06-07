Where are we now??



  class User
    attr_accessor :name

    def initialize(name)
      @name = name
    end

    def post_tweet(message)
      Tweet.new(message, self)
    end

    def find_my_tweets
      Tweet.all.select |tweet|
        tweet.user == self
      end
    end

  end

  class Tweet
    ALL = []
  end





Objectives
Implement one object to many objects relationship
One object has many objects
One object belongs to another object
Practice passing custom objects as arguments to methods
Demonstrate single source of truth
Infer type of method (class or instance) through naming conventions



Deliverables

Create a Painter class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader method for the username
  * `#paintings` that returns an array of Painting instances
  * `#make_painting` that takes a title (at least), creates a new painting, and adds it to the user's painting collection
* Create a Painting class. The class should have these methods:
  * `Painting#title` that returns a string
  * `Painting#painter` that returns an instance of the painter class
  * `Painting.all` that returns all the paintings created.
