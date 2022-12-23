import { Component, OnInit } from "@angular/core";
import { Words } from "../Interfaces/words";
import { WORDS } from "./mockWords";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})
export class SeverComponent implements OnInit{ 
    words = WORDS
    ngOnInit(): void {
      
    }

    selectedWord?:Words;
    onSelect(word:Words):void{
        this.selectedWord = word;
    }

}