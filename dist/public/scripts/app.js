!function(e){"use strict";var o=e.querySelector("#app");o.baseUrl="/",""===window.location.port,o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.displayToast=function(o){var t=Polymer.dom(e).querySelector("#toast");t.text=o,t.show()},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!"),o.conn=e.querySelector("connection-wrapper")}),window.addEventListener("WebComponentsReady",function(){}),o._showAbout=function(){e.querySelector("#pages").select(1)},o._showAbout=function(){e.querySelector("#pages").select(0)}}(document);