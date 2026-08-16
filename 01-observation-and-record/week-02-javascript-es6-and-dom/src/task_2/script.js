// Student class
class Student {
    constructor(name, rollNo, department, cgpa) {
        this.name = name;
        this.rollNo = rollNo;
        this.department = department;
        this.cgpa = cgpa;
    }
}

// Select DOM elements
const generateBtn = document.getElementById("generateBtn");
const profile = document.getElementById("profile");

// Event handling
generateBtn.addEventListener("click", function () {

    // Get user-provided values
    const name = document.getElementById("name").value;
    const rollNo = document.getElementById("rollNo").value;
    const department = document.getElementById("department").value;
    const cgpa = document.getElementById("cgpa").value;

    // Validation
    if (!name || !rollNo || !department || !cgpa) {
        alert("Please enter all student details.");
        return;
    }

    // Create Student object
    const student = new Student(name, rollNo, department, cgpa);

    // Clear previous profile
    profile.innerHTML = "";

    // Create elements dynamically
    const card = document.createElement("div");
    card.className = "student-card";

    const heading = document.createElement("h2");
    heading.textContent = "Student Profile";

    const namePara = document.createElement("p");
    namePara.textContent = "Name : " + student.name;

    const rollPara = document.createElement("p");
    rollPara.textContent = "Roll No : " + student.rollNo;

    const deptPara = document.createElement("p");
    deptPara.textContent = "Department : " + student.department;

    const cgpaPara = document.createElement("p");
    cgpaPara.textContent = "CGPA : " + student.cgpa;

    // Add elements to card
    card.appendChild(heading);
    card.appendChild(namePara);
    card.appendChild(rollPara);
    card.appendChild(deptPara);
    card.appendChild(cgpaPara);

    // Add card to webpage
    profile.appendChild(card);
});