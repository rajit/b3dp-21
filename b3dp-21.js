if (Meteor.isClient) {
  Template.hello.onRendered(function () {
    $('#datepicker').datepicker({ format: "mm-dd-yy", autoclose: true });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
