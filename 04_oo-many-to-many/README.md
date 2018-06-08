# One to Many Relationships

## Objectives

* Implement both sides of a many to many relationship
* Practice keeping groups of data related to classes on the class as a class variable
* Demonstrate single source of truth by not storing collections of objects on other objects
* Demonstrate single source of truth by not storing one object in multiple collections

## Deliverables

* Create a Painter class
  * `#initialize` which takes a name, age, and style
  * a reader and writer method for name and style
  * a reader method for age
  * `#paintings` that returns an array of Painting instances
  * `#galleries` that returns an array of Gallery instances
  * `#make_painting` that takes a title, style, year and a Gallery. It creates a new Painting instance, and adds it to the Painter's painting collection and the Gallery's painting collection

* Create a Painting class
  * should initialize with a painter, title, style, year, and gallery
  * a reader for title, style, year, painter
  * a reader and writer for the gallery
  * `#painter` that returns an instance of the Painter class
  * `.all` that returns all the Paintings created.
  * `#painter_name` that returns the name of the Painting's Painter

* Create a Gallery class
  * should initialize with a name
  * a reader method for name
  * `#paintings` that returns an array of Painting instances
  * `#painters` that returns an array of Painter instances
