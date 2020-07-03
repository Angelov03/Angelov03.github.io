const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('categoryId'); //categoryId


const myParamId = urlParams.get('categoryId'); //



let arrayOfObject = [
    
    { Id : "001", Name : "AZOT", Images : [{url:"100090064_1563269070498025_79557010663669760_o.jpg"}]},
    { Id : "002", Name : "Krusevo" },
    { Id : "003", Name : "Pitijada" },
    { Id : "004", Name : "Vrsnik" },
    { Id : "005", Name : "Galicia" },
    { Id : "006", Name:  "Rudnik" },
]

let currentPageItems = arrayOfObject.find(x => x.Id === myParam);


if(currentPageItems !== undefined)
document.getElementById('currentId').innerHTML = currentPageItems.Name;


let currentPageItemsId = arrayOfObject.find(x => x.Id === myParamId);


if(currentPageItemsId !== undefined)
document.getElementById('currentCategoryId').innerText = currentPageItemsId.Name + " " + currentPageItemsId.Id;

for (const key in arrayOfObject.Images) {
	if (object.hasOwnProperty(key)){
		const element = object [key];
	}
}