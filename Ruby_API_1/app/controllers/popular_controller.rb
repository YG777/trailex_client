class PopularController < ApplicationController
    def index
        @movie1= Movie.new(1, "spiderman", "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg", "2017-08-03")
        @movie2= Movie.new(2, "spiderwoman", "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg", "2017-08-03")
        render json: [@movie1, @movie2]
    end
end

class Movie
   def initialize(id, title, poster, release_date)
        @id=id 
        @title=title
        @poster=poster
        @release_date=release_date
   end
end
