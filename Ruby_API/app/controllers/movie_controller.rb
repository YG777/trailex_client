class MovieController < ApplicationController
  def show
    movie = ShowMovie.new(params[:id], "Fear and loathing", "asfdsdaf", 1997)
    render json: movie
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