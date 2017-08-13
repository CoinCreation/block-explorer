import './nextstakers.html';

Template.nextstakers.onCreated(function nextstakersOnCreated() {
    Session.set("nextstakers",{});
    Meteor.call('nextstakers', function(err, res) {
    // The method call sets the Session variable to the callback value
      if (err) {
        Session.set("nextstakers",{ error: err });
      } else {
        Session.set("nextstakers",res);
      }
    });
  });

Template.nextstakers.helpers({
    nextstakers() {
        return Session.get("nextstakers");
    },
});

Template.nextstakers.events({
  'click button' (event, instance) {
    Meteor.call('nextstakers', function(err, res) {
    // The method call sets the Session variable to the callback value
      if (err) {
        Session.set("nextstakers",{ error: err });
      } else {
        Session.set("nextstakers",res);
      }
    });
  },
});