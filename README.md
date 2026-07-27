# E-Commerce Product Page

![project screenshot]()

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Links](#links)
  - [Tech Stack](#tech-stack)
  - [Project Structure](#project-structure)
- [Architecture & Key Decisions](#architecture--key-decisions)
  - [Component Design](#component-design)
  - [State Management](#state-management)
  - [Utility Functions](#utility-functions)
  - [Accessibility](#accessibility)
- [Author](#author)

## Overview


This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Features

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- [live demo site]()

### Tech Stack

### Project Structure

## Architecture & Key Decisions

### Component Design

### State Management

### Utility Functions

### Accessibility

There are some gaps in the design comp in regard to interactive (focus, active) elements. In particular, there are not defined styles for keyboard focused elements. The daker of the brand orange colors felt like the most natural of the accent colors to use here while keeping consistency with the design comp, but that color against the primary white background has a contrast ratio of just a tic over 2.5:1, failing both WCAG AA and AAA standards. I experimented with some similar orange shades to increase the contrast ratio to a minimum of 3:1, but the focus state of a selected thumb with the similar accent orange-500 looked awkward. In the end, I chose the darkest of the brand grays, erring on the side of clear visual accessiblity.



## Author

- Website - [Matt Pahuta](https://www.mattpahuta.dev)
- Frontend Mentor - [@mattpahuta](https://www.frontendmentor.io/profile/MattPahuta)
- Bluesky - [@mattpahuta](https://bsky.app/profile/mattpahuta.bsky.social)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)
