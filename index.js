document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
  
    hamburgerBtn.addEventListener('click', function() {
      this.classList.toggle('is-active');
    });

    const navSub=document.querySelector(".navSub");
    handleMenu=()=>{
        navSub.classList.toggle('navElements');
    }
  });
