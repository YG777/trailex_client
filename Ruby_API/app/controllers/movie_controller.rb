class MovieController < ApplicationController
  def show
    response = HTTParty.get("https://api.themoviedb.org/3/movie/#{params[:id]}?api_key=83e72b5e80c8d6af6be012cfc689dfb8&append_to_response=videos")
    videoKeys = []

    response["videos"]["results"].each do |video_details|
      if video_details["site"] == "YouTube"
        key = video_details["key"]
        videoKeys.push(key)
      end
    end

    showMovie = ShowMovie.new(
      response["id"], 
      response["title"], 
      response["poster_path"], 
      response["release_date"],
      videoKeys)
    render json: showMovie
  end
end

class ShowMovie
  def initialize(id, title, poster, release_date, video_keys)
    @id = id
    @title = title
    @poster = poster
    @release_date = release_date
    @video_keys = video_keys
  end
end