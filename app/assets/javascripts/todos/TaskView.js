var TaskView = ExtendedView.extend({
	initialize: function () {
		this.modelBinder = new Backbone.ModelBinder();
	},

	nestedViews: [],
	
	template: JST['templates/task'],
	
	events: {
		'click .glyphicon-pencil': 'editTask',
		'click .glyphicon-trash': 'close',
		'click .glyphicon-sort': 'sortTask'
	},

	render: function () {

		this.$el.html(this.template);
		this.modelBinder.bind(this.model, this.el);
		
		return this;
	}
});
