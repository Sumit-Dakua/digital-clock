const heading = document.querySelector('#clock');


  setInterval(() => {
    let now = new Date();
    heading.innerHTML = now.toLocaleString(undefined, {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    
  }, 1000);
