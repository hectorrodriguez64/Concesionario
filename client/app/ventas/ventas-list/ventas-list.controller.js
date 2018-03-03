'use strict';
(function(){

class VentasListComponent {
  constructor(ventasService) {
    this.ventasService = ventasService;
  }

	$onInit(){
  		this.ventasService.query().$promise
  		.then(response => {
   		console.log('Ventas OK',response);
    	this.ventas = response;
  		})
  	.catch(err => {
    	console.log('ERROR',err);
  		});
	}
}

angular.module('palmiConApp')
  .component('ventasList', {
    templateUrl: 'app/ventas/ventas-list/ventas-list.html',
    controller: VentasListComponent,
    controllerAs: 'vm'
  });

})();
