(function(){var g=void 0,m=true,n=null,o=false,p=this;
function aa(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b};function ba(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x10-\x1f\x80-\x9f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function ca(){}function da(a){var b=[];q(new ca,a,b);return b.join("")}
function q(a,b,c){switch(typeof b){case "string":ea(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(b==n){c.push("null");break}if(aa(b)=="array"){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),q(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],typeof f!="function"&&(c.push(d),ea(e,c),c.push(":"),q(a,f,c),d=","));
c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var t={'"':'\\"',"\\":"\\\\","/":"\\/","\u0008":"\\b","\u000c":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\u000b":"\\u000b"},fa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function ea(a,b){b.push('"',a.replace(fa,function(a){if(a in t)return t[a];var b=a.charCodeAt(0),e="\\u";b<16?e+="000":b<256?e+="00":b<4096&&(e+="0");return t[a]=e+b.toString(16)}),'"')};function ga(a){return window.btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(a,c){return String.fromCharCode("0x"+c)}))}function ha(a){return decodeURIComponent(window.atob(a).split("").map(function(a){return"%"+("00"+a.charCodeAt(0).toString(16)).slice(-2)}).join(""))}function v(a,b,c){var d=Array.prototype.slice,e=d.call(arguments,2);return function(){return a.apply(b,e.concat(d.call(arguments)))}}function y(a){return typeof a!=="undefined"}
function A(){var a=p.location.hostname;return a&&a.replace(/^www[0-9]*\./,"")}function B(a){return typeof a==="string"}function C(){return(new Date).getTime()}function D(a,b){if((!!a&&a.constructor===Object)===m)for(var c in a){if(a.hasOwnProperty(c)&&b(a[c],c)===o)break}else{c=0;for(var d=a.length;c<d;c++)if(b(a[c],c)===o)break}}function ia(a,b){var c;a:{c=0;for(var d=a.length;c<d;c++)if(b(a[c]))break a;c=-1}if(c>-1)return a[c]}var ja=p.setInterval,E=p.clearInterval,ka=p.setTimeout;
function la(a){ka(a,0)}function ma(){var a=y(p.XDomainRequest);return y(p.XMLHttpRequest)&&"withCredentials"in new p.XMLHttpRequest?new p.XMLHttpRequest:a?new p.XDomainRequest:n}function na(a,b,c){var d=ma();d===n?c(n):(oa(function(){d.open("GET",a,m)}),d.onload=function(){d.responseText?b(d):c(d)},d.onerror=function(){c(d,"onerror")},d.timeout=1E3,d.ontimeout=function(){c(d,"timeout")},la(function(){oa(function(){d.send(n)})}))}function oa(a){try{a()}catch(b){}}
function F(){for(var a=document.domain,b=a.split("."),c=window.location.protocol==="https:"?"; Secure":"",d=0;d<b.length-1&&document.cookie.indexOf("_cbt=_cbt")==-1;)a=b.slice(-1-++d).join("."),document.cookie="_cbt=_cbt; domain="+a+c;document.cookie="_cbt=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain="+a+c;return a}var G=m;function pa(a,b,c){if(c)return a;return b&&b[H]&&G&&(c=F(),b[H]!==c)?a+"_"+A().split(".")[0]:a};function qa(a){var b={};a&&(a.charAt(0)=="?"&&(a=a.substring(1)),a=a.replace(/\+/g," "),D(a.split(/[&;]/g),function(a){a=a.split("=");b[decodeURIComponent(a[0])]=decodeURIComponent(a[1])}));return b}function ra(a,b){return!b?m:a==="http:"&&b==="80"||a==="https:"&&b==="443"};var H="cookieDomain";function sa(){var a=I;D(document.getElementsByTagName("script"),function(b){if(typeof b.src==="string"&&b.src.match(/chartbeat.js/))return b=qa(b.src.split("?")[1]),a.uid=a.uid||b.uid,a.domain=a.domain||b.domain,o})}function ta(a){if(J(a))return"";var a=a[H],b=F();a&&a!==A()&&a!==b&&(G=o,p.console.warn("Invalid cookieDomain (must be set to current domain or root domain), defaulting to root domain."));return a&&G?a:b}function J(a){return a&&a.noCookies?m:o};var K={};K.K=function(a,b){try{K.create("_cb_test","1",1,a,b);var c=K.e("_cb_test");K.remove("_cb_test",a,b);return c==="1"}catch(d){return o}};K.e=function(a,b){var c=p._sf_async_config;if(J(c))return"";var a=pa(a,c,b)+"=",d="";D(document.cookie.split(";"),function(b){for(;b.charAt(0)===" ";)b=b.substring(1,b.length);if(b.indexOf(a)===0)return d=b.substring(a.length,b.length),o});return d};
K.create=function(a,b,c,d,e,f){var h=p._sf_async_config;if(J(h))return"";a=pa(a,h,f);f=new Date;f.setTime(C()+c*1E3);a=a+"="+b+("; expires="+f.toUTCString())+("; path="+d)+(window.location.protocol==="https:"?"; Secure":"")+(e?"; domain="+e:"");return document.cookie=a};K.remove=function(a,b,c,d){return K.e(a,d)?K.create(a,"",-86400,b,c,d):""};var L={};L.a=function(a){var b=p._sf_async_config;if(!a&&b&&b.noCookies)return n;if(L.a.r!==g)return L.a.r;var a=C()+"",c,d;try{if((d=p.localStorage).setItem("_cb_ls_test",a),c=d.getItem("_cb_ls_test")===a,d.removeItem("_cb_ls_test"),c)return L.a.r=d}catch(e){}return L.a.r=n};L.e=function(a){var b=L.a();if(!b)return"";var c=b.getItem(a+"_expires");return c&&(c=+c,!isNaN(c)&&C()>c)?(L.remove(a),""):b.getItem(a)||""};
L.create=function(a,b,c){var d=L.a();if(d){var e=new Date;e.setTime(C()+c*1E3);try{d.setItem(a,b),d.setItem(a+"_expires",e.getTime())}catch(f){}}};L.remove=function(a){var b=L.a();b&&(b.removeItem(a),b.removeItem(a+"_expires"))};function M(a,b,c,d){this.w=a||"";this.j=b||"/";this.B=d||{};this.l=(this.v=J(this.B))?"":c||F();this.W=L.a()!==n||K.K(this.j,this.l);this.aa=o}M.prototype.create=function(a,b,c,d){this.v||(a=d?a:this.w+a,(L.a()?L:K).create(a,b,c,this.j,this.l),L.a()&&K.create(a,b,c,this.j,this.l))};
M.prototype.e=function(a,b){if(this.v)return"";var a=b?a:this.w+a,c=(L.a()?L:K).e(a);!c&&L.a()&&(c=K.e(a));if(c){this.remove(a,b,"",m);var d=K.e(a),e=this.B[H]&&G,f=A(),e=e&&f!==F();if(c===d&&!e)return d;(f=a!=="_chartbeat2"||!d?o:+d.split(".")[2]<1647357868E3?m:o)&&K.remove(a,this.j,this.l);if(e){if(d)return f?c:d;d=K.e(a,m);return c!==d?c:""}if(d)return f?c:d}return c};
M.prototype.remove=function(a,b,c,d){if(c!=="")c=this.l;a=b?a:this.w+a;(L.a()?L:K).remove(a,this.j,c);L.a()&&K.remove(a,this.j,c,d)};function ua(a,b,c){a.ownerDocument||(a=a.correspondingUseElement);if(!a||!a.ownerDocument)return n;var d=a.ownerDocument.documentElement,e=0,f=y(c)?c+1:-1;B(b)?(b=b.toLowerCase(),c=function(a){return(a=a.nodeName)&&a.toLowerCase()===b}):c=b;for(;a&&a!==d&&e!==f;){if(c(a))return a;a=a.parentNode;e++}return n}var N=function(){var a=/[ \r\n\t\f\u200B]+/g;return function(b){return b&&B(b)?b.trim().replace(a," "):""}}();
function va(a){return a.nodeName&&a.nodeName.toLowerCase()==="a"&&(!a.namespaceURI||a.namespaceURI==="http://www.w3.org/1999/xhtml")}function wa(a,b){var c=a.children,d=c.length;if(!d)return a;for(var e=b!==g?b:N(a.textContent),f=0;f<d;f++)if(N(c[f].textContent)===e)return wa(c[f],e)||a;return a}
function O(a){if(arguments.length==0)throw new TypeError("`CSS.escape` requires an argument.");for(var b=String(a),c=b.length,d=-1,e,f="",h=b.charCodeAt(0);++d<c;)e=b.charCodeAt(d),f+=e==0?"\ufffd":e>=1&&e<=31||e==127||d==0&&e>=48&&e<=57||d==1&&e>=48&&e<=57&&h==45?"\\"+e.toString(16)+" ":d==0&&c==1&&e==45?"\\"+b.charAt(d):e>=128||e==45||e==95||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?b.charAt(d):"\\"+b.charAt(d);return f}
function xa(a){var b=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,a=String(a);b.lastIndex=0;b.test(a)&&(a=a.replace(b,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return eval("("+a+")");throw new SyntaxError("JSON.parse");
}function P(a){var b=ya();do{for(var c=a,d=c.ownerDocument.querySelectorAll(b),e=d.length;--e>=0&&d.item(e)!==c;);if(e>-1)return a;a=a.parentElement||a.parentNode}while(a!==n&&a.nodeType===1);return n};function za(){var a=L.a(m);return!a?o:!!a.getItem("_cb_ip")};var Aa="z";function Q(){y(p._cb_shared)||(p._cb_shared={});return p._cb_shared};function R(a,b){var c=Q(),c=(y(g)&&!y(c.m)?g:c.m)||[];c.push.apply(c,arguments);Q().m=c};var Ba={cb_rec:m,fbclid:m,ia_share_url:m,gclid:m,dclid:m,gbraid:m,wbraid:m,gclsrc:m,gdfp_req:m,_gl:m,_ga:m,_hsenc:m,_hsmi:m,msclkid:m,lcid:m,sfmc_id:m,sfmc_sub:m,tblci:m,twclid:m,guccounter:m,guce_referrer:m,"pure360.trackingid":m,dicbo:m,addata:m,zip:m,zipcode:m,regi_id:m,segment_id:m,user_id:m,campaign_id:m,sessionid:m,uuid:m,email:m,token:m,req_token:m,paymentredirectuuid:m,authid:m,auth_id:m,auth:m};var Ca=/[A-Za-z0-9-_.'+]+(@|%40)\w+([-.]\w+)*\.\w+([-.]\w+)*/g;function Da(){var a=n;if(Ea&&(a=Fa(),a=!a?a:S(a.pathname)+T(a.search)+a.hash))return a;var b=p.location,a=S(b.pathname),c=b.search||"",d=/[?&#]/;if(!c||c.length===1&&d.test(c))return a;c=c.replace(/PHPSESSID=[^&]+/,"");d=/&utm_[^=]+=[^&]+/ig;(b=d.exec(b.search))&&(c=c.replace(d,""));d=/\?utm_[^=]+=[^&]+(.*)/i;(b=d.exec(c))&&(c=c.replace(d,b[1]!=""?"?"+b[1]:""));c=T(c);c=S(c);return a+c}
function Ga(a){return a&&(a=Fa(),a=!a?a:a.hostname)?a:p.location.hostname}
function Fa(){var a=Ha();if(a){var b=a.href,a={hostname:"",pathname:"",search:"",protocol:"",port:"",hash:""};if(b){var c=document.createElement("a"),d=p.location;if(!/^https?:/.test(b)&&b.indexOf("javascript:")!==0&&b.indexOf("app:")<0)if(b.indexOf("//")===0)b=d.protocol+b;else if(b.indexOf("/")===0)var e=ra(d.protocol,d.port)?"":d.port,b=d.protocol+"//"+d.hostname+(e?":"+e:"")+b;else{var e=document.baseURI||d.href,f=e.indexOf("?");f===-1&&(f=e.indexOf("#"));if(f===-1)f=e.length;f=e.lastIndexOf("/",
f);b=f===-1?"/"+b:e.substr(0,f)+"/"+b}c.href=b;a.hostname=c.hostname;a.pathname=c.pathname;a.search=c.search;a.protocol=c.protocol;a.port=c.port;a.hash=c.hash;if(a.pathname.charAt(0)!=="/")a.pathname="/"+a.pathname;if(a.hostname==="")a.hostname=d.hostname;if(a.protocol==="")a.protocol=d.protocol;if(a.protocol==="javascript:")a.pathname="",a.hostname="",a.port="",a.hash="";if(ra(a.protocol,a.port)||a.port==="0")a.port=""}}return a}
function Ha(){var a=n;D(document.getElementsByTagName("link"),function(b){if(b.rel=="canonical")return a=b,o});return a}for(var Ia={},U=0;U<81;U++)Ia["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=:@[]".charCodeAt(U)]=m;function Ja(a,b){if(a==="%")return"%25";var c=parseInt(b,16);return Ia[c]?String.fromCharCode(c):"%"+b.toUpperCase()}
function S(a){if(!B(a))return a;a=a.replace(/%([0-9A-Fa-f]{2})?/g,Ja);a=a.replace(/[^0-9A-Za-z\-._~!$&'()*+,;=:@\/\[\]?#%]+/g,encodeURIComponent);return a=a.replace(Ca,"")}function T(a){var b=a;/[?&#]/.test(a[0])&&(b=a.substring(1));a=b.split("&").filter(function(a){a=a.split("=");return a.length<=1?o:Ba[a[0].toLowerCase()]?o:Ca.exec(a[1])?o:m});return a.length<1?"":"?"+a.join("&")}
function Ka(){var a=I.path;if(a){var b=a.split("?");return b.length>1?(a=T(b[1]))&&a.length?S(b[0]+a):S(b[0]):S(a)}return n};function La(a){var b,c;b=a.domain;c=!!a.useCanonical;c=(c=(c=!!a.useCanonicalDomain&&c)?Ga(c):p.location.hostname)&&c.replace(/^www\./,"");b=(p.location.protocol==="http:"?"http:":"https:")+"//mab.chartbeat.com/mab_strategy/headline_testing/get_strategy/?host="+encodeURIComponent(b)+"&domain="+encodeURIComponent(c)+"&path=";(a=a.path)?(a=a.replace(/.*:\/\//,"").replace(/^[^/]+\//,"/"),a=a.charAt(0)!=="/"?"/"+a:a):a="/";return b+encodeURIComponent(a)}
function Ma(a,b,c){var d,e,f;na(a,function(a){a=Na(a.responseText);a=(a=ba(a))&&a.constructor===Object&&B(a.status)&&(a.data&&a.data.constructor===Object||a.data===n)?{Q:a.status,h:a.data,Y:a.code,Z:a.message}:n;if(a===n)c();else if(a.Q==="success"){d={};f=e=0;if(a.h)a.h.experiments&&(d=a.h.experiments),y(a.h.probability_is_lift)&&(e=a.h.probability_is_lift),y(a.h.probability_is_control)&&(f=a.h.probability_is_control);b(d,[e,f])}else c()},c)}
function Oa(a,b,c){var d=[],e=b.b;if(e==="l"||e==="c")b=new Pa("lift_exp","","",b,e,"","",""),b.n=m,d.push(b);return d=d.concat(Qa(a,c,e))}function Ra(a,b){var c=[new V("l",a[0],"",{},"","",[]),new V("c",a[1],"",{},"","",[]),new V("m",1-a[0]-a[1],"",{},"","",[])];return Sa(c,b.lift_exp)||c[2]}function Qa(a,b,c){var d=[];D(a,function(a,f){var h=Ta(f,a,c,b[f]);y(h)&&d.push(h)});return d}
function Ta(a,b,c,d){var e=b.location,f=b.specific_location,h=b.type,j,i,k=b.metadata;if(B(k)&&k.length>0&&((k=xa(k))&&k.version==2&&(j=k.sub_location),k&&k.version==3))j=k.sub_location,i=k.initial_content;j=y(j)?j:"";i=y(i)?i:"";var l=[];D(b.variants,function(a,b){var c=parseFloat(a.probability),d=a.content,e=a.metadata,f={},k="",h="",i=[];if(B(e))(e=xa(e))&&e.image_source_sets_info&&(f=e.image_source_sets_info||{}),e&&e.image_alt_attribute&&(k=e.image_alt_attribute),e&&e.image_caption&&(h=e.image_caption),
e&&e.crops&&(i=e.crops||[]);l.push(new V(b,c,d,f,k,h,i))});if(b=Sa(l,d&&d.chosenVariant))return new Pa(a,e,j,b,c,i,f,h)}function Sa(a,b){var c;y(b)&&(c=ia(a,function(a){return a.b===b}));y(c)||(c=Ua(a));return c}function Ua(a){var b=Math.random();return ia(a,function(a){b-=a.S;return b<0})}function Va(a,b,c){var d=p.location.href,e=[encodeURIComponent(a),encodeURIComponent(d),b].join(",");D(c,function(a){e+=","+[a.test.b,a.test.k.b,encodeURIComponent(a.f)].join(",")});return e}
function Wa(a,b){if(a===b)return m;for(var c=b.split("."),d=a.split(".");c.length;){if(d.length===0)return o;if(c.pop()!==d.pop())return o}return m}function Xa(){var a=p.document.head||p.document.getElementsByTagName("head")[0],b=p.document.createElement("style");b.id="chartbeat-flicker-control-style";b.type="text/css";b.styleSheet?b.styleSheet.cssText="body { visibility: hidden !important; }":b.appendChild(document.createTextNode("body { visibility: hidden !important; }"));a.appendChild(b)}
function Ya(){return p.document.getElementById("chartbeat-flicker-control-style")||p.document.getElementById("chartbeat-body-hider")}function Za(){var a=Ya();a&&a.parentNode.removeChild(a)}function Pa(a,b,c,d,e,f,h,j){this.b=a;this.p=b;this.f=h;this.z=c;this.k=d;this.u=e;this.n=o;this.anchors=[];this.P=f;this.type=j}function V(a,b,c,d,e,f,h){this.b=a;this.S=b;this.content=c;this.X=d||{};this.N=e;this.O=f;this.C=h}
function $a(a){var b={};b.s=a.status;b.c=a.code;b.m=a.message;var c=n;if(a.data!==n)c={},c.s=a.data.U,c.g=a.data.u,c.m=a.data.R;b.d=c;return b}function ab(a){if(p.document&&p.document.body)a();else var b=ja(function(){p.document&&p.document.body&&(E(b),a())},50)}var bb=/^[a-zA-Z0-9+/]*={0,2}$/;function Na(a){if(a&&bb.exec(a))try{return ha(a)}catch(b){}return a}
function cb(a){var b=a;b+=String.fromCharCode(128);for(var a=[1518500249,1859775393,2400959708,3395469782],c=1732584193,d=4023233417,e=2562383102,f=271733878,h=3285377520,j=[],i,k,l,s,u,x=Math.ceil((b.length/4+2)/16),z=[x],w=0,r;w<x;w++){z[w]=[];for(i=0;i<16;i++)z[w][i]=b.charCodeAt(w*64+i*4)<<24|b.charCodeAt(w*64+i*4+1)<<16|b.charCodeAt(w*64+i*4+2)<<8|b.charCodeAt(w*64+i*4+3)}w=(b.length-1)*8;b=x-1;z[b][14]=Math.floor(w/Math.pow(2,32));z[b][15]=w&4294967295;for(w=0;w<x;w++){for(r=0;r<16;r++)j[r]=
z[w][r];for(r=16;r<80;r++)j[r]=(j[r-3]^j[r-8]^j[r-14]^j[r-16])<<1|(j[r-3]^j[r-8]^j[r-14]^j[r-16])>>>31;b=c;i=d;k=e;l=f;s=h;for(r=0;r<80;r++)u=Math.floor(r/20),u=(b<<5|b>>>27)+(u==0?i&k^~i&l:u==1?i^k^l:u==2?i&k^i&l^k&l:i^k^l)+s+a[u]+j[r]&4294967295,s=l,l=k,k=i<<30|i>>>2,i=b,b=u;c=c+b&4294967295;d=d+i&4294967295;e=e+k&4294967295;f=f+l&4294967295;h=h+s&4294967295}a=c;if(a==0)a="A";else{a>>>=0;for(c="";a>0;)d=a%64,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-".charAt(d)+c,a>>>=6;
a=c}return a}function db(){var a=document.querySelectorAll(ya());D(a,function(a){a=Array.prototype.slice.call(a.querySelectorAll("img"));D(a,function(a){a.setAttribute("pinger-seen","true");a.getAttribute("keep-hiding")!=="true"&&a.classList.remove("cb-it-hide")})})}function ya(){var a=W.articleBlockSelector;return a?a:"article, section"}
function eb(){var a=W;return((a.lazyLoadImageAttributes||a.lazyLoadSrcsetAttribute)+", data-src, data-srcset").split(", ").filter(Boolean).map(function(a){return a.trim()})};function fb(a,b){for(var c=b||document.documentElement,d=[],e=n,f=a,h,j,i,k,l,s;f&&f!==c;){h=f.nodeName.toLowerCase();e=f;j=e.nodeName;if((f=f.parentNode)&&f!==document.documentElement){i=f.children;k=0;for(l=0,s=i.length;l<s;l++){if(e===i[l]){h+="["+(1+l-k)+"]";break}i[l].nodeName!==j&&k++}}d.unshift(h)}return d.join("/")}
var X=function(){function a(a,b,c){b==="href"?(a=a.href||"",c=c||"",a=a.replace(d,""),c=c.replace(d,"")):a=a.getAttribute(b);return a===c}var b=/^\*\[@id='(.+?)'\](?:\[@([a-z-]+)='(.*)'\])?$/,c=/^([a-z][a-z0-9-]*)\[(\d+)\](?:\[@([a-z-]+)='(.*)'\])?$/,d=/^http(s)?\:\/\//;return function(d,f){var h=n;a:{for(var h=0,j=d.indexOf("/"),i=d.indexOf("'"),k=[];j!==-1;)if(i!==-1&&i<j){i=d.indexOf("'",i+1);if(i==-1){h=n;break a}j=d.indexOf("/",i+1);i=d.indexOf("'",i+1)}else k.push(d.substring(h,j)),h=j+1,j=
d.indexOf("/",h);h<d.length&&k.push(d.substring(h,d.length));h=k}if(!h||h.length==0)return f?f:n;var l,s,u,x,z,i=h.shift();if(f)j=f;else{if(i==="body")j=document.body;else{l=b.exec(i);if(!l)return n;j=document.getElementById(l[1]);if(!j)return n;s=l[2];l=l[3];if(s&&!a(j,s,l))return n}i=h.shift()}for(;y(i);){l=c.exec(i);if(!l)return n;i=l[1];k=parseInt(l[2],10);s=l[3];l=l[4];if(isNaN(k))return n;u=j.children;z=u.length;if(z===0)return n;for(x=0;x<z;x++){if(u[x].nodeName&&u[x].nodeName.toLowerCase()===
i&&(k--,k===0)){j=u[x];if(s&&!a(j,s,l))return n;break}if(x===z-1)return n}i=h.shift()}return j}}();function gb(a){if(!("querySelectorAll"in document))return[];var b;b=/a\[@href='(.+?)'\sor\sstarts-with\(.+,\s?'(.+?)'\)\]/.exec(a);a=/^a\[@href='(.+?)'\]$/.exec(a);if(!b&&!a)return n;b=document.querySelectorAll(b?'a[href="'+b[1]+'"],a[href^="'+b[2]+'"]':'a[href="'+a[1]+'"]');b.length<1&&(b=n);return b?Array.prototype.slice.call(b):[]}
function hb(a){var b=n,b=ua(a,function(a){return a.id}),c=fb(a,b);b&&(c&&(c="/"+c),c="*[@id='"+b.id+"']"+c);c+="[@href='"+a.href+"']";return c};function Y(a){this.i=a;this.q=[];var b=this.i,a=b.topStorageDomain,b=b.domain,c=p.location.hostname;this.V=a?a:Wa(c,b)?b:c.replace(/^www\./,"");this.L=this.i.cookiePath||"/";this.J=new M("_t_",this.i.cookiePath||"/",ta(this.i),this.i);this.o=Z;a=Aa;Q()[a]=m}
function ib(a){if(!a.G){a.G=m;var b=a.I,c=a.F,d=Na(a.J.e("tests")),e={};d.length>0&&(e=ba(d));var f=Ra(c,e);a.q=Oa(b,f,e);var h=a.q,j="."+a.V,i=a.L;a.t=function(a){var b,a=a||window.event;if(b=!a?n:ua(a.target||a.srcElement,va,10))if(a=jb(b,h),a.length){var c;if(b===n||typeof b==="undefined")c="unknown";else if(b.tagName==="A"&&b.href)c=b.href;c=Va(c,a[0].test.u,a);a=(a=K.e("_chartbeat6"))?a.split("::"):[];a.length>=10&&a.splice(0,a.length-10+1);a.push(c);K.create("_chartbeat6",a.join("::"),60,i?
i:"/",j?j:"")}};a=v(function(){var a=this.t,b=p.document.body;b.addEventListener?b.addEventListener("click",a,m):b.attachEvent&&b.attachEvent("onclick",a);kb(this,h,f.b)},a);ab(a)}}function kb(a,b,c){var d=C(),e=v(function(){var a=C()-d>=5E3,e=p.document.readyState==="complete"||p.document.readyState!=="loading"&&!p.document.documentElement.doScroll,j;a||(j=lb(b,c));if(a||j||e)E(this.A),$(this)},a);a.A=ja(e,50);e()}
function $(a){Za();var b={},c=[],d=[],e=o,f="m";D(a.q,function(a){if(a.b==="lift_exp")f=a.k.b;if(a.n){e=m;var i=[];D(a.anchors,function(a){i.push(a.f)});b[a.b]={chosenVariant:a.k.b,specificLocation:i}}else a.M?d.push(a.b):c.push(a.b)});if(e)b.lift_exp=f,a.J.create("tests",ga(da(b)),3600),f==="m"&&delete b.lift_exp;var h={status:mb,data:n,code:g,message:g};a.o!==Z?(h.status=nb,h.code=a.o):(a={U:b,u:f,R:c,$:d},h.status=ob,h.data=a);R(["t",$a(h)])}
function pb(a){var b=a.i;R(["ev",function(){a.terminate()}]);R(["sv",function(){qb(a,b)}])}Y.prototype.T=function(a){if(Object.prototype.toString.call(a)==="[object Array]"&&B(a[0])&&a[0]==="readyForTesting")a[1]?ib(this):this.H=o};function rb(a){a.o=sb;$(a)}function tb(a){a.o=ub;$(a)}
Y.prototype.terminate=function(){this.o=Z;var a=this.t,b=p.document.body;b.removeEventListener?b.removeEventListener("click",a,m):b.detachEvent&&b.detachEvent("onclick",a);this.t=g;E(this.A);this.A=n;this.q=[];this.F=this.I=n;this.G=o};
function qb(a,b){pb(a);if(za())rb(a);else if("srcset"in document.createElement("img")){var c=La(b);if(y(c))y(b.flickerControl)||(b.flickerControl=m),b.flickerControl&&(ka(Za,1E3),Ya()||Xa()),Ma(c,function(b,c){a:{var f=p.chartbeatFlicker;if(f){if(f.timeoutFlag)break a;f.strategyFetched=m}a.I=b;a.F=c;a.H=m;for(var f=v(a.T,a),h=p._cbm||[];h.length;)f(h.shift());p._cbm={push:f};a.H&&ib(a)}},function(){})}else tb(a)}
function lb(a,b){var c=[];D(a,function(a,d){c.push(o);if(a.n)c[d]=m;else if(!a.f||a.f===a.p){var h=X(a.p);if(h)var j=X(a.z,h);if(h&&j)c[d]=m,b!=="c"&&vb(j,a),a.anchors=[{element:h,f:cb(a.p)}],a.n=m}else{a.anchors=[];var i=a.P;if((h=gb(a.p))&&h.length>0){var j=a.type.indexOf("image")>=0,k=o;j&&D(h,function(b){b&&(b=X(a.z,b))&&(k=k||wb(b,a))});j&&!k?a.M=m:D(h,function(h){if(h)var j=X(a.z,h);var k;j&&(k=N(j.textContent),k==i?wa(j,k)!=j&&(j=n):j=n);if(h&&j)c[d]=m,b!=="c"&&vb(j,a),a.anchors.push({element:h,
f:cb(hb(h))}),a.n=m})}}});db();var d=document.getElementById("chartbeat-flicker-control-style-ht");d&&d.parentNode.removeChild(d);return c.indexOf(o)===-1}
function jb(a,b){var c=[],d=n,e=101,f=o;D(b,function(b){!f&&!b.D&&D(b.anchors,function(c){if(!f)if(c.element===a)d={test:b,f:c.f},f=m;else if(c.element.href===a.href){var i;var k=c.element.getBoundingClientRect(),l=a.getBoundingClientRect();k.right-k.left>0&&k.bottom-k.top>0&&l.right-l.left>0&&l.bottom-l.top>0?(i=Math.max(k.left,l.left)-Math.min(k.right,l.right),k=Math.max(k.top,l.top)-Math.min(k.bottom,l.bottom),i=i<=0?Math.max(k,0):k<=0?i:Math.sqrt(i*i+k*k)):i=g;i<e&&(d={test:b,f:c.f},e=i)}})});
d&&c.push(d);return c}function wb(a,b){var c=o,d=P(a),e=eb(),f=b.k.C;d&&D(f,function(a){var b=d.querySelectorAll('[src="'+O(a.src)+'"]'),f=d.querySelectorAll('[srcset="'+O(a.src)+'"]'),k=o;e.forEach(function(b){d.querySelectorAll("["+b+' = "'+O(a.src)+'"]')&&(k=m)});if(f||k||b)c=m});return c}
function vb(a,b){var c=b.k,d=c.content,e=c.N,f=c.O,c=c.C,h=b.type;if("textContent"in document.createElement("b")&&a.textContent.trim())if(h.indexOf("image")<0||!c)a.textContent=d;else{var j=eb();b.D=m;D(c,function(c){var h=c.newSrcSet||c.src,l=c.src,s=P(a),u=o;if(h&&s){j.forEach(function(a){var b=s.querySelectorAll("["+a+' = "'+O(l)+'"]');Array.prototype.forEach.call(b,function(b){xb(b,a,h,f,e);b=b.parentNode.querySelector("img");yb(b);u=m})});var c=s.querySelectorAll('[srcset="'+O(l)+'"]'),x=s.querySelectorAll('[src="'+
O(l)+'"]');Array.prototype.forEach.call(c,function(a){xb(a,"srcset",h,f,e);u=m});Array.prototype.forEach.call(x,function(a){xb(a,"src",h,f,e);u=m});if(u)a.textContent=d,b.D=o}})}}function xb(a,b,c,d,e){a.setAttribute(b,"");var f=a.parentNode.querySelector("img");(b==="srcset"||b==="src")&&zb(f);f.setAttribute("keep-hiding","true");a.setAttribute(b,c);f.setAttribute("alt",e);if(a=P(a))if(a=a.querySelector("figcaption"))a.innerHTML=d}
function zb(a){a.classList.add("cb-it-hide");a.addEventListener("load",function(){yb(a)})}function yb(a){a.classList.remove("cb-it-hide");a.removeAttribute("keep-hiding")}var Z=0,sb=2,ub=4,ob="s",nb="e",mb="f";ta(p._sf_async_config||{});if(!K.e("cb_optout")){var W=p._sf_async_config,I=W;sa();var Ea=!!I.useCanonical,Ab=Ga(!!I.useCanonicalDomain&&Ea);I.title=I.title||document.title;I.domain=I.domain||Ab;I.path=I.path?Ka():Da();I.domain=I.domain&&I.domain.replace(/^www\./,"");if("textContent"in document.createElement("b")&&"querySelectorAll"in document&&"atob"in window&&"btoa"in window){var Bb=new Y(W);qb(Bb,W)}};})();