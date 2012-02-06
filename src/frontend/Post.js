Post = (function(post_object){
  var self = {},
      element;


  post_object.from_name = post_object.from.name;
  
  console.log(post_object);
  
  self.render = function(){
    element = renderView('post',post_object);
    return element;
  }
  
  
  return self;
});