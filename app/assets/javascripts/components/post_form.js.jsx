var PostForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value.trim();
    var contents = this.refs.contents.getDOMNode().value.trim();
    var author = this.refs.author.getDOMNode().value.trim();

   if (!title || !contents) {
     return false;
   }

   var formData = $(this.refs.form.getDOMNode()).serialize();
   this.props.onFormSubmit(formData, this.props.form.data);

 },
 render: function(){
   return (
     <form ref="form" className="post-form" action={this.props.form.action} acceptCharset="UTF-8" method="post" onSubmit={this.handleSubmit}>
     <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
     <p><input ref="title" name="post[title]" placeholder="Title.." /> </p>
     <p><input ref="contents" name="post[contents]" placeholder="Blog contents.." /> </p>
     <p><input ref="author" name="post[author]" placeholder="Blog Author.." /> </p>
     <p><button type="submit">Submit Post </button></p>
     </form>

   )
 }
})
