;(function (app) {

	app.collections.TaskCollection = Backbone.Collection.extend({
		model: app.models.TaskModel
	});

} (tasks.todos));