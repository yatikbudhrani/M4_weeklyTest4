# Weekly Test 4

## Overview:

This project is a simple web application for displaying phone details. It incorporates various JavaScript functionalities to achieve the required tasks such as implementing search functionality, displaying detailed information on card click, and showing all available phones.

## Technologies Used:

- HTML
- CSS
- JavaScript

## How It Works:

1. **Displaying Phones:**

   - Upon loading the page, all available phones are displayed in default cards.
   - JavaScript is used to dynamically generate HTML elements for each phone card and append them to the DOM.

2. **Search Functionality:**

   - An input field allows users to enter search queries.
   - JavaScript listens for input events on the search input field.
   - Upon each input event, the JavaScript filters the list of phones based on the user's input using the `filter()` function.
   - The filtered results are then displayed dynamically by updating the content of the phone container.

3. **Displaying Detailed Information:**

   - Event delegation is used to detect clicks on the phone cards.
   - When a card is clicked, JavaScript identifies the clicked card and displays detailed information about that phone.
   - This functionality can be implemented using various UI techniques such as modals or expanding the card.

4. **Show All Functionality:**
   - A "Show All" button is provided for users to view all available phones.
   - Clicking the button triggers an event listener in JavaScript.
   - The JavaScript then displays all phones by re-rendering the default view.

## JavaScript Functionalities Used:

1. **Event Handling:**

   - Event listeners are utilized to handle user interactions such as input events for search, click events for displaying detailed information, and button clicks for showing all phones.

2. **Array Methods (Filter):**

   - The `filter()` method is used to create a new array containing only the elements that pass a provided test implemented through a provided function.

3. **DOM Manipulation:**

   - JavaScript is used to dynamically create, modify, and remove HTML elements based on user interactions and data changes.

4. **Event Delegation:**
   - Event delegation is employed to efficiently handle events on multiple elements with a single event listener, which is especially useful for dynamically generated elements.

## Conclusion:

This project demonstrates how JavaScript can be used to create interactive web applications with functionalities such as search, dynamic content generation, and event handling. By leveraging these JavaScript features along with HTML and CSS, the application provides a user-friendly interface for viewing and interacting with phone details.
