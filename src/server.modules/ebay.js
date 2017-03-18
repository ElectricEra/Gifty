module.exports = function (idea, maxPrice) {
  var items;
  var params = {
    keywords: [idea.name],
    outputSelector: ['AspectHistogram'],
    paginationInput: {
      entriesPerPage: 5
    },

    itemFilter: [
      {name: 'FreeShippingOnly', value: true},
      {name: 'MinPrice', value: idea.price},
      {name: 'MaxPrice', value: maxPrice},
      {name: 'buyItNowAvailable', value: true},
      {name: 'shipToLocations', value: 'UA'}
    ]

  };

  return new Promise((resolve, reject) => {

    ebay.xmlRequest({
        serviceName: 'Finding',
        opType: 'findItemsByKeywords',
        appId: 'IuriiDan-gifty-PRD-22466ad41-6bb1a6e4',    
        params: params,
        parser: ebay.parseResponseJson
      },
     
      function itemsCallback(error, itemsResponse) {
        if (error) reject(error);
        if (itemsResponse){
          idea.ebay = itemsResponse.searchResult.item;
        }
        resolve(idea);
      }
    );
  });
};