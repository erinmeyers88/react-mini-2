var React = require('react');
var $ = require('jquery');

var AddChat = React.createClass({
  
  
propTypes: {
  url: React.PropTypes.string.required;
},
  
getDefaultProps: function() {
  return {
    url: "https://api.parse.com/1/classes/chat"
  }
},

addChat: function(){
  $.ajax({
    url: this.props.url,
    type: 'POST',
    data: JSON.stringify({text: this.refs.newChatInput.getDOMNode().value}),
    beforeSend: function(request) {
      request.setRequestHeader("X-Parse-Application-Id", 'VcLRGLNPEYWfDeYiTSgTWFVmNDCwM7n6KGdsZjlV');
      request.setRequestHeader("X-Parse-REST-API-Key", 'cjLzc0yMMe8w66stywHgxvbBEtgtGs1O4sXPhSAP');
      request.setRequestHeader("Content-Type", 'application/json');
    },
    error: function() {
      console.log('error on post');
    },
    success: function() {
      console.log('Successful Post');
    }
  })
},

handleSubmit: function (event) {
  if (event.keyCode === 13) {
    this.addChat();
  }
},

render: function () {
    return (
       <div className="form-group">
        <input 
          type="text" 
          ref='newChatInput'  placeholder="Compose Message" 
          className="form-control" 
          onKeyDown={this.handleSubmit} />
      </div>
    )
  }
  
  
  
});

module.exports = AddChat;