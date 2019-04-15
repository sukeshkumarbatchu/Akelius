import { Component, OnInit } from '@angular/core';
import { ApiService, DetailService } from '../../services';
import { IUnit } from '../../interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-units-list',
  templateUrl: './units-list.component.html',
  styleUrls: ['./units-list.component.scss']
})
export class UnitsListComponent implements OnInit {

  unitsList: IUnit[];
  filterCity: string = 'All';
  public state = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router, private detailService: DetailService) { }

  ngOnInit() {
    this.loadUnitsList();
    this.route.params.subscribe(params => {
      const selectedCity = params['selectedCity'];

      if (selectedCity && selectedCity != 'All')
        this.filterCity = selectedCity;
      else {
        this.router.navigateByUrl('/list');
      }
    });
  }

  async loadUnitsList() {
    this.apiService.getUnitsList()
      .subscribe(unitsList => {
        this.unitsList = unitsList.data;
      });
  }

  navCityFilter(selectedCity) {
    this.router.navigateByUrl('/list/' + selectedCity);
  }

  navUnitDetail(unit: IUnit) {
    this.router.navigateByUrl('/detail/' + unit.id);
    this.detailService.unitDetails(unit);
  }
}

