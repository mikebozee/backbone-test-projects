
define([
    'underscore',
    'backbone',
    'mustache',
    'models/user',
    'models/users',
    'views/userView',
    'views/usersView'], function(_, Backbone, Mustache, User, Users, UserView, UsersView){
    var initialize = function(){
        var user = new User({
            name: "Mike Bozee",
            username: "mikebozee",
            email: "msbozee@gmail.com"
        });

        var userView = new UserView({ el: "#container", model: user });
        userView.render();

        // from comments below
        var users = new Users();
        users.fetch();

        var usersView = new UsersView({ el: "#container2", model: users });
        $("#users").append(usersView.render().$el);
    };

    // $(document).ready(function(){
    //     var users = new Users();
    //     users.fetch();
    //
    //     var usersView = new UsersView({ model: users });
    //     $("body").append(usersView.render().$el);
    // });

    return {
        initialize: initialize
    };
});