let bagItems;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsPage();
    displayBagItemCount();
}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagItemCount();
}

function displayBagItemCount() {
    let bagItemCount = document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCount.style.visibility = 'visible';
        bagItemCount.innerText = bagItems.length; 
    }
    else{
        bagItemCount.style.visibility = 'hidden';
    }
}

function displayItemsPage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml +=`
        <div class="single-item">
            <img class="item-image" src= ${item.itemImage} alt="prod-image">
                <div class="rating">
                ${item.rating.stars}⭐|${item.rating.review} 
            </div>
            <div class="company-name">${item.companyName}</div>
            <div class="item-desc">${item.itemName}</div>
            <div class="price">
                <span class="current-price">Rs ${item.currentPrice}</span>
                <span class="original-price">Rs ${item.originalPrice}</span>
                <span class="discount">(${item.discount}% OFF)</span>
            </div>
            <button class="add-btn" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
        
    });

    itemsContainerElement.innerHTML = innerHtml;
}


