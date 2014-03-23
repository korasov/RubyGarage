tasks.todos.collections.TaskCollection = (function (app) {

	var TaskCollection = Backbone.Collection.extend({
	
		url: 'tasks',
		
		model: app.models.TaskModel
		
	});
	
	return TaskCollection;

} (tasks.todos));