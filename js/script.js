///*ERICSTERMER.COM*///

$(function(){

  var $projectOriginalHeight = $('#projects').height();

  ///NAV BUTTON CLICK FOR DROPDOWN MENU///
  $('#hamburger').on('click', function(){
    $('#dropdown-content').slideToggle();
  });

  ///NAV SCROLL FADE IN ABOUT WHEN REACH ABOUT///
  // $(window).on('scroll', function(){
  //   var top = $(window).scrollTop();
  //   var width = $(window).width();
  //
  //   //FADE IN/OUT ABOUT ME
  //   if(width > 991) {
  //     if(top > 440 && top < 1200){
  //       $('.about').fadeIn('slow');
  //     } else {
  //       $('.about').fadeOut('slow');
  //     }
  //   } else if (width < 992 && width > 575) {
  //     if(top > 440 && top < 1750){
  //       $('.about').fadeIn('slow');
  //     } else {
  //       $('.about').fadeOut('slow');
  //     }
  //   }
  //
  //   //FADE PROJECTS IN/OUT
  //   if(width > 991) {
  //     if(top > 1200){
  //       $('#btns').fadeIn('slow');
  //       $('#thumbs').fadeIn('slow');
  //       $('#projects-title').fadeIn('slow');
  //     } else {
  //       $('#btns').fadeOut('slow');
  //       $('#thumbs').fadeOut('slow');
  //       $('#projects-title').fadeOut('slow');
  //     }
  //   } else if (width < 992 && width > 575) {
  //     if(top > 1800){
  //       $('#btns').fadeIn('slow');
  //       $('#thumbs').fadeIn('slow');
  //       $('#projects-title').fadeIn('slow');
  //     } else {
  //       $('#btns').fadeOut('slow');
  //       $('#thumbs').fadeOut('slow');
  //       $('#projects-title').fadeOut('slow');
  //     }
  //   } else {}
  // });

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
      $thumb.html(`
        <div class="project-thumb">
          <h3>${list[i].title}</h3>
          <img src="${list[i].img}" alt="${list[i].title}" />
          <p>
            ${list[i].description}
          </p>
          <h4>
            <a class="fa fa-play-circle" href="${list[i].appUrl}" target="_blank"></a>
            <a class="fa fa-github" href="${list[i].githubUrl}" target="_blank"></a>
          </h4>
        </div>
      `);
      console.log($thumb);
      $('#thumbs').append($thumb);
    }

    $('#thumbs').hide();
    $('#thumbs').fadeIn('slow');

    var width = $(window).width();
    var setsOfThree = list.length / 3;
    console.log(setsOfThree);
    if(width > 950 && setsOfThree != 1) {
      setsOfThree = (setsOfThree - 1) * 310;
      console.log(height);
      console.log(setsOfThree);
      $('#projects').height(height + setsOfThree);
      console.log($('#projects').height());
    } else if(width < 950 && list.length != 1) {
      $('#projects').height(height + ((list.length - 1) * 310));
    } else {
      $('#projects').height(height);
    }
  };


});
