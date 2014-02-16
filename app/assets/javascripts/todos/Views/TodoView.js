tasks.todos.views.TodoView = (function (views, models, collections) {

	var TodoView = views.helpers.ExtendedView.extend({
	
		className: 'todoContainer',
		
		template: JST['templates/todo'],
		
		events: {
			'click #delete-todo': 'close',
			'click #edit-todo': 'editTodo',
			'click .add-task': 'addTask'
		},
		
		initialize: function () {
			var currentCollection,
				managerFactory;
				
			managerFactory = new Backbone.CollectionBinder
				.ViewManagerFactory(this.getTaskView.bind(this));
			
			currentCollection = this.collection.where({
				todo_id: this.model.id	
			});
				
			this.collection = new collections.TaskCollection(currentCollection);
			this.collectionBinder = new Backbone.CollectionBinder(managerFactory);
			this.modelBinder = new Backbone.ModelBinder();
		},

		getTaskView: function (taskModel) {
			return  new views.TaskView({
				model: taskModel
			});
		},

		addTask: function () {
			this.newTask = new models.TaskModel({
				title: this.$titleValue.val(),
				todo_id: this.model.id
			});
			
			if (this.newTask.isValid()) {
				this.collection.create(this.newTask);
			} else {
				new views.helpers.ErrorHandler()
				.render("The title shouldn't be an empty and must have fire or more symbols");
				
				this.newTask.destroy();
			}
		},
		
		editTodo: function () {
			var editHeader = new views.EditHeader({
				model: this.model
			});
			
			this.$header.html(editHeader.render().el);
		},
		
		cacheElements: function () {
			this.$header = this.$('[name=header]');
			this.$titleValue = this.$('.form-control');
			this.$taskRow = this.$('.taskRow');
		},
		
		onClose: function () {
			this.model.destroy();
		},
		
		increase: function () {
			this.collectionBinder.bind(this.collection, this.$taskRow);
			this.modelBinder.bind(this.model, this.el);
		}
	});
	
	return TodoView;
	
} (tasks.todos.views, tasks.todos.models, tasks.todos.collections));