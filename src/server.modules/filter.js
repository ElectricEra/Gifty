function modCriteriaFormToObj (body) {
    var result ={};
    result.gender = body.gender;
    if (body.age <= 3) {
        result.age = 0
    } 
    else if ((body.age > 3) && (body.age <= 12)) {
        result.age = 1;
    }
    else if ((body.age > 12) && (body.age <= 18)) {
        result.age = 2
    }
    else if ((body.age > 18) && (body.age <= 50)) {
        result.age = 3
    }
    else {
        result.age = 4
    }
    result.price = +body.price;
    result.tags = body.tags;
    if(result.tags.length === 0) result.tags.push('other');
    return result 
};

function modObjForQueryToDB (obj) {
    var resArr = [];
    obj.tags.forEach(function (item) {
            var itemObj = {};
            itemObj.gender = obj.gender;
            itemObj.age = obj.age;
            itemObj.price = {$lte: obj.price};
            itemObj.tags = item;
            resArr.push(itemObj)
    });
    return resArr;
};





function filterGeneratedIdeas (criteriaForm, generatedIdeas, n){
    
    function quantityEqual (arr_1, arr_2) {
        var quantity = 0;
        arr_1.forEach(function (item) {
            if (arr_2.indexOf(item) > -1) {
                quantity += 1;
            }
        });
        return quantity
    }
    
    function randomSort (a,b) {
        return Math.random() - 0.5;
    }
    
    generatedIdeas.forEach( function(item, index) {
        item.equal = quantityEqual(criteriaForm['tags'], item['tags'])
    });
    var sortArr = generatedIdeas.sort(function(a,b){
        return b['equal'] - a['equal'];
    });
    
    if (n === undefined || n > generatedIdeas.length || n <= 0) {
        n = generatedIdeas.length
    }   
    var filterArr = [];
    var count = sortArr.length <= n ? sortArr.length : n;
    var equal = sortArr[0].equal; 
    while (equal > 0) {
        var k = 0; 
        while (sortArr[k] !== undefined && sortArr[k].equal == equal ) {
             k += 1;
        } 
        if (k < count) {
            var partArr = sortArr.splice(0, k); 
            partArr.sort(randomSort);
            filterArr = filterArr.concat(partArr);
            count -= k;
        }
        else {
            var partArr = sortArr.slice(0, k);
            partArr.sort(randomSort);
            var cutArr = partArr.slice(0, count);
            filterArr = filterArr.concat(cutArr);
        }
        equal -= 1;  
    }
    var restArr = sortArr;
    filterArr.forEach(function(item, index){
        let k = sortArr.indexOf(item);
        if (k > -1) {
            restArr.splice(k, 1)
        }
    });
    restArr.sort(randomSort);
    criteriaForm['tags'].sort(randomSort);
    var copyOfRestArr = restArr.slice(); 
    filterArr.forEach(function(item, index){
        if (item['tags'].length >= item.equal && criteriaForm['tags'].length === item.equal) {
            if( Math.random() > 0.33 && copyOfRestArr[index] !== undefined && copyOfRestArr[index].equal > 0) {
                filterArr[index] = copyOfRestArr[index]; 
                copyOfRestArr.splice(index,1)
            }
        }
        else if (item['tags'].length > item.equal && criteriaForm['tags'].length > item.equal) {
            var found = false;
            for (var j = 0; j <= criteriaForm['tags'].length; j++) {
                for (var i = 0; i <= restArr.length; i++) {
                    if (restArr[i]['tags'].indexOf(criteriaForm['tags'][j]) > -1 ) {
                         filterArr[index] = restArr[i]; 
                         restArr.splice(i, 1);
                         found  = true;
                         break;
                    }
                }
                if (found) {
                    break;
                }
            } 
        }
    }); 
    return filterArr
};

module.exports = {
    modCriteriaFormToObj: modCriteriaFormToObj,
    modObjForQueryToDB: modObjForQueryToDB,
    filterGeneratedIdeas: filterGeneratedIdeas
};