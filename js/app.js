document.querySelector('#generate-names').addEventListener('submit', loadNames);



// Execute the function to query the API
function loadNames(e) {
    e.preventDefault();


    // Read the values from the form and create the variables
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    // Build the URL
    let url = 'https://randomuser.me/api/?';
    //Read the origin and append to the url
    if(origin !== ''){
        url += `nat=${origin}&`;
    }
     //Read the genre and append to the url
     if(genre !== ''){
        url += `gender=${genre}&`;
    }
    //Read the amount and append to the url
    if(amount !== ''){
        url += `results=${amount}`;
    }
    
   //Get API
   fetch(url)
   .then(res => res.json())
   .then(data => {
        // console.log(data);

        let names = data.results;
        
        // Insert into the HTML
        let html = "<h2><center>Generated Names</center></h2>"
        html += '<ul class="list">';
        names.forEach(function(name) {
            html += `
                <li>${name.name.first}</li>
            `;     
        })
        html += '</ul>';

        document.querySelector('#result').innerHTML = html;
   });
           
}  