import { Component } from '@angular/core';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {
  showFiller = false;
  rewards = [
    { pk: 1, name: 'Reward 1', company: 'Tesla', points: 100, display_img_url: '../../assets/Company_logo/tesla.jpg', quantity: 0, valid_until: '2024-11-01T00:00:00', low_quantity_threshold: 3 },
    { pk: 2, name: 'Reward 2', company: 'Apple', points: 150, display_img_url: '../../assets/Company_logo/apple.jpg', quantity: 8, valid_until: '2024-12-01T00:00:00', low_quantity_threshold: 3 },
    { pk: 3, name: 'Reward 3', company: 'Google', points: 200, display_img_url: '../../assets/Company_logo/google.png', quantity: 12, valid_until: '2025-01-01T00:00:00', low_quantity_threshold: 5 },
    { pk: 4, name: 'Reward 4', company: 'Microsoft', points: 50, display_img_url: '../../assets/Company_logo/microsft.jpg', quantity: 5, valid_until: '2024-10-15T00:00:00', low_quantity_threshold: 2 },
    { pk: 5, name: 'Reward 5', company: 'Amazon', points: 300, display_img_url: '../../assets/Company_logo/amazon.jpg', quantity: 20, valid_until: '2024-12-31T00:00:00', low_quantity_threshold: 7 },
    { pk: 6, name: 'Reward 6', company: 'Facebook', points: 120, display_img_url: '../../assets/Company_logo/facebook.jpg', quantity: 3, valid_until: '2024-11-25T00:00:00', low_quantity_threshold: 1 },
    { pk: 7, name: 'Reward 7', company: 'Netflix', points: 250, display_img_url: '../../assets/Company_logo/netflix.jpg', quantity: 18, valid_until: '2025-02-28T00:00:00', low_quantity_threshold: 10 },
    { pk: 8, name: 'Reward 8', company: 'Spotify', points: 100, display_img_url: '../../assets/Company_logo/spotify.jpg', quantity: 4, valid_until: '2024-10-10T00:00:00', low_quantity_threshold: 2 },
    { pk: 9, name: 'Reward 9', company: 'Adobe', points: 175, display_img_url: '../../assets/Company_logo/adobe.jpg', quantity: 15, valid_until: '2025-03-20T00:00:00', low_quantity_threshold: 5 },
    { pk: 10, name: 'Reward 10', company: 'Uber', points: 130, display_img_url: '../../assets/Company_logo/uber.jpg', quantity: 6, valid_until: '2024-11-12T00:00:00', low_quantity_threshold: 3 },
    { pk: 11, name: 'Reward 11', company: 'Airbnb', points: 80, display_img_url: '../../assets/Company_logo/airbnb.jpg', quantity: 10, valid_until: '2024-09-30T00:00:00', low_quantity_threshold: 4 },
    { pk: 12, name: 'Reward 12', company: 'Twitter', points: 220, display_img_url: '../../assets/Company_logo/twitter.jpg', quantity: 25, valid_until: '2025-05-01T00:00:00', low_quantity_threshold: 12 },
    { pk: 13, name: 'Reward 13', company: 'LinkedIn', points: 190, display_img_url: '../../assets/Company_logo/linkdin.jpg', quantity: 7, valid_until: '2025-06-12T00:00:00', low_quantity_threshold: 4 },
    { pk: 14, name: 'Reward 14', company: 'Nike', points: 160, display_img_url: '../../assets/Company_logo/nike.jpg', quantity: 2, valid_until: '2024-10-01T00:00:00', low_quantity_threshold: 1 },
    { pk: 15, name: 'Reward 15', company: 'Pepsi', points: 140, display_img_url: '../../assets/Company_logo/pepsi.jpg', quantity: 13, valid_until: '2025-01-21T00:00:00', low_quantity_threshold: 6 },
    { pk: 16, name: 'Reward 16', company: 'Coca-Cola', points: 110, display_img_url: '../../assets/Company_logo/cococola.jpg', quantity: 9, valid_until: '2024-12-01T00:00:00', low_quantity_threshold: 4 },
    { pk: 17, name: 'Reward 17', company: 'Samsung', points: 260, display_img_url: '../../assets/Company_logo/samsung.jpg', quantity: 30, valid_until: '2025-07-31T00:00:00', low_quantity_threshold: 15 },
    { pk: 18, name: 'Reward 18', company: 'Intel', points: 180, display_img_url: '../../assets/Company_logo/intel.jpg', quantity: 8, valid_until: '2025-08-12T00:00:00', low_quantity_threshold: 3 },
    { pk: 19, name: 'Reward 19', company: 'figma', points: 150, display_img_url: '../../assets/Company_logo/figma.jpg', quantity: 20, valid_until: '2025-04-10T00:00:00', low_quantity_threshold: 8 },
    { pk: 20, name: 'Reward 20', company: 'Asus', points: 140, display_img_url: '../../assets/Company_logo/asus.jpg', quantity: 5, valid_until: '2024-11-17T00:00:00', low_quantity_threshold: 2 },
    { pk: 21, name: 'Reward 21', company: 'IBM', points: 130, display_img_url: '../../assets/Company_logo/ibm.jpg', quantity: 10, valid_until: '2025-09-30T00:00:00', low_quantity_threshold: 4 }
];


sortedRewards = [...this.rewards]; 
  sortOrder: 'asc' | 'desc' = 'asc';

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

  searchTerm: string = '';
  tags: string[] = [];

  addTag(): void {
    if (this.searchTerm.trim() && !this.tags.includes(this.searchTerm.trim())) {
      this.tags.push(this.searchTerm.trim());
      this.searchTerm = ''; 
    }
  }

  removeTag(index: number): void {
    this.tags.splice(index, 1);
  }
}
