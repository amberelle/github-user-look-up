var apiKey = require('./../.env').apiKey;
var repos = require('./../js/gHlook-app.js').repos;



var displayRepos = function(arrayOfRepos){
  $('.getList').html("");
  arrayOfRepos.forEach(function(repo){
    if(repo.description){
      $('.getList').append("<li>" + repo.name + " description: " + repo.description +"</li>");
    }
    else {
      $('.getList').append("<li>" + repo.name +"</li>");
    }
  });

};



$(document).ready(function() {
  var currentReposObject = new repos();
  $('#form').submit(function(event) {
    event.preventDefault();
    var name = $('#users').val();
    $('#users').val("");
    currentReposObject.getRepos(name, displayRepos);
  });
});
