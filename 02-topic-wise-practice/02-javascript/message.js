// Function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Aruna"));

// Class
class Student {
    constructor(name, rollNo, branch) {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }

    displayDetails() {
        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
        console.log("Branch: " + this.branch);
    }
}

// Creating multiple objects from the same class
const student1 = new Student("Aruna", 101, "AIML");
const student2 = new Student("Priya", 102, "CSE");
const student3 = new Student("Divya", 103, "ECE");

student1.displayDetails();
student2.displayDetails();
student3.displayDetails();