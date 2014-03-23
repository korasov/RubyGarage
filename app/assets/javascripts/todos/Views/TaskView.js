tasks.todos.views.TaskView = (function (views) {

	var TaskView = views.helpers.ExtendedView.extend({
	
		className: 'row show-grid',
		
		template: JST['templates/task'],
		
		events: {
			'click .glyphicon-pencil': 'editTask',
			'click .glyphicon-trash': 'deleteTask',
			'click .glyphicon-sort': 'sortTask'
		},
		
		initialize: function () {
			this.modelBinder = new Backbone.ModelBinder();
		},
		
		deleteTask: function () {
			this.model.destroy();
			this.close();
			delete this.modelBinder;
		},
				
		editTask: function () {
			var editView = new views.EditTaskView({
				model: this.model
			});
				
			this.$wrapper.html(editView.render().el);
			this.listenToOnce(editView, 'visible-data', this.visible);
			this.$title.addClass('hidden');
		},
		
		visible: function () {
			this.$title.removeClass('hidden');
		},
		
		cacheElements: function () {
			this.$title = this.$("[name=title]");
			this.$wrapper = this.$('.wrapper');
			this.$isChecked = this.$('.isChecked');
		},
		
		binding: function () {
			this.modelBinder.bind(
				this.model, 
				this.el, 
				this.constructor.bindings
			);
		},
		
		completeTask: function () {
			this.model.save({
				'done': true
			});
		},
		
		increase: function () {
			this.$isChecked.one('click', this.completeTask.bind(this));
			_.defer(this.binding.bind(this));
		}
		
	}, {
	
		bindings: {
			done: [{
				selector: '.isChecked',
				elAttribute: 'checked'
			}, {
				selector: '.isChecked',
				elAttribute: 'disabled'
			}],
			
			title: '[name=title]'
		}
		
	});
	
	return TaskView;
	
} (tasks.todos.views));