///*ERICSTERMER.COM*///

$(function(){

  var $projectOriginalHeight = $('#projects').height();

  ///NAV BUTTON CLICK FOR DROPDOWN MENU///
  $('#hamburger').on('click', function(){
    $('#dropdown-content').slideToggle();
  });

  $('#rails').on('click', function(){
    showProjects(railsProjects, $projectOriginalHeight);
  });

  $('#mean').on('click', function(){
    showProjects(meanProjects, $projectOriginalHeight);
  });

  $('#js').on('click', function(){
    showProjects(jsProjects, $projectOriginalHeight);
  });

  $('#collab').on('click', function(){
    showProjects(contributions, $projectOriginalHeight);
  });

  $('#school').on('click', function(){
    showProjects(challenges, $projectOriginalHeight);
  });

  function showProjects(list, height) {
    $('#thumbs').html('');

    for(var i = 0; i < list.length; i ++){
      var $thumb = $('<div>');
      // $thumb.addClass('col-xs-6');
      $thumb.addClass('col-md-6');
      $thumb.addClass('col-lg-4');
      $thumb.html('<div class="project-thumb">' +
          '<h3>' + list[i].title + '</h3>' +
          '<img src="' + list[i].img + '" alt="' + list[i].title + '" />' +
          '<p>' +
            list[i].description +
          '</p>' +
          '<h4>' +
            '<a class="fa fa-play-circle" href="' + list[i].appUrl + '" target="_blank"></a>' +
            '<a class="fa fa-github" href="' + list[i].githubUrl + '" target="_blank"></a>' +
          '</h4>' +
        '</div>');
      $('#thumbs').append($thumb);
    }

    $('#thumbs').hide();
    $('#thumbs').fadeIn('slow');

    var width = $(window).width();
    var setsOfThree = list.length / 3;
    if(width > 950 && setsOfThree != 1) {
      setsOfThree = (setsOfThree - 1) * 310;
      $('#projects').height(height + setsOfThree);
    } else if(width < 950 && list.length != 1) {
      $('#projects').height(height + ((list.length - 1) * 310));
    } else {
      $('#projects').height(height);
    }
  };

});
