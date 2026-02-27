let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id, name, price) {
    let product = cart.find(item => item.id === id);

    if(product){
        product.quantity++;
    } else {
        cart.push({
            id,
            name,
            price,
            quantity:1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Đã thêm vào giỏ hàng!");
}

function loadCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let table = document.getElementById("cart-items");
    let total = 0;

    cart.forEach(item=>{
        let row = `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()}đ</td>
                <td>${item.quantity}</td>
                <td>${(item.price * item.quantity).toLocaleString()}đ</td>
            </tr>
        `;
        table.innerHTML += row;
        total += item.price * item.quantity;
    });

    document.getElementById("total").innerText = total.toLocaleString()+"đ";
}