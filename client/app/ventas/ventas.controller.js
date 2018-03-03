'use strict';
(function(){

class VentasComponent {
  constructor(clientesService, ventasService, vehiculosService) {
    this.ventasService = ventasService;
    this.clientesService = clientesService;
    this.vehiculosService = vehiculosService;
  }

 $onInit(){
 	this.ventasService.query().$promise
  	.then(response => {
  			this.ventas = response;
  		})
  		.catch(err => console.error(err));

 	this.clientesService.query().$promise
  	.then(response => {
  			this.clientes = response;
  		})
  		.catch(err => console.error(err));

  	this.vehiculosService.query().$promise
  	.then(response => {
  			this.vehiculos = response;
  		})
  		.catch(err => console.error(err));
  }

  /*if(this.vehiculos.marca == "Mazda"){
    this.ventas.monto = 35000000;
  }*/

  createVenta(){
  	this.ventasService.save(this.ventas).$promise
      .then(response => {
          console.log("Venta registrada correctamente ", response);
          this.$state.go('ventas-list');
      })
      .catch(err => {
          console.log("Error al crear la venta", err);
      })
  }
}

angular.module('palmiConApp')
  .component('ventas', {
    templateUrl: 'app/ventas/ventas.html',
    controller: VentasComponent,
    controllerAs: 'vm'
  });

})();
