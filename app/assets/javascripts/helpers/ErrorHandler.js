tasks.todos.views.helpers.ErrorHandler = (function (views) {

	var ErrorHandler = views.helpers.ExtendedView.extend({
		
		className: 'err-handler animated bounceOutUp',
		
		template: JST['templates/error-handler'],
		
		events: {
			'click .close': 'close'
		},
		
		render: function (err) {
			this.$el.html(this.template);
			this.increase();
			this.$alert.append(err);
			this.$alerter.html(this.$el);
			_.delay(this.close.bind(this), 4000);
			
			return this;
		},
		
		increase: function () {
			this.$alert = this.$('.alert');
			this.$alerter = $('#alerter');
		}
		
	});
	
	return ErrorHandler;
	
} (tasks.todos.views));