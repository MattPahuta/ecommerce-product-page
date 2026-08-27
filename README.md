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

I approched this build imagining the product page was an example of what would be hundreds or more on mid-sized ecommerce online store, so there are quite a few components making up

Instead of the collection of provided icon assets, I decided to utilize an icon library (React Feather - one of favorites) to streamline some of the conditional rendering and update the style of the product page in an incremental fashion. I feel going with the icon library adds to the overall accessibility of the site as well, eliminating some of the awkwardness of rendering the raw SVG files...

(FocusLock and RemoveScroll)

### Component Design

This layout challenges of this project were much trickier than I anticipated. I think I spent a good deal more time with CSS trial and error, struggling to get the right combinations of postion relative, absolute, etc. correct than I did with the React and pure JavaScript logic.

### State Management

### Utility Functions

### Accessibility

There are some gaps in the design comp in regard to interactive (focus, active) elements. In particular, there are not defined styles for keyboard focused elements. The daker of the brand orange colors felt like the most natural of the accent colors to use here while keeping consistency with the design comp, but that color against the primary white background has a contrast ratio of just a tic over 2.5:1, failing both WCAG AA and AAA standards. I experimented with some similar orange shades to increase the contrast ratio to a minimum of 3:1, but the focus state of a selected thumb with the similar accent orange-500 looked awkward. In the end, I chose the darkest of the brand grays, erring on the side of clear visual accessiblity.

This FEM challenge is largely focused on layout and achieving the lightbox interactivity, so the design comp has limited insight into much of the interactive styles for buttons and nothing to say about error states or specific shopping cart logic, so I decided to fall back on achieving the highest contrast ratio standards with the brand color combinations and detailed error text.

After testing with a screen reader, I realized my original presentation of the crossed-out product price carried no meaning to an unsighted user. Going back, I added some visually hidden context as well as utilizing the more semanatic ```<s>``` tag:

```html
  <p className="font-bold text-brand-gray-500">
    <span className="sr-only">Original price: </span>
    <s>${product.fullPrice.toFixed(2)}</s>
  </p>
```

```html
  <div aria-live="polite" aria-atomic="true" className="sr-only">
    // message for screen readers
  </div>
  ```

During accessibility review testing, I discovered that when an item is added to the cart and then another item in the same quanity is added, the annoucement message remained identical, React wasn't detecting any need to update state, so no DOM updates were being made, thus the screen reader (which is watching the DOM, not React's state setter). Added a setTimeout with useCallback to clear the live region first, then set the message a moment later, so the screen reader sees the DOM mutations.

```js
  const announe = useCallback((message) => {
      clearTimeout(clearTimeoutRef.current);
      setAnnouncement("");
      clearTimeoutRef.current = setTimeout(() => setAnnouncement(message), 100);
    }, []);
```

### The Shopping Cart drop-down

Among the many accessibility challenges this project design presented is the open cart panel state. The design calls for the cart to overlay the product page content rather than shift content down, allowing for much of the product image along with its controls to be obsured (especially on mobile).

I researched a handful of popular lifestyle brand websites to see what their experiences were like and found a lot of confusing and disappointing behevior for keyboard-only interactions, even for some of the sites with accessibility statements. Nike.com has somewhat similar behevior for some of the cart states to what this design calls for, and in those particular states they have a focus trap enabled, treating the cart panel as a modal. This felt closest to the spirit of what the design is calling for and the right balance for accessibility and usability. Allowing a user to tab through the open cart panel and on to potentially obscured elements behind it felt wrong.

I briefly considered conditionally applying the `inert` attribute to the rest of the page while the cart was open, but ultimately kept the same pattern I'd used with the lightbox gallery, treating the cart panel as a modal and reusing FocusLock library. Additionally, I didn't like that keyboard users could only close the shopping cart by way of the escape key, so I added an additional close button, similar to what was already implemented for lightbox modal. I think it matches the design well and provides some added usability.

## Author

- Website - [Matt Pahuta](https://www.mattpahuta.dev)
- Frontend Mentor - [@mattpahuta](https://www.frontendmentor.io/profile/MattPahuta)
- Bluesky - [@mattpahuta](https://bsky.app/profile/mattpahuta.bsky.social)
- LinkedIn - [Matt Pahuta](www.linkedin.com/in/mattpahuta)
