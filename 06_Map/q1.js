
function findEventsInRange(events, latRange, lngRange) {
    return events.filter(item => (item.lat > latRange[0] && item.lat < latRange[1]) && (item.lng > lngRange[0] && item.lng < lngRange[1]))
}

// Example usage:
const events = [
  { name: "Concert", city: "New York", lat: 35.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "London", lat: 51.5074, lng: -0.1278 }
];
const latRange = [34.0, 40.0]; // Latitude range
const lngRange = [-120.0, -70.0]; // Longitude range

const filteredEvents = findEventsInRange(events, latRange, lngRange);
console.log(filteredEvents);
// Output: [{ name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 }]

