var HeaderModal = Backbone.View.extend({
	template: JST['templates/modal-header'],
	
	render: function () {
		this.$el.html(this.template);
		
	}
});