/**
 * @param {Element} element
 * @param {boolean} dontDisplayAgain
 */
function doNotCloseAlert(element, dontDisplayAgain=false) {
  if (!!dontDisplayAgain) {
    $(element).css('display', 'none'); 
  }
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
  setTimeout(() => bootstrap.Modal.getOrCreateInstance('#myAlertModal2').show(), 500);
}

$(async() => {
  const MY_ALERT_2_CONTENT = $('#myAlertModal2 .modal-content');
  const MY_ALERT_2_CONTENT_CLOSEBTN = $('#myAlertModal2 .btn-close');
  const DARK_CLASS = ['bg-dark', 'text-white'];
  for (let i = 0; ; i++) {
    await usleep(RandInt(50, 125));
    MY_ALERT_2_CONTENT.toggleClass(DARK_CLASS.join(' '));
    MY_ALERT_2_CONTENT_CLOSEBTN.toggleClass('btn-close-white');
  }
});