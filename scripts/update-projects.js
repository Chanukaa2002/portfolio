const fs = require("fs");
const path = require("path");

const projectsFile = path.join(__dirname, "../src/components/projects.jsx");

// 1. Extract current projects from projects.jsx
function getCurrentProjects() {
  const content = fs.readFileSync(projectsFile, "utf8");
  const match = content.match(/const projects = (\[.*?\]);/s);
  return match ? JSON.parse(match[1]) : [];
}

// 2. Fetch new projects from GitHub (passed from workflow)
const newProjects = JSON.parse(process.argv[2]);

// 3. Merge & deduplicate
const currentProjects = getCurrentProjects();
const updatedProjects = [...currentProjects];

newProjects.forEach((newProj) => {
  const exists = updatedProjects.some((p) => p.repoUrl === newProj.repoUrl);
  if (!exists) {
    updatedProjects.push({
      ...newProj,
      id: updatedProjects.length + 1,
      image: `https://opengraph.githubassets.com/${newProj.repoUrl.split("github.com/")[1]}`, // Auto GitHub image
    });
  }
});

// 4. Write back to projects.jsx
const newContent = `const projects = ${JSON.stringify(updatedProjects, null, 2)};\n\nexport default projects;`;
fs.writeFileSync(projectsFile, newContent);

console.log("✅ Projects updated successfully!");