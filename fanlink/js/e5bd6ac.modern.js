(window.webpackJsonp=window.webpackJsonp||[]).push([[31,93],{334:function(e,t,r){"use strict";r.r(t);var o=r(2),n=(r(116),r(38),r(191),r(34)),c=r.n(n),l=r(115),d=r.n(l),m=r(340),v=r(352),h=r.n(v),f=r(39),k=r.n(f);function w(e){return y.apply(this,arguments)}function y(){return y=Object(o.a)((function*(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e){yield k.a.get(e.cta.url+"&skipRedirect=true");var r=JSON.parse(d.a.decode(h.a.parse(e.cta.url,!0).query.cd)).destUrl;if("itunes"===e.service)try{var o=yield k.a.head("https://itunes-proxy.feature.fm/".concat(r),{headers:{"Access-Control-Allow-Origin":"*","x-requested-with":!0}});return _(o.headers["x-final-url"],t),!0}catch(e){console.log(e)}return e.cta.uri?D(document.getElementById("deepLinkOpenApp"),e.cta.uri,r):_(r,t),!0}return!1})),y.apply(this,arguments)}function L(){return L=Object(o.a)((function*(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e.services.find((e=>e.service===t||"deezer"===e.service&&"dzr"===t));return yield w(o,r)})),L.apply(this,arguments)}function R(){return R=Object(o.a)((function*(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=e.services.find((e=>e.actionId===t));return yield w(o,r)})),R.apply(this,arguments)}function D(iframe,e,t){if(m.a.isiOSDevice())_(t,!1);else{var r=!1;window.onblur=function(){window.onblur=null,r=!0},window.onfocus=function(){window.onfocus=null,_(t,!1)},setTimeout((()=>{window.onfocus=null,window.onblur=null}),5e3),iframe.src=e,setTimeout((()=>{r||_(t,!1)}),500)}}function _(e,t){var r=e.toLowerCase().startsWith("http")?e:"//".concat(e);t?window.top.open(r,"_blank"):window.top.location.href=r}t.default={excludeItunesForAndroid:function(e,t){if(!t)return window.__NUXT__.androidOnlyServices?window.__NUXT__.androidOnlyServices:e;if((t||"").match(/Android/i)){var r=e.filter((e=>"itunes"!==e.service));return this.$ssrContext&&(this.$ssrContext.nuxt.androidOnlyServices=r),r}return e||[]},setServiceCookie:function(e,t){e.display_settings&&e.display_settings.automaticMusicServiceRedirect&&e.display_settings.automaticMusicServiceRedirect.find((function(e){return e===t}))&&c.a.set("musicservice",t,{expires:180})},redirectToMusicServiceByAction:function(e,t){return R.apply(this,arguments)},redirectToMusicService:function(e,t){return L.apply(this,arguments)}}},340:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));r(38);var o=e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());t.a={getEntityAvatar:e=>e.avatar?e.avatar:"artist"===e.type?"/placeholder-artist.svg":"playlist"===e.type?"/placeholder-playlist.svg":"user"===e.type?"/placeholder-user.svg":"/placeholder-artist.svg",isMobileTablet:function(){var a,e=!1;return a=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(e=!0),e},validateEmail:o,isMobileAndroidChrome:function(){try{var e=navigator.userAgent.toLowerCase();if(e.indexOf("android")>-1&&e.indexOf("mobile"))return!0}catch(e){}return!1},isiOSDevice:function(){return!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform)}}},346:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(2),n=r(34),c=r.n(n),l=function(){var e=Object(o.a)((function*(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=c.a.get("allowTracking"),n=c.a.get("trackingSettings");o&&void 0!==n?yield e({display:!1,allowTracking:"true"===o,trackingSettings:JSON.parse(n),allowEmail:!1===t.euResident&&!t.partnerId,skipPageView:r}):yield e({display:!0===t.euResident,allowTracking:!1===t.euResident,trackingSettings:{ads:!1===t.euResident,performance:!1===t.euResident},allowEmail:!1===t.euResident&&!t.partnerId,skipPageView:r})}));return function(t){return e.apply(this,arguments)}}()},348:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(194),r(38),r(67),r(191),r(349);var o=new RegExp("^(?:(?:(?:https?|ftp):)?//)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$","i"),n=new RegExp("^(?:(?:(?:https?|ftp):)?//)?(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$","i"),c=e=>e.match(/^[a-zA-Z]+:\/\//)?e:"https://"+e;t.b={addingProtocol:c,isURL:(e,t)=>!e||((t=t||!1)?o:n).test(e.trim())}},349:function(e,t,r){"use strict";var o=r(4),n=r(193).trim;o({target:"String",proto:!0,forced:r(373)("trim")},{trim:function(){return n(this)}})},373:function(e,t,r){var o=r(82).PROPER,n=r(10),c=r(117);e.exports=function(e){return n((function(){return!!c[e]()||"​᠎"!=="​᠎"[e]()||o&&c[e].name!==e}))}},405:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return n}));r(38),r(44);function o(e,t){var r,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(r=(r=(r=e.indexOf("://")>-1?e.split("/")[2]:e.split("/")[0]).split(":")[0]).split("?")[0],t){var n=r.split(".");r=n.length>1?n[n.length-2]+"."+n[n.length-1]:n[n.length-1]}return o&&(r=r.replace(/^www\./,"")),r}function n(){return window&&window.location&&window.location.pathname?{shortId:window.location.pathname.replace(/^\//,""),domain:window.location.hostname}:{}}},466:function(e,t,r){"use strict";r(38),r(192),r(334);function o(e){var t="";return/^(f|ht)tps?:/i.test(e)||(t="http:",/^\/\//i.test(e)||(t+="//")),t+e}t.a=function(e){var t=e.socialEmbeds||{},r=e.description||"Listen to ".concat(e.title);return t.enabled&&t.description&&(r=t.description),e.title?{title:e.title,link:[{rel:"alternate",type:"application/json+oembed",href:"".concat(e.oembed.apiEndpoint,"?url=").concat(encodeURIComponent(e.link),"&format=json")},{rel:"icon",type:"image/x-icon",href:e.display_settings.favicon||"/icon.ico"}],meta:[{property:"description",content:r},{property:"og:url",content:e.link},{hid:"og:title",property:"og:title",content:t.title||e.title},{hid:"og:description",property:"og:description",content:r},{property:"og:image",content:o(t.croppedImage||t.image||e.featured_image_url)},{property:"twitter:card",content:"summary_large_image"},{property:"twitter:url",content:e.link},{property:"twitter:title",content:t.title||e.title},{property:"twitter:description",content:r},{property:"twitter:image",content:o(t.croppedImage||t.image||e.featured_image_url)}]}:{}}},550:function(e,t,r){var content=r(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(56).default)("69ed39a4",content,!0,{sourceMap:!1})},610:function(e,t,r){"use strict";r(550)},611:function(e,t,r){var o=r(55)(!1);o.push([e.i,".pixel[data-v-2e62fce2]{width:0;height:0}.slug-index[data-v-2e62fce2]{position:absolute;min-height:100%;height:auto;width:100%;display:flex;justify-content:center;align-items:center}",""]),e.exports=o},711:function(e,t,r){"use strict";r.r(t);var o=r(2),n=r(14),c=(r(17),r(125),r(126),r(127),r(128),r(129),r(130),r(131),r(132),r(133),r(134),r(135),r(136),r(137),r(23),r(20),r(47),r(70),r(334)),l=r(466),d=r(405),m=r(114),v=r(346),h=r(348),f=(e,t)=>{var time,r,o=()=>{clearTimeout(time),time=setTimeout((()=>{r(),t&&t()}),1e3*e)};r=e=>{e&&e.target&&e.target.id&&"accept-cookies"==e.target.id?o():(clearTimeout(time),["mousedown","click","keypress"].forEach((function(e){document.removeEventListener(e,r,!0)})),document.removeEventListener("touchstart",o,!0),window.removeEventListener("scroll",o,!0))},["mousedown","click","keypress"].forEach((function(e){document.addEventListener(e,r)})),document.addEventListener("touchstart",o,!0),window.addEventListener("scroll",o,!0),o()};function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=new Map([["all",e=>!0],["desktop",e=>!(e.device&&e.device.type)||0==!e.device.type.toLowerCase().localeCompare("mobiles")&&0==!e.device.type.toLowerCase().localeCompare("tablet")],["mobile",e=>e.device&&e.device.type&&0==e.device.type.toLowerCase().localeCompare("mobile")],["tablet",e=>e.device&&e.device.type&&0==e.device.type.toLowerCase().localeCompare("tablet")],["mac",e=>e.os&&e.os.name&&0==e.os.name.toLowerCase().localeCompare("mac os")],["windows",e=>e.os&&e.os.name&&0==e.os.name.toLowerCase().localeCompare("windows")],["ios",e=>e.os&&e.os.name&&0==e.os.name.toLowerCase().localeCompare("ios")],["android",e=>e.os&&e.os.name&&0==e.os.name.toLowerCase().localeCompare("android")],["mobileios",e=>e.os&&e.os.name&&0==e.os.name.toLowerCase().localeCompare("ios")&&e.device&&e.device.type&&0==e.device.type.toLowerCase().localeCompare("mobile")],["mobileandroid",e=>e.os&&e.os.name&&0==e.os.name.toLowerCase().localeCompare("android")&&e.device&&e.device.type&&0==e.device.type.toLowerCase().localeCompare("mobile")],["ipad",e=>e.os&&e.os.name&&0==e.os.name.toLowerCase().localeCompare("ios")&&e.device&&e.device.type&&0==e.device.type.toLowerCase().localeCompare("tablet")],["androidtablets",e=>e.os&&e.os.name&&0==e.os.name.toLowerCase().localeCompare("android")&&e.device&&e.device.type&&0==e.device.type.toLowerCase().localeCompare("tablet")]]),L={middleware:["unique","getsmartlinkdata","getparams"],head(){var head=Object(l.a)(this.smartLinkData,!this.requireRedirect);return head.script||(head.script=[]),head.script.push({type:"text/javascript",src:"https://www.googleadservices.com/pagead/conversion_async.js",async:!1,defer:!0}),head},created(){0},data:()=>({pageComponents:{base_layout:"multi-provider-player",action_page:"action-page",bio_link_page:"bio-link-page",podcast_link_page:"podcast-link-page",ticket_link_page:"ticket-link-page",reward_link_page:"reward-link-page"},mountMitigation:!1}),components:{SlideBar:()=>Promise.all([r.e(12),r.e(56)]).then(r.bind(null,703)),MultiProviderPlayer:()=>Promise.all([r.e(3),r.e(7),r.e(45)]).then(r.bind(null,533)),ActionPage:()=>Promise.all([r.e(3),r.e(6),r.e(40)]).then(r.bind(null,532)),BioLinkPage:()=>Promise.all([r.e(0),r.e(19)]).then(r.bind(null,570)),PodcastLinkPage:()=>Promise.all([r.e(4),r.e(0),r.e(38)]).then(r.bind(null,534)),TicketLinkPage:()=>Promise.all([r.e(4),r.e(0),r.e(23)]).then(r.bind(null,571)),RewardLinkPage:()=>Promise.all([r.e(0),r.e(10),r.e(47)]).then(r.bind(null,569))},methods:{getConditionalRoutingRedirect(){var e=this;if(this.smartLinkData.conditionalRouting&&this.smartLinkData.conditionalRouting.length>0){var t=this.smartLinkData.channel?this.smartLinkData.channel.toUpperCase():"",r=this.smartLinkData.userAgent,o=function(o){var n=y.get(o.condition);if(o.condition.toUpperCase()==t||n&&n(r))try{return{v:(((e.smartLinkData||{}).services||[]).find((e=>e.service===o.service))||{}).service}}catch(e){return{v:o.service}}};for(var n of this.smartLinkData.conditionalRouting){var c=o(n);if("object"==typeof c)return c.v}}return null},getRoutingRulesRedirect(){if(this.smartLinkData.routingRules&&this.smartLinkData.routingRules.length>0){var e=this.smartLinkData.channel?this.smartLinkData.channel.toUpperCase():"",t=this.smartLinkData.userAgent;for(var r of this.smartLinkData.routingRules){var o=y.get(r.condition);if(r.condition.toUpperCase()==e||o&&o(t))return r.destination}}return null},getAutomaticRedirect(){return"pre_release"!=this.smartLinkData.linkType&&this.$cookies.get("musicservice")&&this.smartLinkData.display_settings&&this.smartLinkData.display_settings.automaticMusicServiceRedirect?this.$cookies.get("musicservice"):null},getNoServicesRedirect(){return"post_release"!==this.smartLinkData.linkType||this.smartLinkData.services&&0!=this.smartLinkData.services.length||!this.smartLinkData.scanUrl||!h.b.isURL(this.smartLinkData.scanUrl)?null:this.smartLinkData.scanUrl},getShortlinkRedirect(){if("short_link"===this.smartLinkData.linkType){try{var e=Object(d.b)(this.smartLinkData.domain,!0);for(var t of["utm_source","utm_medium","utm_campaign","utm_variant","utm_content"])this.$route.query[t]&&this.$cookies.set(t,this.$route.query[t],{domain:e,expires:Object(m.a)(14)});this.smartLinkData.promotion&&this.smartLinkData.promotion.promotionId&&this.$cookies.set("utm_featurefm",this.smartLinkData.promotion.promotionId,{domain:e,expires:Object(m.a)(14)});var r="undefined"!=typeof document&&document?document.referrer:null;r&&void 0!==r&&!r.includes("feature.fm")&&this.$cookies.set("utm_referrer",r,{domain:e,expires:Object(m.a)(14)})}catch(e){console.log("error initialize feature utm",e)}var o=this.smartLinkData.scanUrl;try{var n=Object.keys(this.$route.query).map((e=>e+"="+this.$route.query[e])).join("&");n&&(o.includes("?")?o+="&"+n:o+="?"+n)}catch(e){console.log("error forwarding short link query parameters"),o=this.smartLinkData.scanUrl}return o}return null},idleRedirect(){!this.requireRedirect&&this.smartLinkData.idleTimeoutRouting&&this.smartLinkData.idleTimeoutRouting.timeout&&this.smartLinkData.idleTimeoutRouting.service&&f(this.smartLinkData.idleTimeoutRouting.timeout,(()=>{window.trackEvent("musicservice",{servicename:this.smartLinkData.idleTimeoutRouting.service}),console.log("idle timeout redirect to",this.smartLinkData.idleTimeoutRouting.service),c.default.redirectToMusicService(this.smartLinkData,this.smartLinkData.idleTimeoutRouting.service)}))}},computed:{smartLinkData(){return w(w({},this.$store.smartLinkData),{},{oembedLayout:"oembed"===this.$store.query.layout})},qState(){return this.$store.query},privacy(){var{smartLinkData:e}=this.$store;return w({euResident:e&&e.euResident||!1,partnerId:e&&e.partnerId},this.$store.privacy)},conditionalRedirectTo(){return this.getConditionalRoutingRedirect()},routingRulesRedirectTo(){return this.getRoutingRulesRedirect()},automaticRedirectTo(){return this.getAutomaticRedirect()},noServicesRedirectTo(){return this.getNoServicesRedirect()},shortlinkRedirectTo(){return this.getShortlinkRedirect()},requireRedirect(){return!!(this.conditionalRedirectTo||this.routingRulesRedirectTo||this.automaticRedirectTo||this.noServicesRedirectTo||this.shortlinkRedirectTo)}},serverPrefetch(){this.mountMitigation=!!this.$ssrContext.req.$mountMitigation,this.$ssrContext.nuxt.mountMitigation=this.mountMitigation,this.$ssrContext.nuxt.musicKitDeveloperToken=this.$ssrContext.req.$musicKitDeveloperToken},beforeMount(){if(this.mountMitigation=!Object.prototype.hasOwnProperty.call(window,"__NUXT__")||!!window.__NUXT__.mountMitigation,this.$store.ignoreVisitPixel){var e=w({},this.$route.query);delete e.ivp;var{href:t}=this.$router.resolve(w(w({},this.$route),{},{query:e}));window.history.replaceState({},null,t)}},mounted(){var e=this;return Object(o.a)((function*(){if(e.mountMitigation||(yield Object(v.a)(e.$actions.updatePrivacySettings,e.privacy)),e.conditionalRedirectTo){window.trackEvent("musicservice",{servicename:e.conditionalRedirectTo});var t=e.smartLinkData.userAgent,r=e.smartLinkData.channel?e.smartLinkData.channel.toUpperCase():"";console.log("conditionalRouting, ",t.os&&t.os.name,r,"matched. redirecting to",e.conditionalRedirectTo),yield c.default.redirectToMusicService(e.smartLinkData,e.conditionalRedirectTo)}else if(e.routingRulesRedirectTo){var o=e.smartLinkData.userAgent,n=e.smartLinkData.channel?e.smartLinkData.channel.toUpperCase():"";console.log("routing rules, ",o.os&&o.os.name,n,"matched. redirecting to",e.routingRulesRedirectTo),document.location=h.b.addingProtocol(e.routingRulesRedirectTo)}else e.automaticRedirectTo?(window.trackEvent("musicservice",{servicename:e.automaticRedirectTo}),console.log("automatic redirect to",e.automaticRedirectTo),yield c.default.redirectToMusicService(e.smartLinkData,e.automaticRedirectTo)):e.noServicesRedirectTo?(console.log("no services redirect to",e.noServicesRedirectTo),document.location=e.noServicesRedirectTo):e.shortlinkRedirectTo&&(console.log("short link redirect to",e.shortlinkRedirectTo),document.location=h.b.addingProtocol(e.shortlinkRedirectTo));e.idleRedirect()}))()}},R=(r(610),r(37)),component=Object(R.a)(L,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"slug-index"},[e.requireRedirect||!e.smartLinkData.legal||e.mountMitigation?e._e():t("SlideBar",{attrs:{"customer-name":e.smartLinkData.legal&&e.smartLinkData.legal.dataController,"customer-logo":e.smartLinkData.legal&&e.smartLinkData.legal.dataControllerImage,"customer-palette":e.smartLinkData.partnerId,"data-controller-privacy-policy-u-r-l":e.smartLinkData.legal&&e.smartLinkData.legal.privacyPolicyUrl,"link-type":e.smartLinkData.linkType,"optional-privacy-parts":e.smartLinkData.optionalPrivacyParts}}),e._v(" "),Object.keys(e.smartLinkData).length&&e.smartLinkData.pageLayout in e.pageComponents?t(e.pageComponents[e.smartLinkData.pageLayout],{directives:[{name:"show",rawName:"v-show",value:!e.requireRedirect,expression:"!requireRedirect"}],tag:"component",attrs:{data:e.smartLinkData}}):e._e(),e._v(" "),e.mountMitigation?e._e():t("client-only",[t("iframe",{staticStyle:{border:"none",display:"none"},attrs:{id:"deepLinkOpenApp",loading:"lazy",scrolling:"no",frameborder:"0",allowTransparency:"true"}})]),e._v(" "),t("div",{staticStyle:{position:"absolute",left:"0",top:"0","z-index":"-1"}},[e._v("\n    .\n  ")]),e._v(" "),e.$store.ignoreVisitPixel||e.qState.authorize||!e.smartLinkData.pe||e.mountMitigation?e._e():t("img",{staticClass:"pixel",attrs:{src:e.smartLinkData.pe.i}}),e._v(" "),e.$store.ignoreVisitPixel||e.qState.authorize||!e.smartLinkData.pe||e.mountMitigation?e._e():t("img",{staticClass:"pixel",attrs:{src:e.smartLinkData.pe.v}}),e._v(" "),e.smartLinkData.pe&&!e.mountMitigation?t("img",{staticClass:"pixel",attrs:{src:e.smartLinkData.pe.r}}):e._e()],1)}),[],!1,null,"2e62fce2",null);t.default=component.exports}}]);