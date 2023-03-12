fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        addNewCarData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })


function addNewCarData(data) {
    for (let car in data.newCars) {
        var image = document.getElementById('new_img' + (parseInt(car) + 1));
        image.src = "images/" + data.newCars[car].image_fileName;

        var heading = document.getElementById('new_heading' + (parseInt(car) + 1));
        heading.innerHTML = data.newCars[car].year + ' ' + data.newCars[car].make + ' ' + data.newCars[car].model;
        
        var desc = document.getElementById('new_description' + (parseInt(car) + 1));
        desc.innerHTML = `<strong>Miles:</strong> ${data.newCars[car].miles} <br>
                          <strong>Color:</strong> ${data.newCars[car].color} <br>
                          <strong>Type:</strong> ${data.newCars[car].type} <br>
                          <strong>Price:</strong> <br>`
        var price = document.getElementById('new_price' + (parseInt(car) + 1));
        price.innerHTML = data.newCars[car].price;
    }
}






