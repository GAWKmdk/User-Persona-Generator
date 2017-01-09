Template.Recipe.onCreated(function(){
	this.editMode = new ReactiveVar(false);
	//	this.editMode = new ReactiveVar();
	// this.editMode.set(false);
});

Template.Recipe.helpers({
	updateRecipeId: function() {
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});

Template.Recipe.events({
	'click .toggle-menu': function(){
		Meteor.call('toggleMenuItem', this._id, this.inMenu);
	},
	'click .fa-trash': function () {
         if (confirm("Would you like to delete this user. It can't be reversed. ? ")) {
		Meteor.call('deleteRecipe', this._id);
         }
	},
	'click .fa-pencil': function (event, template) {
		template.editMode.set(!template.editMode.get());
	},
    'click .minimize-edit': function (event, template) {
		template.editMode.set(!template.editMode.get());
	}
});