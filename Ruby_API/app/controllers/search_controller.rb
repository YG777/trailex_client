class SearchController < ApplicationController
    def index
        @searchTerm = params[:searchterm]
        @search1=Search.new(1, @searchTerm, "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg", "2017-08-03")

        @search2=Search.new( 2, @searchTerm, "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg", "2017-08-03")

        render json: [@search1, @search2]
    end
end

class Search
    def initialize(id, title, poster, release_date)
    @title=title
    @poster=poster
    @release_date=release_date
    end
end
