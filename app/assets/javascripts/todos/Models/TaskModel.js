;(function (models) {

	models.TaskModel = Backbone.Model.extend({
		defaults: {
			taskString: 'Some string'	
		}
	});
	
} (tasks.todos.models));