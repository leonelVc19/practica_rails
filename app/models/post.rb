class Post < ApplicationRecord
    #Estas son las validaciones de los campos
    validates :title, presence: true
    validates :content, presence: true
    
    has_rich_text :content

    #relacion con con comments
    has_many :comments, dependent: :destroy
end
