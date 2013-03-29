/*global App*/

window.App = Ember.Application.create();

// Router
App.Router.map(function() {
    this.resource('causes', function() {
        this.resource('cause', { path: ':cause_id' });
    });
    this.resource('effects', function() {
        this.resource('effect', { path: ':effect_id' });
    });
});

// Controllers
App.CausesController = Ember.ArrayController.extend({
    createCause: function() {
        // Get the cause title set by the "New Name" text field
        var title = this.get('newName');
        if (!title.trim()) { return; }

        // Create the new Cause model
        App.Cause.createRecord({
            name: title,
        });

        // Clear the "New Cause" text field
        this.set('newName', '');

        // Save the new model
        this.get('store').commit();
    }
})

App.CausesRoute = Ember.Route.extend({
    model: function() {
        return App.Cause.find();
    }
});

App.EffectsRoute = Ember.Route.extend({
    model: function() {
        return App.Effect.find();
    }
});

// Models
App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
});

App.Cause = DS.Model.extend({
    effects: DS.hasMany('App.Effect'),
    name: DS.attr('string')
});

App.Effect = DS.Model.extend({
    causes: DS.hasMany('App.Cause'),
    name: DS.attr('string')
});

// Fixture data
App.Cause.FIXTURES = [{
    id: 1,
    effect: 1,
    name: 'Getting too little sleep'
}, {
    id: 2,
    effect: 2,
    name: 'Eating too much food'
}, {
    id: 3,
    effect: 3,
    name: 'Reading a good book'
}, {
    id: 4,
    effect: 4,
    name: 'Going to the gym'
}];

App.Effect.FIXTURES = [{
    id: 1,
    cause: 1,
    name: 'Gaining weight'
}, {
    id: 2,
    cause: 2,
    name: 'Getting sleepy in the afternoon'
}, {
    id: 3,
    cause: 3,
    name: 'Losing concentration at work'
}, {
    id: 4,
    cause: 4,
    name: 'Feeling in a better mood'
}];

