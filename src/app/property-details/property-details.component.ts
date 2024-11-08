import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyService } from '../property.service';
import { ActivatedRoute } from '@angular/router';
import { Property } from '../property.model';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  property: Property | undefined;

  constructor(
    private propertyService: PropertyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.propertyService.getProperty(+id!).subscribe(data => {
      this.property = data;
    });
  }
}
