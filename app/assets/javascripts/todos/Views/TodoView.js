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
			this.listenTo(this.model, 'close', this.visible);
			this.modelBinder = new Backbone.ModelBinder();
		},

		getTaskView: function (taskModel) {
			return  new views.TaskView({
				model: taskModel
			});
		},
		
		visible: function () {
			this.$header.removeClass('hidden');
		},
		
		addTask: function () {
			this.newTask = new models.TaskModel({
				title: this.$titleValue.val(),
				todo_id: this.model.id
			});
			
			if (this.newTask.isValid()) {
				this.collection.create(this.newTask);
				this.$titleValue.val('');
			} else {
				new views.helpers.ErrorHandler()
				.render(this.newTask.validationError);
				
				this.newTask.destroy();
			}
		},
		
		editTodo: function () {
			var editHeader = new views.EditHeader({
				model: this.model
			});
			
			this.$header.addClass('hidden');
			this.$headerInfo.html(editHeader.render().el);
		},
		
		cacheElements: function () {
			this.$titleValue = this.$('.form-control');
			this.$headerInfo = this.$('.header-info');
			this.$header = this.$('[name=header]');
			this.$tasks = this.$('.tasks');
		},
		
		onClose: function () {
			this.model.destroy();
		},
		
		increase: function () {
			this.collectionBinder.bind(this.collection, this.$tasks);
			this.modelBinder.bind(this.model, this.el);
		}
	});
	
	return TodoView;
	
} (tasks.todos.views, tasks.todos.models, tasks.todos.collections));