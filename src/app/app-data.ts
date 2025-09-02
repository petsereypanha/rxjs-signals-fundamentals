import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Product} from './features/products/product';
import {Review} from './features/reviews/review';
import {ProductData} from './features/products/product-data';
import {ReviewData} from './features/reviews/review-data';

export class AppData implements InMemoryDbService {

  createDb(): { products: Product[], reviews: Review[]} {
    const products = ProductData.products;
    const reviews = ReviewData.reviews;
    return { products, reviews };
  }
}
