class PostsController < ApplicationController
before_action :authenticate_request!
  def index
    @presenter = {
      :posts => Post.all,
      :form => {
        :action => posts_path,
        :csrf_param => request_forgery_protection_token,
        :csrf_token => form_authenticity_token
      }
    }
  end

  def create
    @post = Post.new(post_params)

    if @post.save && request.xhr?
      render json: Post.last(5)
    else
      redirect_to root_path
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :author, :content)
  end

end
