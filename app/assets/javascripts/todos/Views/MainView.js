tasks.todos.views.MainView = (function (views, models, collections) {

	var MainView = views.helpers.ExtendedView.extend({
	
		template: JST['templates/main'],
		
		events: {
			'click .beautiful-button': 'addTodo'
		},
		
		initialize: function () {
			var viewManagerFactory = new Backbone.CollectionBinder
				.ViewManagerFactory(this.getTodoView.bind(this));
				
			this.taskCollection = new collections.TaskCollection();
			this.todoCollection = new collections.TodoCollection();			
			this.collectionBinder = new Backbone.CollectionBinder(viewManagerFactory);
			
			this.listenTo(this.taskCollection, 'reset', function () {
				this.todoCollection.fetch();
			}, this);
			
			this.taskCollection.fetch({
			    reset: true
			});
		},
		
		getTodoView: function (todoModel) { 
			return new views.TodoView({
				collection: this.taskCollection,
				model: todoModel
			});
		},
		
		addTodo: function () {
			this.todoCollection.create(new models.TodoModel());
		},
		
		cacheElements: function () {
			this.$container = this.$('#container');
		},
		
		increase: function () {
			this.collectionBinder.bind(this.todoCollection, this.$container);
		},
		
		render: function () {
			this.$el.append(this.template);
			this.cacheElements();
			this.increase();
			
			return this;
		}
		
	});
	
	return MainView;
	
} (tasks.todos.views, tasks.todos.models, tasks.todos.collections));

