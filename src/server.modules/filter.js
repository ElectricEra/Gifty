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
            partArr.sort(function (a, b) {
                return Math.random() - 0.5;
            });
            filterArr = filterArr.concat(partArr);
            count -= k;
        }
        else {
            var partArr = sortArr.slice(0, k);
            partArr.sort(function (a, b) {
                return Math.random() - 0.5;
            });
            var cutArr = partArr.slice(0, count);
            filterArr = filterArr.concat(cutArr);
        }
        equal -= 1;  
    }
    return filterArr
};   

module.exports = {
    modCriteriaFormToObj: modCriteriaFormToObj,
    modObjForQueryToDB: modObjForQueryToDB,
    filterGeneratedIdeas: filterGeneratedIdeas
};