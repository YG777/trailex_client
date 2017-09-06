class MovieController < ApplicationController
  def show
    response = HTTParty.get("https://api.themoviedb.org/3/movie/#{params[:id]}?api_key=83e72b5e80c8d6af6be012cfc689dfb8&append_to_response=videos")
    showMovie = ShowMovie.new(response["id"], response["title"], response["poster_path"], response["release_date"])
    render json: showMovie
  end
end

class ShowMovie
  def initialize(id, title, poster, releaseDate)
    @id = id
    @title = title
    @poster = poster
    @releaseDate = releaseDate
  end
end