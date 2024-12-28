document.addEventListener("DOMContentLoaded", () => {
    const fadeSections = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Stop observing once it’s visible
          }
        });
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    fadeSections.forEach(section => {
      observer.observe(section);
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const fadeSections = document.querySelectorAll(".xp-point");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // Stop observing once it’s visible
          }
        });
      },
      {
        threshold: 0.1 // Trigger when 10% of the element is visible
      }
    );

    fadeSections.forEach(section => {
      observer.observe(section);
    });
  });

