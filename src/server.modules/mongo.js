module.exports.findIdeas = function(queryObject) {
  var ideas;

  return MongoClient.connect(url).then(function(db) {    
  ideas = db.collection('ideas').find(queryObject).toArray();   
  db.close();
  return ideas;
  });

}


module.exports.loginUser = function(user){

  if(user.email.facebook) {
    
    return MongoClient.connect(url).then(function(db) {
      return db.collection('users').find({facebook: user.email.facebook}).toArray().then(function (result) {
        if(result.length === 0) {
          db.collection('users').insert(user.email);
          db.close();
          return user.email;
        }
        db.close();
        return result;
      });
    });

  } else {

    return MongoClient.connect(url).then(function(db) {
      return db.collection('users').find(user).toArray().then(function (result) {
        if(result.length === 1) {
          db.close();
          return result;
        }
        db.close();
        return false;
      });
    });

  }
};

module.exports.registerUser = function(user){

  return MongoClient.connect(url).then(function(db) {
    return db.collection('users').find({email: user.email}).toArray().then(function(result) {
      if(result.length === 0) {
        db.collection('users').insert(user);
        db.close();
        return user;
      }
      db.close();
      return false;
    });
  });

};

module.exports.updateUser = function(user) {

  if (user.facebook) {

    return MongoClient.connect(url).then(function(db) {    
      return db.collection('users').update({facebook: user.facebook}, {$set: user}).then(function(){
        return db.collection('users').find({facebook: user.facebook}).toArray().then(function (result) {
          if(result.length === 1) {
            db.close();
            return result;
          }
          db.close();
          return false;
        });
      });
    });  

  } else {

    return MongoClient.connect(url).then(function(db) {    
      return db.collection('users').update({email: user.email}, {$set: user}).then(function(){
        return db.collection('users').find({email: user.email}).toArray().then(function (result) {
          if(result.length === 1) {
            db.close();
            return result;
          }
          db.close();
          return false;
        });
      });
    });
  
  }
};