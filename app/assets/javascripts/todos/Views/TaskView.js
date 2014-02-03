tasks.todos.views.TaskView = (function (views) {

	var TaskView = views.helpers.ExtendedView.extend({
	
		initialize: function () {
			this.modelBinder = new Backbone.ModelBinder();
		},
		
		className: 'row show-grid',
		
		template: JST['templates/task'],
		
		events: {
			'click .glyphicon-pencil': 'editTask',
			'click .glyphicon-trash': 'close',
			'click .glyphicon-sort': 'sortTask'
		},
		
		editTask: function () {
			var editView = new views.EditTaskView({
				model: this.model
			});
				
			this.wrapper.html(editView.render().el);
			this.listenToOnce(editView, 'save-task', this.visible);
			this.title.addClass('hidden');
		},
		
		visible: function () {
			this.title.removeClass('hidden');
		},
		
		increase: function () {
			this.modelBinder.bind(this.model, this.el);
			this.title = this.$('[name=title]');
			this.wrapper = this.$('.wrapper');
		}
	});
	
	return TaskView;
	
} (tasks.todos.views));