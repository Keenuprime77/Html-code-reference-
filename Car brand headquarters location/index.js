function updateMap(){
console.log("this is map")
fetch("/car_location.json")
.then(response => response.json())
.then(rsp => {
console.log(rsp.car_brands);
rsp.car_brands.forEach(element => {
latitude = element.latitude;
longitude = element.longitude;
var marker = L.marker([latitude,longitude]).addTo(map);
});
L.control.maptilerGeocoding({ apiKey: key }).addTo(map);
})
}
updateMap();

