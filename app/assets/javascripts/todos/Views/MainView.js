tasks.todos.views.MainView = (function (views, models, collections) {

	var MainView = views.helpers.ExtendedView.extend({
	
		initialize: function () {
			var viewManagerFactory = new Backbone.CollectionBinder
				.ViewManagerFactory(this.todoView.bind(this));
				
			this.collectionBinder = new Backbone.CollectionBinder(viewManagerFactory);
			this.collection = new collections.TodoCollection();
		},
		
		todoView: function (todoModel) { 
			return new views.TodoView({
				model: todoModel
			}); 
		},
		
		template: JST['templates/main'],
		
		events: {
			'click .beautiful-button': 'addTodo'
		},
		
		addTodo: function () {
			this.collection.add(new models.TodoModel());
		},
		
		increase: function () {
			this.collectionBinder.bind(this.collection, this.$('#container'));
		}
	});
	
	return MainView;
	
} (tasks.todos.views, tasks.todos.models, tasks.todos.collections));

