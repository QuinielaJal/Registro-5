const _0x56e3=['includes','getElementsByTagName','join','quiniela','split','<div>','querySelector','floor','getItem','random','clear','numquinielas','reload','%20%20','%0D','*\u00a0\u00a0','lastElementChild','costo','null','display','.botonenviar\x20span','Debes\x20llenar\x20todas\x20las\x20casillas','results','lastIndexOf','rgb(250,\x2030,\x2030)','Se\x20borrará\x20todo','quantity','<button\x20id=\x22undo\x22\x20onclick=\x22remove()\x22><ion-icon\x20name=\x22arrow-undo-outline\x22></ion-icon></button>','total','alias','location','</div>','slice','replace','span','setItem','style','textContent','nombre','innerHTML','text','focus','https://wa.me/525574543013?text=','checkcombinaciones','ceil','log','offsetWidth','value','getElementsByClassName','length','load','childElementCount','.quiniela\x20span','getElementById','checked','Costo:\x20$','height','substring','removeChild','backgroundColor','Total:\x20$'];(function(_0x1a76fe,_0x3782d3){const _0x56e371=function(_0x3d63c2){while(--_0x3d63c2){_0x1a76fe['push'](_0x1a76fe['shift']());}};_0x56e371(++_0x3782d3);}(_0x56e3,0xc0));const _0x3d63=function(_0x1a76fe,_0x3782d3){_0x1a76fe=_0x1a76fe-0x18e;let _0x56e371=_0x56e3[_0x1a76fe];return _0x56e371;};const _0x38d05b=_0x3d63;let res=['_','_','_','_','_','_','_','_','_'],quantity=localStorage[_0x38d05b(0x1ca)](_0x38d05b(0x19f)),name=localStorage[_0x38d05b(0x1ca)](_0x38d05b(0x1a2)),combinations=![];var aux;function start(){const _0x2a7949=_0x38d05b;document[_0x2a7949(0x1ba)](_0x2a7949(0x1b0))[_0x2a7949(0x1bb)]=![],recovername(),display=document[_0x2a7949(0x1ba)](_0x2a7949(0x198));let _0x44805b=document[_0x2a7949(0x1b5)](_0x2a7949(0x1c5))[0x0][_0x2a7949(0x1b3)];document[_0x2a7949(0x1ba)](_0x2a7949(0x1c5))[_0x2a7949(0x1a9)][_0x2a7949(0x1bd)]=_0x44805b*0.9375+'px';let _0x2705a9=document['getElementById'](_0x2a7949(0x1ad));_0x2705a9[_0x2a7949(0x1ac)]=res[_0x2a7949(0x1c4)]('\u00a0\u00a0');if(quantity)document[_0x2a7949(0x1c8)]('.botonenviar\x20span')[_0x2a7949(0x1aa)]=quantity;let _0x929e8=localStorage[_0x2a7949(0x1ca)](_0x2a7949(0x19b));if(_0x929e8){_0x929e8=_0x929e8[_0x2a7949(0x1c6)]('*');for(var _0x55cc76=0x0;_0x55cc76<quantity;_0x55cc76++){if(_0x929e8[_0x55cc76]&&_0x929e8[_0x55cc76]!=undefined)display[_0x2a7949(0x1ac)]+=_0x2a7949(0x1c7)+_0x929e8[_0x55cc76]+_0x2a7949(0x1a4);else break;}document[_0x2a7949(0x1ba)](_0x2a7949(0x1a1))['innerHTML']=_0x2a7949(0x1c1)+quantity*0x19+'\x0a';if(display[_0x2a7949(0x1b8)]>0x0)display[_0x2a7949(0x195)]['innerHTML']+=_0x2a7949(0x1a0);}}function selection(_0x9ec642){const _0x293057=_0x38d05b;let _0x6a4b37=parseInt(_0x9ec642['id'][_0x293057(0x1a5)](0x1))-0x1,_0x18a838=document['getElementById'](_0x293057(0x1ad));if(!_0x9ec642[_0x293057(0x1a9)][_0x293057(0x1c0)])!combinations?(validation(_0x9ec642),res[_0x6a4b37]=_0x9ec642['id'][_0x293057(0x1a5)](0x0,0x1)):(res[_0x6a4b37]+=_0x9ec642['id'][_0x293057(0x1a5)](0x0,0x1),res[_0x6a4b37]=res[_0x6a4b37][_0x293057(0x1c6)]('_')[_0x293057(0x1c4)]('')),_0x9ec642[_0x293057(0x1a9)]['backgroundColor']=_0x293057(0x19d);else{if(combinations){_0x9ec642[_0x293057(0x1a9)][_0x293057(0x1c0)]='',console[_0x293057(0x1b2)](res[_0x6a4b37][_0x293057(0x1b6)]);if(res[_0x6a4b37]!='_'&&res[_0x6a4b37]['length']>0x1)res[_0x6a4b37]=res[_0x6a4b37][_0x293057(0x1c6)](_0x9ec642['id']['slice'](0x0,0x1))['join']('');else res[_0x6a4b37]='_';}}costoactual(),_0x18a838[_0x293057(0x1ac)]=res[_0x293057(0x1c4)]('\u00a0\u00a0');}function validation(_0xb09705){const _0xf73e71=_0x38d05b;let _0x20469d=parseInt(_0xb09705['id'][_0xf73e71(0x1a5)](0x1));document[_0xf73e71(0x1ba)]('L'+_0x20469d)[_0xf73e71(0x1a9)][_0xf73e71(0x1c0)]=null,document[_0xf73e71(0x1ba)]('E'+_0x20469d)[_0xf73e71(0x1a9)][_0xf73e71(0x1c0)]=null,document['getElementById']('V'+_0x20469d)[_0xf73e71(0x1a9)]['backgroundColor']=null;}function number(){const _0x2cc155=_0x38d05b;quantity=localStorage[_0x2cc155(0x1ca)]('quantity');if(quantity)localStorage[_0x2cc155(0x1a8)]('quantity',++quantity);else localStorage[_0x2cc155(0x1a8)](_0x2cc155(0x19f),0x1),quantity=localStorage[_0x2cc155(0x1ca)](_0x2cc155(0x19f));document['querySelector'](_0x2cc155(0x199))[_0x2cc155(0x1aa)]=quantity,localStorage[_0x2cc155(0x1a8)](_0x2cc155(0x1a2),name);}function result(){const _0x3caa33=_0x38d05b;results=localStorage['getItem'](_0x3caa33(0x19b)),name=document[_0x3caa33(0x1ba)](_0x3caa33(0x1ab))[_0x3caa33(0x1b4)],name=name[_0x3caa33(0x1c6)]('*')[_0x3caa33(0x1c4)]('');if(results){if(aux>0x1)localStorage[_0x3caa33(0x1a8)](_0x3caa33(0x19b),results+'\x0a'+res[_0x3caa33(0x1c4)]('\u00a0\u00a0')+'\u00a0\u00a0'+name+'\x20('+aux+')'+'*');else localStorage['setItem'](_0x3caa33(0x19b),results+'\x0a'+res[_0x3caa33(0x1c4)]('\u00a0\u00a0')+'\u00a0\u00a0'+name+'*');}else{if(aux>0x1)localStorage[_0x3caa33(0x1a8)](_0x3caa33(0x19b),res['join']('\u00a0\u00a0')+'\u00a0\u00a0'+name+'\x20('+aux+')'+'*');else localStorage[_0x3caa33(0x1a8)](_0x3caa33(0x19b),res[_0x3caa33(0x1c4)]('\u00a0\u00a0')+'\u00a0\u00a0'+name+'*');}}function send(){const _0x28b493=_0x38d05b;if(!quantity||quantity<0x1)save();if(quantity>0x0){let _0x2da039=res[_0x28b493(0x1c4)](_0x28b493(0x192));_0x2da039=encodeURI(localStorage[_0x28b493(0x1ca)](_0x28b493(0x19b))),_0x2da039=_0x2da039[_0x28b493(0x1c6)]('*')[_0x28b493(0x1c4)](_0x28b493(0x193))[_0x28b493(0x1a6)](/#/g,''),window[_0x28b493(0x1a3)]['href']=_0x28b493(0x1af)+_0x2da039;}}function save(){const _0x379c31=_0x38d05b;name=document[_0x379c31(0x1ba)](_0x379c31(0x1ab))['value'];if(res['join']('\u00a0\u00a0')[_0x379c31(0x1c2)]('_'))alert(_0x379c31(0x19a));else{if(!name)return alert('Debes\x20elegir\x20un\x20nombre'),document[_0x379c31(0x1ba)]('nombre')[_0x379c31(0x1ae)](),0x0;else{if(combinations)calculate();else number();result(),updatedisplay(),clean();}}}function deleteall(){const _0x49daa8=_0x38d05b;confirm(_0x49daa8(0x19e))&&(localStorage[_0x49daa8(0x18f)](),location[_0x49daa8(0x191)]());}function clean(){const _0x30b6a2=_0x38d05b;res=['_','_','_','_','_','_','_','_','_'];let _0x3cf3fe=document[_0x30b6a2(0x1ba)](_0x30b6a2(0x1ad));_0x3cf3fe[_0x30b6a2(0x1ac)]=res[_0x30b6a2(0x1c4)]('\u00a0\u00a0'),spans=document['querySelectorAll'](_0x30b6a2(0x1b9));for(var _0x5aef0f=0x0;_0x5aef0f<0x1b;_0x5aef0f++)spans[_0x5aef0f][_0x30b6a2(0x1a9)]['backgroundColor']='';document[_0x30b6a2(0x1ba)](_0x30b6a2(0x196))[_0x30b6a2(0x1ac)]='Costo:\x20$0',document['getElementById']('numquinielas')[_0x30b6a2(0x1ac)]='0\x20Quiniela(s)';}function updatedisplay(){const _0x1a6da3=_0x38d05b;if(aux==undefined)aux=0x0;let _0x5688d1=document['getElementById'](_0x1a6da3(0x198));if(_0x5688d1[_0x1a6da3(0x1b8)]>0x0)_0x5688d1[_0x1a6da3(0x195)][_0x1a6da3(0x1bf)](_0x5688d1[_0x1a6da3(0x195)][_0x1a6da3(0x195)]);if(aux>0x1)_0x5688d1[_0x1a6da3(0x1ac)]+=_0x1a6da3(0x1c7)+res[_0x1a6da3(0x1c4)]('\u00a0\u00a0')+'\u00a0\u00a0'+name+'\x20('+aux+')'+_0x1a6da3(0x194)+_0x1a6da3(0x1a4);else _0x5688d1['innerHTML']+=_0x1a6da3(0x1c7)+res[_0x1a6da3(0x1c4)]('\u00a0\u00a0')+'\u00a0\u00a0'+name+_0x1a6da3(0x194)+'</div>';document['getElementById']('total')[_0x1a6da3(0x1ac)]=_0x1a6da3(0x1c1)+quantity*0x19;if(_0x5688d1['childElementCount']>0x0)_0x5688d1[_0x1a6da3(0x195)]['innerHTML']+=_0x1a6da3(0x1a0);aux=0x1;}function recovername(){const _0x5ec1b9=_0x38d05b;name=localStorage[_0x5ec1b9(0x1ca)]('alias');if(name!=null&&name!=_0x5ec1b9(0x197))document[_0x5ec1b9(0x1ba)](_0x5ec1b9(0x1ab))[_0x5ec1b9(0x1b4)]=name;}function clearname(){const _0x47a3f2=_0x38d05b;document[_0x47a3f2(0x1ba)](_0x47a3f2(0x1ab))[_0x47a3f2(0x1b4)]='';}function allowcombination(){const _0x4e494e=_0x38d05b;if(!combinations)combinations=confirm('¿Desea\x20registrar\x20quinielas\x20multiples?');else combinations=![];document[_0x4e494e(0x1ba)](_0x4e494e(0x1b0))[_0x4e494e(0x1bb)]=combinations,clean();}function calculate(){const _0x25768c=_0x38d05b;aux=0x1;for(var _0x59dff4=0x0;_0x59dff4<0x9;_0x59dff4++){aux*=res[_0x59dff4][_0x25768c(0x1b6)];}quantity=localStorage[_0x25768c(0x1ca)](_0x25768c(0x19f)),quantity?(localStorage[_0x25768c(0x1a8)]('quantity',parseInt(quantity)+aux),quantity=localStorage[_0x25768c(0x1ca)](_0x25768c(0x19f))):(localStorage[_0x25768c(0x1a8)](_0x25768c(0x19f),aux),quantity=localStorage[_0x25768c(0x1ca)]('quantity')),document['querySelector'](_0x25768c(0x199))[_0x25768c(0x1aa)]=quantity,localStorage[_0x25768c(0x1a8)](_0x25768c(0x1a2),name);}function random(){const _0x22e3eb=_0x38d05b;clean();let _0x582ec3=document[_0x22e3eb(0x1ba)]('text'),_0x4cd254=document['getElementsByClassName']('partido');for(var _0x126f3a=0x0;_0x126f3a<0x9;_0x126f3a++){var _0x2c93b0=getRandomInt(0x0,0x2);_0x4cd254[_0x126f3a][_0x22e3eb(0x1c3)](_0x22e3eb(0x1a7))[_0x2c93b0][_0x22e3eb(0x1a9)][_0x22e3eb(0x1c0)]=_0x22e3eb(0x19d),res[_0x126f3a]=['L','E','V'][_0x2c93b0];}_0x582ec3['innerHTML']=res['join']('\u00a0\u00a0'),costoactual();}function getRandomInt(_0x5e5405,_0x2ad155){const _0x30586b=_0x38d05b;return _0x5e5405=Math[_0x30586b(0x1b1)](_0x5e5405),_0x2ad155=Math[_0x30586b(0x1c9)](_0x2ad155),Math[_0x30586b(0x1c9)](Math[_0x30586b(0x18e)]()*(_0x2ad155-_0x5e5405+0x1))+_0x5e5405;}function costoactual(){const _0x255693=_0x38d05b;if(!res['join']('\u00a0\u00a0')[_0x255693(0x1c2)]('_')){let _0x51b38d=0x1;for(var _0x3588ea=0x0;_0x3588ea<0x9;_0x3588ea++){_0x51b38d*=res[_0x3588ea]['length'];}document[_0x255693(0x1ba)](_0x255693(0x196))[_0x255693(0x1ac)]=_0x255693(0x1bc)+_0x51b38d*0x19,document[_0x255693(0x1ba)](_0x255693(0x190))[_0x255693(0x1ac)]=_0x51b38d+'\x20Quiniela(s)';}}function remove(){const _0x71a3c=_0x38d05b;if(quantity>0x0){x=localStorage[_0x71a3c(0x1ca)](_0x71a3c(0x19b)),x=removeLastLine(x),localStorage[_0x71a3c(0x1a8)]('results',x),results=x[_0x71a3c(0x1c6)]('*');let _0x26f913=document[_0x71a3c(0x1ba)]('display');last=_0x26f913[_0x71a3c(0x195)][_0x71a3c(0x1aa)],last=last[_0x71a3c(0x1c6)]('\u00a0\u00a0'),last[0x0]=last[0x0][_0x71a3c(0x1c6)]('\x0a')['join']('');let _0x1c1659=0x1;for(var _0x1de15c=0x0;_0x1de15c<0x9;_0x1de15c++){_0x1c1659*=last[_0x1de15c][_0x71a3c(0x1b6)];}quantity-=_0x1c1659;if(_0x26f913['childElementCount']<0x2)localStorage[_0x71a3c(0x1a8)](_0x71a3c(0x19b),'');_0x26f913[_0x71a3c(0x1bf)](_0x26f913[_0x71a3c(0x195)]),document[_0x71a3c(0x1c8)]('.botonenviar\x20span')[_0x71a3c(0x1aa)]=quantity,document['getElementById'](_0x71a3c(0x1a1))[_0x71a3c(0x1ac)]=_0x71a3c(0x1c1)+quantity*0x19+'\x0a',localStorage[_0x71a3c(0x1a8)]('quantity',quantity);if(_0x26f913[_0x71a3c(0x195)]!=null&&_0x26f913['childElementCount']>0x0)_0x26f913[_0x71a3c(0x195)][_0x71a3c(0x1ac)]+='<button\x20id=\x22undo\x22\x20onclick=\x22remove()\x22><ion-icon\x20name=\x22arrow-undo-outline\x22></ion-icon></button>';}}function removeLastLine(){const _0x61b84d=_0x38d05b;return x[_0x61b84d(0x19c)]('\x0a')>0x0?x[_0x61b84d(0x1be)](0x0,x[_0x61b84d(0x19c)]('\x0a')):x;}window['addEventListener'](_0x38d05b(0x1b7),start,![]);