# Git & GitHub Setup Guide 🚀

Aa guide tamara local project ne GitHub (remote) par easily upload karva mate banavel chhe. 

## 🧠 Basic Samjhuti
* **Local** ==> Tamaru Computer (Jya tame offline code lakho chho).
* **Remote** ==> GitHub Server (Jya tamaro code online save thase).

---

## 🛠️ Step-by-Step Process

### Step 1: Local (Computer) ma Project Banavo
Tamara computer ma tamara project nu folder banavo ane tema tamaro badho code lakhi ne ready rakho.

### Step 2: GitHub par Repo Banavo
1. GitHub par jao ane navi repository (Repo) create karo.
2. Repo banavya pachi, teni **URL link** aavse, te link ne **Copy** kari lo. 
*(Dakhla tarike: `https://github.com/username/repo-name.git`)*

---

## 💻 Terminal Commands

Tamara local project folder ma terminal open karo ane niche na commands ek pachi ek run karo:

```bash
# 1. Local folder ne Git repository banavva mate
git init

# 2. Local ne GitHub sathe jodva mate (Copy kareli link ahiya paste karo)
git remote add origin <tamari-github-link>

# 3. Badhi files ne GitHub par upload karva mate add karvi
git add .

# 4. Git nu status jovva (Kai files add thai chhe ane kai baki chhe te batave)
git status

# 5. Tamara changes ne ek message sathe save karva
git commit -m "First commit - Project setup"

# 6. Code ne GitHub par upload (push) karva mate
git push origin master