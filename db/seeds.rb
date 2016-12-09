# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
p = Post.new(title: "My first post!", author: "Ruchi")
p.contents = "hello"
p.save
p = Post.new(title: "My second port!", author: "Ruchi")
p.contents = "hello for the second time!"
p.save
