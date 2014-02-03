tasks.todos.views.EditHeader = (function (views) {
	
	var EditHeader = views.helpers.ExtendedView.extend({
	
		template: JST['templates/edit-header'],
		
		tagName: 'span',
		
		id: 'edit-header',
		
		events: {
			'click #save-btn': 'saveName'
		},
		
		saveName: function () {
			this.model.set('header', this.$('.input-sm').val());
			this.remove();
		}
	});
	
	return EditHeader;
	
} (tasks.todos.views));