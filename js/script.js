///*ERICSTERMER.COM*///

$(function(){

  ///NAV BUTTON CLICK FOR DROPDOWN MENU///
  $('#hamburger').on('click', function(){
    $('#dropdown-content').slideToggle();
  });

  ///NAV SCROLL FADE IN ABOUT WHEN REACH ABOUT///
  $(window).on('scroll', function(){
    var top = $(window).scrollTop();
    var width = $(window).width();

    //FADE IN/OUT ABOUT ME
    if(width > 950) {
      if(top > 440 && top < 1170){
        $('#container').fadeIn('slow');
      } else {
        $('#container').fadeOut('slow');
      }
    } else {
      if(top > 440 && top < 1950){
        $('#container').fadeIn('slow');
      } else {
        $('#container').fadeOut('slow');
      }
    }

    //FADE PROJECTS IN/OUT
    if(width > 950) {
      if(top > 1170){
        $('#btns').fadeIn('slow');
        $('#thumbs').fadeIn('slow');
        $('#projects-title').fadeIn('slow');
      } else {
        $('#btns').fadeOut('slow');
        $('#thumbs').fadeOut('slow');
        $('#projects-title').fadeOut('slow');
      }
    } else {
      if(top > 2050){
        $('#btns').fadeIn('slow');
        $('#thumbs').fadeIn('slow');
        $('#projects-title').fadeIn('slow');
      } else {
        $('#btns').fadeOut('slow');
        $('#thumbs').fadeOut('slow');
        $('#projects-title').fadeOut('slow');
      }
    }
  });

  $('#rails').on('click', function(){
    showProjects(railsProjects);
  });

  $('#mean').on('click', function(){
    showProjects(meanProjects);
  });

  $('#js').on('click', function(){
    showProjects(jsProjects);
  });

  $('#collab').on('click', function(){
    showProjects(contributions);
  });

  $('#school').on('click', function(){
    showProjects(challenges);
  });

  function showProjects(list) {
    $('#thumbs').html('');

    for(var i = 0; i < list.length; i ++){
      var $thumb = $('div');
      $thumb.addClass('project-thumb');
      $thumb.html(`
        <h3>${list[i].title}</h3>
        <img src="${list[i].img}" alt="${list[i].title}" />
        <p>
          ${list[i].description}
        </p>
        <h4>
          <a class="fa fa-play-circle" href="${list[i].appUrl}"></a>
          <a class="fa fa-github" href="${list[i].githubUrl}"></a>
        </h4>
      `);
      $('#thumbs').append($thumb);
    }

    var setOfThree = list.length%3;

  };


});
