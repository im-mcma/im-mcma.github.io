const logoText = "𝕚𝕞_𝕒𝕓𝕚🌙";
const terminalLines = [
  "Initializing cyberdeck...",
  "Loading neural scripts...",
  "Connecting to GitHub...",
  "User: im-mcma",
  "Repositories: 42",
  "Last commit: 2 hours ago",
  "Loading projects...",
  "Welcome to the future of coding."
];

const logoEl = document.getElementById("logo");
const terminalEl = document.getElementById("terminal-text");

function typeText(element, text, delay = 80) {
  return new Promise((resolve) => {
    let i = 0;
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, delay);
      } else {
        resolve();
      }
    }
    type();
  });
}

async function runTerminal() {
  // تایپ لوگو اول
  await typeText(logoEl, logoText, 150);
  logoEl.classList.add("blink");
  await new Promise(r => setTimeout(r, 800));
  logoEl.classList.remove("blink");

  // تایپ متن ترمینال خط به خط
  for (const line of terminalLines) {
    terminalEl.textContent += "\n> ";
    await typeText(terminalEl, line, 50);
    await new Promise(r => setTimeout(r, 500));
  }
}

window.onload = runTerminal;
