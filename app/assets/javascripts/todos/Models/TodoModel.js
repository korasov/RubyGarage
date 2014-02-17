tasks.todos.models.TodoModel = (function (app) {

	var TodoModel = Backbone.Model.extend({
		
		defaults: {
			header: 'Complete the test task for Ruby Garage'
		},
		
		validate: function (attrs) {
			if (!attrs.header) {
				return "The headline shouldn't be an empty";
			}
		}
		
	});
	
	return TodoModel;
	
} (tasks.todos));