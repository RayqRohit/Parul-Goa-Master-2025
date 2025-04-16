
  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".programs-tab");
    const contents = document.querySelectorAll(".programs-tab-content");

    // Hide all tab contents initially
    contents.forEach(content => {
      content.style.display = "none";
    });

    // Show only the active one (bachelor by default)
    const defaultTab = document.querySelector(".programs-tab.active").dataset.tab;
    document.getElementById(defaultTab).style.display = "block";

    // Tab switching logic
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => (c.style.display = "none"));

        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).style.display = "block";
      });
    });
  });



//   enquiry form

const enquiryBtn = document.querySelector('.enquiry-btn');
  const enquiryContainer = document.querySelector('.enquiry-container');
  const enquiryForm = document.querySelector('.enquiry-form');

  // Toggle visibility manually
  enquiryBtn.addEventListener('click', () => {
    enquiryContainer.classList.toggle('active');
  });

  // Scroll logic for auto hide + background change
  window.addEventListener('scroll', () => {
    if (window.innerWidth > 600) {
      const scrollTop = window.scrollY;

      if (scrollTop ===0) {
        enquiryContainer.classList.add('active');
        enquiryForm.classList.remove('scrolled'); // transparent blur at top
      } else {
        enquiryContainer.classList.remove('active');
        enquiryForm.classList.add('scrolled'); // solid dark background on scroll
      }
    }
  });