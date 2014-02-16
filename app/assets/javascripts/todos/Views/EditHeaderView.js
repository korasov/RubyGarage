tasks.todos.views.EditHeader = (function (views) {
	
	var EditHeader = views.helpers.ExtendedView.extend({
	
		template: JST['templates/edit-header'],
		
		tagName: 'span',
		
		id: 'edit-header',
		
		events: {
			'click #save-btn': 'saveName'
		},
		
		initialize: function () {
			this.listenTo(this.model, 'invalid', this.invalidHandling);
		},
		
		saveName: function () {
			this.model.save('header', this.$('.input-sm').val());
		},
		
		invalidHandling: function (mod, errors) {
			var errHandle = new views.helpers.ErrorHandler();
			errHandle.render(errors);
		}
		
	});
	
	return EditHeader;
	
} (tasks.todos.views));