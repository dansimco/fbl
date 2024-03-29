window.addEvent('fbReady',function(){
  var view = renderView('main');
  view.inject(document.body);
  FB.getLoginStatus(function(response) {
    if(response.status = "connected") {
      FB.api('/me/home',{limit:50,type:'status'},function(response){
        console.log(response);
        response.data.each(function(post){
          console.log(post);
          if(typeof(post.from.category) == 'undefined' && post.type == 'status'){
            var p = new Post(post);
            p.render().inject(view.getElement('.timeline'));
          }
        });
      });
    } else {
      
    }
    
  });  
  var auth_button = new Element('button.authenticate',{
    'text':'Authenticate'
  }).inject(view);
  new Button(auth_button,{
    click: function(){
      FB.login(function(response) {
        if (response.authResponse) {
          FB.api('/me',function(response){
            console.log(response);
          });
        }
      }, {scope: 'publish_stream,user_about_me,read_friendlists,read_stream,read_requests,publish_stream'});      
    }
  });
});




