class AddIdTitlePosterReleaseDateToMovie < ActiveRecord::Migration[5.1]
  def change
    add_column :movies, :tittle, :string
    add_column :movies, :poster_path, :string
    add_column :movies, :release_date, :integer
  end
end
