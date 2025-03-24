import { Component, OnInit } from '@angular/core';
import { Tops } from 'src/app/models/tops';
import { TopsService } from 'src/app/tops.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newTop: Tops = new Tops();

  constructor(private topsService: TopsService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.topsService.createNewTop(this.newTop).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products")

    });
  }

}
