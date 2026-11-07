# Mac setup (Phase 0, Day 2 — Sat 7 Nov)

Do these yourself in Terminal. Type the commands rather than pasting the whole block, and read what each one prints.

## 1. Command-line tools (Git, compilers)
```bash
xcode-select --install
git --version
```

## 2. Homebrew (package manager)
Install from https://brew.sh (copy the one-line command on that page), then:
```bash
brew --version
brew doctor
```

## 3. Node.js with nvm
Install nvm with the install script from https://github.com/nvm-sh/nvm (README → "Installing and Updating"), restart Terminal, then:
```bash
nvm install --lts
nvm alias default lts/*
node -v && npm -v
```

## 4. Terminal + editor
```bash
brew install --cask iterm2              # optional; built-in Terminal is fine
brew install --cask visual-studio-code
```
In VS Code: turn OFF inline AI suggestions (Copilot/AI autocomplete) for Phases 0–2.
Your shell is **zsh** — its config file is `~/.zshrc`.

## 5. Git identity
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main
```

## 6. Make this folder a repo and push it (your first Git task)
Create an empty repo called `engineering-journey` on GitHub, then from this folder:
`git init` → `git add` → `git commit` → `git remote add origin …` → `git push`.
Look up each command's meaning before running it.

---

## Later phases (don't install yet)

| Phase | Install |
| --- | --- |
| 3 | Docker Desktop for Mac (Apple Silicon or Intel) or OrbStack — Postgres + Redis run in Docker Compose |
| 3, 7 | Real Linux practice: `docker run -it ubuntu bash` (macOS uses BSD `sed`/`grep`; servers use GNU/Linux) |
| 5 | Screen reader test: VoiceOver (Cmd + F5) |
| 8 | `brew install uv` then `uv python install` |

## When to use the Windows machine
Only for optional testing: the NVDA screen reader, and checking apps in Edge / Windows font and scrollbar rendering before delivering to clients.
