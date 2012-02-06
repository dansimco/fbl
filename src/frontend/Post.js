Post = (function(post_object){
  var self = {},
      element;
  ;
  
  self.render = function(){
    element = renderView('post',post_object);
    return element;
  }
  
  
  return self;
});