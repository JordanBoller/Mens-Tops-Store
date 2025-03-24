import { Component, OnInit } from '@angular/core';
import { TopsService } from '../tops.service';
import { Tops } from '../models/tops';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: number = 0;

  currentTop: Tops = new Tops()

  constructor(private topsService: TopsService, private actRoute: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get("id") ?? "";
    this.id = parseInt(routeId);
    this.topsService.getTopByID(this.id).subscribe(foundTop => {
      console.log(foundTop);
      this.currentTop = foundTop;
    });
  }

  onSubmit() {
    this.topsService.editTopByID(this.id, this.currentTop).subscribe(edittedTop => {
      console.log(edittedTop);
      this.router.navigateByUrl("products");
    })


  }
}
