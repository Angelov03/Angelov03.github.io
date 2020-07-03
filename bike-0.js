const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('categoryName'); //categoryId


const myParamId = urlParams.get('categoryId'); //


// mapa 8 i od levo 
// text 4 od desno

let arrayOfObject = [
    
    { Name : "AZOT MTB CHALLENGE",			
      Id : "001", 	
      Desription : "<span>AZOT MTB CHALLENGE</span> is a bisycle event that is organized by Veles Biking , the event is located in Bogomila that is 50 km away from Veles. The <span>EXTREME</span>  route is 50km with almost 2000m elevation , the <span>SMALL</span> route is 35km with approximately 1000m elevation. The route is moderate with 5 star for adventure , and a 5 star for effort. You can check out the coll photos that we made from there. ", 
  	  Images : [{url:"file:///C:/bojan/programi/web%20dev/Bike-site/Azot.jpg"}], 
  	  Map : escape_HTML('<iframe src="https://ridewithgps.com/embeds?type=route&id=28253826&sampleGraph=true" style="width: 1px; min-width: 100%; height: 700px; border: none;" scrolling="no"></iframe>'),
  	 },

    
    { Name : "Vrsnik", 		   				
      Id : "002", 	
      Desription : "<span>Vrsnik</span> is a hill in Veles with elevation of 400m and approximately 15km form center of the city. The hill is mosted climbed by local people , from up there have amazing view on the city , you can check out the coll photos that we made from there also you gone have a map from center to up there. Its a medium moderate with 3 star for effort.",
	  Images : [{url:"file:///C:/Users/Bojan/Downloads/106598836_274699906947226_503859370014992471_n.jpg"}], 
	  Map : escape_HTML('<iframe src="https://ridewithgps.com/embeds?type=trip&id=51847808&metricUnits=true&sampleGraph=true" style="width: 1px; min-width: 100%; height: 700px; border: none;" scrolling="no"></iframe>'),
	},	
    
    { Name : "Sv Ilija", 	           		
      Id : "003", 	
      Desription : "<span>Sv Ilija</span> is a hill in Veles with elevation of 586m and approximately 20km form center of the city. The hill is mosted climbed by local people , from up there have amazing view on the city , you can check out the coll photos that we made from there also you gone have a map from center to up there. Its a medium moderate with 5 star for effort. ",
      Images :[{url:"file:///C:/bojan/programi/web%20dev/Bike-site/Sv%20ilija.jpg"}],
      Map : escape_HTML('<iframe src="https://ridewithgps.com/embeds?type=trip&id=51848383&metricUnits=true&sampleGraph=true" style="width: 1px; min-width: 100%; height: 700px; border: none;" scrolling="no"></iframe>') },
    
    { Name : "Rudnik", 	           			
      Id : "004", 	
      Desription : "Some desc" },
]

let currentPageItems = arrayOfObject.find(x => x.Id === myParamId);



if(currentPageItems !== undefined)
document.getElementById('currentDesription').innerHTML = currentPageItems.Desription;


if(currentPageItems !== undefined)
document.getElementById('image1').src = currentPageItems.Images[0].url

if(currentPageItems !== undefined)
document.getElementById('currentMap').innerHTML = currentPageItems.Map;



let currentPageItemsId = arrayOfObject.find(x => x.Id === myParamId);


if(currentPageItemsId !== undefined)
document.getElementById('currentCategoryId').innerText = currentPageItemsId.Name;





function escape_HTML(html_str) {
  'use strict';

  return html_str.replace(/[&<>"]/g, function (tag) {
  var chars_to_replace = {
          '&': '&',
          '<': '<',
          '>': '>',
          '"': '"'
      };

  return chars_to_replace[tag] || tag;
  });
}
