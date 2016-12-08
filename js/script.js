///*ERICSTERMER.COM*///

var railsProjects = [
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
];
var meanProjects = [
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
];
var jsProjects = [
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
];
var challenges = [
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
];
var contributions = [
  {
    title: "",
    appUrl: "",
    githubUrl: "",
    description: "",
    tech: "",
  },
];

$(function(){


  ///NAV BUTTON CLICK FOR DROPDOWN MENU///
  $('#hamburger').on('click', function(){
    $('#dropdown-content').slideToggle();
  });
  
  ///NAV SCROLL FADE IN ABOUT WHEN REACH ABOUT///
  $(window).on('scroll', function(){
    var top = $(window).scrollTop();
    var width = $(window).width();
    if(width > 950) {
      if(top > 440 && top < 1170){  
        $('#container').fadeIn('slow');
      } else {
        $('#container').fadeOut('slow');
      }
    } else {
      if(top > 440 && top < 1850){  
        $('#container').fadeIn('slow');
      } else {
        $('#container').fadeOut('slow');
      }
    }
  });
});
