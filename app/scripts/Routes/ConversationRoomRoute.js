require('scripts/Routes/ConversationRoute');
/**
 * ConversationUserRoute
 *
 * @namespace EmberChat
 * @class ConversationRoomRoute
 * @extends EmberChat.ConversationRoute
 */
EmberChat.ConversationRoomRoute = EmberChat.ConversationRoute.extend({

    /**
     * Sets the needed data for the controller
     *
     * @method setupController
     * @param {Ember.Controller} controller
     * @param {EmberChat.Conversation} conversation
     */
    setupController: function (controller, conversation) {
        controller.set('conversation', conversation);

        if (!conversation.get('content')) {
            var message = {
                type: 'Room\\Join',
                room: conversation.get('room').get('id')
            };
            EmberChat.MessageProcessor.processOutgoing(message);
            //@TODO get History
        }
    },

    /**
     * Fetches the EmberChat.Conversation for the given id or transition to index route
     *
     * @method model
     * @param {object} params
     * @returns {EmberChat.Conversation|void}
     */
    model: function (params) {
        var conversation = this._super(params);

        if (!conversation) {
            var room = EmberChat.Session.findRoomById(params.id);
            if (!room) {
                this.transitionTo('index');
                return null;
            }
            conversation = EmberChat.Conversation.create({id: params.id, name: room.get('name'), room: room});
            EmberChat.Session.get('conversations').pushObject(conversation);
        }
        this.setupConversation(conversation);
        this.controllerFor('conversation').set('conversation', conversation);
        return conversation;
    }



});
