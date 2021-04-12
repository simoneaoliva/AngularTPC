import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.css']
})
export class ImgViewerComponent implements OnChanges {

  esito: boolean = false;
  @Input() path;

  @Output() voto = new EventEmitter<boolean>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    //alert("hai votato");
    this.esito = false;
  }

  scegliImage(){
    this.esito = !this.esito;
    this.voto.emit(this.esito);
  }

}
