async function fetching(){

    console.log("Fetching");
    //---getElementById()--
    //Returns the element that has the ID attribute with the specified value
   
    
    const inp = document.getElementById('inp').value;
    console.log(inp);
    console.log("https://fakestoreapi.com/products/"+inp);
    const { data } = await axios.get("https://fakestoreapi.com/products/"+inp);

    
    console.log(data);
    const s=document.createElement("P");
    s.innerHTML = data.id;
    document.body.appendChild(s);


    console.log(data.image)
    const img = document.createElement("img");
    img.src = data.image;
    img.width = 200
    document.body.appendChild(img);
    
    console.log(data)
    const desc =document.createElement("p");
    desc.innerText = data.description;
    document.body.appendChild(desc);
    //description=data.description;

    console.log(data.category)
    const cat=document.createElement("p");
    cat.innerText = data.category;
    document.body.appendChild(cat);

    //console.log(data.
}





