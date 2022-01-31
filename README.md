# Blueberry
Modern web application to browse products in a retail catalog.
Front End Capstone application for Hack Reactor.

## Features: 
- Product Overview
- Related Items
- Ratings & Reviews

### Product Overview
  The Product Overview feature allows users to view details such as the product's name, description, price, overall rating, and multiple styles. User's can get a detailed view of the product in the scrollable image gallery on the left and select different styles using the style selector on the right. User's also have the ability to magnify an image, and select the quantity and size of the product to add to their cart.
  
  ![Overview](https://github.com/blueberry-odyssey/fec-atelier/blob/main/assets/images/overview.png?raw=true)

### Related Items
  The Related Items feature contains a carousel of products associated with the top-level overview product. Products are retrieved from the database via calls to the Products API. The carousel was completely custom created and was reused in the "Outfit" portion of the widget. User's can click the star icon on related images to add them to the current outfit, and they may also add them from the overview widget with the heart icon. Outfits will persist through page refresh by being saved on browser storage.

![Related](https://github.com/blueberry-odyssey/fec-atelier/blob/main/assets/images/related.png?raw=true)

### Ratings & Reviews
  The Ratings & Reviews feature contains the average rating for the selected product, with detailed breakdown of how many star ratings it received, as well as ratings on characteristics of the product (i.e. size, length, quality, comfort, etc.). In addition, there is a list of reviews that can be sorted based on relevance, helpfulness, or newest. The user can select one of the options to sort the listed reviews based on their choosing. Some reviews will contain image thumbnails, which can be clicked on for an expanded view that opens up in a modal window. Each individual review can be interacted in two ways: to mark the review as helpful, or to report the review. These can only be clicked on once. Lastly, one can submit a review by clicking on the Add a Review button, which will open a modal window with a form to rate the product details, and an optional image uploader if the user wishes to do so. Clicking on the submit button will automatically close the modal window and back to the original page.
  
## Tech stack
- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [Webpack](https://webpack.js.org/)
- [Axios](https://axios-http.com/docs/api_intro)
- [Multer](https://www.npmjs.com/package/multer)

## How to install and run the app
- Clone this repo into your local machine
- Go to the root directory
- run 'npm install'
- run 'npm run build'
- run 'npm start'

## Usage
This project is a landing page for ecommerce products, an online store front that features various retail products. It can be used as a template to build off of for a fully functional online marketplace.

## Team members
- [Christina Nathan](https://github.com/christinanate)
- [Jeremiah Berndt](https://github.com/JeremiahBerndt)
- [Michelle Kim](https://github.com/mkim109)
