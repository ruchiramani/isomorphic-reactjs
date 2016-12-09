var PostsList = React.createClass({
  getInitialState: function(){
    return JSON.parse(this.props.presenter);

  },
  handlePostSubmit: function( formData, action){
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function(data) {
        this.setState({posts: data});
      }.bind(this)
    });
  },
   render: function() {
     var posts = this.state.posts.map(function(post){
       return <Post key={post.id} post={post} />;
     });
     return (
       <div className="posts">
        {posts}
       <h2> Add a post </h2>
        <PostForm form={this.state.form} onPostSubmit={this.handlePostSubmit} />
        </div>

     );
   }
});
