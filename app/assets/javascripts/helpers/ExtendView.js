tasks.todos.views.helpers.ExtendedView = (function (views) {

	var ExtendedView = Backbone.View.extend({
		
		render: function () {
			this.$el.html(this.template);
			this.increase();
			
			return this;
		},
		
		increase: function () {
		
		},
		
		close: function () {
			this.collectionBinder && this.collectionBinder.unbind();
			this.modelBinder && this.modelBinder.unbind();
			this.onClose && this.onClose();
			this.remove();
			this.off();
		}
	});
	
	return ExtendedView;
	
} (tasks.todos.views));