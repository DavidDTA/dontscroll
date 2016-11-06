window.onmousemove = function() {
  if (window.location.pathname == '/') {
    window.document.body.remove();
  }
};
window.onmouseup = function() {
  window.setTimeout(window.onmousemove, 100);
};
window.onmousemove();
