tasks.todos.views.helpers.ExtendedView = (function (views) {

	var ExtendedView = Backbone.View.extend({
		
		render: function () {
			this.$el.html(this.template);
			this.cacheElements();
			this.increase();
			
			return this;	
		},
		
		nestedViews: [],
		
		cacheElements: function () {
			
		},
		
		closeNestedView: function (view) {
			view.close();
		},
		
		increase: function () {
		
		},
		
		close: function () {
			this.collectionBinder && this.collectionBinder.unbind();
			this.nestedViews.forEach(this.closeNestedView);
			this.modelBinder && this.modelBinder.unbind();
			this.onClose && this.onClose();
			this.remove();
			
			delete this.nestedViews;
		}
		
	});
	
	return ExtendedView;
	
} (tasks.todos.views));