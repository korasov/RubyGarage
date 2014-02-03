tasks.todos.collections.TaskCollection = (function (app) {

	var TaskCollection = Backbone.Collection.extend({
		model: app.models.TaskModel
	});
	
	return TaskCollection;

} (tasks.todos));