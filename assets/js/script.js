
var formCls= $(".form-class");
var searchResCurrCity= $(".curResCity");
var searchResCurrTemp= $(".curResTemp");
var searchResCurrHum= $(".curResHum");
var searchResCurrWind= $(".curResWind");

$(".day-1, .day-2, .day-3, .day-4, .day-5").css("display","none");
// var temp1= document.getElementById("temp-1");
var time= dayjs();

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        
    
    }
   
    for(var i=0; i < values.length; i++){
        $(".prev-list").append('<li class="prev-li"><a class="btn btn-primary previous" id= '+values[i]+' href="#" role="button">'+values[i] +'</a></li>');
    }
}


function displayPreviousSearch(id){
    var preId= id;
    var type= 2;
    callApi(preId,type);
}

function callApi(searchVal,type){
    console.log(type);
    var api= "https://api.openweathermap.org/geo/1.0/direct?q="+searchVal+"&limit=5&appid=d48c2b18251a8d208785210a66f352a4&units=metric";
    fetch(api)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // console.log(data);
            var apiCity= data[0].name;
            var apiState= data[0].state;
            var apiLat= data[0].lat;
            var apiLon= data[0].lon;
            var wetherDetails= "https://api.openweathermap.org/data/2.5/weather?lat="+apiLat+"&lon="+apiLon+"&appid=d48c2b18251a8d208785210a66f352a4&units=metric";
                fetch(wetherDetails)
                    .then(function(responseTwo){
                        return responseTwo.json();
                    })
                    .then(function(dataTwo){
                        console.log(dataTwo);
                        var currTemp= dataTwo.main.temp;
                        var currHum= dataTwo.main.humidity;
                        var currWind= dataTwo.wind.speed;
                        var icon= dataTwo.weather[0].icon;
                        searchResCurrCity.text(apiCity+" , "+apiState+"");
                        searchResCurrTemp.text(" Temp: "+currTemp+"'C");
                        searchResCurrHum.text("Humidity: "+currHum+" %")
                        searchResCurrWind.text("Wind speed: " +currWind+ " kph");
                        
                        var wetherDetailsFuture= "https://api.openweathermap.org/data/2.5/forecast?lat="+apiLat+"&lon="+apiLon+"&appid=d48c2b18251a8d208785210a66f352a4&units=metric";
                        fetch(wetherDetailsFuture)
                        .then(function(responseThree){
                        return responseThree.json();
                        })
                        .then(function(dataThree){
                        console.log(dataThree);
                        var day1D= dataThree.list[4].dt_txt;
                        var day1Date= day1D.split(" ");
                        var day2D= dataThree.list[12].dt_txt;
                        var day2Date= day2D.split(" ");
                        var day3D= dataThree.list[20].dt_txt;
                        var day3Date= day3D.split(" ");
                        var day4D= dataThree.list[28].dt_txt;
                        var day4Date= day4D.split(" ");
                        var day5D= dataThree.list[36].dt_txt;
                        var day5Date= day5D.split(" ");
                        
                        var day1Icon= dataThree.list[5].weather[0].icon;
                        var day1Icon1= day1Icon.replace("n","d");
                        var day1Temp= dataThree.list[4].main.temp;
                        var day1Hum= dataThree.list[4].main.humidity;
                        var day1Wind= dataThree.list[4].wind.speed;

                        var day2Icon= dataThree.list[13].weather[0].icon;
                        var day2Icon1= day2Icon.replace("n","d");
                        var day2Temp= dataThree.list[12].main.temp;
                        var day2Hum= dataThree.list[12].main.humidity;
                        var day2Wind= dataThree.list[12].wind.speed;

                        var day3Icon= dataThree.list[20].weather[0].icon;
                        var day3Icon1= day3Icon.replace("n","d");
                        var day3Temp= dataThree.list[20].main.temp;
                        var day3Hum= dataThree.list[20].main.humidity;
                        var day3Wind= dataThree.list[20].wind.speed;

                        var day4Icon= dataThree.list[28].weather[0].icon;
                        var day4Icon1= day4Icon.replace("n","d");
                        var day4Temp= dataThree.list[28].main.temp;
                        var day4Hum= dataThree.list[28].main.humidity;
                        var day4Wind= dataThree.list[28].wind.speed;

                        var day5Icon= dataThree.list[36].weather[0].icon;
                        var day5Icon1= day5Icon.replace("n","d");
                        var day5Temp= dataThree.list[36].main.temp;
                        var day5Hum= dataThree.list[36].main.humidity;
                        var day5Wind= dataThree.list[36].wind.speed;
                        
                        $(".curDate").text(" "+day1Date[0]);
                        $("#curIcon").attr("src","https://openweathermap.org/img/wn/"+day1Icon1+".png");
                        $("#icon-1").attr("src","https://openweathermap.org/img/wn/"+day1Icon1+".png");
                        $(".date-1").text(day1Date[0]);
                        $("#temp-1").text("Temp: " +day1Temp+" 'C");
                        $("#humidity-1").text("Humidity: "+day1Hum+"%");
                        $("#wind-1").text("Wind speed: "+day1Wind+" kph");

                        $(".date-2").text(day2Date[0]);
                        $("#icon-2").attr("src","https://openweathermap.org/img/wn/"+day2Icon1+".png");
                        $("#temp-2").text("Temp: " +day2Temp+" 'C");
                        $("#humidity-2").text("Humidity: "+day2Hum+"%");
                        $("#wind-2").text("Wind speed: "+day2Wind+" kph");

                        $(".date-3").text(day3Date[0]);
                        $("#icon-3").attr("src","https://openweathermap.org/img/wn/"+day3Icon1+".png");
                        $("#temp-3").text("Temp: " +day3Temp+" 'C");
                        $("#humidity-3").text("Humidity: "+day3Hum+"%");
                        $("#wind-3").text("Wind speed: "+day3Wind+" kph");

                        $(".date-4").text(day4Date[0]);
                        $("#icon-4").attr("src","https://openweathermap.org/img/wn/"+day4Icon1+".png");
                        $("#temp-4").text("Temp: " +day4Temp+" 'C");
                        $("#humidity-4").text("Humidity: "+day4Hum+"%");
                        $("#wind-4").text("Wind speed: "+day4Wind+" kph");

                        $(".date-5").text(day5Date[0]);
                        $("#icon-5").attr("src","https://openweathermap.org/img/wn/"+day5Icon1+".png");
                        $("#temp-5").text("Temp: " +day5Temp+" 'C");
                        $("#humidity-5").text("Humidity: "+day5Hum+"%");
                        $("#wind-5").text("Wind speed: "+day5Wind+" kph");
                        $(".day-1, .day-2, .day-3, .day-4, .day-5").css("display","flex");
                        })
                    })
                    var cloned= localStorage.getItem(apiState)
                    
                    localStorage.setItem(apiState,apiCity);
                    
                    
                    if(type == 1 && cloned === null){
                        $(".prev-list").append('<li style="margin-bottom: 2%"><a class="btn btn-primary '+apiCity+'" href="#" role="button" style="width: 99%;">'+apiCity +'</a></li>');
                    }
                    
        });
        
        
}

allStorage();

formCls.on("submit", function(event){
    event.preventDefault();
    var searchVal= $("#input-search").val();
    var type= 1
    callApi(searchVal,type);
    $("#input-search").val("");
    
})
$(".previous").click(function(){
    var currId= $(this).attr("id");
    // console.log(currId);
    displayPreviousSearch(currId);
})









