Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc) {
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

Traits = new SimpleSchema({
	trait: {
		type: String,
        optional: true,
        label: "Trait"
	}
});

Brand = new SimpleSchema({
	product: {
		type: String,
        optional: true,
        label: "Product Description" 
	},
	brand: {
		type: String,
        optional: true,
        label: "Brand Name"
	}
});

UserGoals = new SimpleSchema({
	scenerio: {
		type: String,
        optional: true,
        label: "Objective:" 
	},
	description: {
		type: String,
        optional: true,
        label: "Detail - Summary"
	}
});

UserFrustrations = new SimpleSchema({
	scenerio: {
		type: String,
        optional: true,
        label: "Issue:" 
	},
	description: {
		type: String,
        optional: true,
        label: "Detail - Summary"
	}
});




RecipeSchema = new SimpleSchema({
	name: {
		type: String,
        optional: true,
		label: "Full Name"
	},
	age: {
		type: String,
        optional: true,
		label: "Age"
	},
    gender: {
		type: String,
        optional: true,
		label: "Gender [Male,Female]"
	},
    status: {
        type: String,
        optional: true,
        label: "Marital Status"
    },
    job: {
        type: String,
        optional: true,
        label: "Job Title"
    },
    location: {
        type: String,
        optional: true,
        label: "Location of Residence"
    },
    avatar: {
        type: String,
        label: "Image Placeholder",
        optional: true,
         autoform: {
      afFieldInput: {
        type: "url"
      }
    }
    
    },
    bio: {
        type: String,
        label: "Summary Bio",
        optional: true
    },
	traits: {
		type: [Traits],
        label: "Trait",
        optional: true
	},
    //next tab   
   // influence: {
   //   label: "Influence",
   //   type: String,
   //   optional: true,
   //     allowedValues: ['Important', 'Not Important', 'Not Applicable'],
  //    autoform: {
        
   //     type: "select-radio-inline",
     
	//}
  //  },
     influence: {
    type: Number,
         optional: true,
    label:"How important --- is to having influential for this user.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
  },
    selfachievement: {
      type: Number,
              optional: true,
    label:"How important --- is to recognizing Self Achievement for this user.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
    },
    growthprojection: {
      type: Number,
              optional: true,
    label:"How important --- is to Project Growth for this user.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
    },
    fear: {
      type: Number,
              optional: true,
    label:"How important having Fears is to this user.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
    },
    security: {
      type: Number,
              optional: true,
    label:"How important --- is to the Security of this user.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
    },
    relationship: {
     type: Number,
              optional: true,
    label:"How important --- is to active relationships is to this user.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
    },
    financial: {
       type: Number,
              optional: true,
    label:"How important --- is to understanding financial information with this user.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
    },
    professional: {
       type: Number,
              optional: true,
    label:"How important --- is to understanding professional qualifications for this user.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
    },
    lifestyle: {
      type: Number,
              optional: true,
    label:"How important --- is to understanding the lifestyle choices of this user.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
    },
    social: {
      type: Number,
              optional: true,
    label:"How important --- is to contributing to this users social spheres.",     
    max: 10,
    min: 0,
    autoform: {
      type: "noUiSlider",
      step: 1,    
      noUiSlider_pipsOptions: {
        mode: 'steps',
        density: 5
      }
    }
    },
    usergoals: {
		type: [UserGoals],
        optional: true,
        label: "User Goals"
	},
    userfrustrations: {
		type: [UserFrustrations],
        optional: true,
        label: "User Frustrations"
	},
        
    //next tab
    personal1: {
     
      type: String,
      label: "Which personality descriptive do you associate more with ? ",
      optional: true,
        allowedValues: ['Extrovert', 'Introvert'],
      autoform: {
        
        type: "select-radio-inline",
     
	}
    },
     personal2: {
     
      type: String,
         label: "Which analysing descriptive do you recognize more with ? ",
      optional: true,
        allowedValues: ['Thinking', 'Feeling'],
      autoform: {
        
        type: "select-radio-inline",
     
	}
    },
     personal3: {
     
      type: String,
         label: "Which communication descriptive do you actively use more ? ",
      optional: true,
        allowedValues: ['Speak', 'Listen', 'Read'],
      autoform: {
        
        type: "select-radio-inline",
     
	}
    },
     personal4: {
     
      type: String,
         label: "Which instructional descriptive do you associate more with ? ",
      optional: true,
        allowedValues: ['Directed by Something/Someone', 'Rely on own Intuition'],
      autoform: {
        
        type: "select-radio-inline",
     
	}
    },
     personal5: {
     
      type: String,
         label: "Which characteristic do you associate with your online self ? ",
      optional: true,
        allowedValues: ['Create','Destroy', 'Search', 'Explore', 'Extend'],
      autoform: {
        
        type: "select-radio-inline",
     
	}
    },
     personal6: {
     
      type: String,
         label: "Which social characterstic describes you better ? ",
      optional: true,
        allowedValues: ['Leader', 'Follower', 'Bystander'],
      autoform: {
        
        type: "select-radio-inline",
     
	}
    },
     personal7: {
     
      type: String,
         label: "Which adjective describes your sense of others ? ",
      optional: true,
        allowedValues: ['Judge', 'Evaluate', 'Atune'],
      autoform: {
        
        type: "select-radio-inline",
     
	}
    },
     personal8: {
     
      type: String,
         label: "Which function best describes how you manage digital information ? ",
      optional: true,
        allowedValues: ['Likely to Share', 'Likely to Conceal', 'Likely to Ignore'],
      autoform: {
        
        type: "select-radio-inline",
     
	}
    },
    
    communication: {
     
      type: [String],
      optional: true,
        allowedValues: ['Mobile Phone', 'Tablet', 'Web Screen','Television', 'Smart Watch', 'Gaming System','Social Media', 'Social Network'],
      autoform: {
        
        type: "select-checkbox-inline",
     
	}
    },
   
    brandawareness: {
		type: [Brand],
        optional: true,
        label: "Brand Awareness - Which brand does this user endorse in conversation ? "
	},
    
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function () {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	toggleMenuItem: function(id, currentState){
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	},
	deleteRecipe: function(id){
		Recipes.remove(id);
	}
});

Recipes.attachSchema(RecipeSchema);

///easy search
RecipesIndex = new EasySearch.Index({
  collection: Recipes,
  fields: ['name', 'age','job','status','location','gender'],
  engine: new EasySearch.Minimongo({
  	sort: function () {
      return { createdAt:-1 };
    }
  })
});