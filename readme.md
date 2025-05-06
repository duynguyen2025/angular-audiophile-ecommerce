## Apis

### Overview
This is a Node.js backend API for an e-commerce application. It provides endpoints for product listing and product details, with support for filtering by category.

### Features
- **Product Listing**: Fetch all products or filter by category using query parameters.
- **Product Details**: Fetch detailed information about a specific product using its slug.
- **Static File Serving**: Serve static assets like images from the `public/assets` directory.
- **CORS Enabled**: Allows cross-origin requests from any origin.

### Endpoints
#### 1. Product Listing
- **URL**: `/api/products`
- **Method**: `GET`
- **Query Parameters**:
  - `category` (optional): Filter products by category (e.g., `earphones`, `headphones`, `speakers`).
- **Example**:
  - Fetch all products: `GET /api/products`
  - Fetch products in the `earphones` category: `GET /api/products?category=earphones`

#### 2. Product Details
- **URL**: `/api/products/:slug`
- **Method**: `GET`
- **Path Parameters**:
  - `slug`: The unique identifier for a product (e.g., `yx1-earphones`).
- **Example**:
  - Fetch details for the product with slug `yx1-earphones`: `GET /api/products/yx1-earphones`

### Static File Access
Static files (e.g., images) are served from the `public/assets` directory. Example:
- **URL**: `/assets/product-yx1-earphones/mobile/image-product.jpg`
- **Access**: `http://localhost:3000/assets/product-yx1-earphones/mobile/image-product.jpg`

### Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. The server will run at `http://localhost:3000`.

### Dependencies
- `express`: Web framework for Node.js.
- `cors`: Middleware for enabling CORS.
- `nodemon`: Development tool for automatic server restarts.
