fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        addUsedCarData(data);
        addNewCarData(data);
    })
    .catch(function (err) {
        console.log('error:' + err);
    })

function addUsedCarData(data) {
    for (let car in data.usedCars) {
        var image = document.getElementById('used_img' + (parseInt(car) + 1));
        image.src = "images/" + data.usedCars[car].image_fileName;

        var heading = document.getElementById('used_heading' + (parseInt(car) + 1));
        heading.innerHTML = data.usedCars[car].year + ' ' + data.usedCars[car].make + ' ' + data.usedCars[car].model;
        
        var desc = document.getElementById('used_description' + (parseInt(car) + 1));
        desc.innerHTML = `<strong>Miles:</strong> ${data.usedCars[car].miles} <br>
                          <strong>Color:</strong> ${data.usedCars[car].color} <br>
                          <strong>Type:</strong> ${data.usedCars[car].type} <br>
                          <strong>Price:</strong> <br>`
        var price = document.getElementById('used_price' + (parseInt(car) + 1));
        price.innerHTML = data.usedCars[car].price;
    }
}

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






