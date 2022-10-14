const submenus = document.querySelectorAll(".has-submenu");

const toggleMenu = (e, el) => {
  e.preventDefault();
  if(el.classList.contains("open")) {
    el.classList.remove("open");
    el.setAttribute("aria-expanded", false);
  } else {
    el.classList.add("open");
    el.setAttribute("aria-expanded", true);
  }
}

// const shouldBlur = (el) => {
//   e.preventDefault();
//   let shouldBlur = true;

//   for(const link of nestedLinks) {
//     if(link === e.relatedTarget) {
//       shouldBlur = false;
//       break;
//     }
//   }

//   if(!shouldBlur) return;
//   if(el.classList.contains("open")) {
//     el.classList.remove("open");
//     el.setAttribute("aria-expanded", false);
//   }
// }

submenus.forEach((el) => {
  el.addEventListener("click", (e) => toggleMenu(e, el));
  el.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " ") toggleMenu(e, el)
  })
  const nestedLinks = el.querySelector("ul").querySelectorAll('a');

  el.addEventListener("blur", (e) => {
    let shouldBlur = true;
    for(const link of nestedLinks) {
      if(link === e.relatedTarget) {
        shouldBlur = false;
        break;
      }
    }
    
    if(!shouldBlur) return;
      if(el.classList.contains("open")) {
        el.classList.remove("open");
        el.setAttribute("aria-expanded", false);
      }
  })

  nestedLinks.forEach((link) => {
    link.addEventListener("blur", (e) => {
      e.preventDefault();
      let shouldBlur = true;

      for(const link of nestedLinks) {
        if(link === e.relatedTarget) {
          shouldBlur = false;
          break;
        }
      }

      if(!shouldBlur) return;
      if(el.classList.contains("open")) {
        el.classList.remove("open");
        el.setAttribute("aria-expanded", false);
      }
    })
  })
})


