
var LVL3;  // global variable
var LVL1;
const lvl3URL = "level3.geojson";

const lvl1URL = "level1.geojson";

async function getLevel1() {
        const response = await fetch(lvl1URL);
        LVL1 = await response.json();
        return LVL1;
}

async function getLevel3() {
        const response = await fetch(lvl3URL);
        LVL3 = await response.json(); 
        return LVL3;
}


function getColor(value) {
    return value > 150 ? '#006905' ://Dark green
           value > 120  ? '#15ff00' ://Light green
           value > 90  ? '##ffe600' ://Yellow
           value > 60  ? '#ff8800' ://Orange
           value > 30   ? '#f70000' ://Light red
           value > 0   ? '#820000' ://Dark red
                         '#000000';//Black
}
// Style function
function polygonStyle(feature) {
    return {
        fillColor: getColor(feature.id),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
}

function onEachFeature(feature, layer){
  if (feature.properties) {
    let countyName = feature.properties.ITL121NM || feature.properties.ITL325NM || "Unknown Region";
    let long = feature.properties.LONG || "No longitude";
    let lat = feature.properties.LAT || "No latitude"
    layer.bindPopup("County: " + countyName + "<br>Longitude: " + long + "<br>Latitude: " + lat);
  }
}