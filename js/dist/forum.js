module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=11)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e,o){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}o.d(e,"a",(function(){return r}))},function(t,e){t.exports=flarum.core.compat["components/Alert"]},function(t,e){t.exports=flarum.core.compat["helpers/icon"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/TextEditor"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},,function(t,e){t.exports=flarum.core.compat["components/ReplyComposer"]},function(t,e){t.exports=flarum.core.compat["components/EditPostComposer"]},function(t,e,o){"use strict";o.r(e);var r=o(0),n=o.n(r),i=o(4),a=o(5),u=o.n(a),c=o(1),s=o(6),l=o.n(s),p=o(7),d=o.n(p),f=(o(9),o(10),o(2)),h=o.n(f),y=o(3),v=o.n(y),b=function(t){function e(){return t.apply(this,arguments)||this}Object(c.a)(e,t);var o=e.prototype;return o.init=function(){this.loading=!1,this.error=!1},o.view=function(){var t;return t=this.loading?d.a.component({className:"Button-icon"}):this.error?v()("fas fa-times red",{className:"Button-icon"}):v()("fas fa-video",{className:""}),m("div",{className:"Button",onclick:this.click.bind(this)},t,m("form",null,m("input",{type:"file",id:"uploadVideo",onchange:this.upload.bind(this)})))},o.click=function(){document.getElementById("uploadVideo").click()},o.upload=function(t){this.loading=!0;var e=new FormData,o=(document.getElementById("uploadVideo").files[0],Math.round(document.getElementById("uploadVideo").files[0].size/1e6));e.append("video",document.getElementById("uploadVideo").files[0]),o>n.a.forum.attribute("upload-video.max-file-size")?(this.loading=!1,this.error=!0,n.a.alerts.show(this.successAlert=new h.a({type:"error",children:"Video must be smaller than 40MB."}))):(this.error=!1,$.ajax({url:n.a.forum.attribute("upload-video.imgur-endpoint"),headers:{Authorization:"Client-ID "+n.a.forum.attribute("upload-video.client-id"),Accept:"application/json","Cache-Control":null,"X-Requested-With":null},type:"POST",data:e,cache:!1,contentType:!1,processData:!1,mimeType:"multipart/form-data",success:this.success.bind(this),error:function(t){this.loading=!1,this.error=!0,n.a.alerts.show(this.successAlert=new h.a({type:"error",children:"An error occcured while uploading to imgur. Please try again later."}))}}))},o.success=function(t){var e=JSON.parse(t);this.loading=!1;var o=e.data.link+"#t=0.1",r=e.data.id,i=o.replace("https://i.imgur.com/",n.a.forum.attribute("upload-video.imgur-viewpoint")),a=(n.a.forum.attribute("upload-video.imgur-viewpoint"),"[IMGUR-VIDEO]"+i+"[/IMGUR-VIDEO]");this.props.textArea.insertAtCursor(a)},e}(l.a);n.a.initializers.add("ejin/upload-video",(function(){Object(i.extend)(u.a.prototype,"controlItems",(function(t){t.add("ejin-video-upload",m(b,{textArea:this}))}))}))}]);
//# sourceMappingURL=forum.js.map