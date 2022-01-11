# fec-atelier
Front End Capstone project for Hack Reactor

# Project Title: 
### Blueberry Odyssey

# Overview: 
### A product detail page that contains several features such as the product overview, related items, and ratings & reviews.

# Description:
  Overview:
  ![Overview](./tree/related-items/assets/images/overview.png?raw=true)

  Related Items:  This widget contains a carousel of products associated with the top-level overview product. Products are retrieved from the database via calls to the Products API. The carousel was completely custom created and was reused in the "Outfit" portion of the widget. User's can click the star icon on related images to add them to the current outfit, and they may also add them from the overview widget with the heart icon. Outfits will persist through page refresh by being saved on browser storage.

  Ratings & Reviews: This feature contains the average rating for the selected product, with detailed breakdown of how many star ratings it received, as well as ratings on characteristics of the product (i.e. size, length, quality, comfort, etc.). In addition, there is a list of reviews that can be sorted based on relevance, helpfulness, or newest. The user can select one of the options to sort the listed reviews based on their choosing. Some reviews will contain image thumbnails, which can be clicked on for an expanded view that opens up in a modal window. Each individual review can be interacted in two ways: to mark the review as helpful, or to report the review. These can only be clicked on once. Lastly, one can submit a review by clicking on the Add a Review button, which will open a modal window with a form to rate the product details, and an optional image uploader if the user wishes to do so. Clicking on the submit button will automatically close the modal window and back to the original page.

Installation: This project uses react, webpack, node, express, axios, and multer. To get the project started run npm install, npm run build, and npm start.

Usage: This project is a landing page for ecommerce products, an online store front that features various retail products. It can be used as a template to build off of for a fully functional online marketplace.
