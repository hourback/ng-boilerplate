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
