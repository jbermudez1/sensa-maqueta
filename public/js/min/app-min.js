function mobileDevice(){$("body").on({touchmove:function(o){o.preventDefault(),o.stopPropagation()},mousewheel:function(o){o.preventDefault(),o.stopPropagation()}}),$(".circle").click(function(){$(".menu").toggleClass("hiden-nav")}),$(".icon-menu").click(function(){$(".menu").toggleClass("hiden-nav")}),$(".icon-checkout").click(function(){$(".aside").toggleClass("show-aside")})}$(document).ready(function(o){console.log("ready..");var e=$(window).width();console.log(e),992>e&&mobileDevice()});