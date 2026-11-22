const entries=[{"name": "Rockstar Games", "status": "Official", "detail": "Grand Theft Auto VI overview, media and announcements.", "source": "https://www.rockstargames.com/VI"}, {"name": "Rockstar Newswire", "status": "Official", "detail": "Publisher news and updates.", "source": "https://www.rockstargames.com/newswire"}, {"name": "GTA VI map guide", "status": "Mapping", "detail": "Independent interactive map and offline guide.", "source": "https://github.com/jerryhubrit/gta-6-map-guide"}, {"name": "gtamaplib", "status": "Mapping", "detail": "Camera geometry and mapping tools.", "source": "https://github.com/rolux/gtamaplib"}, {"name": "Awesome GTA 6", "status": "Directory", "detail": "Community-curated GTA VI references.", "source": "https://github.com/teekamsuthar/awesome-gta-6"}, {"name": "PC Gamer cheat guide", "status": "Game data", "detail": "Reported codes and unlock conditions.", "source": "https://www.pcgamer.com/games/grand-theft-auto/gta-6-cheats-list/"}];

const q=document.getElementById("q"),filter=document.getElementById("filter"),results=document.getElementById("results");
for(const category of new Set(entries.map(e=>e.status)))filter.add(new Option(category));
function draw(){const rows=entries.filter(e=>(filter.value==="All"||e.status===filter.value)&&(e.name+" "+(e.detail||"")).toLowerCase().includes(q.value.trim().toLowerCase()));
 results.replaceChildren();document.getElementById("count").textContent=rows.length+" results";
 for(const e of rows){const card=document.createElement("article"),title=document.createElement("strong"),detail=document.createElement("p"),source=document.createElement("a");
 title.textContent=e.name;detail.textContent=e.sequence?e.sequence.map(k=>({U:"↑",D:"↓",L:"←",R:"→"})[k]).join(" "):e.detail;
 source.href=e.source;source.textContent=e.status+" · Open source";card.append(title,detail,source);results.append(card);}}
q.oninput=filter.onchange=draw;draw();
