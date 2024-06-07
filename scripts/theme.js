let mode = document.querySelector("header button");
let sheet = document.styleSheets[0];

const light = {
  '--color-1':'#f8f9fa;',
  '--color-2':'#ADB5BD;',
  '--color-3':'black;',
  '--color-4':'#6c757d;',
  '--font':'#212529;'
};
const dark = {
  '--color-1':'black;',
  '--color-2':'#11151C;',
  '--color-3':'#172a32;',
  '--color-4':'#2a454b;',
  '--font':'#fff;'
};

let themeFromStorage = localStorage.getItem("theme") || "dark"; 
console.log(themeFromStorage);
let m;
if (themeFromStorage === "dark") {
  mode.innerHTML = '<img src="/icons/day.png" alt="light-mode"></img>';
  if (sheet.cssRules[0].selectorText === ":root") {
    sheet.deleteRule(0);
  }
  const rootRule = `:root { ${Object.entries(dark)
    .map(([key, value]) => `${key}: ${value};`)
    .join('')} }`;
  sheet.insertRule(rootRule, 0);
  m=1;
  console.log("hello 1");
} else {
  mode.innerHTML = '<img src="/icons/moon.png" alt="light-mode"></img>';
  if (sheet.cssRules[0].selectorText === ":root") {
    sheet.deleteRule(0);
  }
  const rootRule = `:root { ${Object.entries(light)
    .map(([key, value]) => `${key}: ${value};`)
    .join('')} }`;
  sheet.insertRule(rootRule, 0);
  m=0;
  console.log("hello 2");
}

mode.addEventListener("click", () => {
  if(m===0){
    darkMode();
    m=1;
  }
  else{
    lightMode();
    m=0;
  }
});
function darkMode(){
  mode.innerHTML = '<img src="/icons/day.png" alt="light-mode"></img>';
  if (sheet.cssRules[0].selectorText === ":root") {
    sheet.deleteRule(0);
  }
  const rootRule = `:root { ${Object.entries(dark)
    .map(([key, value]) => `${key}: ${value};`)
    .join('')} }`;
  sheet.insertRule(rootRule, 0);
  localStorage.setItem("theme","dark");
}
function lightMode(){
  mode.innerHTML = '<img src="/icons/moon.png" alt="dark-mode"></img>';
  if (sheet.cssRules[0].selectorText === ":root") {
    sheet.deleteRule(0);
  }
  const rootRule = `:root { ${Object.entries(light)
    .map(([key, value]) => `${key}: ${value};`)
    .join('')} }`;
  sheet.insertRule(rootRule, 0);
  localStorage.setItem("theme","light");
}