Post = (function(post_object){
  var self = {},
      element;

  console.log(post_object);
  
  self.render = function(){
    element = renderView('post',post_object);
    return element;
  }
  
  
  return self;
});