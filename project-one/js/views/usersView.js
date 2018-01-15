
var UsersView = Backbone.View.extend({
    id: "usersContainer",

    initialize: function(options){
        if(!(options && options.model)){
            throw new Error("Model is not specified.");
        }

        this.model.on("add", this.onAddUser, this);
    },

    onAddUser: function(user){
        var view = new UserView({ model: user });
        this.$("users").append(view.render().$el);
    },

    render: function(){
        var template = $("#usersTemplate").html();
        var html = Mustache.render(template);
        this.$el.html(html);

        return this;
    }
});