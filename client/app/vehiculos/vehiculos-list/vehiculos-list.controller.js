'use strict';
(function(){

class VehiculosListComponent {
  constructor(vehiculosService) {
    this.vehiculosService = vehiculosService;
  }


$onInit(){
  this.vehiculosService.query().$promise
  .then(response => {
    console.log('Vehiculos OK',response);
    this.vehiculos = response;
  })
  .catch(err => {
    console.log('ERROR',err);
  });

}
}

angular.module('palmiConApp')
  .component('vehiculosList', {
    templateUrl: 'app/vehiculos/vehiculos-list/vehiculos-list.html',
    controller: VehiculosListComponent,
    controllerAs: 'vm'
  });

})();
