require 'rubygems'
require 'sinatra'
require 'json'

set :port, 9292
set :public_folder, File.dirname(__FILE__) + '/frontend'


get '/' do
  
  File.open('frontend/index.html', 'r')
  
end




