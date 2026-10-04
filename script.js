document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const redirectLinks = document.querySelectorAll(".redirect-link");
  redirectLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = link.dataset.redirect || "https://www.instagram.com/";
      event.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
    });
  });

  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});



































































































































































































































































































































































































































true;










































































































































































































































































































n;

























































































































































































































































































































































n;



































n;















































n;














n;




































n;

























n;
































n;























n;











n;
















n;

















n;













































n;










n;



n;








n;









n;









n;










n; 





















































n; 














n;















n;


n;












n;
















n;










n;

















n; 













nn;















n;
















n;










n;




n;










n;












n; 















n;














n;







n;








quit






n;





n;











n;








n;





n;


n;









n;









n;








n;








n;








n;








n;








n;

n;








n;








n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;

n;








n;








n;








n;








n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;

n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;


n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;


n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;


n;

n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;


n;

n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;



n;

n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n; 















n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;


n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;





n;

n;