import { Component, OnInit,Input} from '@angular/core';
import { Words } from '../Interfaces/words';
@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {

  constructor() { }
  @Input() word?: Words;
  ngOnInit(): void {
  }

}
