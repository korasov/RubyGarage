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
		
		onChange: function (model) {
			this.collection.create(model);
			this.$titleValue.val('');
		},
		
		'true': function () {
			this.collection.create(this.newTask);
			this.$titleValue.val('');
		},
		
		'false': function () {
			this.onError(this.newTask, this.newTask.validationError);
		},
		
		addTask: function () {
			this.newTask = new models.TaskModel({
				title: this.$titleValue.val(),
				todo_id: this.model.id
			});
			
			this.listenToOnce(this.newTask, 'error', this.onError);
			
			this[this.newTask.isValid()].bind(this)();
		},
		
		onError: function (model, error) {
			var exception = error.responseJSON && error.responseJSON.title;
			
			new views.helpers.ErrorHandler().render(exception || error);
				
			model.destroy();
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
			this.collection.reset([]);
			delete this.collectionBinder;
			delete this.modelBinder;
		},
		
		increase: function () {
			this.collectionBinder.bind(this.collection, this.$tasks);
			this.modelBinder.bind(this.model, this.el);
		}
		
	});
	
	return TodoView;
	
} (tasks.todos.views, tasks.todos.models, tasks.todos.collections));