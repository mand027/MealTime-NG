import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regional-search',
  templateUrl: './regional-search.component.html',
  styleUrls: ['./regional-search.component.scss']
})
export class RegionalSearchComponent implements OnInit {

  states = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'Chiapas',
    'Chihuahua', 'Ciudad de Mexico', 'Coahuila', 'Colima', 'Durango', 'Guanajuato',
    'Guerrero', 'Hidalgo', 'Jalisco', 'Edo Mex', 'Michoacan', 'Morelos', 'Nayarit',
    'Nuevo Leon', 'Oaxaca', 'Puebla', 'Queretaro', 'Quintana Roo', 'San uis Potosi',
    'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatan',
    'Zacatecas'
];

  constructor() { }

  ngOnInit() {
  }

}
