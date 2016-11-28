define(function(require) {
	var Vue = require('vue');
	var net = require('net');

	// navbar
	function navbar(bus) {
		return net.asyncGet('/sys-template/navbar').then(function(_template) {
			console.debug("loading 'navbar'...");
			Vue.component('navbar', {
				template : _template,
				methods : {
					route : function(navKey) {
						broadcast(bus, 'route', navKey);
					}
				}
			});
		}, function(error) {
			// TODO!
			console.error(erorr);
		});
	}


	// home
	function home(bus) {
		return net.asyncGet('/sys-template/home').then(function(_template) {
			console.debug("loading 'home'...");
			Vue.component('home', {
				template : _template,
				methods : {
					route : function(navKey) {
						broadcast(bus, 'route', navKey);
					}
				}
			});
		}, function(error) {
			// TODO!
			console.error(error);
		});
	}

	// navbar
	function logTime(bus) {
		return net.asyncGet('/sys-template/logTime').then(function(_template) {
			console.debug("loading 'logTime'...");
			var data  = {
				timeEntry: {
					user: {
						firstName: 'Juraj',
						lastName: 'Zachar',
						email: 'juraj.zachar@gmail.com',
						image: 'https://secure.gravatar.com/avatar/9edfd6e65a616374f2c050be30aa48a8'
					}
				}
			};
			Vue.component('logTime', {
				template : _template,
				methods : {
					save : function(){
						//deep-copy
						var timeEntry = JSON.parse(JSON.stringify(data.timeEntry));
						broadcast(bus, 'addTime', timeEntry);
					},
					route : function(navKey) {
						broadcast(bus, 'route', navKey);
					}
				},
				data : function (){
					return  data;
				}

			});
		}, function(error) {
			// TODO!
			console.error(erorr);
		});
	}

	function timeEntries(bus) {
		return net.asyncGet('/sys-template/timeEntries').then(
			function(_template) {
				console.debug("loading 'timeEntries'...");
				var data = {
					timeEntries : []
				};
				Vue.component('timeEntries', {
					template : _template,
					data : function() {
						return data;
					},
					created : function() {
						bus.$on('addTime', function(timeEntry) {
							//TODO: net.asyncRequest('POST', etc);
							data.timeEntries.push(timeEntry);
						});
					},
					methods : {
						route : function(navKey) {
							broadcast(bus, 'route', navKey);
						},
						deleteTimeEntry: function(timeEntry) {
							var index = data.timeEntries.indexOf(timeEntry);
							if (window.confirm('Are you sure you want to delete this time entry?')) {
								data.timeEntries.splice(index, 1);
								bus.$emit('subtractTime', timeEntry);
							}
						}
					}
				});
			}, function(error) {
				// TODO!
				console.error(error);
			});
		}

		// sidebar
		function sidebar(bus) {
			return net.asyncGet('/sys-template/sidebar').then(function(_template) {
				console.debug("loading 'sidebar'...");
				Vue.component('sidebar', {
					template : _template,
					props : [ 'time' ],
					data : function() {
						return {
							totalTime : this.totalTime
						};
					},
				});
			}, function(error) {
				// TODO!
				console.error(error);
			});
		}

		// reactive app that will re-render components based on which event is
		// emitted...
		function app(bus) {
			return net.asyncGet('/sys-template/app').then(
				function(_template) {
					var data = {
						navKey : 'home',
						totalTime : 0.0
					};
					console.debug("loading 'app(" + data.navKey + ")''...");
					var app = Vue.component('app', {
						template : _template,
						// created hook
						created : function() {
							//routing!
							bus.$on('route', function(navKey) {
								data.navKey = navKey;
							});
							//update time
							bus.$on('addTime', function(timeEntry) {
								data.totalTime += parseFloat(timeEntry.totalTime);
							});
							bus.$on('subtractTime', function(timeEntry) {
								data.totalTime -= parseFloat(timeEntry.totalTime);
							});
						},
						data : function() {
							return data;
						}
					});
				}, function(error) {
					// TODO!
					console.error(error);
				});
			}

			// empty Vue event bus instance for flat hierarchical communication
			var bus = new Vue();

			//generic method for emitting values on Vue bus to specific address
			function broadcast(bus, address, value) {
				console.debug("Broadcasting on '" + address + "' value: '" + value + "''");
				bus.$emit(address, value);
			}

			// bootstrap the Vue app by chaining component promises
			//TODO: refactor into bus-enabled and parent-child constructors.
			Promise
			.all(
				[ navbar(bus), sidebar(bus), logTime(bus), timeEntries(bus), home(bus),
					app(bus) ]).then(function(_components) {
						new Vue({
							el : '#root'
						});
					});
				});
