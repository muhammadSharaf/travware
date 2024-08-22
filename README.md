## Table of Content

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Interface](#interface)
5. [Features](#features)
6. [Future Updates](#future-updates)
7. [Dependencies](#dependencies)
8. [Sample](#sample)

## Introduction

A product listing application

## Installation

```bash
git clone https://github.com/muhammadSharaf/travware.git

npm install

npm run dev
```

```
web application url: http://localhost:3000/
```

## Project Structure

```
Web Application (next-app)
│── public
|   └── products.json (fake data)
|
└── src 
|   └── app (main app router)
|   │   └── cart
|   │   │   │   page.tsx
|   │   │
|   │   └── products
|   │       │   page.tsx
|   │
|   └── components
|   │   └── elements
|   │   │   └── buttons
|   │   │   └── headers
|   │   │   └── input
|   │   │   
|   │   └── products   
|   │   │   └── ProductCart
|   │   │   └── ProductItem
|   │   │   └── ProductsList
|   │   │   
|   │   └── filters
|   │   └── nav
|   |
|   └── enums
|   │   └── FilterType
|   │   └── SortType
|   |
|   └── type
|   │   └── CartProduct.type
|   │   └── Filters.type
|   │   └── Product.type
|   
|   └── lib (redux store)
|   │   └── slices
|   │   └── states
|   │   └── hooks
|   │   └── store

```

## Interface

```
interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  price: number;
}

interface CartProduct extends Product {
  count: number;
}
```

## Features

- Responsive design

- /products (List all product)
  - Realtime search (with highlighted results)
  - Filter using (min - max) prices
  - Sort using product name or price
  - Multiple product thumbnails
- /cart (List user cart products)
  - Add products to cart
  - Increase product quantity
  - Decrease product quantity
  - Remove product from cart
  - Checkout cart

## Future Updates

- Add redux persist for Cart
- Add jest testing

## Dependencies

- Web application
    1. Next
    2. React
    3. Tailwindcss
    4. Redux Toolkit
    5. swiper
    6. eslint

## Sample
Products page
![Sample 1](https://github.com/muhammadSharaf/travware/blob/main/products.png)
Applying filters (sort price DESC / min price / max price)
![Sample 2](https://github.com/muhammadSharaf/travware/blob/main/filters.png)
Add products to cart
![Sample 3](https://github.com/muhammadSharaf/travware/blob/main/products-cart.png)
Search by product name (with highlighted results)
![Sample 4](https://github.com/muhammadSharaf/travware/blob/main/search.png)
Cart page
![Sample 5](https://github.com/muhammadSharaf/travware/blob/main/cart.png)
Products page (mobile view)
![Sample 6](https://github.com/muhammadSharaf/travware/blob/main/products-mobile.png)
Cart page (mobile view)
![Sample 7](https://github.com/muhammadSharaf/travware/blob/main/cart-mobile.png)
