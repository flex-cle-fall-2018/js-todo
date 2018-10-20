(function() {

  const clock = document.getElementById('clock');

  setInterval(function() {
    
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();

  }, 1000);

})();