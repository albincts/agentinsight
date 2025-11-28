import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../sidebar/sidebar';
import { Sale } from '../../../models/sale.model';
import { Agent } from '../../../models/agent.model';

@Component({
  selector: 'app-agent-sales',
  standalone: true,
  imports: [CommonModule, Sidebar],
  templateUrl: './agent-sales.html',
  styleUrl: './agent-sales.css'
})
export class AgentSales implements OnInit {
  policies: { policyid: string; name: string }[] = [];
  sales: Sale[] = [];
  agents: Agent[] = [];

  totalsales = 0; // aggregated total sales value
  conversionRate = 0; // dummy conversion rate in percent

  // Basic pagination
  page = 1;
  pageSize = 6;

  ngOnInit(): void {
    // load policies.json from public folder
    fetch('/policies.json')
      .then((r) => r.json())
      .then((data) => (this.policies = data))
      .catch(() => (this.policies = []));

    // sample agents (would come from API in real app)
    this.agents = [
      { agentid: 'A-001', name: 'Accomua', email: 'accomua@example.com', phone: '555-0123', role: 'agent' },
      { agentid: 'A-002', name: 'J. Doe', email: 'jdoe@example.com', phone: '555-0456', role: 'agent' },
      { agentid: 'A-003', name: 'S. Smith', email: 'ssmith@example.com', phone: '555-0789', role: 'agent' },
    ];

    // sample sales (with status)
    this.sales = [
      { saleid: 'S-9001', policyid: 'P-1001', agentid: 'A-001', saleamount: 1200, saletype: 'New', saledate: '04/20/2024', status: 'Completed' },
      { saleid: 'S-9002', policyid: 'P-1002', agentid: 'A-002', saleamount: 1500, saletype: 'Renewal', saledate: '04/18/2024', status: 'Pending' },
      { saleid: 'S-9003', policyid: 'P-1003', agentid: 'A-003', saleamount: 1800, saletype: 'New', saledate: '04/17/2024', status: 'Completed' },
      { saleid: 'S-9004', policyid: 'P-1001', agentid: 'A-001', saleamount: 1000, saletype: 'New', saledate: '04/15/2024', status: 'Cancelled' }
    ];

    this.calculateAggregates();
  }

  private calculateAggregates(): void {
    this.totalsales = this.sales.reduce((sum, s) => sum + (s.saleamount || 0), 0);
    // Dummy conversion rate (for example purposes). Replace with real logic later.
    this.conversionRate = 12.5;
  }

  getPolicyName(policyid: string): string {
    const p = this.policies.find((x) => x.policyid === policyid);
    return p ? p.name : policyid;
  }

  getAgentName(agentid: string): string {
    const a = this.agents.find((x) => x.agentid === agentid);
    return a ? a.name : agentid;
  }

  // pagination helpers
  get pagedSales(): Sale[] {
    const start = (this.page - 1) * this.pageSize;
    return this.sales.slice(start, start + this.pageSize);
  }

  prevPage(): void {
    if (this.page > 1) this.page--;
  }
  nextPage(): void {
    if (this.page * this.pageSize < this.sales.length) this.page++;
  }
}
