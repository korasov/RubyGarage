tasks.todos.views.EditTaskView = (function (views) {

	var EditTaskView = views.helpers.ExtendedView.extend({
	
		template: JST['templates/edit-task'],
		
		events: {
			'click #save-task': 'saveTask'
		},
		
		saveTask: function () {
			this.model.set({
				deadline: this.$('.deadline').val(),
				title: this.$('.title').val()
			});
			
			this.deadline.datepicker('destroy');
			this.remove();
			this.trigger('save-task');
		},
		
		increase: function () {
			this.deadline = this.$('.deadline');
			
			this.deadline.datepicker({
				yearRange: '2013:2015',
				dateFormat: '@'
			});
		}
		
	});

	return EditTaskView;
	
} (tasks.todos.views));