require 'pry'

class App
  def call(environment_hash)

    # binding.pry
    # Status
    # Headers
    # Body

    # Index Route
    # Root Route
    if environment_hash["REQUEST_PATH"] == "/"
      # 127.0.0.1 -> localhost
      # port 0000 - 9999
      # status_code = 200
      # 2XX
      # 3XX
      # 4XX
      # 5XX - 503
      headers = {}
      body = ["Hello, Prince!"]

      [100, headers, body]

    elsif environment_hash["REQUEST_PATH"] == "/prince"
      status_code = 200
      headers = {}
      body = ["Hello, <Slack>ers"]

      [status_code, headers, body]
    end

    # response = Rack::Response.new
    #
    # response.write("Hello, World")
    #
    # response.finish
  end
end
