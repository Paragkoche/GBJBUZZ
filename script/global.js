window.addEventListener('scroll', function() {
    var header = document.getElementById('myHeader');
    if (window.pageYOffset > 0) {
      header.style.height = '120px';
    } else {
      header.style.height = '198px';
    }
  });
  