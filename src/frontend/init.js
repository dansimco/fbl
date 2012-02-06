window.addEvent('fbReady',function(){
  console.log('facebook Ready');  
  
  renderView('main').inject(document.body);

  new Button(document.id('fb_auth'),{
    click: function(){
      FB.login(function(response) {
        if (response.authResponse) {
          FB.api('/me',function(response){
            console.log(response);
          });
        }
      }, {scope: 'publish_stream,user_about_me,read_friendlists'});      
    }
  });



  
});




