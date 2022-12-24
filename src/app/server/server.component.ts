import { Component, OnInit } from "@angular/core";
import { Words } from "../Interfaces/words";
import { WORDS } from "./mockWords";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})
export class SeverComponent implements OnInit{ 

    CARDS_NUMBER = 5;
    cont = 0;
    words = this.selectWords(this.cont * this.CARDS_NUMBER);
    selectedWord?: Words;
    ngOnInit(): void {      
    }
    
    onSelect(word:Words):void{
        console.log(word)
        this.selectedWord = word;
    }
    onRefresh(){
        const sliceNumber = this.cont* this.CARDS_NUMBER;
        this.words=this.selectWords(sliceNumber);
        this.selectedWord= undefined;

    }
    selectWords(start:number){
        this.cont++;
        return WORDS.slice(start,start+5)
    }

}