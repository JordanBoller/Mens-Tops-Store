import { Component, OnInit } from '@angular/core';
import { Tops } from '../models/tops';
import { TopsService } from '../tops.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  topsList: Tops[] = [];

  constructor(private topsService: TopsService) { }

  ngOnInit(): void {
    this.topsService.getAllTops().subscribe(foundTops => {
      console.log(foundTops);
      this.topsList = foundTops;
    })
  }

}


