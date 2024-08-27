document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signUpForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const   UserName = document.getElementById('UserName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const dob = document.getElementById('dob').value;
        const gender = document.getElementById('gender').value;

        const passwordHelp = document.getElementById('passwordHelp');
        const confirmPasswordHelp = document.getElementById('confirmPasswordHelp');

        // Password requirements: 8-20 characters long, letters and numbers, no spaces or emojis
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/;

        if (!passwordPattern.test(password)) {
            passwordHelp.style.color = 'red';
            passwordHelp.textContent = "Password must be 8-20 characters long, contain letters and numbers, and must not contain spaces or emoji.";
            return;
        } else {
            passwordHelp.style.color = 'green';
            passwordHelp.textContent = "Password meets the requirements.";
        }

        if (password !== confirmPassword) {
            confirmPasswordHelp.style.color = 'red';
            confirmPasswordHelp.textContent = "Passwords do not match!";
            return;
        } else {
            confirmPasswordHelp.style.color = 'green';
            confirmPasswordHelp.textContent = "Passwords match.";
        }

        // Simulate form submission
        alert(`Sign Up Successful!\nName: ${fullName}\nEmail: ${email}\nDOB: ${dob}\nGender: ${gender}`);
        
        // You can add code here to submit the form data to a server
    });
});

document.getElementById('preferencesForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get all selected preferences
    let preferences = [];
    const checkboxes = document.getElementsByName('preference');
    
    checkboxes.forEach(function(checkbox) {
      if (checkbox.checked) {
        preferences.push(checkbox.value);
      }
    });
  
    // Display checklist
    displayChecklist(preferences);
  });
  
  document.getElementById('imageUpload').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const previewImage = document.getElementById('previewImage');
        previewImage.src = e.target.result;
        previewImage.style.display = 'block';
      }
      reader.readAsDataURL(file);
    }
  });
  
  function displayChecklist(preferences) {
    const checklistOutput = document.getElementById('checklistOutput');
    checklistOutput.innerHTML = ''; // Clear previous checklist
    
    if (preferences.length === 0) {
      checklistOutput.textContent = 'No preferences selected.';
    } else {
      const ul = document.createElement('ul');
      preferences.forEach(function(preference) {
        const li = document.createElement('li');
        li.textContent = preference;
        ul.appendChild(li);
      });
      checklistOutput.appendChild(ul);
    }
  }
  

