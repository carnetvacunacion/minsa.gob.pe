import{Module}from"../1639495141036@core/core/module.js";import{JAuth}from"../1639495141036@core/config/JAuth.js";import{JRequest}from"../1639495141036@core/http/JRequest.js";class AppMain{static async init(){const e=navigator.userAgent.toLowerCase();if(e.indexOf("edge/17")>-1||e.indexOf("edge/18")>-1)return void(document.location.href="error-compatibilidad.html");const t=JRequest.isPublic();""!==t?await Module.importComponentInstance(t):!0===JAuth.get().isActive()?await Module.importComponentInstance("_shared/app/v1"):await Module.importComponentInstance("login/index")}}AppMain.init();