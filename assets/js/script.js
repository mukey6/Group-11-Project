// b49c94e39bb5414b2d07ad05bd3ec5f2	
var searchButton = document.querySelector("#search-btn")
var result = document.querySelector("#result")
let resultContainer = document.getElementById("result-container")
let imageOne = document.getElementById("image-1")
let imageTwo = document.getElementById("image-2")

function searchRecipe(){
let searchInput=$("#search-input").val()  
  console.log(searchInput)


    var apir = "https://api.edamam.com/api/recipes/v2?type=public&q="+searchInput+"&app_id=a2a764d9&app_key=b49c94e39bb5414b2d07ad05bd3ec5f2"
    console.log(apir)
    
    fetch(apir).then(function(response){
        if (response.ok){
            return response.json()
        } 
    })
    .then(function(data){
        console.log("1st data ", data)
        searchedResult(data)
    })
    
    var imageApi = "https://api.unsplash.com/search/photos?page=1&query="+searchInput+"&client_id=RUQuxPjGR6Ilkox7XXVJeDgtrx5S3OXASTUxQRUKq3w"
    console.log(imageApi)
    fetch(imageApi).then(function(response){
        if(response.ok){
            return response.json()
        }
    })
    .then(function(data2){
        console.log('2nd data', data2);
        searchedImages(data2)

    })
}

function searchedResult(data){
    resultContainer.innerHTML=""
let title = document.createElement("h4")
title.innerText = data.hits[0].recipe.label
resultContainer.appendChild(title)

let ingredientLines = document.createElement("ul")
let ingredientList = document.createElement("li")
ingredientLines.appendChild(ingredientList)
ingredientList.innerText=data.hits[0].recipe.ingredientLines
resultContainer.appendChild(ingredientLines)
}

function searchedImages(data2){

imageOne.innerText = data2.results[0].urls.small
// ("<img src'" + data2.results[0].urls.small + "'>")

}

// ("<img src='" + weatherIcon  + "'>")
searchButton.addEventListener("click",searchRecipe )

// RUQuxPjGR6Ilkox7XXVJeDgtrx5S3OXASTUxQRUKq3w
// 