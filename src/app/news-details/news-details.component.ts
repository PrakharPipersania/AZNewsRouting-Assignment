import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  id: number = 0;
  imgpath: string = "";

  constructor(private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((paramsData) =>{
      this.id = paramsData.id
      this.imgpath = `assets/img/thumbnail/${paramsData.id}.jpg`
    })
  }

}
