const stateCityMap = {
    "Gujarat": ["Ahmedabad", "Vadodara", "Surat"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Delhi": ["New Delhi", "Dwarka", "Rohini"]
  };

  const programSpecializationMap = {
      "Diploma": ["Pharmacy", "Medical Lab Tech", "Physiotherapy"],
    "Engineering": ["Computer Science", "Information Technology", "Mechanical", "Civil"],
    "Management": ["Marketing", "Finance", "Human Resources"],
  };



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


document.addEventListener("DOMContentLoaded", function () {
    const stateSelect = document.getElementById("state");
    const citySelect = document.getElementById("city");
    const programSelect = document.getElementById("program");
    const specializationSelect = document.getElementById("specialization");

    stateSelect.addEventListener("change", function () {
      const selectedState = this.value;
      const cities = stateCityMap[selectedState] || [];
      citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
      cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    });

    programSelect.addEventListener("change", function () {
      const selectedProgram = this.value;
      const specs = programSpecializationMap[selectedProgram] || [];
      specializationSelect.innerHTML = '<option value="" disabled selected>Select Specialization</option>';
      specs.forEach(spec => {
        const option = document.createElement("option");
        option.value = spec;
        option.textContent = spec;
        specializationSelect.appendChild(option);
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

        if (scrollTop === 0) {
            enquiryContainer.classList.add('active');
            enquiryForm.classList.remove('scrolled'); // transparent blur at top
        } else {
            enquiryContainer.classList.remove('active');
            enquiryForm.classList.add('scrolled'); // solid dark background on scroll
        }
    }
});


// smooth scrolling
