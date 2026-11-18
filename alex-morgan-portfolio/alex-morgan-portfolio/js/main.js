/* ===== CONTENT (edit here) ===== */
const SKILLS={"SEO":["Semrush","Ahrefs","Google Search Console"],"Paid Advertising":["Google Ads","Meta Ads"],"Analytics":["GA4","Google Tag Manager","Looker Studio"],"Creative":["Canva","Figma","CapCut"],"Email Marketing":["Mailchimp"]};
const CERTS=[["Google Ads","Search Certification"],["Google Analytics","GA4 Certification"],["HubSpot","Content Marketing"],["Semrush","SEO Toolkit"]];
const SIM="Simulated portfolio example";
const PROJECTS=[
{id:"seo",cat:"SEO",icon:"🔎",color:"#2e7bff",client:"UrbanFit Gym",title:"SEO Campaign",kpis:["+65% organic traffic","12 top-10 keywords"],
 bg:"A fictional multi-site gym chain with strong local footfall but little organic visibility.",challenge:"Blog and class pages competed with each other and ranked beyond page 3.",objective:"Grow organic traffic and win local, high-intent keywords in six months.",
 strategy:"Keyword clustering and intent mapping, technical audit, content refresh, internal linking, and local landing pages.",tools:"Semrush, Ahrefs, Google Search Console, GA4",
 results:"Organic traffic up 65% and 12 keywords in the top 10 (simulated).",learn:"Consolidating cannibalising pages beat publishing more content.",
 chart:[100,108,121,130,142,155,165],cl:"Organic sessions index, month 0 to 6",
 table:[["Keyword","Volume","Rank"],["gym near me london","5.4k","#8"],["hiit classes east london","1.3k","#4"],["beginner strength training","2.9k","#6"],["gym membership deals","3.1k","#9"]]},
{id:"google",cat:"Paid Ads",icon:"💷",color:"#7c5cff",client:"TechNova",title:"Google Ads Campaign",kpis:["£2,000 budget","4.2x ROAS"],
 bg:"A fictional B2C gadget brand launching a smart-home range.",challenge:"New brand, low awareness and a tight test budget.",objective:"Reach a 4x return on ad spend within 8 weeks.",
 strategy:"Single-theme ad groups, exact and phrase match, negative keyword lists, RSA testing and weekly bid adjustments.",tools:"Google Ads, GA4, Tag Manager, Looker Studio",
 results:"£2,000 spend produced a simulated 4.2x ROAS.",learn:"Weekly search-term reviews cut wasted spend fast.",
 chart:[1.8,2.4,3.1,3.6,3.9,4.2],cl:"ROAS by week (simulated dashboard)",
 table:[["Campaign","Match","Budget"],["Search: Smart Plugs","Exact","£600"],["Search: Video Doorbells","Phrase","£800"],["Brand","Exact","£200"],["Remarketing","Display","£400"]]},
{id:"meta",cat:"Paid Ads",icon:"🌸",color:"#ff5ca8",client:"Bloom Fashion",title:"Meta Ads Campaign",kpis:["120k reach","3.8% CTR"],
 bg:"A fictional sustainable womenswear label.",challenge:"Creative fatigue and a cold audience.",objective:"Drive reach and traffic for the spring collection.",
 strategy:"Lookalike and interest audiences, three creative angles tested, Reels-first placements.",tools:"Meta Ads Manager, Canva, CapCut, GA4",
 results:"120,000 people reached at a 3.8% CTR (simulated).",learn:"Short video with a strong first-second hook beat static images.",
 chart:[1.9,2.5,3.0,3.4,3.8],cl:"CTR % by week (simulated)",
 table:[["Audience / creative","Detail","Result"],["Interest","Women 22-34, UK, sustainable fashion","Best"],["Lookalike 1%","Past buyers","2nd"],["Creative A","Lifestyle Reel","3.8% CTR"],["Creative B","Carousel","2.9% CTR"]]},
{id:"social",cat:"Social",icon:"☕",color:"#ffb23e",client:"Brew & Co.",title:"Social Media Campaign",kpis:["+85% engagement","3 posts / week"],
 bg:"A fictional independent coffee shop group.",challenge:"Irregular posting and low engagement.",objective:"Build a consistent community and lift engagement.",
 strategy:"Content pillars, weekly calendar, user-generated content and Stories polls.",tools:"Canva, CapCut, Meta Business Suite",
 results:"Engagement rate up 85% (simulated).",learn:"Consistency and a recognisable visual style mattered most.",
 chart:[100,120,140,160,175,185],cl:"Engagement index (simulated)",
 posts:["Meet the roaster","Latte art Friday","Oat milk tips","Customer of the week","Behind the bar","Weekend menu"],cal:["Mon: Educate","Wed: Behind the scenes","Fri: Product hero","Sun: Community"]}];
/* ===== CODE ===== */
const $=(s,r=document)=>r.querySelector(s);
$("#skillGrid").innerHTML=Object.entries(SKILLS).map(([k,v])=>`<div class="box"><h3>${k}</h3><ul>${v.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("");
$("#certGrid").innerHTML=CERTS.map(c=>`<div class="box cert"><b>🎓</b><h3>${c[0]}</h3><p>${c[1]}</p><small>FICTIONAL PLACEHOLDER</small></div>`).join("");
const svg=(d,l,c)=>{const mx=Math.max(...d),mn=Math.min(...d),p=d.map((v,i)=>[i*(500/(d.length-1))+10,110-(v-mn)/(mx-mn||1)*90]);return `<svg viewBox="0 0 520 130" role="img" aria-label="${l}"><polyline points="${p.join(" ")}" fill="none" stroke="${c}" stroke-width="4" stroke-linejoin="round"/>${p.map(q=>`<circle cx="${q[0]}" cy="${q[1]}" r="5" fill="${c}"/>`).join("")}</svg><small>${l}</small>`};
const cats=["All",...new Set(PROJECTS.map(p=>p.cat))];let cur="All",idx=0;
$(".filters").innerHTML=cats.map(c=>`<button class="${c=="All"?"on":""}" aria-pressed="${c=="All"}">${c}</button>`).join("");
function draw(){$("#cards").innerHTML=PROJECTS.filter(p=>cur=="All"||p.cat==cur).map(p=>`<button class="card" data-id="${p.id}"><div class="thumb" style="background:linear-gradient(135deg,${p.color}66,#12121c)">${p.icon}</div><div class="info"><small>${p.cat.toUpperCase()} · SIMULATED</small><h3>${p.title}: ${p.client}</h3><p>${p.bg}</p><div class="kpi">${p.kpis.map(k=>`<span>${k}</span>`).join("")}</div></div></button>`).join("")}
$(".filters").onclick=e=>{if(e.target.tagName!="BUTTON")return;cur=e.target.textContent;[...$(".filters").children].forEach(b=>{b.classList.toggle("on",b==e.target);b.setAttribute("aria-pressed",b==e.target)});draw()};
function show(i){idx=(i+PROJECTS.length)%PROJECTS.length;const p=PROJECTS[idx];
const vis=p.posts?`<div class="vis"><div class="posts">${p.posts.map((t,i)=>`<div class="post" style="background:linear-gradient(135deg,${["#ffb23e","#7c5cff","#2e7bff"][i%3]},#12121c)">${t}</div>`).join("")}</div><p class="note" style="margin:12px 0 0">Sample Instagram posts. Weekly calendar: ${p.cal.join(" | ")}</p></div>`:`<div class="vis"><table>${p.table.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table></div>`;
$("#mbody").innerHTML=`<small class="tag">${SIM}</small><h3>${p.title}: ${p.client}</h3><div class="mgrid">${[["Client background",p.bg],["Challenges",p.challenge],["Objectives",p.objective],["Strategy & implementation",p.strategy],["Tools used",p.tools],["Key learnings",p.learn]].map(([h,t])=>`<div><h4>${h}</h4><p>${t}</p></div>`).join("")}</div>${vis}<div class="vis">${svg(p.chart,p.cl,p.color)}</div><h4 class="tag">Measurable results (simulated)</h4><p class="big">${p.results}</p>`;
if(!$("#modal").open)$("#modal").showModal()}
$("#cards").onclick=e=>{const c=e.target.closest(".card");if(c)show(PROJECTS.findIndex(p=>p.id==c.dataset.id))};
$("#prev").onclick=()=>show(idx-1);$("#next").onclick=()=>show(idx+1);$(".x").onclick=()=>$("#modal").close();
$("#modal").onclick=e=>{if(e.target.id=="modal")e.target.close()};draw();
const burger=$(".burger"),menu=$("#menu");burger.onclick=()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)};menu.onclick=e=>{if(e.target.tagName=="A")menu.classList.remove("open")};
addEventListener("pointermove",e=>{const g=$(".glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,n=+el.dataset.n;let i=0;const t=setInterval(()=>{el.textContent=++i;if(i>=n)clearInterval(t)},900/n);io.unobserve(el)}));document.querySelectorAll("[data-n]").forEach(el=>io.observe(el));
$("#form").onsubmit=e=>{e.preventDefault();const f=e.target,m=$("#msg"),ok=f.checkValidity();m.textContent=ok?"Thanks! This is a demo form, so nothing was sent.":"Please complete all fields with a valid email.";if(ok)f.reset()};
