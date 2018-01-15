
define([
    'jquery',
    'underscore',
    'backbone',
    'models/user'], function($, _, Backbone, User){
        var UserView = Backbone.View.extend({
            tagName: "p",

            initialize: function(options){
                if (!(options && options.model)){
                    throw new Error("Model is not specified.");
                }

                this.model.on("change", this.render, this);
            },

            render: function(){
                this.$el.attr("id", this.model.id);

                var template = $("#userTemplate").html();
                var html = Mustache.render(template, this.model.toJSON());
                this.$el.html(html);

                return this;
            }
        });

        return UserView;
});
