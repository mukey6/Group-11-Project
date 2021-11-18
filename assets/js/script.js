// b49c94e39bb5414b2d07ad05bd3ec5f2	
var searchButton = document.querySelector("#search-btn")
var searchInput = document.querySelector("#search-input")
var result = document.querySelector("#result")


function searchRecipe(){
    var apir = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=a2a764d9&app_key=b49c94e39bb5414b2d07ad05bd3ec5f2"
    console.log(apir)
    
    fetch(apir).then(function(response){
        if (response.ok){
            return response.json()
        } 
    })
    .then(function(data){
        console.log("1st data ", data)
        
    })
    
    var imageApi = "https://api.unsplash.com/search/photos?page=1&query=chicken&client_id=RUQuxPjGR6Ilkox7XXVJeDgtrx5S3OXASTUxQRUKq3w"
    console.log(imageApi)
    fetch(imageApi).then(function(response){
        if(response.ok){
            return response.json()
        }
    })
    .then(function(data){
        console.log('2nd data', data);

    })
}

// RUQuxPjGR6Ilkox7XXVJeDgtrx5S3OXASTUxQRUKq3w
// 



searchButton.addEventListener("click",searchRecipe )
