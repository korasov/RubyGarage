tasks.todos.models.TaskModel = (function (models) {

	var TaskModel = Backbone.Model.extend({
	
		defaults: {
			title: 'Some string',
			deadline: ''
		}
		
	});
	
	return TaskModel;
	
} (tasks.todos.models));