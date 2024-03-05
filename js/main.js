// scrollspy
function scrollSpy() {
  var links = document.querySelectorAll('a[data-page]');
  links.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var pageId = this.getAttribute('data-page');
          var targetElement = document.getElementById(pageId);
          var targetOffset = targetElement.offsetTop;
          window.scrollTo({
              top: targetOffset,
              behavior: 'smooth'
          });
      });
  });
}

// Aggiunta di scrollspy per i link
scrollSpy();
