"use strict";angular.module("scrollsguidepostFrontendApp",["ui.keypress"]).config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("scrollsguidepostFrontendApp").controller("MainCtrl",["$scope","cards","prices","priceDetails",function(a,b,c,d){function e(){a.allCardData=[],a.cards.cards.forEach(function(b){var c=angular.copy(b);c.price={buy:0,sell:0},a.prices.prices.forEach(function(a){a.id===b.id&&(c.price=a)}),c.price.details=a.priceDetails.details[b.id]?a.priceDetails.details[b.id]:null,c.price.buyPop=0,c.price.sellPop=0,a.priceDetails.details[b.id]&&a.priceDetails.details[b.id].forEach(function(a){"SELL"===a.type&&c.price.sellPop++,"BUY"===a.type&&c.price.buyPop++}),a.allCardData.push(c)})}a.cards=b.get(),a.prices=c.get(),a.priceDetails=d.get(),a.allCardData=[],a.searchTerm="",a.sidebarActive=!1,a.dateFormat=function(a){if(!a)return"never";var b=a/60;if(b>60){var c=b/60;return Math.round(c)+(1===Math.round(c)?' <span class="hidden-phone">hour ago</span>':' <span class="hidden-phone">hours ago</span>')+'<span class="visible-phone">hr</span>'}return 1>b?' <span class="hidden-phone">moments ago</span><span class="visible-phone">just now</span>':Math.round(b)+' <span class="hidden-phone">minutes ago</span><span class="visible-phone">min</span>'},a.details=function(b){a.sidebarActive=!0,a.activeCard=b},a.prettyOfferType=function(a){return"SELL"===a?"selling":"BUY"===a?"buying":""},a.prettyOfferPrice=function(a){return!a||0>a?"":a+"g"},a.prettyPrice=function(a){return a?a+"g":"0g"},a.sort={column:"name",descending:!1},a.changeSorting=function(b){var c=a.sort;c.column===b?c.descending=!c.descending:(c.column=b,c.descending=!1)},a.cardImageName=function(a){return a?a.replace(/ /g,"+"):a},a.rarityToText=function(a){return 0===a?"Common":1===a?"Uncommon":"Rare"},a.rarityClass=function(b){return"rarity-"+a.rarityToText(b)},a.rarityFilters={0:!0,1:!0,2:!0},a.cardRarity=function(b){return a.rarityFilters[b.rarity]},a.toggleRarity=function(b){a.rarityFilters[b]=!a.rarityFilters[b]},a.factionFilters={decay:!0,order:!0,growth:!0,energy:!0},a.cardFaction=function(b){var c=b.costorder?"order":b.costgrowth?"growth":b.costenergy?"energy":"decay";return a.factionFilters[c]},a.toggleFaction=function(b){a.factionFilters[b]=!a.factionFilters[b]};var f=document.getElementsByTagName("body")[0];f.onkeydown=function(b){b=b||window.event,27===b.keyCode&&(a.sidebarActive=!1),a.$apply()},a.theme=function(a){var b=window.$;b("#theme-stylesheet").attr("href","/styles-themes/theme-"+a+".css")},a.$watch("cards.cards + prices.prices + priceDetails.details[1]",e)}]),angular.module("scrollsguidepostFrontendApp").factory("cards",["$http",function(a){var b={cards:[]};return{get:function(){return b.cards.length||a({method:"GET",url:"dummy-data/cards.json"}).success(function(a){b.cards=a.data}),b}}}]),angular.module("scrollsguidepostFrontendApp").factory("priceDetails",["$http",function(a){var b={details:{}};return{get:function(){return b.details.length||a({method:"get",url:"dummy-data/price-details.json"}).success(function(a){a.data.forEach(function(a){b.details[a.id]||(b.details[a.id]=[]),b.details[a.id].push(a)})}),b}}}]),angular.module("scrollsguidepostFrontendApp").factory("prices",["$http",function(a){var b={prices:[]};return{get:function(){return b.prices.length||a({method:"get",url:"dummy-data/prices.json"}).success(function(a){b.prices=a.data}),b}}}]);