Post = (function(post_object){
  var self = {},
      element;

  console.log(post_object);
  post_object.from_name = post_object.from.name;
  
  self.render = function(){
    element = renderView('post',post_object);
    return element;
  }
  
  
  return self;
});