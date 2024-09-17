import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent  {

  @Input() character:any = null;
  @Output() close = new EventEmitter<void>();

  closeDetails() {
    this.close.emit();
  }
}
