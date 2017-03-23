window.fbAsyncInit = function() {
    FB.init({
      appId      : '381020565615954',
      xfbml      : true,
      version    : 'v2.8'
    });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=381020565615954";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function initFb() {
	(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=381020565615954";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

	return new Promise(function(resolve, reject){

		window.fbAsyncInit = function() {
		    FB.init({
		      appId      : '381020565615954',
		      xfbml      : true,
		      version    : 'v2.8'
		    });
		    resolve(true);
		};

	})
}

function FBInitialized() {
    return typeof (FB) != 'undefined' && window.fbAsyncInit.hasRun;
};

function facebookLogged(){

	return new Promise(function(resolve, reject){
		FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			resolve(true);
			}	
		});

	})	
};

function getInfo() {

	return new Promise(function(resolve, reject){
		FB.api('/me', 'GET', {fields: 'name,id,picture.width(150).height(150),friends'}, function(response) {
			resolve(response);
			response.friends.data.forEach(function(friend){
				getFriend(friend.id);
			})
		});		
	})	
}

function getFriend(id){
	return new Promise(function(resolve, reject){
		FB.api(('/'+id), 'GET', {fields: 'name,id,picture.width(100).height(100),birthday'}, function (response) {
			resolve(response);
		});
	})	
};

function getFriends() {
    return new Promise(function(resolve, reject){
		var result = [];
		FB.api('/me', 'GET', {fields: 'friends'}, function(response) {		
			response.friends.data.forEach(function(friend){
				result.push(getFriend(friend.id));
			})
			Promise.all(result).then(data => {
				data.sort((a, b) => {
			      var now = new Date().toISOString().slice(5,10).replace(/-/g,"/"),
			        adate = a.birthday.slice(0, 5),
			        bdate = b.birthday.slice(0, 5);
			      if (now > adate){
			        return false;
			      }
			      return adate > bdate;
			    })
				resolve(data)})
		});
    })		
}

function getQuery(id, price){
	return new Promise(function(resolve, reject){
		FB.api(
		  '/'+id,
		  'GET',
		  {fields:"id,name,gender,birthday,sports,games,about,likes,music,books,devices,feed"},
		  function(response) {
		  		var age = new Date().getFullYear() - new Date(response.birthday).getFullYear();
		  		var gender = response.gender;
		  		var tags = [];
		  		var possibleTags = ['sport', 'music', 'gaming', 'reading', 'gadgets', 'cooking', 'art', 'travel'];
		  		if(response.sports){
		  			tags.push('sport');
		  		};
		  		if(response.games){
		  			tags.push('gaming');
		  		};
		  		if(response.music){
		  			tags.push('music');
		  		};
		  		if(response.books){
		  			tags.push('reading');
		  		};	

		  		possibleTags.forEach(function(tag){
		  			if(response.feed){
		  				response.feed.data.forEach(function(feed){
		  					if(feed.message){	  						
		  						if(feed.message.toLowerCase().indexOf(tag) != -1){
		  							console.log(tag);
		  							tags.push(tag);
		  						}
		  					}
		  				})
		  			};

		  			if(response.likes){
		  				response.likes.data.forEach(function(like){
		  					if(like.name.toLowerCase().indexOf(tag) != -1){
		  						console.log(tag);
		  						tags.push(tag);
	  						}	  					
		  				})
		  			}
		  		})

		  		tags = [...new Set(tags)];

		  		if(isNaN(age)){
		  			age = 25;
		  		};
		  		if (tags.length === 0){
		  			tags.push('other');
		  		};
		  		if(price === ''){
		  			price = 1000
		  		} else {
		  			price = +price;
		  		}
		  		
		  		console.log({age, gender, price, tags});
		  		resolve({age, gender, price, tags});
		  	}
		);

	})

};