tasks.todos.views.EditTaskView = (function (views) {

	var EditTaskView = views.helpers.ExtendedView.extend({
	
		template: JST['templates/edit-task'],
		
		events: {
			'click #save-task': 'saveTask',
			'click #cancel-task': 'close'
		},
		
		initialize: function () {
			this.listenTo(this.model, 'invalid', this.invalidHandling);
		},
		
		invalidHandling: function (model, error) {
			var errHandle = new views.helpers.ErrorHandler();
			
			errHandle.render(error);
		},
		
		onClose: function () {
			this.trigger('visible-data');
			this.$deadline.data().datepicker.dpDiv[0].remove();
			this.$deadline.unbind();
			this.$deadline.remove();
		},
		
		saveTask: function () {
			this.model.save({
				deadline: this.$deadline.val(),
				title: this.$('.title').val()
			});
			
			!this.model.validationError && this.close();
		},
		
		cacheElements: function () {
			this.$deadline = this.$('.deadline');
		},
		
		increase: function () {
			this.$deadline.datepicker({
				yearRange: '2013:2015',
				dateFormat: '@'
			});
		}
		
	});

	return EditTaskView;
	
} (tasks.todos.views));