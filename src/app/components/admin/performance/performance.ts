import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-performance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './performance.html',
  styleUrls: ['./performance.css'],
})
export class Performance {
  filterForm: FormGroup;
  performanceData: any;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      startDate: [''],
      endDate: [''],
      region: [''],
      agentId: ['']
    });

    // Mock data
    this.performanceData = {
      totalSales: 500000,
      incentivesPaid: 15000,
      topAgents: ['Agent A', 'Agent B', 'Agent C'],
      agents: [
        { id: 'A001', region: 'North', sales: 200000, incentives: 5000, rank: 1 },
        { id: 'A002', region: 'South', sales: 150000, incentives: 3000, rank: 2 },
        { id: 'A003', region: 'East', sales: 100000, incentives: 2000, rank: 3 },
        { id: 'A004', region: 'West', sales: 50000, incentives: 1000, rank: 4 },
      ]
    };
  }

  applyFilters(): void {
    // TODO: replace with real filter logic
    console.log('Applying filters', this.filterForm.value);
  }
}