import { Component } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {
  showFiller = false;
// public low_quantity_threshold
  rewards = [
    { pk: 1, name: 'Reward 1', company: 'Tesla', points: 100, display_img_url: '', quantity: 0, valid_until: '2024-11-01T00:00:00', low_quantity_threshold: 3 },
    { pk: 2, name: 'Reward 2', company: 'Apple', points: 150, display_img_url: '', quantity: 8, valid_until: '2024-12-01T00:00:00', low_quantity_threshold: 3 },
    { pk: 3, name: 'Reward 3', company: 'Google', points: 200, display_img_url: '', quantity: 12, valid_until: '2025-01-01T00:00:00', low_quantity_threshold: 5 },
    { pk: 4, name: 'Reward 4', company: 'Microsoft', points: 50, display_img_url: '', quantity: 5, valid_until: '2024-10-15T00:00:00', low_quantity_threshold: 2 },
    { pk: 5, name: 'Reward 5', company: 'Amazon', points: 300, display_img_url: '', quantity: 20, valid_until: '2024-12-31T00:00:00', low_quantity_threshold: 7 },
    { pk: 6, name: 'Reward 6', company: 'Facebook', points: 120, display_img_url: '', quantity: 3, valid_until: '2024-11-25T00:00:00', low_quantity_threshold: 1 },
    { pk: 7, name: 'Reward 7', company: 'Netflix', points: 250, display_img_url: '', quantity: 18, valid_until: '2025-02-28T00:00:00', low_quantity_threshold: 10 },
    { pk: 8, name: 'Reward 8', company: 'Spotify', points: 100, display_img_url: '', quantity: 4, valid_until: '2024-10-10T00:00:00', low_quantity_threshold: 2 },
    { pk: 9, name: 'Reward 9', company: 'Adobe', points: 175, display_img_url: '', quantity: 15, valid_until: '2025-03-20T00:00:00', low_quantity_threshold: 5 },
    { pk: 10, name: 'Reward 10', company: 'Uber', points: 130, display_img_url: '', quantity: 6, valid_until: '2024-11-12T00:00:00', low_quantity_threshold: 3 },
    { pk: 11, name: 'Reward 11', company: 'Airbnb', points: 80, display_img_url: '', quantity: 10, valid_until: '2024-09-30T00:00:00', low_quantity_threshold: 4 },
    { pk: 12, name: 'Reward 12', company: 'Twitter', points: 220, display_img_url: '', quantity: 25, valid_until: '2025-05-01T00:00:00', low_quantity_threshold: 12 },
    { pk: 13, name: 'Reward 13', company: 'LinkedIn', points: 190, display_img_url: '', quantity: 7, valid_until: '2025-06-12T00:00:00', low_quantity_threshold: 4 },
    { pk: 14, name: 'Reward 14', company: 'Nike', points: 160, display_img_url: '', quantity: 2, valid_until: '2024-10-01T00:00:00', low_quantity_threshold: 1 },
    { pk: 15, name: 'Reward 15', company: 'Pepsi', points: 140, display_img_url: '', quantity: 13, valid_until: '2025-01-21T00:00:00', low_quantity_threshold: 6 },
    { pk: 16, name: 'Reward 16', company: 'Coca-Cola', points: 110, display_img_url: '', quantity: 9, valid_until: '2024-12-01T00:00:00', low_quantity_threshold: 4 },
    { pk: 17, name: 'Reward 17', company: 'Samsung', points: 260, display_img_url: '', quantity: 30, valid_until: '2025-07-31T00:00:00', low_quantity_threshold: 15 },
    { pk: 18, name: 'Reward 18', company: 'Intel', points: 180, display_img_url: '', quantity: 8, valid_until: '2025-08-12T00:00:00', low_quantity_threshold: 3 },
    { pk: 19, name: 'Reward 19', company: 'Adobe', points: 150, display_img_url: '', quantity: 20, valid_until: '2025-04-10T00:00:00', low_quantity_threshold: 8 },
    { pk: 20, name: 'Reward 20', company: 'Tesla', points: 140, display_img_url: '', quantity: 5, valid_until: '2024-11-17T00:00:00', low_quantity_threshold: 2 },
    { pk: 21, name: 'Reward 21', company: 'IBM', points: 130, display_img_url: '', quantity: 10, valid_until: '2025-09-30T00:00:00', low_quantity_threshold: 4 }
];


sortedRewards = [...this.rewards]; // Create a copy of the rewards array for sorting
  sortOrder: 'asc' | 'desc' = 'asc'; // Default sort order

  applySort() {
    this.sortedRewards.sort((a, b) => {
      const companyA = a.company.toLowerCase();
      const companyB = b.company.toLowerCase();
      if (this.sortOrder === 'asc') {
        return companyA < companyB ? -1 : companyA > companyB ? 1 : 0;
      } else {
        return companyA > companyB ? -1 : companyA < companyB ? 1 : 0;
      }
    });
  }

  resetRewards() {
    this.sortedRewards = [...this.rewards]; 
  }
}
