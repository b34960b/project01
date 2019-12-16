(function(){
  const gnb = $('.gnb');
  const gnbArea = gnb.children('ul.gnbM');
  const gnbArLi = gnbArea.children('li');
  const gnbTitleLink = gnbArLi.children('a');
  const gnbMenu = gnbArLi.children('ul');
  const menuLi = gnbMenu.children('li');
  const menuLink = menuLi.children('a');
  const win = $(window);
  const viewBox = $('#viewBox');
  const headBox = $('#headBox');


  let viewBoxOff = viewBox.offset().top;

  win.on('scroll', function(){
    let winScroll = win.scrollTop();
    if(winScroll > viewBoxOff){
      headBox.addClass('action');
      gnb.hide();
    }else{
      headBox.removeClass('action');
      gnb.show();
    }
  });

  // console.log(viewBoxOff);
  gnbTitleLink.on('mouseenter focus', function(){
    $(this).next('ul').slideDown();
    
    $(this).next('ul').children('li')
    .eq(-1).children('a').on('blur', function(){
      $(this).parent('li').parent('ul').slideUp();
    });
  });

  gnbArea.on('mouseleave', function(){
    $(this).find('ul').slideUp();
  });


//  마우스 올리면 스르르 나타나게 하기

  // const pmarea = $('.pm_img_area').children('a');
  // const pmspan = pmarea.find('span');
  // console.log(pmspan);


  //   pmarea.on('mouseenter',function(){
  //     $(this).find(pmspan).fadeIn();
  //   });




  

})(jQuery);