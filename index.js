document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  hamburgerBtn.addEventListener('click', function() {
      this.classList.toggle('is-active');
  });

  const navSub = document.querySelector(".navSub");
  handleMenu = () => {
      navSub.classList.toggle('navElements');
  }

  const area = document.querySelector(".area");
  const cursor = document.querySelector("#cursor");
  const navBar=document.querySelector(".navBar");
  const myCv=document.querySelector(".myCv");
  const contact=document.querySelector("#contact");
  
  const icons=document.querySelector(".domainContainer");



  function updateCursorPosition(event) {
      gsap.to(cursor, {
          x: event.clientX,
          y: event.clientY + window.scrollY, 
      });
  }

  area.addEventListener("mousemove", updateCursorPosition);

  area.addEventListener("mouseleave", function() {
      gsap.to(cursor, {
          scale: 0,
      });
  });

  area.addEventListener("mouseenter", function() {
      gsap.to(cursor, {
          scale: 1,
      });
  });
  myCv.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        scale: 1,
    });
});

myCv.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
        scale: 0,
    });
});
contact.addEventListener("mouseleave", function() {
  gsap.to(cursor, {
      scale: 1,
  });
});

contact.addEventListener("mouseenter", function() {
  gsap.to(cursor, {
      scale: 0,
  });
});
icons.addEventListener("mouseleave", function() {
  gsap.to(cursor, {
      scale: 1,
  });
});

icons.addEventListener("mouseenter", function() {
  gsap.to(cursor, {
      scale: 0,
  });
});
  
  

  navBar.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
        scale: 1,
    });
    navBar.addEventListener("mouseenter", function() {
      gsap.to(cursor, {
          scale: 0,
      });
  });
  
  
});

  window.addEventListener("scroll", function() {
      updateCursorPosition({ clientX: event.clientX, clientY: event.clientY });
  });
});
