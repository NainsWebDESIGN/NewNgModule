import { Component, OnInit } from '@angular/core';
import { ApiService } from '@service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
