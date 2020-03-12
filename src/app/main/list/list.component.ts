import { ListService } from './list.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  billData: any = {};

  constructor(
    private router :Router,
    private route: ActivatedRoute,
    private listservice: ListService
  ) { 
    this.billData = this.route.snapshot.data.item
      ? this.route.snapshot.data.item.data
      : {};

    console.log(this.billData);
  }

  ngOnInit() {
  }

  openForm(){
    this.router.navigate(['form']);
  }

}
