import fs from 'node:fs/promises';
import {createGsnHubHtml,createGsnHubSvg} from './src/gsnhub.mjs';
const prefix='/hubs/gsnhub-20261003/';
await fs.mkdir('dist'+prefix,{recursive:true});
await fs.cp('public/logos','dist'+prefix+'logos',{recursive:true});
await fs.writeFile('dist/index.html',createGsnHubHtml(prefix));
await fs.writeFile('dist/hub.svg',createGsnHubSvg(prefix));
await fs.writeFile('dist'+prefix+'hub-v3.svg',createGsnHubSvg(prefix));
console.log('Built standalone HTML and SVG launchers in dist/.');
