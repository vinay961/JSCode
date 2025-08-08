
function groupEventsByCity(events) {

    const grouped = {};
    events.forEach(event => {
        if(!grouped[event.city]){
            grouped[event.city] = [];
        }
        grouped[event.city].push(event.name);
    });
    return grouped;
}

// Example usage:
const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "New York", lat: 40.730610, lng: -73.935242 }
];

const groupedEvents = groupEventsByCity(events);

// Display the grouped events
for (const city in groupedEvents) {
  console.log(city + ": [" + groupedEvents[city].join(", ") + "]");
}


