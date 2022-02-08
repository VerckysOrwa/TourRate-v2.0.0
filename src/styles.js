const display = () => {
  const menuIcon = document.querySelector("#menu");
  menuIcon.addEventListener("click", () => {
    const links = document.querySelectorAll("nav a");
      links.forEach((link) => {
          link.style.visibility = "visible"
          
})
  });
};

display();
