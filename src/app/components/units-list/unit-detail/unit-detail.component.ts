import { Component, OnInit } from '@angular/core';
import { IUnit } from '../../../interfaces'
import { DetailService } from '../../../services'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.scss']
})
export class UnitDetailComponent implements OnInit {

  unitDetail: IUnit;
  subscription: Subscription;

  constructor(public activatedRoute: ActivatedRoute, private detailService: DetailService) { }

  ngOnInit() {
    this.subscription = this.detailService.unitDetail$.subscribe((data) => {
      this.unitDetail = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
