const terminalEl = document.getElementById("terminal-text");

const terminalLines = [
  "> Initializing cyberdeck...",
  "> Boot sequence complete.",
  "> Connecting to im-mcma@github.com...",
  "> Access granted.",
  "> Repositories loaded: 42",
  "> Last commit: 2 hours ago",
  "> Ready to disrupt the matrix.",
  "",
  "🔮 𝕚𝕞_𝕒𝕓𝕚 - Creative Coder",
  "------------------------------------------",
  "🧠 Exploring beyond docs & syntax.",
  "🧪 Building weird, chaotic, and fun tools.",
  "🎯 Creating what shouldn't exist, but does.",
  "",
  "⚙️ Languages & Tools:",
  "  • Python, Rust, C++, Java, Go, PHP",
  "  • JavaScript, TypeScript, Shell, PowerShell",
  "  • Lua, SQL, Swift, Haskell",
  "",
  "📡 Contact: Telegram @im_abi_00",
  "",
  "------------------------------------------",
  "> End of session."
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeLine(line, delay = 40) {
  const lineEl = document.createElement("div");
  
  // Add command line style if line starts with '>'
  if (line.startsWith(">")) {
    lineEl.classList.add("command-line");
  } else if (line.match(/^🔮|🧠|🧪|🎯|⚙️|📡/)) {
    lineEl.classList.add("about-line");
  }
  
  terminalEl.appendChild(lineEl);
  
  for (let i = 0; i < line.length; i++) {
    const span = document.createElement("span");
    span.textContent = line.charAt(i);
    
    // Add flicker effect for matrix chars randomly for command lines
    if (line.startsWith(">") && Math.random() < 0.1) {
      span.classList.add("matrix-char");
    }
    
    lineEl.appendChild(span);
    await sleep(delay);
  }
  terminalEl.appendChild(document.createElement("br"));
  terminalEl.scrollTop = terminalEl.scrollHeight;
}

async function runTerminal() {
  for (const line of terminalLines) {
    await typeLine(line);
    await sleep(500);
  }
}

window.onload = runTerminal;
