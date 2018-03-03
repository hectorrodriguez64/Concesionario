'use strict';
 function ventasService($resource,API) {
  	return $resource(API+"/api/ventas/:id",{
  		id:'@id'
  	},{
  		update:{
  			method:'PUT'
  		}
  	})
  }


angular.module('palmiConApp')
  .factory('ventasService', ventasService);
