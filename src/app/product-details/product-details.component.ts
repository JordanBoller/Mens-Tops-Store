import { Component, OnInit } from '@angular/core';
import { TopsService } from '../tops.service';
import { ActivatedRoute } from '@angular/router';
import { Tops } from '../models/tops';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css'],
    standalone: false
})
export class ProductDetailsComponent implements OnInit {
  id: number = 0;

  currentTop: Tops = new Tops()

  constructor(private topsService: TopsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const routeId = this.activatedRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.topsService.getTopByID(this.id).subscribe(foundTop => {
      console.log(foundTop);
      this.currentTop = foundTop;
    });
  }
}
