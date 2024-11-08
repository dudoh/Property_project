import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PropertyService } from '../property.service';
import { Property } from '../property.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Property[] = [];
  filterText = '';

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(data => {
      this.properties = data;
    });
  }

  filterProperties() {
    return this.properties.filter(property =>
      property.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
