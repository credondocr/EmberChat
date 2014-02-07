/**
 * Contains all session related data like the logged in user, other users etc.
 *
 * @class Session
 * @namespace EmberChat
 */
EmberChat.Session = Ember.Object.create({

    /**
     * The current user
     *
     * @property user
     * @type {EmberChat.User}
     */
    user: EmberChat.User.create(),

    /**
     * The available users
     *
     * @property availableUsers
     * @type {Ember.Array}
     */
    availableUsers: Ember.A(),

    /**
     * The available rooms
     * @property availableRooms
     * @type {Ember.Array}
     */
    availableRooms: Ember.A(),

    /**
     * The opened conversations
     *
     * @property conversations
     * @type {Ember.Array}
     */
    conversations: Ember.A(),

    /**
     * Returns the Ember.User for the given id or null
     *
     * @method findUserById
     * @param {string} id
     * @returns {EmberChat.User|null}
     */
    findConversationById: function(id) {
        return this.get('conversations').findBy('id', id);
    },

    /**
     * Returns the Ember.User for the given id or null
     *
     * @method findUserById
     * @param {string} id
     * @returns {EmberChat.User|null}
     */
    findUserById: function(id) {
        return this.get('availableUsers').findBy('id', id);
    },

    /**
     * Returns the Ember.Room for the given id or null
     *
     * @method findRoomById
     * @param {string} id
     * @returns {EmberChat.Room|null}
     */
    findRoomById: function(id) {
        return this.get('availableRooms').findBy('id', id);
    },

    /**
     * All tasks which should be done when session user goes offline
     *
     * @method offlineTasks
     * @returns {void}
     */
    offlineTasks: function() {
        this.get('availableUsers').forEach(function(item, index, enumerable) {
            Ember.set(item, "online", false);
        });
    }
});