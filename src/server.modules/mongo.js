module.exports.insertIdeas = function(idea){

  return MongoClient.connect(url).then(function(db) {
  db.collection('ideas').insert(idea);
  db.close();
  });

}

module.exports.findIdeas = function(queryObject) {
  var ideas;

  return MongoClient.connect(url).then(function(db) {    
  ideas = db.collection('ideas').find(queryObject).toArray();   
  db.close();
  return ideas;
  });

}

module.exports.updateIdeas = function(queryObject, updateObject) {

  return MongoClient.connect(url).then(function(db) {    
  ideas = db.collection('ideas').update(queryObject, {$set: updateObject});  
  db.close();
  });

}

module.exports.deleteIdeas = function(queryObject){
  
  return MongoClient.connect(url).then(function(db) {    
  db.collection('ideas').remove(queryObject);  
  db.close();
  });

}

module.exports.loginUser = function(user){

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

};

module.exports.registerUser = function(user){

  return MongoClient.connect(url).then(function(db) {
    return db.collection('users').find({email: user.email}).toArray().then(function (result) {
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

module.exports.updateUser = function(user, updateObject) {

  return MongoClient.connect(url).then(function(db) {    
    ideas = db.collection('users').update(user, {$set: updateObject});  
    db.close();
    return true;
  });

};