Template.ChartList.onCreated(function(){
	var self = this;
	self.autorun(function (){
		self.subscribe('recipes');
	});
});

Template.ChartList.helpers({
	chartList: ()=> {
		return Recipes.find({inMenu: true});
	}
});