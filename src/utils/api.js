import fetch from 'node-fetch';

async function fetchServers() {
    return await fetch('https://raw.githubusercontent.com/rcon420/Launcher/main/SERVERLIST.json')
        .then(res => res.json())
        .then(json => {
            return json['servers'];
        });
}

export { fetchServers };
