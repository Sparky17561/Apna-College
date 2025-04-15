const express = require('express')
const wrapAsync = require('../utils/wrapAsync.js')

const Listing = require('../models/listing.js')
const { isLoggedIn,isOwner, validateListing } = require('../middleware.js')
const router = express.Router()

const listingController = require('../controllers/listings.js')

router.route('/')
.get(wrapAsync(listingController.index)) //index route
.post(isLoggedIn,validateListing, wrapAsync(listingController.createListing)) // create route

//Add route 
router.get('/new',isLoggedIn, listingController.renderNewForm)



router.route('/:id')
.get(wrapAsync(listingController.showListing)) //show route
.put(isLoggedIn,isOwner,validateListing,  wrapAsync(listingController.updateListing)) // Update Route 
.delete(isLoggedIn,isOwner,  wrapAsync(listingController.destroyListing)) // delete route 







//Edit route 
router.get('/:id/edit',isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm))





module.exports = router 