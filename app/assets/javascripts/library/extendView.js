var ExtendedView = Backbone.View.extend({
	
	render: function () {
		this.$el.html(this.template);

		return this;
	},
	
	close: function () {
		this.collectionBinder && this.collectionBinder.unbind();
		this.modelBinder && this.modelBinder.unbind();
		this.onClose && this.onClose();
		this.model.destroy();
		this.remove();
		this.off();
	}
});