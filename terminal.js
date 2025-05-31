const terminalLines = [
  "Initializing cyberdeck...",
  "Boot sequence complete.",
  "Connecting to im-mcma@github.com...",
  "Access granted.",
  "Repositories loaded: 42",
  "Last commit: 2 hours ago",
  "Ready to disrupt the matrix."
];

const terminalEl = document.getElementById("terminal-text");

function typeLine(line, delay = 50) {
  return new Promise((resolve) => {
    let i = 0;
    function type() {
      if (i < line.length) {
        terminalEl.textContent += line.charAt(i);
        i++;
        setTimeout(type, delay);
      } else {
        terminalEl.textContent += "\n";
        resolve();
      }
    }
    type();
  });
}

async function runTerminal() {
  while (true) {
    terminalEl.textContent = "";
    for (const line of terminalLines) {
      await typeLine(line);
    }
    await new Promise((r) => setTimeout(r, 3000));
  }
}

runTerminal();
