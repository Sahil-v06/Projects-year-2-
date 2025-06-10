function editInfo() {
    // Branch
    let branch = document.getElementById('branch');
    let finalBranch = document.getElementById('finalBranch');
    if (finalBranch.style.display === "none") {
        finalBranch.style.display = "block";
        branch.style.display = "none";
        if (branch.value !== '') {
            finalBranch.innerHTML = branch.value.toUpperCase();
        }
    } else {
        finalBranch.style.display = "none";
        branch.style.display = "block";
    }

    // Name
    let name = document.getElementById('name');
    let finalName = document.getElementById('finalName');
    if (finalName.style.display === "none") {
        finalName.style.display = "block";
        name.style.display = "none";
        if (name.value !== '') {
            finalName.innerHTML = name.value.toUpperCase();
        }
    } else {
        finalName.style.display = "none";
        name.style.display = "block";
    }

    // Roll No
    let rollNo = document.getElementById('rollNo');
    let finalRollNo = document.getElementById('finalRollNo');
    if (finalRollNo.style.display === "none") {
        finalRollNo.style.display = "block";
        rollNo.style.display = "none";
        if (rollNo.value !== '') {
            finalRollNo.innerHTML = rollNo.value;
        }
    } else {
        finalRollNo.style.display = "none";
        rollNo.style.display = "block";
    }

    // Course
    let course = document.getElementById('course');
    let finalCourse = document.getElementById('finalCourse');
    if (finalCourse.style.display === "none") {
        finalCourse.style.display = "block";
        course.style.display = "none";
        if (course.value !== '') {
            finalCourse.innerHTML = course.value.toUpperCase();
        }
    } else {
        finalCourse.style.display = "none";
        course.style.display = "block";
    }
}
