class Post < ApplicationRecord
    #Estas son las validaciones de los campos
    validates_presence_of :title
    validates_presence_of :content
    has_rich_text :content

    #relacion con con comments
    has_many :comments
end
