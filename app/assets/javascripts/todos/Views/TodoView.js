tasks.todos.views.TodoView = (function (views, models) {

	var TodoView = views.helpers.ExtendedView.extend({
	
		initialize: function () {
			var managerFactory = new Backbone.CollectionBinder
				.ViewManagerFactory(this.taskView);
				
			this.collectionBinder = new Backbone.CollectionBinder(managerFactory);
			this.modelBinder = new Backbone.ModelBinder();
		},
		
		className: 'todoContainer',
		
		template: JST['templates/todo'],
		
		taskView: function (taskModel) {
			return  new views.TaskView({
				model: taskModel
			});
		},
		
		events: {
			'click #delete-todo': 'close',
			'click #edit-todo': 'editTodo',
			'click .add-task': 'addTask'
		},

		addTask: function () {
			this.model.get('tasks').add(new models.TaskModel({
				title: this.$('.form-control').val()
			}));
		},
		
		editTodo: function () {
			var header = new views.EditHeader({
				model: this.model
			});
			
			this.$('[name=header]').html(header.render().el);
		},
		
		increase: function () {
			this.collectionBinder.bind(this.model.get('tasks'), this.$('.taskRow'));
			this.modelBinder.bind(this.model, this.el);
		}
	});
	
	return TodoView;
	
} (tasks.todos.views, tasks.todos.models));