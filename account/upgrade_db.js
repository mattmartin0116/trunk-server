db = db.getMongo().getDB( "scanner" );



db.users.find().forEach(
  function(user){

    db.systems.updateMany(
       { "user": { $eq: user.email } },
       {
         $set: { "userId": user._id, "showScreenName": false },
       }
    );

      print("Upgrading: " + user.email);


});
