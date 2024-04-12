// Function to add skills dynamically
function addSkill(skillType) {
    var container = document.getElementById(skillType + "-container");
    var newLabel = document.createElement("label");
    newLabel.htmlFor = skillType;
    newLabel.textContent = capitalizeFirstLetter(skillType.replace('-', ' '));
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.id = skillType;
    newInput.name = skillType;
    newInput.placeholder = "Enter " + skillType;
    container.appendChild(newLabel);
    container.appendChild(newInput);
  }
  
  // Function to capitalize first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function addHobby() {
      var container = document.getElementById("hobbies-container");
      var newInput = document.createElement("input");
      newInput.type = "text";
      newInput.name = "hobbies[]";
      newInput.placeholder = "Enter a new hobby";
      container.appendChild(newInput);
  }
  
  // Function to add certifications dynamically
  function addCertification() {
      var container = document.getElementById("certifications-container");
      var newInput = document.createElement("input");
      newInput.type = "text";
      newInput.name = "certifications[]";
      newInput.placeholder = "Enter a new certification";
      container.appendChild(newInput);
  }
  
  // Event listener for form submission
  document.getElementById("user-details-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Populate resume with user details
    document.getElementById("resume-name").innerText = document.getElementById("name").value;
    document.getElementById("resume-contact").innerText = document.getElementById("contact").value;
    document.getElementById("resume-email").innerText = document.getElementById("email").value;
    document.getElementById("resume-linkedin").innerText = document.getElementById("linkedin").value;
    document.getElementById("resume-professional-summary").innerText = document.getElementById("professional-summary").value;
  
    // Education Details
    var educationInputs = document.getElementsByName("education[]");
    var educationList = document.getElementById("resume-education");
    educationList.innerHTML = "";
    for (var i = 0; i < educationInputs.length; i++) {
        var listItem = document.createElement("li");
        listItem.innerText = educationInputs[i].value;
        educationList.appendChild(listItem);
    }
  
    // Technical Skills
    var technicalSkillsInputs = document.getElementsByName("technical-skills");
    var technicalSkillsList = document.getElementById("resume-technical-skills");
    technicalSkillsList.innerHTML = "";
    for (var i = 0; i < technicalSkillsInputs.length; i++) {
        var skill = technicalSkillsInputs[i].value.trim();
        if (skill !== "") {
            var listItem = document.createElement("li");
            listItem.innerText = skill;
            technicalSkillsList.appendChild(listItem);
        }
    }
  
    // Soft Skills
    var softSkillsInputs = document.getElementsByName("soft-skills");
    var softSkillsList = document.getElementById("resume-soft-skills");
    softSkillsList.innerHTML = "";
    for (var i = 0; i < softSkillsInputs.length; i++) {
        var skill = softSkillsInputs[i].value.trim();
        if (skill !== "") {
            var listItem = document.createElement("li");
            listItem.innerText = skill;
            softSkillsList.appendChild(listItem);
        }
    }
  
    // Projects
    var projectsSummary = document.getElementById("projects").value;
    document.getElementById("resume-projects").innerText = projectsSummary;
  
    // Hobbies
    var hobbiesInputs = document.getElementsByName("hobbies[]");
    var hobbiesList = document.getElementById("resume-hobbies");
    hobbiesList.innerHTML = "";
    for (var i = 0; i < hobbiesInputs.length; i++) {
        var hobby = hobbiesInputs[i].value.trim();
        if (hobby !== "") {
            var listItem = document.createElement("li");
            listItem.innerText = hobby;
            hobbiesList.appendChild(listItem);
        }
    }
  
    // Certifications
    var certificationsInputs = document.getElementsByName("certifications[]");
    var certificationsList = document.getElementById("resume-certifications");
    certificationsList.innerHTML = "";
    for (var i = 0; i < certificationsInputs.length; i++) {
        var certification = certificationsInputs[i].value.trim();
        if (certification !== "") {
            var listItem = document.createElement("li");
            listItem.innerText = certification;
            certificationsList.appendChild(listItem);
        }
    }
  
    // Show the resume section and add border outline
    var resumeSection = document.getElementById("resume");
    resumeSection.style.display = "block";
    resumeSection.style.border = "2px solid black"; // Border style: solid, thickness: 2px, color: black
  
    printResume(); // Print the resume
  });
  
  // Function to handle profile image click
  function handleProfileImageClick() {
      document.getElementById('profile-image-input').click();
  }
  
  // Function to display selected image as profile image
  document.getElementById('profile-image-input').addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              document.getElementById('profile-image').src = e.target.result;
          };
          reader.readAsDataURL(file);
      }
  });
  
  // Function to print the resume
  function printResume() {
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Printed Resume</title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write('<style>body {font-family: Arial, sans-serif;} .resume {border: 2px solid black; padding: 20px;} h1, h2, h3 {color: #3498db; background-color: #f9f9f9; padding: 8px; margin-top: 20px; border-left: 4px solid #3498db;} ul {list-style: none; padding: 0;} ul li {margin-bottom: 10px;} img {width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;} </style>');
    printWindow.document.write(document.getElementById("resume").innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
  