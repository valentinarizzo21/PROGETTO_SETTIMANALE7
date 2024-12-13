const url = 'https://striveschool-api.herokuapp.com/api/product/';
let data;

async function callFetch() {
    try{
        let response = await fetch(url, {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZjc3OWQyMjA3MTAwMTVkZTJmM2UiLCJpYXQiOjE3MzQwODAzNzcsImV4cCI6MTczNTI4OTk3N30.hImE9tqQIQhZfVqO6KxIKNjvO4pVLUcMO03ML5VoDV4",
            },
          });
          data = await response.json();
    } catch(error){
        console.log(error);
    }
  
}

callFetch()