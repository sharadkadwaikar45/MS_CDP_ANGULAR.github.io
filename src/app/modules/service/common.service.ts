import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toggleSearch(currentState: boolean): boolean {
    return !currentState;
  }

  calculateTotalPages(totalItems: number, pageSize: number): number {
    return Math.ceil(totalItems / pageSize);
  }

  getVisiblePages(currentPage: number, totalPages: number, range = 5): number[] {
    let start = Math.max(1, currentPage - Math.floor(range / 2));
    let end = Math.min(totalPages, start + range - 1);
    if (end - start < range - 1) {
      start = Math.max(1, end - range + 1);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  goToPage(page: number, totalPages: number): number {
    if (page >= 1 && page <= totalPages) {
      return page;
    }
    return 1;
  }

  goToPreviousPage(currentPage: number): number {
    return currentPage > 1 ? currentPage - 1 : 1;
  }

  goToNextPage(currentPage: number, totalPages: number): number {
    return currentPage < totalPages ? currentPage + 1 : totalPages;
  }
}