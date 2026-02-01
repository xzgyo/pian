$(async() => {
  let j = true;
  for (let i = 0; ; i++) {
    await usleep(RandInt(25, 50));
    $('#topnav').attr('style', 'background-color:' + (j ? 'rgba(52, 58, 64, .85)' : 'rgba(248, 249, 250, .85)') + '!important');
    $('#topnav .navbar-brand').css('color', j ? 'white' : 'black');
    $('#bg').css('background-color', j ? 'white' : 'black');
    $('#mainText').css('color', j ? 'black' : 'white');
    j = !j;
  }
});