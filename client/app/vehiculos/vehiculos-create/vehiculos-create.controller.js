'use strict';
(function(){

class VehiculosCreateComponent {
  constructor(vehiculosService, $state) {
    this.vehiculosService = vehiculosService;
    this.$state = $state;
  }

  $onInit(){
  	this.vehiculosService.query().$promise
  	.then(response => {
  			this.vehiculo = response;
  		})
  		.catch(err => console.error(err));
  }

  createVehiculos(){
  	this.vehiculosService.save(this.vehiculos).$promise
      .then(response => {
          console.log("Vehiculo registrado correctamente ", response);
          this.$state.go('vehiculos-list');
      })
      .catch(err => {
          console.log("Error al crear el vehiculo", err);
      })
  }
  }

angular.module('palmiConApp')
  .component('vehiculosCreate', {
    templateUrl: 'app/vehiculos/vehiculos-create/vehiculos-create.html',
    controller: VehiculosCreateComponent,
    controllerAs: 'vm'
  });

})();
