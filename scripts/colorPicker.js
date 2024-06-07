const musicPlayer=document.querySelector('.music-player');
let image=document.querySelector('.song-img');
let sheet=document.styleSheets[0];
let musicIndex=23;
let imageIndex=24;
export function boxS(color){
  let musicPlayerStyle={
    "box-shadow": `0 14px 28px rgb(${color[0]}, ${color[1]}, ${color[2]}),0 10px 10px rgb(${color[0]}, ${color[1]}, ${color[2]}),0 0 120px -10px rgb(${color[0]}, ${color[1]}, ${color[2]})`
  };
  let imageStyle={
    "box-shadow": `0 14px 28px rgb(${color[0]}, ${color[1]}, ${color[2]}),0 10px 10px rgb(${color[0]}, ${color[1]}, ${color[2]}),0 0 120px -10px rgb(${color[0]}, ${color[1]}, ${color[2]})`
  }
  if(sheet.cssRules[musicIndex].selectorText===".tag1"){
      sheet.deleteRule(musicIndex);
    const nRule = `.tag1{ ${Object.entries(musicPlayerStyle)
      .map(([key, value]) => `${key}: ${value};`)
      .join('')} }`;
  sheet.insertRule(nRule, musicIndex);
  }
  else{
    const nRule = `.tag1{ ${Object.entries(musicPlayerStyle)
      .map(([key, value]) => `${key}: ${value};`)
      .join('')} }`;
    sheet.insertRule(nRule, musicIndex);
  }
  //for image border
  if(sheet.cssRules[imageIndex].selectorText===".tag2"){
      sheet.deleteRule(imageIndex);
    const nRule = `.tag2{ ${Object.entries(imageStyle)
      .map(([key, value]) => `${key}: ${value};`)
      .join('')} }`;
    sheet.insertRule(nRule, imageIndex);
  }
  else{
    const nRule = `.tag2{ ${Object.entries(imageStyle)
      .map(([key, value]) => `${key}: ${value};`)
      .join('')} }`;
    sheet.insertRule(nRule, imageIndex);
  }
};
