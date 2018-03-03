'use strict';
 function vehiculosService($resource,API) {
  	return $resource(API+"/api/vehiculos/:id",{
  		id:'@id'
  	},{
  		update:{
  			method:'PUT'
  		}
  	})
  }


angular.module('palmiConApp')
  .factory('vehiculosService', vehiculosService);
