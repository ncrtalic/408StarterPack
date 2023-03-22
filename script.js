function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


yelp_data = {
  "business_id": "5UmKMjUEUNdYWqANhGckJw",
  "full_address": "4734 Lebanon Church Rd\nDravosburg, PA 15034",
  "hours": {
    "Friday": {
      "close": "21:00",
      "open": "11:00"
    },
    "Tuesday": {
      "close": "21:00",
      "open": "11:00"
    },
    "Thursday": {
      "close": "21:00",
      "open": "11:00"
    },
    "Wednesday": {
      "close": "21:00",
      "open": "11:00"
    },
    "Monday": {
      "close": "21:00",
      "open": "11:00"
    }
  },
  "open": true,
  "categories": [
    "Fast Food",
    "Restaurants"
  ],
  "city": "Dravosburg",
  "review_count": 4,
  "name": "Mr Hoagie",
  "neighborhoods": [],
  "longitude": -79.9007057,
  "state": "PA",
  "stars": 4.5,
  "latitude": 40.3543266,
  "attributes": {
    "Take-out": true,
    "Drive-Thru": false,
    "Good For": {
      "dessert": false,
      "latenight": true,
      "lunch": true,
      "dinner": true,
      "brunch": true,
      "breakfast": true
    },
    "Caters": false,
    "Noise Level": "average",
    "Takes Reservations": true,
    "Delivery": false,
    "Ambience": {
      "romantic": true,
      "intimate": false,
      "classy": false,
      "hipster": true,
      "divey": false,
      "touristy": false,
      "trendy": true,
      "upscale": false,
      "casual": true
    },
    "Parking": {
      "garage": false,
      "street": true,
      "validated": false,
      "lot": true,
      "valet": false
    },
    "Has TV": true,
    "Outdoor Seating": true,
    "Attire": "casual",
    "Alcohol": "none",
    "Waiter Service": true,
    "Accepts Credit Cards": true,
    "Good for Kids": true,
    "Good For Groups": true,
    "Price Range": 2
  },
  "type": "business"
}

function getName() {
  alert(yelp_data["name"])
}
function getAddress() {
  alert(yelp_data['full_address'])
}
function getHours() {
  alert(yelp_data['hours'])
}
function getMenu() {
  alert("nothing")
}

function getFeatures() {
  alert("Attributes")
}