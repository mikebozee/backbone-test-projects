
require.config({
    paths: {
        jquery: 'lib/jquery-min',
        underscore: 'lib/underscore-min',
        backbone: 'lib/backbone-min'
    }
});

define(['app'], function(App){
    App.initialize();
});

// $(document).ready(function(){
//     var users = new Users();
//     users.fetch();
//
//     var usersView = new UsersView({ model: users });
//     $("body").append(usersView.render().$el);
// });
