const terminalLines = [
  "Initializing cyberdeck...",
  "Boot sequence complete.",
  "Connecting to im-mcma@github.com...",
  "Access granted.",
  "",
  "Welcome, 𝕚𝕞_𝕒𝕓𝕚 🌙",
  "Code isn’t just syntax — it’s rebellion wrapped in logic.",
  "",
  "🔮 Who Am I?",
  " > A coder who explores beyond the docs.",
  " > I build weird, experimental, sometimes useless — but fun — tools.",
  " > I love creating things that shouldn't exist, but do.",
  "",
  "⚙️ Languages & Tools",
  " > Python | Rust | C++ | Java | Go | PHP",
  " > JavaScript | TypeScript | Shell | Lua | PowerShell",
  " > SQL | Swift | Haskell",
  "",
  "📡 Contact",
  " > Telegram: @im_abi_00",
  "",
  "Stay Weird. Stay Sharp. Stay 𝕚𝕞_𝕒𝕓𝕚 🌙"
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

async function runTerminalIntro() {
  for (const line of terminalLines) {
    await typeLine("> " + line);
    await new Promise((r) => setTimeout(r, 500));
  }
  terminalEl.classList.add("blink");
}

window.onload = runTerminalIntro;
