
define([
    'underscore',
    'backbone'], function(_, Backbone){
        var User = Backbone.Model.extend({
            urlRoot: "http://jsonplaceholder.typicode.com/users",

            validate: function(attrs){
                if (attrs.name){
                    return "Name is required.";
                }
            }
        });

        return User;
});

