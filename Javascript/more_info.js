/*Create helper functions*/
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

currentLocation = window.location.href;
console.log(currentLocation);
var searchString = currentLocation.split("?");
var city = searchString[1];
let date = searchString[2];
var time = searchString[3];

let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "/" + date + "T" + time + "/?unitGroup=uk&key=5KP9KEBYVW933PV52J78QTRGX&include=current";
console.log(url);
const moreInfoContainer = document.getElementById("moreInfo");
fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data);
        var weather = data.days;
        console.log(weather)
        return weather.map(function (wether) {
            var h1 = createNode("h1");
            var p = createNode("p");
            var p1 = createNode("p");
            var p2 = createNode("p");
            var p3 = createNode("p");
            var p4 = createNode("p");
            var p5 = createNode("p");
            var text = createNode("p");
            var text1 = createNode("p");
            var text2 = createNode("p");
            var text3 = createNode("p");
            var text4 = createNode("p");
            var text5 = createNode("p");
            var column = createNode("div");
            var a = createNode("a");


            // make the date in a nicer more readable format
            let finalDate = date.split("-").reverse().toString().replaceAll(",","/");
            
            //remove final zeros from the time to make it look nicer
            let finalTime = time.split(":");;
            finalTime.pop();
            finalTime = finalTime.toString().replaceAll(",",":")
            console.log(finalTime);

            column.classList.add("col")
            column.classList.add("mt-5");
            a.classList.add("btn");
            a.classList.add("buttonStyle");
            a.classList.add("btn-primary:hover");
            h1.innerHTML = data.resolvedAddress;
            text4.innerHTML = "Date and time: ";
            p4.innerHTML = text4.innerHTML.bold() + finalDate + " " + finalTime;
            text.innerHTML = "Description: ";
            p.innerHTML = text.innerHTML.bold() + wether.description;
            text1.innerHTML = "Sunrise: "
            p1.innerHTML = text1.innerHTML.bold() + wether.sunrise;
            text2.innerHTML = "Sunset: ";
            p2.innerHTML = text2.innerHTML.bold() + wether.sunset;
            text3.innerHTML = "Temperature: "
            p3.innerHTML = text3.innerHTML.bold() + wether.temp + "°C";
            text4.innerHTML = "Wind Speed: "
            p4.innerHTML = text4.innerHTML.bold() + wether.windspeed + "mph";
            text5.innerHTML = "Precipitation : "
            p5.innerHTML = text5.innerHTML.bold() + wether.precip + "mm";
            a.innerHTML = "Back";
            a.href = "../index.html";

            append(column, h1);
            append(column, p4);
            append(column, p);
            append(column, p1);
            append(column, p2);
            append(column, p3);
            append(column, p4);
            append(column, p5);
            append(column, a);
            append(moreInfoContainer, column);
        })


    })

    .catch(function (error) {
        console.log(error)
    });
