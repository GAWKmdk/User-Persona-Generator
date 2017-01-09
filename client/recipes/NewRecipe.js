Template.NewRecipe.events({
	'click .fa-close': function() {
		Session.set('newRecipe', false);
	},
    'click .minimize': function() {
		Session.set('newRecipe', false);
	}
});

