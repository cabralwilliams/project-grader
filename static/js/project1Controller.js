//Name and gather variables
let teamMembers = [];
let teamName = "";
const teamInfo = document.querySelector("#teamInfo");
const teamInput = document.querySelector("#teamName");
const memberInput = document.querySelector("#memberName");
const teamBtn = document.querySelector("#registerTeamName");
const memberBtn = document.querySelector("#addTeamMember");

//Report Variable
let allComments = [];

//Input html elements
const technical1 = document.getElementById("technical1");
const technical1Comments = document.getElementById("technical1Comments");

const technical2 = document.getElementById("technical2");
const technical2Comments = document.getElementById("technical2Comments");

const technical3 = document.getElementById("technical3");
const technical3Comments = document.getElementById("technical3Comments");

const technical4 = document.getElementById("technical4");
const technical4Comments = document.getElementById("technical4Comments");

const technical5 = document.getElementById("technical5");
const technical5Comments = document.getElementById("technical5Comments");

const concept1 = document.getElementById("concept1");
const concept1Comments = document.getElementById("concept1Comments");

const concept2 = document.getElementById("concept2");
const concept2Comments = document.getElementById("concept2Comments");

const deployment1 = document.getElementById("deployment1");
const deployment1Comments = document.getElementById("deployment1Comments");

const deployment2 = document.getElementById("deployment2");
const deployment2Comments = document.getElementById("deployment2Comments");

const repository1 = document.getElementById("repository1");
const repository1Comments = document.getElementById("repository1Comments");

const repository2 = document.getElementById("repository2");
const repository2Comments = document.getElementById("repository2Comments");

const repository3 = document.getElementById("repository3");
const repository3Comments = document.getElementById("repository3Comments");

const repository4 = document.getElementById("repository4");
const repository4Comments = document.getElementById("repository4Comments");

const repository5 = document.getElementById("repository5");
const repository5Comments = document.getElementById("repository5Comments");

const appQuality1 = document.getElementById("appQuality1");
const appQuality1Comments = document.getElementById("appQuality1Comments");

const appQuality2 = document.getElementById("appQuality2");
const appQuality2Comments = document.getElementById("appQuality2Comments");

const appQuality3 = document.getElementById("appQuality3");
const appQuality3Comments = document.getElementById("appQuality3Comments");

const presentation1 = document.getElementById("presentation1");
const presentation1Comments = document.getElementById("presentation1Comments");

const presentation2 = document.getElementById("presentation2");
const presentation2Comments = document.getElementById("presentation2Comments");

const presentation3 = document.getElementById("presentation3");
const presentation3Comments = document.getElementById("presentation3Comments");

const collaboration1 = document.getElementById("collaboration1");
const collaboration1Comments = document.getElementById("collaboration1Comments");

const academicIntegrityComments = document.getElementById("academicIntegrityComments");

//Html display elements
const technicalScoreDiv = document.getElementById("technicalScoreDiv");
const conceptScoreDiv = document.getElementById("conceptScoreDiv");
const deploymentScoreDiv = document.getElementById("deploymentScoreDiv");
const repositoryScoreDiv = document.getElementById("repositoryScoreDiv");
const appQualityScoreDiv = document.getElementById("appQualityScoreDiv");
const presentationScoreDiv = document.getElementById("presentationScoreDiv");
const collaborationScoreDiv = document.getElementById("collaborationScoreDiv");

//Update Scores button
const updateScores = document.getElementById("updateScores");

//Default Checkboxes
const techCheck1 = document.getElementById("techCheck1");
const techCheck2 = document.getElementById("techCheck2");
const techCheck3 = document.getElementById("techCheck3");
const techCheck4 = document.getElementById("techCheck4");
const techCheck5 = document.getElementById("techCheck5");
const conceptCheck1 = document.getElementById("conceptCheck1");
const conceptCheck2 = document.getElementById("conceptCheck2");
const deployCheck1 = document.getElementById("deployCheck1");
const deployCheck2 = document.getElementById("deployCheck2");
const repoCheck1 = document.getElementById("repoCheck1");
const repoCheck2 = document.getElementById("repoCheck2");
const repoCheck3 = document.getElementById("repoCheck3");
const repoCheck4 = document.getElementById("repoCheck4");
const repoCheck5 = document.getElementById("repoCheck5");
const qualityCheck1 = document.getElementById("qualityCheck1");
const qualityCheck2 = document.getElementById("qualityCheck2");
const qualityCheck3 = document.getElementById("qualityCheck3");
const presentCheck1 = document.getElementById("presentCheck1");
const presentCheck2 = document.getElementById("presentCheck2");
const presentCheck3 = document.getElementById("presentCheck3");
const collabCheck1 = document.getElementById("collabCheck1");
const collabCheck2 = document.getElementById("collabCheck2");

const submitForm = document.getElementById("submitForm");
const submitBtn = document.getElementById("submitBtn");

function populateTeamInfo() {
    if(teamName === "" && teamMembers.length === 0) {
        //This will always run when first launching application
        const infoP = document.createElement("p");
        infoP.textContent = "There is currently neither a name nor members of the team in question.  Please provide this information using the included forms.";
        teamInfo.innerHTML = "";
        teamInfo.appendChild(infoP);
        submitBtn.disabled = true;
    } else {
        teamInfo.innerHTML = "";
        const teamHeader = document.createElement("h3");
        teamHeader.classList = ["text-center"];
        if(teamName === "") {
            teamHeader.classList.add("text-danger");
            teamHeader.textContent = "No Team Name Selected!";
            const infoP = document.createElement("p");
            infoP.textContent = "You must enter a valid team name to save this project score.";
            teamInfo.append(teamHeader, infoP);
            submitBtn.disabled = true;
        } else {
            teamHeader.classList.add("text-success");
            teamHeader.textContent = `Team Name: ${teamName}`;
            const infoP = document.createElement("p");
            infoP.textContent = "(The team name has been stored.  Feel free to change it if you wish.)";
            teamInfo.append(teamHeader, infoP);
            submitBtn.disabled = teamMembers.length === 0;
        }
        const memberHeader = document.createElement("h3");
        memberHeader.classList = ["text-center"];
        if(teamMembers.length === 0) {
            memberHeader.classList.add("text-danger");
            memberHeader.textContent = "No Members Added!";
            const infoP2 = document.createElement("p");
            infoP2.textContent = "A team must have at least one member.  Please use the form to add a member.";
            teamInfo.append(memberHeader, infoP2);
            submitBtn.disabled = true;
        } else {
            memberHeader.classList.add("text-success");
            memberHeader.textContent = "Current Team Members";
            const buttonContainer = document.createElement("div");
            buttonContainer.id = "buttonContainer";
            buttonContainer.className = "d-flex flex-wrap justify-content-evenly";
            for(let i = 0; i < teamMembers.length; i++) {
                const nextButton = createMemberButton(teamMembers[i]);
                if(nextButton) {
                    buttonContainer.appendChild(nextButton);
                }
            }
            buttonContainer.addEventListener("click", event => {
                const eventTarget = event.target;
                if(eventTarget.matches(".btn")) {
                    console.log("A button was pushed.");
                    const btnName = eventTarget.textContent.substring(0, eventTarget.textContent.length - 18);
                    console.log(btnName);
                    teamMembers = teamMembers.filter(currentName => currentName !== btnName);
                    populateTeamInfo();
                }
            });
            teamInfo.append(memberHeader, buttonContainer);
            submitBtn.disabled = teamName === "";
        }
    }
}

function createMemberButton(memberName) { 
    if(!memberName || memberName === "") {
        return null;
    }
    const memberButton = document.createElement("button");
    memberButton.className = `btn btn-danger col-md-4 col-6 mx-1 my-1`;
    memberButton.textContent = `${memberName} (Click to remove)`;
    return memberButton;
}

populateTeamInfo();

memberBtn.addEventListener('click', () => {
    const typedMember = memberInput.value.trim();
    if(typedMember) {
        //Check to see if this is a duplicate member name
        const duplicate = teamMembers.includes(typedMember);
        if(!duplicate) {
            teamMembers.push(typedMember);
        }
        populateTeamInfo();
        memberInput.value = "";
    }
});

teamBtn.addEventListener('click', () => {
    teamName = teamInput.value.trim();
    populateTeamInfo();
    teamInput.value = "";
});

console.log((new Date()).toISOString());

function getTechnicalScore() {
    let technicalScore = 0;
    technicalScore += parseInt(technical1.value);
    technicalScore += parseInt(technical2.value);
    technicalScore += parseInt(technical3.value);
    technicalScore += parseInt(technical4.value);
    technicalScore += parseInt(technical5.value);
    return technicalScore;
}

function getConceptScore() {
    let conceptScore = 0;
    conceptScore += parseInt(concept1.value);
    conceptScore += parseInt(concept2.value);
    return conceptScore;
}

function getDeploymentScore() {
    let deploymentScore = 0;
    deploymentScore += parseInt(deployment1.value);
    deploymentScore += parseInt(deployment2.value);
    return deploymentScore;
}

function getRepositoryScore() {
    let repositoryScore = 0;
    repositoryScore += parseInt(repository1.value);
    repositoryScore += parseInt(repository2.value);
    repositoryScore += parseInt(repository3.value);
    repositoryScore += parseInt(repository4.value);
    repositoryScore += parseInt(repository5.value);
    return repositoryScore;
}

function getAppQualityScore() {
    let appQualityScore = 0;
    appQualityScore += parseInt(appQuality1.value);
    appQualityScore += parseInt(appQuality2.value);
    appQualityScore += parseInt(appQuality3.value);
    return appQualityScore;
}

function getPresentationScore() {
    let presentationScore = 0;
    presentationScore += parseInt(presentation1.value);
    presentationScore += parseInt(presentation2.value);
    presentationScore += parseInt(presentation3.value);
    return presentationScore;
}

function getCollaborationScore() {
    return parseInt(collaboration1.value);
}

function getCurrentScore() {
    let currentScore = 0;
    currentScore += getTechnicalScore();
    currentScore += getConceptScore();
    currentScore += getDeploymentScore();
    currentScore += getRepositoryScore();
    currentScore += getAppQualityScore();
    currentScore += getPresentationScore();
    currentScore += getCollaborationScore();
    return currentScore;
}

function createListElement(commentText) {
    const liEl = document.createElement("li");
    liEl.textContent = commentText;
    return liEl;
}

function updateScoreAndComment(projectArea) { 
    const newDiv = document.createElement("div");
    newDiv.className = "d-flex flex-column align-items-center";
    const newH = document.createElement("h4");
    const newUl = document.createElement("ul");

    switch(projectArea) {
        case "technical":
            technicalScoreDiv.innerHTML = "";
            newH.textContent = `Score: ${getTechnicalScore()}/25`;
            if(technical1Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = technical1Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(technical1Comments.value);
            }
            if(techCheck1.checked) {
                console.log("Application doesn't use at least 2 server-side APIs");
                allComments.push("Application doesn't use at least 2 server-side APIs");
            }
            if(technical2Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = technical2Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(technical2Comments.value);
            }
            if(techCheck2.checked) {
                allComments.push("Application doesn't use client-side storage to store persistent data");
            }
            if(technical3Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = technical3Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(technical3Comments.value);
            }
            if(techCheck3.checked) {
                allComments.push("Application should use modals instead JS alerts, prompts, and confirms");
            }
            if(technical4Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = technical4Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(technical4Comments.value);
            }
            if(techCheck4.checked) {
                allComments.push("Application should use CSS framework other than Bootstrap");
            }
            if(technical5Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = technical5Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(technical5Comments.value);
            }
            if(techCheck5.checked) {
                allComments.push("Application should be interactive (ie should accept and respond to user input)");
            }
            technicalScoreDiv.append(newH, newUl);
            break;
        case "concept":
            conceptScoreDiv.innerHTML = "";
            newH.textContent = `Score: ${getConceptScore()}/10`;
            if(concept1Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = concept1Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(concept1Comments.value);
            }
            if(conceptCheck1.checked) {
                allComments.push("The project concept could have been more novel");
            }
            if(concept2Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = concept2Comments.value;
                newUl.appendChild(nextLi, newUl);
                allComments.push(concept2Comments.value);
            }
            if(conceptCheck2.checked) {
                allComments.push("Group could have more clearly and concisely articulated project idea");
            }
            conceptScoreDiv.append(newH);
            break;
        case "deployment":
            deploymentScoreDiv.innerHTML = "";
            newH.textContent = `Score: ${getDeploymentScore()}/20`;
            if(deployment1Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = deployment1Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(deployment1Comments.value);
            }
            if(deployCheck1.checked) {
                allComments.push("Group did not demo project using live application URL");
            }
            if(deployment2Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = deployment2Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(deployment2Comments.value);
            }
            if(deployCheck2.checked) {
                allComments.push("Missing GitHub submission URL");
            }
            deploymentScoreDiv.append(newH, newUl);
            break;
        case "repository":
            repositoryScoreDiv.innerHTML = "";
            newH.textContent = `Score: ${getRepositoryScore()}/10`;
            if(repository1Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = repository1Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(repository1Comments.value);
            }
            if(repoCheck1.checked) {
                allComments.push("Repo doesn't have a unique name");
            }
            if(repository2Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = repository2Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(repository2Comments.value);
            }
            if(repoCheck2.checked) {
                allComments.push("Code doesn't follow recommended file/folder structure");
            }
            if(repository3Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = repository3Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(repository3Comments.value);
            }
            if(repoCheck3.checked) {
                allComments.push("Code doesn't follow good practices for variable names, indentation, lacks quality comments");
            }
            if(repository4Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = repository4Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(repository4Comments.value);
            }
            if(repoCheck4.checked) {
                allComments.push("Repo doesn't contain multiple descriptive commit messages");
            }
            if(repository5Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = repository5Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(repository5Comments.value);
            }
            if(repoCheck5.checked) {
                allComments.push("Repo doesn't include a high quality README with screenshots, a description, link to deployed application");
            }
            repositoryScoreDiv.append(newH, newUl);
            break;
        case "application":
            appQualityScoreDiv.innerHTML = "";
            newH.textContent = `Score: ${getAppQualityScore()}/15`;
            if(appQuality1Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = appQuality1Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(appQuality1Comments.value);
            }
            if(qualityCheck1.checked) {
                allComments.push("Application user experience could be more intuitive");
            }
            if(appQuality2Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = appQuality2Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(appQuality2Comments.value);
            }
            if(qualityCheck2.checked) {
                allComments.push("Application user interface needs work");
            }
            if(appQuality3Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = appQuality3Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(appQuality3Comments.value);
            }
            if(qualityCheck3.checked) {
                allComments.push("Application is not responsive");
            }
            appQualityScoreDiv.append(newH, newUl);
            break;
        case "presentation":
            presentationScoreDiv.innerHTML = "";
            newH.textContent = `Score: ${getPresentationScore()}/10`;
            if(presentation1Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = presentation1Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(presentation1Comments.value);
            }
            if(presentCheck1.checked) {
                allComments.push("Group did not present using a slide deck");
            }
            if(presentation2Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = presentation2Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(presentation2Comments.value);
            }
            if(presentCheck2.checked) {
                allComments.push("Not every group member spoke during the presentation");
            }
            if(presentation3Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = presentation3Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(presentation3Comments.value);
            }
            if(presentCheck3.checked) {
                allComments.push("Presentation didn't follow Project Presentation Template");
            }
            presentationScoreDiv.append(newH, newUl);
            break;
        case "collaboration":
            collaborationScoreDiv.innerHTML = "";
            newH.textContent = `Score: ${getCollaborationScore()}/10`;
            if(collaboration1Comments.value !== "") {
                let nextLi = document.createElement("li");
                nextLi.textContent = collaboration1Comments.value;
                newUl.appendChild(nextLi);
                allComments.push(collaboration1Comments.value);
            }
            if(collabCheck1.checked) {
                allComments.push("There are some disparities in the number of GitHub contributions between group members");
            }
            if(collabCheck2.checked) {
                allComments.push("There are major disparities in the number of GitHub contributions between group members");
            }
            collaborationScoreDiv.append(newH, newUl);
            break;
        default:
            break;
    }
}

function updateScoresAndComments() {
    const currentScore = getCurrentScore();
    updateScoreAndComment("technical");
    updateScoreAndComment("concept");
    updateScoreAndComment("deployment");
    updateScoreAndComment("repository");
    updateScoreAndComment("application");
    updateScoreAndComment("presentation");
    updateScoreAndComment("collaboration");
}

updateScores.addEventListener("click", () => {
    //Empty comments each time button is clicked
    allComments = [];
    updateScoresAndComments();
    console.log(allComments.join("\n"));
});

// setInterval(() => {
//     console.log(getCurrentScore());
// }, 30000);

submitForm.addEventListener('submit', async event => {
    event.preventDefault();
    const projectReport = {
        teamName,
        teamMembers,
        comments: allComments.join("\n"),
        totalScore: getCurrentScore(),
        technicalScore: getTechnicalScore(),
        conceptScore: getConceptScore(),
        deploymentScore: getDeploymentScore(),
        repositoryScore: getRepositoryScore(),
        applicationQualityScore: getAppQualityScore(),
        presentationScore: getPresentationScore(),
        collaborationScore: getCollaborationScore()
    };

    const response = await fetch('/project1', {
        method: "POST",
        body: JSON.stringify(projectReport),
        headers: { "Content-Type": "application/json" }
    });

    if(response.ok) {
        alert("The data was successfully received!");
    } else {
        alert("Sorry, we encountered an error.");
    }
});