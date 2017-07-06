const apiURLSeattle = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=47.6762&lon=-122.3182&appid=ad57da1720ec07b47db8b59c86aa8c0f"

 
function getSeattle(){
  let request = new XMLHttpRequest()
 
  //talks to the API
  //request method, url, optional async flag
  request.open("GET", apiURLSeattle, true)
  
  //fires when the request is complete
  request.onload = function () {
    let weatherDiv = document.getElementById("Seattle")
    let response = JSON.parse(request.response)
    
    //to get the value of the key in the object
    console.log(response.temp)
    
    weatherDiv.innerHTML = response.temp
  
  }
  
  //fires if something is an error
  request.onerror = function(errObject){
    console.log("nice try")
    console.log(err)
  }
  
  const apiURLondon = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=-0.1278&appid=ad57da1720ec07b47db8b59c86aa8c0f"

 
function getLondon(){
  let request = new XMLHttpRequest()
 
  //talks to the API
  //request method, url, optional async flag
  request.open("GET", apiURLondon, true)
  
  //fires when the request is complete
  request.onload = function() {
    let weatherDiv = document.getElementById("London")
    let response = JSON.parse(request.response)
    //to get the value of the key in the object, need to use .variable
    console.log(response.temp)
    
    weatherDiv.innerHTML = response.temp
  
  }
  
  //fires if something is an error
  request.onerror = function(errObject){
    console.log("nice try")
    console.log(err)
  }
  

  //send the request
  request.send()
