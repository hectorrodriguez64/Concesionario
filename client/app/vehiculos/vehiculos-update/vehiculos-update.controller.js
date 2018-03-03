'use strict';
(function(){

class VehiculosUpdateComponent {
  constructor(vehiculosService, $stateParams, $state) {
  	this.vehiculosService = vehiculosService
    this.$stateParams = $stateParams;
  	this.$state = $state;
  }

  $onInit(){
  		this.vehiculosService.query({id:this.$stateParams.id}).$promise
  		.then(response => {
  			this.vehiculos = response;
  			console.log(this.vehiculos);
  		})
  		.catch(err => console.error(err));

  		
	}

  	update(){
  		console.log("Hola");
  		this.vehiculosService.update({id:this.vehiculos.id},this.vehiculos.id).$promise
  		.then(response => {
  			console.log("Vehiculo actualizado");
  			this.$state.go('vehiculos-list');
  		})
  		.catch(err => console.error(err));
  	}



}

angular.module('palmiConApp')
  .component('vehiculosUpdate', {
    templateUrl: 'app/vehiculos/vehiculos-update/vehiculos-update.html',
    controller: VehiculosUpdateComponent,
    controllerAs: 'vm'
  });

})();
