test.filter('itemFilter',function() {
     return function(items, usedFilter, defaultFilter) {
     	return items.filter(function(item) {
     		return Object.keys(usedFilter).every(function(filterCatKey) {
     			return Object.keys(usedFilter[filterCatKey]).every(function(pointKey) {
     				// console.log(defaultFilter[filterCatKey].points[pointKey].relative);
     				var exist = item[filterCatKey].indexOf(+pointKey) !== -1;
     				if (defaultFilter[filterCatKey].points[pointKey].bindPoints) {
     					exist = exist || defaultFilter[filterCatKey].points[pointKey].bindPoints.some(function(relativeKey) {
     						return item[filterCatKey].indexOf(+relativeKey) !== -1;
     					});
     				}
     				return exist; 
     			});
     		});
     	});
    }
}); //end of filter

// test.filter('itemFilter',function() {
//      return function(items, usedFilter) {
//      	return items.filter (function(item) {
//      		return Object.keys(usedFilter).every(function(filterCatKey) {
//      			return Object.keys(usedFilter[filterCatKey]).every(function(filterItemKey) {
//      				return item[filterCatKey].indexOf(+filterItemKey) !== -1;
//      			});
//      		});
//      	});
//     }
// }); //end of filter


// test.filter('itemFilter',function() {
//      return function(items, usedFilter, defaultFilter) {
//           return items.filter(function(item) {
//                return Object.keys(usedFilter).every(function(filterCatKey) {
//                     return Object.keys(usedFilter[filterCatKey]).every(function(pointKey) {
//                          // console.log(defaultFilter[filterCatKey].points[pointKey].relative);
//                          var exist = item[filterCatKey].indexOf(+pointKey) !== -1;
//                          if (defaultFilter[filterCatKey].points[pointKey].bindPoints) {
//                               exist = exist || defaultFilter[filterCatKey].points[pointKey].bindPoints.some(function(relativeKey) {
//                                    return item[filterCatKey].indexOf(+relativeKey) !== -1;
//                               });
//                          }
//                          return exist; 
//                     });
//                });
//           });
//     }
// }); //end of filter