tasks.todos.models.TodoModel = (function (app) {

	var TodoModel = Backbone.Model.extend({
	
		initialize: function () {
			this.set('tasks', new this.collection());
		},
		
		defaults: {
			header: 'Complete the test task for Ruby Garage'
		},
		
		collection: app.collections.TaskCollection
		
	});
	
	return TodoModel;
	
} (tasks.todos));