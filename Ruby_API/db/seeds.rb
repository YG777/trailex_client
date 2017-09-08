# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Watchlist.destroy_all

u1 = User.create!(username:  "Kat", firstname:  "Kat", lastname:  "Katz",  email: "kat@gmail.com", password: "password", password_confirmation: "password")
u2 = User.create!(username: "Ann", firstname: "Ann", lastname: "Smith", email: "ann@ga.co",     password: "password", password_confirmation: "password")
u3 = User.create!(username: "Rob", firstname: "Rob", lastname: "Barnes",email: "rob@ga.co",     password: "password", password_confirmation: "password")
u4 = User.create!(username: "Bob", firstname: "Bob", lastname: "Jones", email: "bob@ga.co",     password: "password", password_confirmation: "password")
u5 = User.create!(username: "Sue", firstname: "Sue", lastname: "Lee",   email: "sue@ga.co",     password: "password", password_confirmation: "password")


w1 = Watchlist.create!(user_id: 1, movie_id: 45654, movie_title: "title1")
w2 = Watchlist.create!(user_id: 1, movie_id: 32597, movie_title: "title2")
w3 = Watchlist.create!(user_id: 1, movie_id:  56547, movie_title: "title3")
w4 = Watchlist.create!(user_id: 1, movie_id: 35466, movie_title: "title4")
w5 = Watchlist.create!(user_id: 1, movie_id: 22245, movie_title: "title5")
