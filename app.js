const form = document.getElementById('productForm');
const ul = document.getElementById('productList');
const div = document.getElementById("local");
const allProducts = JSON.parse(localStorage.getItem('products')) || [];
console.log(allProducts);

function handleSubmit(event){
 event.preventDefault();
  
 let name = event.target.productName.value;
 let price = event.target.price.value;
 let quantity = event.target.quantity.value;

 const newProduct = {
    name : name,
    price : price,
    quantity : quantity
 }
 addToList(newProduct);
 form.reset();
}

function addToList(product){
     
    // save the new product TO the AllProducts array
    allProducts.push(product);

    localStorage.setItem('products', JSON.stringify(allProducts));
    // save the All products to the localstorage 


    const li = document.createElement('li');
    li.textContent = `${product.name} : ${product.price}$ - Quantity : ${product.quantity}`;
    ul.appendChild(li);
}

function displayAllProducts () {
    if(allProducts.length != 0 ){
        allProducts.forEach(item=>{
             const li = document.createElement('li');
             li.textContent = `${item.name} : ${item.price}$ - Quantity : ${item.quantity}`;
             ul.appendChild(li);
        })
    }else{
        const p = document.createElement('p');
        p.textContent = "Thers are no new products";
        div.appendChild(p);
    }
}
displayAllProducts();
form.addEventListener('submit', handleSubmit);




























// let arr = [
//     {
//         test: "test",
//         num : 2
//     },
//     {
//         test: "test",
//         num : 2
//     },
//     {
//         test: "test",
//         num : 2
//     }
// ]

// console.log(arr);
// console.log(JSON.stringify(arr));





function localStorageExample () {
   
    // localStorage.setItem(key,JSON.stringify(arr));
                     // students, arr   => should be string (JSON.stringify)
                
    //    localStorage.getItem(key) this will return a string 
            //   JSON.parse(localStorage.getItem(key))  this is a normal array     
  
            let trainees = [
                {
                    name:"Omar",
                    id : 123
                },
                {
                    name:"zaid",
                    id :145
                },
                {
                    name:"Ahmad",
                    id : 167
                }
            ]

            localStorage.setItem("trainess",JSON.stringify(trainees));
            let output = localStorage.getItem("trainess");
            console.log(output);
            let result = JSON.parse(output);
            console.log(result);


            result.forEach(val=>{
                let p = document.createElement("p");
                p.textContent = `name : ${val.name} , id: ${val.id}`
                div.appendChild(p);
            })
        }

        // localStorageExample();