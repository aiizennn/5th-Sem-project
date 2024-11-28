// Show the main content and hide the login modal after successful login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Simple validation logic (replace with real authentication if needed)
    if (username === "admin" && password === "password") {
      document.getElementById("loginModal").style.display = "none"; // Hide modal
      document.getElementById("mainContent").style.display = "block"; // Show main content
      toggleLoginState(true); // Switch to logged-in state
    } else {
      alert("Invalid username or password. Please try again.");
    }
}

// Handle registration form submission
function handleRegister(event) {
    event.preventDefault(); // Prevent form submission
    
    const regUsername = document.getElementById("regUsername").value;
    const regEmail = document.getElementById("regEmail").value;
    const regPassword = document.getElementById("regPassword").value;
    
    // Simple validation logic (you can add real registration logic here)
    if (regUsername && regEmail && regPassword) {
      alert("Registration successful!");
      showLoginForm(); // Switch back to login form after successful registration
    } else {
      alert("Please fill in all fields.");
    }
}

// Show Login form
function showLoginForm() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}

// Show Register form
function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

// Logout function
function logout() {
    // Reset UI to logged-out state
    document.getElementById("mainContent").style.display = "none"; // Hide main content
    document.getElementById("loginModal").style.display = "block"; // Show login modal
    toggleLoginState(false); // Switch to logged-out state
}

// Toggle login state (show/hide login and logout buttons)
function toggleLoginState(isLoggedIn) {
    const loginBtn = document.querySelector(".login-btn");
    const logoutBtn = document.querySelector(".logout-btn");

    if (isLoggedIn) {
      loginBtn.style.display = "none"; // Hide login button
      logoutBtn.style.display = "inline-block"; // Show logout button
    } else {
      loginBtn.style.display = "inline-block"; // Show login button
      logoutBtn.style.display = "none"; // Hide logout button
    }
}

// Open the login modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

// Close the login modal
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
};

// Show the Upload section
function showUploadSection() {
  document.getElementById("upload").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
}

// Show the Dashboard section
function showDashboard() {
  document.getElementById("upload").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  loadDashboardData(); // Load mock data when the dashboard is shown
}

// Mock Data for Document Verification
function loadDashboardData() {
  const mockData = [
    {
      documentName: "Passport",
      status: "Verified",
      dateSubmitted: "2024-11-15",
      verifiedBy: "admin"
    },
    {
      documentName: "Driver's License",
      status: "Pending",
      dateSubmitted: "2024-11-16",
      verifiedBy: "admin"
    },
    {
      documentName: "ID Card",
      status: "Verified",
      dateSubmitted: "2024-11-14",
      verifiedBy: "admin"
    }
  ];

  const dashboardDataTable = document.getElementById("dashboardData");
  dashboardDataTable.innerHTML = ""; // Clear any existing rows

  // Populate the dashboard with mock data
  mockData.forEach(data => {
    const row = document.createElement("tr");

    const cell1 = document.createElement("td");
    cell1.textContent = data.documentName;
    row.appendChild(cell1);

    const cell2 = document.createElement("td");
    cell2.textContent = data.status;
    row.appendChild(cell2);

    const cell3 = document.createElement("td");
    cell3.textContent = data.dateSubmitted;
    row.appendChild(cell3);

    const cell4 = document.createElement("td");
    cell4.textContent = data.verifiedBy;
    row.appendChild(cell4);

    dashboardDataTable.appendChild(row);
  });
}


// Flip to Register Form
function flipToRegister() {
    const formContainer = document.getElementById("formContainer");
    formContainer.classList.add("flip");
  }
  
  // Flip to Login Form
  function flipToLogin() {
    const formContainer = document.getElementById("formContainer");
    formContainer.classList.remove("flip");
  }
  

  // Navigate to the Upload Documents section
function navigateToUpload() {
    // Hide the welcome screen
    document.getElementById("welcomeScreen").style.display = "none";
  
    // Show the upload section
    document.getElementById("uploadSection").style.display = "block";
  }
  
  document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const passport = document.getElementById("passport").files[0];
    const idCard = document.getElementById("idCard").files[0];
  
    // Basic validation
    if (!fullName || !email || !phone || !passport || !idCard) {
      alert("Please fill in all required fields and upload the necessary documents.");
      return;
    }
  
    // Handle form data (e.g., send to server or show success message)
    alert("Form submitted successfully!");
  });

  
  document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const passport = document.getElementById("passport").files[0];
    const idType = document.getElementById("idType").value;
    const idCard = document.getElementById("idCard").files[0];
  
    // Basic validation
    if (!fullName || !email || !phone || !passport || !idType || !idCard) {
      alert("Please fill in all required fields and upload the necessary documents.");
      return;
    }
  
    alert(`Form submitted successfully with ID type: ${idType}`);
  });

  
  document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const passport = document.getElementById("passport").files[0];
    const idType = document.getElementById("idType").value;
    const idNumber = document.getElementById("idNumber").value;
    const idCard = document.getElementById("idCard").files[0];
  
    // Basic validation
    if (!fullName || !email || !phone || !idType || !idNumber || !idCard) {
      alert("Please fill in all required fields and upload the necessary documents.");
      return;
    }
  
    alert(`Form submitted successfully!
  - Name: ${fullName}
  - Email: ${email}
  - Phone: ${phone}
  - Selected ID: ${idType}
  - ID Number: ${idNumber}`);
  });

  
  document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const formData = new FormData(document.getElementById("uploadForm"));
  
    // Validate required fields
    if (
      !formData.get("fullName") ||
      !formData.get("email") ||
      !formData.get("phone") ||
      !formData.get("address") ||
      !formData.get("addressProof") ||
      !formData.get("idType") ||
      !formData.get("idNumber") ||
      !formData.get("idCard") ||
      !formData.get("marks10") ||
      !formData.get("marks10File") ||
      !formData.get("marks12") ||
      !formData.get("marks12File")
    ) {
      alert("Please fill in all required fields and upload the necessary documents.");
      return;
    }
  
    alert("Form submitted successfully!");
  });

  
  