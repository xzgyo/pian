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