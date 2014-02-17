tasks.todos.views.EditHeader = (function (views) {
	
	var EditHeader = views.helpers.ExtendedView.extend({
	
		template: JST['templates/edit-header'],
		
		tagName: 'span',
		
		id: 'edit-header',
		
		events: {
			'click #save-header': 'saveName',
			'click #cancel-header': 'close'
		},
		
		initialize: function () {
			this.listenTo(this.model, 'invalid', this.invalidHandling);
		},
		
		onClose: function () {
			this.model.trigger('close');
		},
		
		saveName: function () {
			this.model.save({
				'header': this.$('.input-sm').val()
			});
			
			!this.model.validationError && this.close();
		},
		
		invalidHandling: function (model, errors) {
			var errHandle = new views.helpers.ErrorHandler();
			errHandle.render(errors);
		}		
		
	});
	
	return EditHeader;
	
} (tasks.todos.views));