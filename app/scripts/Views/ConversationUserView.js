require('scripts/Views/ConversationView');

/**
 *
 * @namespace EmberChat
 * @class ConversationUserView
 * @extends Ember.View
 */
EmberChat.ConversationUserView = Ember.View.extend({
    didInsertElement: function(){
        var _this = this;
        // enable bootstrap tooltips
        Ember.$(this.get('element')).find("[data-toggle='tooltip']").tooltip();
        // set focus to input
        Ember.$(this.get('element')).find("input[type='text']").focus();
    }
});