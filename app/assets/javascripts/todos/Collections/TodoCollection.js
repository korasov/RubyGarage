;(function (app) {

	app.collections.TodoCollection = Backbone.Collection.extend({
		model: app.models.TodoModel
	});
	
} (tasks.todos));