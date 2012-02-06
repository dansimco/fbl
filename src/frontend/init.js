window.addEvent('fbReady',function(){
  
  var view = renderView('main');
  view.inject(document.body);

  FB.getLoginStatus(function(response) {
    if(response.status = "connected") {
      // FB.api('/me',function(response){
      //   console.log(response);
      // });
      
      FB.api('/me/home',function(response){
        response.data.each(function(post){
          console.log(post);
          var p = new Post(post);
          p.render().inject(view);
        });
      });
      
      
            
    } else {
      var auth_button = new Element('button.authenticate',{
        'text':'Authenticate'
      }).inject(view);
    }
  });


  new Button(document.id('fb_auth'),{
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




