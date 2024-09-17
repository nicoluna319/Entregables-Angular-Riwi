import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.css']
})
export class CategoryFilterComponent {

  @Output() filterChanged = new EventEmitter<string>();

  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      const selectedCategory = target.value;
      if (selectedCategory) {
        this.filterChanged.emit(selectedCategory);
      } else {
        alert('Error: No se encontró ninguna categoría seleccionada.');
      }
    }
  }
}
