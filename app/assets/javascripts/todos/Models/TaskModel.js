tasks.todos.models.TaskModel = (function (models) {

	var TaskModel = Backbone.Model.extend({
	
		defaults: {
			title: 'Some string',
			deadline: '',
			todo_id: '',
			done: false
		},
		
		validate: function (attrs) {
			if (!attrs.title) {
				return "The title shouldn't be an empty";
			}
			
			if (attrs.title.length < 5) {
				return "The title shouldn't have five or more symbols";
			}
		}
		
	});
	
	return TaskModel;
	
} (tasks.todos.models));