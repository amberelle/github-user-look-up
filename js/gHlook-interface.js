var apiKey = require('./../.env').apiKey;
var repos = require('./../js/gHlook-app.js').repos;



var displayRepos = function(arrayOfRepos){
    arrayOfRepos.foreach(function(repo){
      $('.getList').text(repo.name);
  });
};

// var displayRepo = function(username, profileInfo) {
//
//   $('.getList').text("Username: " + username + "Profile Info:" + profileInfo );
// }

$(document).ready(function() {
  var currentReposObject = new repos();
  $('#getInfo').click(function() {
    var name = $('#users').val();
    $('#users').val("");
    currentReposObject.getRepos(name, displayRepos);
  });
});
