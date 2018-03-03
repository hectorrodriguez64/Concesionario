'use strict';
(function(){

class VehiculosUpdateComponent {
  constructor(vehiculosService, $stateParams, $state) {
  	this.vehiculosService = vehiculosService
    this.$stateParams = $stateParams;
  	this.$state = $state;
  }

  $onInit(){
  		this.vehiculosService.get({id:this.$stateParams.idVehiculo}).$promise
  		.then(response => {
  			this.vehiculos = response;
  			console.log(this.vehiculo);
  		})
  		.catch(err => console.error(err));
	}

  	updateVehiculos(){
  		this.vehiculosService.update({id:this.vehiculo.id}, this.vehiculo).$promise
  		.then(response => {
  			console.log("Vehiculo actualizado");
  			this.$state.go('vehiculos-list');
  		})
  		.catch(err => {
      console.log("ERROR AL ACTUALIZAR",err);
  	});
  }
}

angular.module('palmiConApp')
  .component('vehiculosUpdate', {
    templateUrl: 'app/vehiculos/vehiculos-update/vehiculos-update.html',
    controller: VehiculosUpdateComponent,
    controllerAs: 'vm'
  });

})();
