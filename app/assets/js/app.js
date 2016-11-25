define(function(require) {
	var Vue = require('vue');
	var net = require('net');
	// Component Bootstrap example
	// async sidebar
	function sidebar() {
		return net.asyncGet('/components/sidebar').then(function(_template) {
			Vue.component('sidebar', {
				template : _template,
				props : [ 'time' ],
				data : function() {
					return {
						totalTime : this.totalTime
					};
				},
				methods : {
					// Increment the totalTime value based on the new
					// time entry that is dispatched up
					timeUpdate : function(timeEntry) {
						this.totalTime += parseFloat(timeEntry.totalTime);
					},
					// Decrement totalTime when a time entry is deleted
					deleteTime : function(timeEntry) {
						this.totalTime -= parseFloat(timeEntry.totalTime);
					}
				}
			});
		}, function(error) {
			// TODO!
			console.error(error);
		});
	}

	// async app
	function app() {
		net.asyncGet('/components/app').then(function(_template) {
			Vue.component('app', {
				data : function() {
					return {
						totalTime : 0.0
					};
				}, 
				template : _template

			});
			new Vue({
				el : '#root',
			});
		}, function(error) {
			// TODO!
			console.error(error);
		});
	}
	// bootstrap!
	Promise.all([ sidebar() ]).then(app());
});
