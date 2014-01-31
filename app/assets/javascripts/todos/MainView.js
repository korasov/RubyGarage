var MainView = ExtendedView.extend({
	initialize: function () {
		var viewManagerFactory = new Backbone.CollectionBinder
			.ViewManagerFactory(this.todoView.bind(this));
			
		this.collectionBinder = new Backbone.CollectionBinder(viewManagerFactory);
		this.collection = new TodoCollection();
	},
	
	todoView: function (model) { 
		return new TodoView({
			model: model
		}); 
	},
	
	template: JST['templates/main'],
	
	events: {
		'click .beautiful-button': 'addTodo'
	},
	
	addTodo: function () {
		this.collection.add(new TodoModel());
	},
	
	render: function () {
		this.$el.html(this.template());
		this.collectionBinder.bind(this.collection, this.$('#container'));
		return this;
	}	
});

