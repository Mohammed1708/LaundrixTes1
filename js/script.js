// ========== Navbar function
window.addEventListener("scroll", function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Location coordinates
var location = { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE };

// Map options
var mapOptions = {
    center: location,
    zoom: 15, // You can adjust the zoom level as needed
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// Create the map
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

// Add a marker to the map
var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Your Location"
});
