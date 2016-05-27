var apiKey = require('./../.env').apiKey;
var repos = require('./../js/gHlook-app.js').repos;

var displayUsers = function(name) {
  $('.showName').text("Name:" + name);
};

var

$(document).ready(function() {
  var currentRepoObject = new repos();
  $('#getInfo').click(function() {
    var name = $('#users').val();
    $('#users').val("");
    currentRepoObject.getRepos(name);
  });
});
