var TodoView = ExtendedView.extend({
	initialize: function () {
		var managerFactory = new Backbone.CollectionBinder
			.ViewManagerFactory(this.taskView);
			
		this.collectionBinder = new Backbone.CollectionBinder(managerFactory);
		this.modelBinder = new Backbone.ModelBinder();
	},
	
	template: JST['templates/todo'],
	
	inputTemplate: JST['templates/edit-header'],
	
	taskView: function (model) {
		return  new TaskView({
			model: model
		});
	},
	
	events: {
		'click #delete-todo': 'close',
		'click #edit-todo': 'editTodo',
		'click .add-task': 'addTask',
		'click #save-header': 'saveHeader'
	},
	
	saveHeader: function () {
		this.model.set('header', this.$('.input-sm').val());
		this.$('#edit-header').addClass('hidden');
	},
	
	addTask: function () {
		this.model.get('tasks').add(new TaskModel({
			taskString: this.$('.form-control').val()
		}));
	},
	
	editTodo: function () {
		this.$('[name=header]').html(this.inputTemplate);
	},
	
	render: function () {
		this.$el.html(this.template);
		this.collectionBinder.bind(this.model.get('tasks'), this.$('.taskRow'));
		this.modelBinder.bind(this.model, this.el);
		
		return this;
	}
});