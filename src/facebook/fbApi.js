export default (function () {
 
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

		});
	};

	function login(){
		return new Promise(function(resolve, reject){
			FB.login((response) => {
				if (response.status === 'connected') {
					resolve(true);
				}	
			},
  				{scope: 'email,publish_actions,user_about_me,user_birthday,user_friends,user_games_activity,user_likes,user_posts,user_actions.books,user_actions.fitness,user_events,user_actions.music'});
		});
	}
	

	function checkInit() {
	    return typeof (FB) != 'undefined' && window.fbAsyncInit.hasRun;
	};

	function checkLogin(){

		return new Promise(function(resolve, reject){
			FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				resolve(true);
				}	
			});

		});
	};

	function getInfo() {

		return new Promise(function(resolve, reject){
			FB.api('/me', 'GET', {fields: 'name,id,picture.width(300).height(300),friends'}, function(response) {
				resolve(response);			
			});		
		});
	};

	function getFriend(id){
		return new Promise(function(resolve, reject){
			FB.api(('/'+id), 'GET', {fields: 'name,id,picture.width(100).height(100),birthday'}, function (response) {
				resolve(response);
			});
		});
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
						if(!a.birthday || !b.birthday){
							return false;
						};
						const now = new Date().toISOString().slice(5,10).replace(/-/g,"/"),
							adate = a.birthday.slice(0, 5),
							bdate = b.birthday.slice(0, 5);
						if (now > adate || now > bdate){
							return false;
						}
						return adate > bdate;
				    });
					resolve(data)});
			});
	    });
	};

	function tagSearch(item) {
		const index = {
			sport: ['sport', 'football', 'soccer', 'boxing', 'swimming', 'workout', 'basketball', 'hockey', 'tennis'],
			music: ['music', 'rock', 'pop', 'hip-hop', 'party', 'remix', 'soundtrack', 'dubstep'],
			gaming: ['gaming', 'xbox', 'playstation', 'gta', 'dota', 'counter-strike', 'starcraft'],
			reading: ['reading', 'novel', 'detective', 'book', 'kindle', 'nook'],
			gadgets: ['gadgets', 'iphone', 'smartwatch', 'tablet', 'selfy', 'electronics'],
			cooking: ['cooking', 'recipe', 'dinner', 'grill', 'salad', 'steak'],
			art: ['art', 'renaissance', 'rococo', 'impressionism', 'postmodern', 'contemporary'],
			travel: ['travel', 'hiking', 'trip', 'seaside', 'beach', 'mountains', 'vacation']
		}
		var result = [];


		for (var key in index) {   
		    if (!index.hasOwnProperty(key)) continue;
		    index[key].forEach((word) => {
		    	if(item.toLowerCase().indexOf(word) != -1){	    		
		    		result.push(key);
		    	}
		    });
		}
		return result;
	};

	function getQuery(id, picture, price){
		return new Promise(function(resolve, reject){
			FB.api(
			  '/'+id,
			  'GET',
			  {fields:"id,name,gender,birthday,sports,games,about,likes,music,books,devices,feed"},
			  function(response) {
			  		var tags = [],
			  			age = new Date().getFullYear() - new Date(response.birthday).getFullYear();
			  		
			  		const gender = response.gender,
			  			name = response.name;
			  		
			  		if(response.sports){
			  			tags.push('sport');
			  		};
			  		if(response.games){
			  			console.log(response.games)
			  			tags.push('gaming');
			  		};
			  		if(response.music){
			  			console.log(response.music)
			  			tags.push('music');
			  		};
			  		if(response.books){
			  			tags.push('reading');
			  		};	

		  		
		  			if(response.feed){
		  				response.feed.data.forEach(function(feed){
		  					if(feed.message){	  						
		  						tags = tags.concat(tagSearch(feed.message));
		  					};
		  				});
		  			};

		  			if(response.likes){
		  				response.likes.data.forEach(function(like){
		  					tags = tags.concat(tagSearch(like.name));
		  				});
		  			};			  		

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
			  		
			  		console.log({age, picture, name, gender, price, tags});
			  		resolve({age, name, picture, gender, price, tags});
			  	}
			);

		});

	};
 
  return {
  	login,
    getQuery,
    getInfo,
    getFriends,
    initFb,
    checkInit,
    checkLogin
  }; 
}());