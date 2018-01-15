
define([
    'underscore',
    'backbone',
    'models/user',
    'models/users',
    'views/userView',
    'views/usersView'], function(_, Backbone, User, Users, UserView, UsersView){
    var initialize = function(){
        var user = new User({ name: "Mike" });

        var userView = new UserView({ el: "#container", model: user });
        userView.render();
    };

    return {
        initialize: initialize
    };
});