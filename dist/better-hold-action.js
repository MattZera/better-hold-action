(()=>{"use strict";var e,t,n,r={431:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BetterHoldAction=void 0;var r=n(151),i=n(188);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=["touchstart","mousedown"],u=["touchend","mouseup"],c=["touchcancel","mouseout","touchmove","mousewheel","wheel","scroll"],s=["click"];t.BetterHoldAction=class{constructor(e,t){a(this,"card",void 0),a(this,"timeoutDelay",void 0),a(this,"interceptor",void 0),a(this,"capturedDownEvent",void 0),a(this,"timeoutID",null),a(this,"actionTriggered",!1),this.card=e,this.timeoutDelay=t.delay??1e3,this.interceptor=document.createElement("div"),this.interceptor.setAttribute("id","better-hold-action-interceptor"),this.interceptor.setAttribute("style","position: absolute; top:0; left:0; bottom: 0; right: 0; overflow: visible;"),this.card.appendChild(this.interceptor),o.forEach((e=>{this.interceptor.addEventListener(e,this.downEvent.bind(this),{passive:!1,capture:!0})})),u.forEach((e=>{this.interceptor.addEventListener(e,this.upEvent.bind(this),{passive:!1,capture:!0})})),s.forEach((e=>{this.interceptor.addEventListener(e,this.clickEvent.bind(this),{passive:!1,capture:!0})})),c.forEach((e=>{this.interceptor.addEventListener(e,this.cancelEvent.bind(this),{passive:!1,capture:!0})}))}downEvent(e){e.preventDefault(),e.stopPropagation(),this.actionTriggered=!1,this.capturedDownEvent=(0,i.cloneEvent)(e),this.card.parentElement?.dispatchEvent((0,i.cloneEvent)(e)),this.timeoutID=window.setTimeout(this.fireHoldAction.bind(this),this.timeoutDelay)}upEvent(e){e.preventDefault(),e.stopPropagation(),this.timeoutID&&this.capturedDownEvent&&(window.clearTimeout(this.timeoutID),this.timeoutID=null,this.card.dispatchEvent(this.capturedDownEvent)),this.card.dispatchEvent((0,i.cloneEvent)(e))}cancelEvent(){this.timeoutID&&window.clearTimeout(this.timeoutID),this.timeoutID=null}clickEvent(e){this.actionTriggered&&(e.preventDefault(),e.stopPropagation())}fireHoldAction(){this.preventNextReleaseEvent(),this.timeoutID=null,this.actionTriggered=!0,(0,r.fireEvent)(this.card,"action",{action:"hold"})}preventNextReleaseEvent(){const e=t=>{t.preventDefault(),t.stopPropagation(),u.forEach((t=>{document.removeEventListener(t,e,!0)}))};u.forEach((t=>{document.addEventListener(t,e,{capture:!0,passive:!1})}))}}},188:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modInfo=t.cloneEvent=void 0;var r,i=(r=n(147))&&r.__esModule?r:{default:r};t.cloneEvent=e=>new(0,e.constructor)(e.type,e),t.modInfo=()=>{console.info("%c  BETTER-HOLD-ACTION  \n%c    Version ".concat(i.default.version,"     "),"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray")}},151:(e,t,n)=>{n.r(t),n.d(t,{DEFAULT_DOMAIN_ICON:()=>Q,DEFAULT_PANEL:()=>X,DEFAULT_VIEW_ENTITY_ID:()=>ue,DOMAINS_HIDE_MORE_INFO:()=>te,DOMAINS_MORE_INFO_NO_HISTORY:()=>ne,DOMAINS_TOGGLE:()=>ie,DOMAINS_WITH_CARD:()=>$,DOMAINS_WITH_MORE_INFO:()=>ee,NumberFormat:()=>r,STATES_OFF:()=>re,TimeFormat:()=>i,UNIT_C:()=>ae,UNIT_F:()=>oe,applyThemesOnElement:()=>P,computeCardSize:()=>H,computeDomain:()=>U,computeEntity:()=>q,computeRTL:()=>W,computeRTLDirection:()=>z,computeStateDisplay:()=>K,computeStateDomain:()=>Y,createThing:()=>le,debounce:()=>de,domainIcon:()=>pe,evaluateFilter:()=>he,fireEvent:()=>ce,fixedIcons:()=>fe,formatDate:()=>m,formatDateMonth:()=>b,formatDateMonthYear:()=>g,formatDateNumeric:()=>d,formatDateShort:()=>p,formatDateTime:()=>D,formatDateTimeNumeric:()=>S,formatDateTimeWithSeconds:()=>T,formatDateWeekday:()=>c,formatDateYear:()=>_,formatNumber:()=>J,formatTime:()=>N,formatTimeWeekday:()=>A,formatTimeWithSeconds:()=>M,forwardHaptic:()=>ge,getLovelace:()=>Se,handleAction:()=>we,handleActionConfig:()=>_e,handleClick:()=>ke,hasAction:()=>De,hasConfigOrEntityChanged:()=>Ee,hasDoubleClick:()=>Te,isNumericState:()=>B,navigate:()=>ve,numberFormatToLocale:()=>V,relativeTime:()=>L,round:()=>G,stateIcon:()=>Oe,timerTimeRemaining:()=>R,toggleEntity:()=>ye,turnOnOffEntities:()=>Ie,turnOnOffEntity:()=>be});var r,i,a,o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},u={second:45,minute:45,hour:22,day:5},c=function(e,t){return s(t).format(e)},s=function(e){return new Intl.DateTimeFormat(e.language,{weekday:"long",month:"long",day:"numeric"})},m=function(e,t){return l(t).format(e)},l=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric"})},d=function(e,t){return f(t).format(e)},f=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric"})},p=function(e,t){return h(t).format(e)},h=function(e){return new Intl.DateTimeFormat(e.language,{day:"numeric",month:"short"})},g=function(e,t){return v(t).format(e)},v=function(e){return new Intl.DateTimeFormat(e.language,{month:"long",year:"numeric"})},b=function(e,t){return y(t).format(e)},y=function(e){return new Intl.DateTimeFormat(e.language,{month:"long"})},_=function(e,t){return w(t).format(e)},w=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric"})};(a=r||(r={})).language="language",a.system="system",a.comma_decimal="comma_decimal",a.decimal_comma="decimal_comma",a.space_comma="space_comma",a.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(i||(i={}));var k=function(e){if(e.time_format===i.language||e.time_format===i.system){var t=e.time_format===i.language?e.language:void 0,n=(new Date).toLocaleString(t);return n.includes("AM")||n.includes("PM")}return e.time_format===i.am_pm},D=function(e,t){return E(t).format(e)},E=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:k(e)?"numeric":"2-digit",minute:"2-digit",hour12:k(e)})},T=function(e,t){return I(t).format(e)},I=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"long",day:"numeric",hour:k(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:k(e)})},S=function(e,t){return x(t).format(e)},x=function(e){return new Intl.DateTimeFormat(e.language,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",hour12:k(e)})},N=function(e,t){return O(t).format(e)},O=function(e){return new Intl.DateTimeFormat(e.language,{hour:"numeric",minute:"2-digit",hour12:k(e)})},M=function(e,t){return F(t).format(e)},F=function(e){return new Intl.DateTimeFormat(e.language,{hour:k(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:k(e)})},A=function(e,t){return C(t).format(e)},C=function(e){return new Intl.DateTimeFormat(e.language,{hour:k(e)?"numeric":"2-digit",minute:"2-digit",second:"2-digit",hour12:k(e)})},L=function(e,t,n,r){void 0===r&&(r=!0);var i=function(e,t,n){void 0===t&&(t=Date.now()),void 0===n&&(n={});var r=o(o({},u),n||{}),i=(+e-+t)/1e3;if(Math.abs(i)<r.second)return{value:Math.round(i),unit:"second"};var a=i/60;if(Math.abs(a)<r.minute)return{value:Math.round(a),unit:"minute"};var c=i/3600;if(Math.abs(c)<r.hour)return{value:Math.round(c),unit:"hour"};var s=i/86400;if(Math.abs(s)<r.day)return{value:Math.round(s),unit:"day"};var m=new Date(e),l=new Date(t),d=m.getFullYear()-l.getFullYear();if(Math.round(Math.abs(d))>0)return{value:Math.round(d),unit:"year"};var f=12*d+m.getMonth()-l.getMonth();if(Math.round(Math.abs(f))>0)return{value:Math.round(f),unit:"month"};var p=i/604800;return{value:Math.round(p),unit:"week"}}(e,n);return r?function(e){return new Intl.RelativeTimeFormat(e.language,{numeric:"auto"})}(t).format(i.value,i.unit):Intl.NumberFormat(t.language,{style:"unit",unit:i.unit,unitDisplay:"long"}).format(Math.abs(i.value))};function R(e){var t,n=3600*(t=e.attributes.remaining.split(":").map(Number))[0]+60*t[1]+t[2];if("active"===e.state){var r=(new Date).getTime(),i=new Date(e.last_changed).getTime();n=Math.max(n-(r-i)/1e3,0)}return n}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var P=function(e,t,n,r){void 0===r&&(r=!1),e._themes||(e._themes={});var i=t.default_theme;("default"===n||n&&t.themes[n])&&(i=n);var a=j({},e._themes);if("default"!==i){var o=t.themes[i];Object.keys(o).forEach((function(t){var n="--"+t;e._themes[n]="",a[n]=o[t]}))}if(e.updateStyles?e.updateStyles(a):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,a),r){var u=document.querySelector("meta[name=theme-color]");if(u){u.hasAttribute("default-content")||u.setAttribute("default-content",u.getAttribute("content"));var c=a["--primary-color"]||u.getAttribute("default-content");u.setAttribute("content",c)}}},H=function(e){return"function"==typeof e.getCardSize?e.getCardSize():4};function U(e){return e.substr(0,e.indexOf("."))}function q(e){return e.substr(e.indexOf(".")+1)}function W(e){var t,n=(null==e||null==(t=e.locale)?void 0:t.language)||"en";return e.translationMetadata.translations[n]&&e.translationMetadata.translations[n].isRTL||!1}function z(e){return W(e)?"rtl":"ltr"}function Y(e){return U(e.entity_id)}var B=function(e){return!!e.attributes.unit_of_measurement||!!e.attributes.state_class},V=function(e){switch(e.number_format){case r.comma_decimal:return["en-US","en"];case r.decimal_comma:return["de","es","it"];case r.space_comma:return["fr","sv","cs"];case r.system:return;default:return e.language}},G=function(e,t){return void 0===t&&(t=2),Math.round(e*Math.pow(10,t))/Math.pow(10,t)},J=function(e,t,n){var i=t?V(t):void 0;if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},(null==t?void 0:t.number_format)!==r.none&&!Number.isNaN(Number(e))&&Intl)try{return new Intl.NumberFormat(i,Z(e,n)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Z(e,n)).format(Number(e))}return"string"==typeof e?e:G(e,null==n?void 0:n.maximumFractionDigits).toString()+("currency"===(null==n?void 0:n.style)?" "+n.currency:"")},Z=function(e,t){var n=j({maximumFractionDigits:2},t);if("string"!=typeof e)return n;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){var r=e.indexOf(".")>-1?e.split(".")[1].length:0;n.minimumFractionDigits=r,n.maximumFractionDigits=r}return n},K=function(e,t,n,r){var i=void 0!==r?r:t.state;if("unknown"===i||"unavailable"===i)return e("state.default."+i);if(B(t)){if("monetary"===t.attributes.device_class)try{return J(i,n,{style:"currency",currency:t.attributes.unit_of_measurement})}catch(e){}return J(i,n)+(t.attributes.unit_of_measurement?" "+t.attributes.unit_of_measurement:"")}var a=Y(t);if("input_datetime"===a){var o;if(void 0===r)return t.attributes.has_date&&t.attributes.has_time?(o=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day,t.attributes.hour,t.attributes.minute),D(o,n)):t.attributes.has_date?(o=new Date(t.attributes.year,t.attributes.month-1,t.attributes.day),m(o,n)):t.attributes.has_time?((o=new Date).setHours(t.attributes.hour,t.attributes.minute),N(o,n)):t.state;try{var u=r.split(" ");if(2===u.length)return D(new Date(u.join("T")),n);if(1===u.length){if(r.includes("-"))return m(new Date(r+"T00:00"),n);if(r.includes(":")){var c=new Date;return N(new Date(c.toISOString().split("T")[0]+"T"+r),n)}}return r}catch(e){return r}}return"humidifier"===a&&"on"===i&&t.attributes.humidity?t.attributes.humidity+" %":"counter"===a||"number"===a||"input_number"===a?J(i,n):t.attributes.device_class&&e("component."+a+".state."+t.attributes.device_class+"."+i)||e("component."+a+".state._."+i)||i},Q="mdi:bookmark",X="lovelace",$=["climate","cover","configurator","input_select","input_number","input_text","lock","media_player","scene","script","timer","vacuum","water_heater","weblink"],ee=["alarm_control_panel","automation","camera","climate","configurator","cover","fan","group","history_graph","input_datetime","light","lock","media_player","script","sun","updater","vacuum","water_heater","weather"],te=["input_number","input_select","input_text","scene","weblink"],ne=["camera","configurator","history_graph","scene"],re=["closed","locked","off"],ie=new Set(["fan","input_boolean","light","switch","group","automation"]),ae="°C",oe="°F",ue="group.default_view",ce=function(e,t,n,r){r=r||{},n=null==n?{}:n;var i=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return i.detail=n,e.dispatchEvent(i),i},se=new Set(["call-service","divider","section","weblink","cast","select"]),me={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},le=function(e,t){void 0===t&&(t=!1);var n=function(e,t){return r("hui-error-card",{type:"error",error:e,config:t})},r=function(e,t){var r=window.document.createElement(e);try{if(!r.setConfig)return;r.setConfig(t)}catch(r){return console.error(e,r),n(r.message,t)}return r};if(!e||"object"!=typeof e||!t&&!e.type)return n("No type defined",e);var i=e.type;if(i&&i.startsWith("custom:"))i=i.substr("custom:".length);else if(t)if(se.has(i))i="hui-"+i+"-row";else{if(!e.entity)return n("Invalid config given.",e);var a=e.entity.split(".",1)[0];i="hui-"+(me[a]||"text")+"-entity-row"}else i="hui-"+i+"-card";if(customElements.get(i))return r(i,e);var o=n("Custom element doesn't exist: "+e.type+".",e);o.style.display="None";var u=setTimeout((function(){o.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(u),ce(o,"ll-rebuild",{},o)})),o},de=function(e,t,n){var r;return void 0===n&&(n=!1),function(){var i=[].slice.call(arguments),a=this,o=function(){r=null,n||e.apply(a,i)},u=n&&!r;clearTimeout(r),r=setTimeout(o,t),u&&e.apply(a,i)}},fe={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function pe(e,t){if(e in fe)return fe[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return t&&"off"===t?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===t?"mdi:window-closed":"mdi:window-open";case"lock":return t&&"unlocked"===t?"mdi:lock-open":"mdi:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"mdi:cast-connected":"mdi:cast";case"zwave":switch(t){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),"mdi:bookmark"}}var he=function(e,t){var n=t.value||t,r=t.attribute?e.attributes[t.attribute]:e.state;switch(t.operator||"=="){case"==":return r===n;case"<=":return r<=n;case"<":return r<n;case">=":return r>=n;case">":return r>n;case"!=":return r!==n;case"regex":return r.match(n);default:return!1}},ge=function(e){ce(window,"haptic",e)},ve=function(e,t,n){void 0===n&&(n=!1),n?history.replaceState(null,"",t):history.pushState(null,"",t),ce(window,"location-changed",{replace:n})},be=function(e,t,n){void 0===n&&(n=!0);var r,i=U(t),a="group"===i?"homeassistant":i;switch(i){case"lock":r=n?"unlock":"lock";break;case"cover":r=n?"open_cover":"close_cover";break;default:r=n?"turn_on":"turn_off"}return e.callService(a,r,{entity_id:t})},ye=function(e,t){var n=re.includes(e.states[t].state);return be(e,t,n)},_e=function(e,t,n,r){if(r||(r={action:"more-info"}),!r.confirmation||r.confirmation.exemptions&&r.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(ge("warning"),confirm(r.confirmation.text||"Are you sure you want to "+r.action+"?")))switch(r.action){case"more-info":(n.entity||n.camera_image)&&ce(e,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":r.navigation_path&&ve(0,r.navigation_path);break;case"url":r.url_path&&window.open(r.url_path);break;case"toggle":n.entity&&(ye(t,n.entity),ge("success"));break;case"call-service":if(!r.service)return void ge("failure");var i=r.service.split(".",2);t.callService(i[0],i[1],r.service_data,r.target),ge("success");break;case"fire-dom-event":ce(e,"ll-custom",r)}},we=function(e,t,n,r){var i;"double_tap"===r&&n.double_tap_action?i=n.double_tap_action:"hold"===r&&n.hold_action?i=n.hold_action:"tap"===r&&n.tap_action&&(i=n.tap_action),_e(e,t,n,i)},ke=function(e,t,n,r,i){var a;if(i&&n.double_tap_action?a=n.double_tap_action:r&&n.hold_action?a=n.hold_action:!r&&n.tap_action&&(a=n.tap_action),a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?"))switch(a.action){case"more-info":(a.entity||n.entity||n.camera_image)&&(ce(e,"hass-more-info",{entityId:a.entity?a.entity:n.entity?n.entity:n.camera_image}),a.haptic&&ge(a.haptic));break;case"navigate":a.navigation_path&&(ve(0,a.navigation_path),a.haptic&&ge(a.haptic));break;case"url":a.url_path&&window.open(a.url_path),a.haptic&&ge(a.haptic);break;case"toggle":n.entity&&(ye(t,n.entity),a.haptic&&ge(a.haptic));break;case"call-service":if(!a.service)return;var o=a.service.split(".",2),u=o[0],c=o[1],s=j({},a.service_data);"entity"===s.entity_id&&(s.entity_id=n.entity),t.callService(u,c,s,a.target),a.haptic&&ge(a.haptic);break;case"fire-dom-event":ce(e,"ll-custom",a),a.haptic&&ge(a.haptic)}};function De(e){return void 0!==e&&"none"!==e.action}function Ee(e,t,n){if(t.has("config")||n)return!0;if(e.config.entity){var r=t.get("hass");return!r||r.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}function Te(e){return void 0!==e&&"none"!==e.action}var Ie=function(e,t,n){void 0===n&&(n=!0);var r={};t.forEach((function(t){if(re.includes(e.states[t].state)===n){var i=U(t),a=["cover","lock"].includes(i)?i:"homeassistant";a in r||(r[a]=[]),r[a].push(t)}})),Object.keys(r).forEach((function(t){var i;switch(t){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}e.callService(t,i,{entity_id:r[t]})}))},Se=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null},xe={humidity:"mdi:water-percent",illuminance:"mdi:brightness-5",temperature:"mdi:thermometer",pressure:"mdi:gauge",power:"mdi:flash",signal_strength:"mdi:wifi"},Ne={binary_sensor:function(e,t){var n="off"===e;switch(null==t?void 0:t.attributes.device_class){case"battery":return n?"mdi:battery":"mdi:battery-outline";case"battery_charging":return n?"mdi:battery":"mdi:battery-charging";case"cold":return n?"mdi:thermometer":"mdi:snowflake";case"connectivity":return n?"mdi:server-network-off":"mdi:server-network";case"door":return n?"mdi:door-closed":"mdi:door-open";case"garage_door":return n?"mdi:garage":"mdi:garage-open";case"power":case"plug":return n?"mdi:power-plug-off":"mdi:power-plug";case"gas":case"problem":case"safety":case"tamper":return n?"mdi:check-circle":"mdi:alert-circle";case"smoke":return n?"mdi:check-circle":"mdi:smoke";case"heat":return n?"mdi:thermometer":"mdi:fire";case"light":return n?"mdi:brightness-5":"mdi:brightness-7";case"lock":return n?"mdi:lock":"mdi:lock-open";case"moisture":return n?"mdi:water-off":"mdi:water";case"motion":return n?"mdi:walk":"mdi:run";case"occupancy":case"presence":return n?"mdi:home-outline":"mdi:home";case"opening":return n?"mdi:square":"mdi:square-outline";case"running":return n?"mdi:stop":"mdi:play";case"sound":return n?"mdi:music-note-off":"mdi:music-note";case"update":return n?"mdi:package":"mdi:package-up";case"vibration":return n?"mdi:crop-portrait":"mdi:vibrate";case"window":return n?"mdi:window-closed":"mdi:window-open";default:return n?"mdi:radiobox-blank":"mdi:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"mdi:garage-open":"mdi:garage";case"door":return t?"mdi:door-open":"mdi:door-closed";case"shutter":return t?"mdi:window-shutter-open":"mdi:window-shutter";case"blind":return t?"mdi:blinds-open":"mdi:blinds";case"window":return t?"mdi:window-open":"mdi:window-closed";default:return pe("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in xe)return xe[t];if("battery"===t){var n=Number(e.state);if(isNaN(n))return"mdi:battery-unknown";var r=10*Math.round(n/10);return r>=100?"mdi:battery":r<=0?"mdi:battery-alert":"hass:battery-"+r}var i=e.attributes.unit_of_measurement;return"°C"===i||"°F"===i?"mdi:thermometer":pe("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?pe("input_datetime"):"mdi:calendar":"mdi:clock"}},Oe=function(e){if(!e)return"mdi:bookmark";if(e.attributes.icon)return e.attributes.icon;var t=U(e.entity_id);return t in Ne?Ne[t](e):pe(t,e.state)}},147:e=>{e.exports=JSON.parse('{"name":"better-hold-action","version":"1.0.0","description":"","main":"index.js","scripts":{"build":"webpack","build:prod":"webpack --mode=production","format":"prettier --check ./**/*.ts","format:fix":"prettier --write ./**/*.ts","lint":"eslint ./**/*.ts","lint:fix":"eslint ./**/*.ts","test":"echo \\"Error: no test specified\\" && exit 1"},"author":"Matthew Zera","license":"MIT","devDependencies":{"@babel/core":"^7.17.5","@babel/plugin-proposal-class-properties":"^7.16.7","@babel/plugin-syntax-top-level-await":"^7.14.5","@babel/plugin-transform-template-literals":"^7.16.7","@babel/preset-env":"^7.16.11","@babel/preset-typescript":"^7.16.7","@typescript-eslint/eslint-plugin":"^4.33.0","@typescript-eslint/parser":"^4.33.0","babel-loader":"^8.2.3","eslint":"^7.32.0","eslint-config-prettier":"^8.4.0","eslint-config-standard-with-typescript":"^21.0.1","eslint-plugin-import":"^2.25.4","eslint-plugin-promise":"^5.2.0","prettier":"^2.5.1","source-map-loader":"^3.0.1","ts-loader":"^9.2.6","ts-node":"^10.5.0","typescript":"^4.6.2","webpack":"^5.69.1","eslint-plugin-prettier":"^4.0.0","webpack-cli":"^4.9.2"},"dependencies":{"custom-card-helpers":"^1.9.0"}}')}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=a(151),t=a(431),n=a(188),(async()=>{const r=await customElements.whenDefined("ha-card");if(r){const n=r.prototype.firstUpdated;r.prototype.firstUpdated=function(){if(n){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];n.call(this,...i)}const o=(0,e.getLovelace)(),u=this.getRootNode().host,c=o?.config.better_hold_action,s=u?._config||null;if(c&&s){const e={...c,...s};e&&e.enabled&&null!=e.hold_action&&e.hold_action.action&&"none"!==e.hold_action.action&&new t.BetterHoldAction(this,e)}}}(0,n.modInfo)()})()})();
//# sourceMappingURL=better-hold-action.js.map