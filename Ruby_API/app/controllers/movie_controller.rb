class MovieController < ApplicationController
  def show
    movie1 = ShowMovie.new(params[:id], "Fear and loathing", "asfdsdaf", 1997)
    movie2 = ShowMovie.new(params[:id], "Bat out of hell", "something", 2017)
    render json: [movie1, movie2]
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