
define([
    'underscore',
    'backbone',
    'models/user'], function(_, Backbone, User){
    var Users = Backbone.Collection.extend({
        model: User,

        url: "http://jsonplaceholder.typicode.com/users",

        validate: function(attrs){
            if (attrs.name){
                return "Name is required.";
            }
        }
    });

    return Users;
});
