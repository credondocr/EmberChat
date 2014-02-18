require('scripts/Classes/Messages/Abstract');

/**
 * This class represents a conversation message
 *
 * @class ProfileUpdateMessage
 * @extends EmberChat.AbstractMessage
 * @namespace EmberChat
 */
EmberChat.ProfileUpdateMessage = EmberChat.AbstractMessage.extend({
    process: function(){
        try{
            // fire authenticated event
            Ember.Instrumentation.instrument("signal.profileUpdated", this);
        }catch (e){}
    }
});
