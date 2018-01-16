
define([
    'underscore',
    'backbone'], function(_, Backbone){
        var User = Backbone.Model.extend({
            defaults: {
                phone: "555.555.5555",
                address: {
                    street: "123 Elm St.",
                    city: "Seattle",
                    zipcode: "98105"
                }
            },

            urlRoot: "http://jsonplaceholder.typicode.com/users",

            validate: function(attrs){
                if (attrs.name){
                    return "Name is required.";
                }
            }
        });

        return User;
});
