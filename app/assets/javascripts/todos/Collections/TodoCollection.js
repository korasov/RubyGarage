tasks.todos.collections.TodoCollection = (function (app) {

	var TodoCollection = Backbone.Collection.extend({
		model: app.models.TodoModel
	});
	
	return TodoCollection;
	
} (tasks.todos));