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

App.CausesRoute = Ember.Route.extend({
    model: function() {
        return App.Cause.find();
    }
});

// Models
App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
});

App.Cause = DS.Model.extend({
    effects: DS.hasMany('App.Effect')
});

App.Effect = DS.Model.extend({
    causes: DS.hasMany('App.Cause')
});

// Fixture data
App.Cause.FIXTURES = [{
    id: 1,
    effect: 1
}, {
    id: 2,
    effect: 2
}, {
    id: 3,
    effect: 3
}, {
    id: 4,
    effect: 4
}];

App.Effect.FIXTURES = [{
    id: 1,
    cause: 1
}, {
    id: 2,
    cause: 2
}, {
    id: 3,
    cause: 3
}, {
    id: 4,
    cause: 4
}];

