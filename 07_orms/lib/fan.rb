class Fan

  attr_accessor :name, :id

  # Fan.new({ :id => 1, :name => "Prince"})
  # Fan.new({id: 1, name: "Prince"})
  def initialize(attributes)
    mass_assignment(attributes)
  end

  def save
    if !self.id.nil?
      # if I am updating something
      Fan.update(self.id, self.name)
      self
    else
      # else creating something
      Fan.insert(self.name)
      result =  DB[:conn].execute("SELECT * FROM fans ORDER BY id DESC LIMIT 1")[0]
      self.id = result["id"]
      self
    end
  end

  # track


  def self.table_name
    # Return back to me the string for the table name
    self.name.downcase + 's'
  end

  def self.create_table
    sql = "CREATE TABLE IF NOT EXISTS #{self.table_name} (id INTEGER PRIMARY KEY, name TEXT);"

    DB[:conn].execute(sql)
  end

  def self.insert(name)
    # binding.pry
    sql = "INSERT INTO #{self.table_name} (name) VALUES (\"#{name}\")"

    DB[:conn].execute(sql)
  end

  def self.find_by_name(name)
    sql = "SELECT * FROM #{self.table_name} WHERE name IS \"#{name}\" LIMIT 1"

    DB[:conn].execute(sql)
  end

  def self.update(id, new_name)
    sql = "UPDATE #{self.table_name} SET name = \"#{new_name}\" WHERE id = #{id}"

    DB[:conn].execute(sql)
  end

  def self.delete(id)
    sql = "DELETE FROM #{self.table_name} WHERE id = #{id}"

    DB[:conn].execute(sql)
  end

  private
  def mass_assignment(attributes)
    attributes.each do |key, value|
      if self.respond_to?("#{key}=")
        self.send("#{key}=", value)
      end
    end
  end

end
