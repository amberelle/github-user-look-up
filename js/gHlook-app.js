var apiKey = require('./../.env').apiKey;



exports.repos = function(){
};

exports.repos.prototype.getRepos = function(name, displayRepos){
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(response){
    displayRepos(response);

  }).fail(function(error){
    $('.getList').text(error.responseJSON.message);
    // console.log(error.responseJSON.message);
  });
};
