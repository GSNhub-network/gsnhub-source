import assert from 'node:assert/strict';
import vm from 'node:vm';
import {hubSites,createGsnHubHtml} from '../src/gsnhub.mjs';
const script=createGsnHubHtml().match(/<script>([\s\S]*?)<\/script>/)[1];
function element(){return {style:{},children:[],append(...items){this.children.push(...items)},replaceChildren(...items){this.children=items},setAttribute(){},showModal(){},close(){}};}
function document(){return {body:element(),documentElement:element(),createElement:element};}
assert.equal(new Set(hubSites.map(site=>new URL(site.url).origin)).size,4);
for(const site of hubSites)for(const mode of ['same-tab','fullscreen','blank']){
 const doc=document(),child={document:document()},ids=new Map(),buttons=hubSites.map(site=>({...element(),dataset:{site:site.id}}));let replaced;
 doc.getElementById=id=>{if(!ids.has(id))ids.set(id,element());return ids.get(id)};
 doc.querySelectorAll=()=>buttons;doc.querySelector=()=>element();
 const window={top:{location:{replace:url=>replaced=url},close(){}},open:()=>child};
 vm.runInNewContext(script,{document:doc,window});
 buttons.find(button=>button.dataset.site===site.id).onclick();
 ids.get(mode).onclick();
 const actual=mode==='same-tab'?replaced:mode==='fullscreen'?doc.body.children[0].src:child.document.body.children[0].src;
 assert.equal(actual,site.url,`${site.id} ${mode}`);
 assert.equal(new URL(actual).search,'');
}
console.log('PASS: all four consoles keep distinct origins in all three launch modes.');
