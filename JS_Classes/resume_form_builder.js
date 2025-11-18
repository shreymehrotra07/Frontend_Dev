function buildResume() {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const skillsField = document.getElementById("skills");
    const githubField = document.getElementById("github");
    const linkedInField = document.getElementById("linkedin");
    const output = document.getElementById("output");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlPattern = /^https:\/\//;

    let valid = true;

    if (!emailPattern.test(emailField.value)) {
        emailField.style.border = "2px solid red";
        valid = false;
    } else {
        emailField.style.border = "2px solid green";
    }

    if (!urlPattern.test(githubField.value)) {
        githubField.style.border = "2px solid red";
        valid = false;
    } else {
        githubField.style.border = "2px solid green";
    }

    if (!urlPattern.test(linkedInField.value)) {
        linkedInField.style.border = "2px solid red";
        valid = false;
    } else {
        linkedInField.style.border = "2px solid green";
    }

    if (!valid) return;

    const resume = {
        name: nameField.value,
        email: emailField.value,
        skills: skillsField.value,
        github: githubField.value,
        linkedin: linkedInField.value
    };

    output.textContent = JSON.stringify(resume, null, 2);
}