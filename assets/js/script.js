// b49c94e39bb5414b2d07ad05bd3ec5f2	
var apir = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=a2a764d9&app_key=b49c94e39bb5414b2d07ad05bd3ec5f2"
console.log(apir)

fetch(apir).then(function(response){
    if (response.ok){
        return response.json()
    }
})


// RUQuxPjGR6Ilkox7XXVJeDgtrx5S3OXASTUxQRUKq3w
// https://api.unsplash.com/search/photos?page=1&query=office&client_id=RUQuxPjGR6Ilkox7XXVJeDgtrx5S3OXASTUxQRUKq3w
var imageApi = ""