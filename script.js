const objects={
sun:["Sun","G-type star","1,392,700 km","About 27 Earth days","—","0","Center of the system","The star at the center of our solar system. Its gravity holds the planets in orbit and its energy makes life on Earth possible.","sun-dot"],
mercury:["Mercury","Terrestrial planet","4,879 km","58.6 Earth days","88 Earth days","0","57.9 million km","The smallest planet and the closest to the Sun. Its cratered surface experiences extreme temperature changes.","mercury-dot"],
venus:["Venus","Terrestrial planet","12,104 km","243 Earth days","225 Earth days","0","108.2 million km","A rocky world with a dense carbon-dioxide atmosphere. Its powerful greenhouse effect makes it the hottest planet.","venus-dot"],
earth:["Earth","Terrestrial planet","12,742 km","24 hours","365.25 days","1","149.6 million km","Our home planet and the only known world to support life. Liquid water covers about 71 percent of its surface.","earth-dot"],
mars:["Mars","Terrestrial planet","6,779 km","24.6 hours","687 Earth days","2","227.9 million km","The Red Planet is a cold desert world with giant volcanoes, ancient river features and two small moons.","mars-dot"],
jupiter:["Jupiter","Gas giant","139,820 km","9.9 hours","11.86 Earth years","95 confirmed","778.6 million km","The largest planet in our solar system. Jupiter has powerful storms, including the Great Red Spot, and many moons.","jupiter-dot"],
saturn:["Saturn","Gas giant","116,460 km","10.7 hours","29.4 Earth years","146 confirmed","1.43 billion km","Known for its spectacular rings, Saturn is a gas giant surrounded by icy and rocky moons.","saturn-dot"],
uranus:["Uranus","Ice giant","50,724 km","17.2 hours","84 Earth years","28 confirmed","2.87 billion km","An ice giant with a blue-green atmosphere and an extreme axial tilt, making it rotate almost on its side.","uranus-dot"],
neptune:["Neptune","Ice giant","49,244 km","16.1 hours","164.8 Earth years","16 confirmed","4.5 billion km","The most distant known planet from the Sun. Neptune is a cold ice giant with supersonic winds.","neptune-dot"]
};
const order=Object.keys(objects);
const byId=id=>document.getElementById(id);
function showObject(key){
  const p=objects[key]; if(!p)return;
  ["name","class","diameter","day","year","moons","distance","description"].forEach((id,i)=>{
    const map={name:0,"class":1,diameter:2,day:3,year:4,moons:5,distance:6,description:7};
    byId(id).textContent=p[map[id]];
  });
  byId("profileDot").className=`profile-dot ${p[8]}`;
  byId("ordinal").textContent=`${String(order.indexOf(key)+1).padStart(2,"0")} / 09`;
  document.querySelectorAll("[data-select]").forEach(b=>{
    const active=b.dataset.select===key;
    b.classList.toggle("active",active);
    b.setAttribute("aria-pressed",String(active));
  });
}
document.querySelectorAll("[data-world]").forEach(b=>b.addEventListener("click",()=>showObject(b.dataset.world)));
document.querySelectorAll("[data-select]").forEach(b=>b.addEventListener("click",()=>showObject(b.dataset.select)));
showObject("earth");
