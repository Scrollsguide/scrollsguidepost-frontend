'use strict';

angular.module('scrollsguidepostFrontendApp')
	.controller('MainCtrl', function($scope, cards, prices, priceDetails, $cookies) {
		$scope.cards = cards.get();
		$scope.prices = prices.get();
		$scope.priceDetails = priceDetails;

		$scope.allCardData = [];
		$scope.searchTerm = '';
		$scope.sidebarActive = false;

		function aggregate() {
			$scope.allCardData = [];
			$scope.cards.cards.forEach(function(card) {
				var newCard = angular.copy(card);

				newCard.price = {
					buy: { price: 0, pop: 0},
					sell: { price: 0, pop: 0}
				};

				$scope.prices.prices.forEach(function(priceData) {
					if (priceData.id === card.id) {
						newCard.price = priceData;
					}
				});

				if (!$scope.setFilters[card.set]){
					$scope.setFilters[card.set] = true;
				}

				$scope.allCardData.push(newCard);
			});
		}

		$scope.dateFormat = function(secondsAgo) {
			if (!secondsAgo) {
				return 'never';
			}
			var mins = secondsAgo / 60;
			if (mins > 60) {
				var hrs = mins / 60;
				return (Math.round(hrs) + (Math.round(hrs) === 1 ? ' <span class="hidden-phone">hour ago</span>' : ' <span class="hidden-phone">hours ago</span>') + '<span class="visible-phone">hr</span>');
			} else {
				if (mins < 1) {
					return ' <span class="hidden-phone">moments ago</span><span class="visible-phone">just now</span>';
				}
				return (Math.round(mins) + (Math.round(mins) === 1 ? ' <span class="hidden-phone">minute ago</span>' : ' <span class="hidden-phone">minutes ago</span>') + '<span class="visible-phone">min</span>');
			}
		};

		$scope.details = function(card) {
			if (!card.price.details){
				$scope.priceDetails.get(card.id).success(function(c){
					card.price.details = c.data;

					var lastSeen;
					card.price.details.forEach(function(detail) {
						if (!lastSeen){
							lastSeen = detail.time;
						} else if (detail.time < lastSeen){
							lastSeen = detail.time;
						}
					});

					card.price.lastseen = lastSeen;
					$scope.activeCard = card;
					$scope.sidebarActive = true;
				});
			} else {
				$scope.activeCard = card;
				$scope.sidebarActive = true;
			}
		};

		$scope.prettyOfferType = function(offer) {
			if (offer === 'SELL') {
				return 'selling';
			}
			if (offer === 'BUY') {
				return 'buying';
			}
			return '';
		};

		$scope.prettyOfferPrice = function(price) {
			if (!price || price < 0) {
				return '';
			}
			return price + 'g';
		};

		$scope.prettyPrice = function(price) {
			if (!price) {
				return '0g';
			}
			return (5 * Math.round(price / 5)) + 'g';
		};

		$scope.prettyCost = function(card){
			var r = ['growth', 'order', 'energy', 'decay'];

			for(var i = 0; i < r.length; i++){
				var key = 'cost'+r[i];

				if (card[key] > 0){
					return card[key] + '<img src="/img/card-icons/' + r[i] + '.png" />';
				}
			}
		};

		$scope.sort = {
			column: 'name',
			descending: false
		};

		$scope.changeSorting = function(column) {
			var sort = $scope.sort;
			if (sort.column === column) {
				sort.descending = !sort.descending;
			} else {
				sort.column = column;
				sort.descending = false;
			}
		};

		$scope.cardImageName = function(cardName) {
			if (!cardName) { return cardName; }
			return cardName.replace(/ /g, '+');
		};

		$scope.rarityToText = function(rarityNum) {
			return rarityNum === 0 ? 'Common' : rarityNum === 1 ? 'Uncommon' : 'Rare';
		};

		$scope.rarityClass = function(rarityNum) {
			return 'rarity-'+$scope.rarityToText(rarityNum);
		};

		$scope.rarityFilters = {
			0: true,
			1: true,
			2: true
		};
		$scope.cardRarity = function(card) {
			return $scope.rarityFilters[card.rarity];
		};

		$scope.toggleRarity = function(rarity) {
			$scope.rarityFilters[rarity] = !$scope.rarityFilters[rarity];
		};

		$scope.factionFilters = {
			decay: true,
			order: true,
			growth: true,
			energy: true
		};
		$scope.cardFaction = function(card) {
			var faction = card.costorder ? 'order' : card.costgrowth ? 'growth' : card.costenergy ? 'energy' : 'decay';
			return $scope.factionFilters[faction];
		};

		$scope.toggleFaction = function(faction) {
			$scope.factionFilters[faction] = !$scope.factionFilters[faction];
		};

		$scope.setFilters = {};
		$scope.cardSet = function(card){
			return $scope.setFilters[card.set];
		};
		$scope.toggleSet = function(set){
			$scope.setFilters[set] = !$scope.setFilters[set];
		};

		/*TODO this needs to be a directive*/
		var el = document.getElementsByTagName('body')[0];
		el.onkeydown = function(evt) {
			evt = evt || window.event;
			if (evt.keyCode === 27) {
				$scope.sidebarActive = false;
			}
			$scope.$apply();
		};

		$scope.theme = function(theme) {
			if (!theme) { return; }
			var $ = window.$;
			$('#theme-stylesheet').attr('href', '/styles-themes/theme-'+theme+'.css');
			$cookies.theme = theme;
		};
		$scope.theme($cookies.theme || 'energy');

		$scope.$watch('cards.cards + prices.prices + priceDetails.details[1]', aggregate);
	});