
'use strict';

/* ══════════════════════════
   DATA
══════════════════════════ */
const PRODUCTS = [
  {id:1,name:'Graduated Link Necklace Gold',category:'Necklaces',price:31580,old:38000,rating:4.5,reviews:38,sku:'NKL001',stock:12,
   imgs:['https://www.figma.com/api/mcp/asset/19c628d9-3a79-479a-bdee-b76444263b91','https://www.figma.com/api/mcp/asset/ba018cf1-a389-44b0-b556-0ee8030958eb','https://www.figma.com/api/mcp/asset/a531065f-0420-441a-8da5-112b3074cfd0']},
  {id:2,name:'Pearl Earring Set',category:'Earrings',price:12990,old:16000,rating:4.7,reviews:52,sku:'ERR002',stock:8,
   imgs:['https://www.figma.com/api/mcp/asset/d69d0367-9180-4e0f-8956-7879456eb1ec','https://www.figma.com/api/mcp/asset/52a7a550-6879-44f8-be16-b858e53a83c0','https://www.figma.com/api/mcp/asset/889566cd-503d-45e1-a5e8-306bffee5023']},
  {id:3,name:'Diamond Cut Gold Ring',category:'Rings',price:22500,old:28000,rating:4.4,reviews:29,sku:'RNG003',stock:15,
   imgs:['https://www.figma.com/api/mcp/asset/dc2e72c8-6776-4509-a107-9ff890d48c18','https://www.figma.com/api/mcp/asset/133a0bcc-96e0-4627-8657-5d7454d8651c','https://www.figma.com/api/mcp/asset/ae83a404-7cf4-4589-aa66-10cdf1c5b471']},
  {id:4,name:'Gold Bangle Set of 4',category:'Bangles',price:18750,old:23000,rating:4.6,reviews:61,sku:'BNG004',stock:20,
   imgs:['https://www.figma.com/api/mcp/asset/b655356d-2eae-4ca2-90f2-08f9a6b8643f','https://www.figma.com/api/mcp/asset/8be7de9c-ec46-40fd-a887-425d73aca49d','https://www.figma.com/api/mcp/asset/9c06bd41-fc99-412f-adfc-7075ddac04e3']},
  {id:5,name:'Silver Bracelet Charm',category:'Bracelets',price:8999,old:12000,rating:4.3,reviews:18,sku:'BRC005',stock:6,
   imgs:['https://www.figma.com/api/mcp/asset/80a4b0c9-019c-42fa-a214-77248875de33','https://www.figma.com/api/mcp/asset/1885f3ad-7e7d-4ddc-93cd-87131ba720df','https://www.figma.com/api/mcp/asset/40c3c0c1-a166-4a08-825a-777e92ff8285']},
  {id:6,name:'Kundan Choker Set',category:'Necklaces',price:45000,old:56000,rating:4.8,reviews:44,sku:'NKL006',stock:3,
   imgs:['https://www.figma.com/api/mcp/asset/09c1bfd4-a025-46d8-90ee-ccc0aa1e54c3','https://www.figma.com/api/mcp/asset/ce5e1ff2-ad37-4d03-b359-c2fab887e0c3','https://www.figma.com/api/mcp/asset/ec914919-c9a3-4375-a839-87136df050ef']},
  {id:7,name:'Temple Jewellery Earrings',category:'Earrings',price:9800,old:13000,rating:4.5,reviews:33,sku:'ERR007',stock:10,
   imgs:['https://www.figma.com/api/mcp/asset/58849020-4d62-4aae-9bf2-582fa8df3926','https://www.figma.com/api/mcp/asset/ba018cf1-a389-44b0-b556-0ee8030958eb','https://www.figma.com/api/mcp/asset/a531065f-0420-441a-8da5-112b3074cfd0']},
  {id:8,name:'Rose Gold Finger Ring',category:'Rings',price:14500,old:18000,rating:4.2,reviews:22,sku:'RNG008',stock:7,
   imgs:['https://www.figma.com/api/mcp/asset/4f8886ee-6c92-43ff-9030-241e5d1a56ff','https://www.figma.com/api/mcp/asset/52a7a550-6879-44f8-be16-b858e53a83c0','https://www.figma.com/api/mcp/asset/ae83a404-7cf4-4589-aa66-10cdf1c5b471']},
  {id:9,name:'Antique Silver Necklace',category:'Necklaces',price:5499,old:7000,rating:4.6,reviews:17,sku:'NKL009',stock:14,
   imgs:['https://www.figma.com/api/mcp/asset/4e6d5073-5d7d-4302-9a84-9db15b8e29fb','https://www.figma.com/api/mcp/asset/ba018cf1-a389-44b0-b556-0ee8030958eb','https://www.figma.com/api/mcp/asset/133a0bcc-96e0-4627-8657-5d7454d8651c']},
  {id:10,name:'Oxidised Jhumka Earrings',category:'Earrings',price:1199,old:1800,rating:4.4,reviews:91,sku:'ERR010',stock:25,
   imgs:['https://www.figma.com/api/mcp/asset/148dae58-2397-4de1-b314-b5e8fcb238a7','https://www.figma.com/api/mcp/asset/52a7a550-6879-44f8-be16-b858e53a83c0','https://www.figma.com/api/mcp/asset/889566cd-503d-45e1-a5e8-306bffee5023']},
  {id:11,name:'Emerald Stone Ring',category:'Rings',price:1100,old:1600,rating:4.3,reviews:14,sku:'RNG011',stock:9,
   imgs:['https://www.figma.com/api/mcp/asset/93362fd0-28e8-4f0d-a4a9-20836e29d771','https://www.figma.com/api/mcp/asset/133a0bcc-96e0-4627-8657-5d7454d8651c','https://www.figma.com/api/mcp/asset/ae83a404-7cf4-4589-aa66-10cdf1c5b471']},
  {id:12,name:'Classic Gold Watch',category:'Watches',price:3200,old:4200,rating:4.7,reviews:39,sku:'WTC012',stock:11,
   imgs:['https://www.figma.com/api/mcp/asset/43386190-0a27-4319-9db3-670d8999d159','https://www.figma.com/api/mcp/asset/ba018cf1-a389-44b0-b556-0ee8030958eb','https://www.figma.com/api/mcp/asset/52a7a550-6879-44f8-be16-b858e53a83c0']},
];

/* ── STATE ── */
let cart = [];
let wishlist = new Set();
let currentPage = 'home';
let listingCategory = 'All';
let listingPriceMax = 60000;
let listingCatFilter = 'All';
let listingRatingFilter = 0;
let listingPage = 8;
let detailProduct = null;
let detailQty = 1;
let detailSelectedColor = 0;
let detailSelectedSize = 0;
let discount = 0;
let toastTimer = null;

/* ── HELPERS ── */
const fmt = n => '₹' + Number(n).toLocaleString('en-IN');
const disc = (p,o) => Math.round(((o-p)/o)*100);
const stars = r => { let s=''; for(let i=1;i<=5;i++) s+=(i<=Math.floor(r)?'★':'☆'); return s; };

/* ══════════════════════════
   NAVIGATION
══════════════════════════ */
function navigate(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  currentPage = page;
  window.scrollTo({top:0,behavior:'smooth'});
  if(page==='cart') renderCart();
  if(page==='checkout') renderCheckout();
}

function goListing(cat){
  listingCategory = cat;
  listingCatFilter = cat;
  listingPriceMax = 60000;
  listingRatingFilter = 0;
  listingPage = 8;
  document.getElementById('listing-title').textContent = cat==='All'?'All Jewellery':cat;
  document.getElementById('listing-breadcrumb').textContent = cat==='All'?'All':cat;
  document.getElementById('price-slider').value = 60000;
  document.getElementById('price-max-label').textContent = '₹60,000';
  buildFilterUI();
  renderListing();
  navigate('listing');
}

function goListingPrice(max){
  listingCategory = 'All'; listingCatFilter = 'All'; listingPriceMax = max; listingPage = 8;
  document.getElementById('listing-title').textContent = 'Under '+fmt(max);
  document.getElementById('listing-breadcrumb').textContent = 'Under '+fmt(max);
  document.getElementById('price-slider').value = max;
  document.getElementById('price-max-label').textContent = fmt(max);
  buildFilterUI();
  renderListing();
  navigate('listing');
}

function goDetail(id){
  detailProduct = PRODUCTS.find(p=>p.id===id);
  if(!detailProduct) return;
  detailQty = 1; detailSelectedColor = 0; detailSelectedSize = 0;
  renderDetail();
  navigate('detail');
}

/* ══════════════════════════
   HOME PRODUCTS
══════════════════════════ */
function renderHomeProducts(){
  const g = document.getElementById('home-prod-grid');
  g.innerHTML = PRODUCTS.slice(0,8).map((p,i)=>productCard(p,i)).join('');
}

/* ══════════════════════════
   PRODUCT CARD HTML
══════════════════════════ */
function productCard(p, i){
  const inCart = cart.find(c=>c.id===p.id);
  const inWish = wishlist.has(p.id);
  return `<div class="prod-card" style="animation-delay:${i*.05}s">
    <div class="prod-img-wrap" onclick="goDetail(${p.id})" style="cursor:pointer">
      <img src="${p.imgs[0]}" alt="${p.name}" loading="lazy"/>
      <button class="wish-btn ${inWish?'on':''}" onclick="event.stopPropagation();toggleWish(${p.id})" title="Wishlist">
        <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>
    <div class="prod-info">
      <div class="price-row"><span class="pnow">${fmt(p.price)}</span><span class="pold">${fmt(p.old)}</span><span class="pdisc">${disc(p.price,p.old)}% off</span></div>
      <div class="pname" style="cursor:pointer" onclick="goDetail(${p.id})">${p.name}</div>
      <div class="rat-row"><span class="stars">${stars(p.rating)}</span><span class="rval">${p.rating}</span><span class="rcnt">(${p.reviews})</span></div>
      <button class="add-btn ${inCart?'added':'filled'}" onclick="${inCart?`addToCart(${p.id})`:`openAccPanel(${p.id})`}">${inCart?'✓ Added':'Add to Cart'}</button>
    </div>
  </div>`;
}

/* ══════════════════════════
   LISTING
══════════════════════════ */
function buildFilterUI(){
  const cats = ['All','Necklaces','Earrings','Rings','Bangles','Bracelets','Watches'];
  const catEl = document.getElementById('filter-cats');
  catEl.innerHTML = cats.map(c=>`<button class="fs-chip ${listingCatFilter===c?'on':''}" onclick="setFilterCat('${c}')">${c}</button>`).join('');
  const ratEl = document.getElementById('filter-ratings');
  ratEl.innerHTML = [4,3,2].map(r=>`<button class="fs-chip ${listingRatingFilter===r?'on':''}" onclick="setFilterRating(${r})">${r}★ & above</button>`).join('');
}

function setFilterCat(c){ listingCatFilter=c; buildFilterUI(); renderListing(); }
function setFilterRating(r){ listingRatingFilter = listingRatingFilter===r?0:r; buildFilterUI(); renderListing(); }

function getFilteredProducts(){
  const maxP = parseInt(document.getElementById('price-slider')?.value||60000);
  let list = PRODUCTS;
  if(listingCatFilter!=='All') list = list.filter(p=>p.category===listingCatFilter);
  list = list.filter(p=>p.price<=maxP);
  if(listingRatingFilter>0) list = list.filter(p=>p.rating>=listingRatingFilter);
  const sort = document.getElementById('sort-select')?.value||'default';
  if(sort==='priceLow') list = [...list].sort((a,b)=>a.price-b.price);
  else if(sort==='priceHigh') list = [...list].sort((a,b)=>b.price-a.price);
  else if(sort==='rating') list = [...list].sort((a,b)=>b.rating-a.rating);
  return list;
}

function renderListing(){
  const list = getFilteredProducts();
  const show = list.slice(0,listingPage);
  const g = document.getElementById('listing-grid');
  document.getElementById('listing-count').textContent = list.length+' Products';
  if(!show.length){ g.innerHTML='<p style="grid-column:1/-1;text-align:center;padding:60px;color:var(--mid);font-size:18px">No products found.</p>'; return; }
  g.innerHTML = show.map((p,i)=>productCard(p,i)).join('');
  document.getElementById('load-more-btn').style.display = list.length>listingPage?'inline-flex':'none';
}

function loadMoreListing(){ listingPage+=8; renderListing(); }

function toggleFilters(){
  const sb = document.getElementById('filter-sidebar');
  const ov = document.getElementById('filter-overlay');
  const open = sb.classList.toggle('open');
  if(open) ov.classList.add('on'); else ov.classList.remove('on');
  document.body.style.overflow = open?'hidden':'';
}

/* ══════════════════════════
   PRODUCT DETAIL
══════════════════════════ */
function renderDetail(){
  const p = detailProduct;
  if(!p) return;
  // breadcrumb
  document.getElementById('detail-breadcrumb').innerHTML=`<span onclick="navigate('home')">Home</span><span class="sep">›</span><span onclick="goListing('${p.category}')" style="cursor:pointer;color:#222">${p.category}</span><span class="sep">›</span><span style="color:var(--mid)">${p.name}</span>`;
  // title, sku, price
  document.getElementById('pd-title').textContent = p.name;
  document.getElementById('pd-sku').textContent = p.sku;
  document.getElementById('pd-pnow').textContent = fmt(p.price);
  document.getElementById('pd-pold').textContent = fmt(p.old);
  document.getElementById('pd-rating').innerHTML = `<span class="stars" style="font-size:16px">${stars(p.rating)}</span><span style="font-size:15px;font-weight:700;color:var(--gold);font-family:var(--sans)">${p.rating}</span><span style="font-size:13px;color:var(--mid);font-family:var(--sans)">(${p.reviews} reviews)</span>`;
  document.getElementById('pd-stock').textContent = p.stock <= 5 ? `Low stock: only ${p.stock} left!` : '';
  document.getElementById('detail-qty').textContent = detailQty;
  // main image
  document.getElementById('pd-main-img').src = p.imgs[detailSelectedColor]||p.imgs[0];
  // thumbnails
  document.getElementById('pd-thumbs').innerHTML = p.imgs.map((img,i)=>`<img class="pd-thumb ${i===detailSelectedColor?'active':''}" src="${img}" alt="" onclick="selectThumb(${i})"/>`).join('');
  // colors
  const colorNames = ['Gold','Silver','Rose Gold'];
  document.getElementById('pd-colors').innerHTML = p.imgs.map((img,i)=>`<div class="color-opt ${i===detailSelectedColor?'active':''}" onclick="selectColor(${i})"><img src="${img}" alt=""/><p>${colorNames[i]||'Variant'}</p></div>`).join('');
  // sizes
  const sizes = ['10 mm','15 mm','20 mm'];
  document.getElementById('pd-sizes').innerHTML = sizes.map((s,i)=>`<button class="size-opt ${i===detailSelectedSize?'active':''}" onclick="selectSize(${i})">${s}</button>`).join('');
  // also like
  const similar = PRODUCTS.filter(x=>x.id!==p.id&&x.category===p.category).slice(0,4);
  document.getElementById('also-like-grid').innerHTML = similar.map((x,i)=>productCard(x,i)).join('');
}

function selectThumb(i){ detailSelectedColor=i; renderDetail(); }
function selectColor(i){ detailSelectedColor=i; renderDetail(); }
function selectSize(i){ detailSelectedSize=i; renderDetail(); }
function changeDetailQty(d){ detailQty=Math.max(1,Math.min(detailProduct.stock||99,detailQty+d)); document.getElementById('detail-qty').textContent=detailQty; }

function detailAddToCart(){
  if(!detailProduct) return;
  addToCartById(detailProduct.id, detailQty);
  showToast(detailProduct.name+' added to cart 🛍️');
}

function detailBuyNow(){
  if(!detailProduct) return;
  addToCartById(detailProduct.id, detailQty);
  navigate('cart');
}

/* ══════════════════════════
   CART
══════════════════════════ */
function addToCart(id){ addToCartById(id,1); }

function addToCartById(id,qty=1){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  const ex = cart.find(c=>c.id===id);
  if(ex) ex.qty+=qty; else cart.push({...p,qty});
  updateBadge();
  renderHomeProducts();
  renderListing();
  showToast(p.name+' added to cart 🛍️');
}

function addComboCart(cid,name,price,img){
  const ex = cart.find(c=>c.id===cid);
  if(ex) ex.qty++; else cart.push({id:cid,name,price,old:price,imgs:[img],qty:1,category:'Combo'});
  updateBadge();
  showToast(name+' added to cart 🛍️');
}

function changeCartQty(id,d){
  const item = cart.find(c=>String(c.id)===String(id));
  if(!item) return;
  item.qty+=d;
  if(item.qty<=0) cart=cart.filter(c=>String(c.id)!==String(id));
  renderCart(); renderHomeProducts(); renderListing();
}

function removeCartItem(id){
  cart=cart.filter(c=>String(c.id)!==String(id));
  renderCart(); renderHomeProducts(); renderListing(); showToast('Item removed');
}

function updateBadge(){
  const c = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById('cart-badge').textContent=c;
}

function renderCart(){
  const col = document.getElementById('cart-items-col');
  const sub = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const total = Math.max(0,sub-discount);
  document.getElementById('cart-sub').textContent=fmt(sub);
  document.getElementById('cart-ship').textContent=sub>=1499?'FREE':fmt(99);
  document.getElementById('cart-disc').textContent=discount?'-'+fmt(discount):'₹0';
  document.getElementById('cart-total').textContent=fmt(total+(sub>=1499?0:99));

  if(!cart.length){
    col.innerHTML=`<div class="cart-empty-state"><svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg><h2>Your cart is empty</h2><p>Looks like you haven't added anything yet.</p><button class="btn btn-black" onclick="navigate('home')">Start Shopping</button></div>`;
    return;
  }
  col.innerHTML = cart.map(item=>`<div class="cart-row">
    <img src="${item.imgs[0]}" alt="${item.name}" onclick="goDetail(${item.id})" style="cursor:pointer"/>
    <div class="cart-row-info">
      <h3>${item.name}</h3>
      <div class="ccat">${item.category}</div>
      <div class="cprice">${fmt(item.price)}</div>
      <div class="cmeta">${fmt(item.price*item.qty)} total</div>
      <div class="cart-qty">
        <button class="cqb" onclick="changeCartQty('${item.id}',-1)">−</button>
        <span class="cqv">${item.qty}</span>
        <button class="cqb" onclick="changeCartQty('${item.id}',1)">+</button>
        <button class="cremove" onclick="removeCartItem('${item.id}')">Remove</button>
      </div>
    </div>
  </div>`).join('');
}

function applyCoupon(){
  const code = document.getElementById('coupon-input').value.trim().toUpperCase();
  if(code==='VKFIRST'){ discount=Math.round(cart.reduce((s,i)=>s+i.price*i.qty,0)*.1); renderCart(); showToast('10% discount applied! ✓'); }
  else if(code==='VK200'){ discount=200; renderCart(); showToast('₹200 discount applied! ✓'); }
  else showToast('Invalid coupon code');
}

/* ══════════════════════════
   CHECKOUT
══════════════════════════ */
function renderCheckout(){
  const sub = cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('co-sub').textContent=fmt(sub);
  document.getElementById('co-total').textContent=fmt(Math.max(0,sub-discount)+(sub>=1499?0:99));
  const discEl = document.getElementById('co-disc-row');
  if(discEl) discEl.textContent = discount ? '-'+fmt(discount) : '₹0';
  document.getElementById('checkout-items').innerHTML=cart.map(item=>`
    <div class="co-item">
      <img src="${item.imgs[0]}" alt="${item.name}"/>
      <div class="co-item-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-qty">Qty: ${item.qty}</div>
      </div>
      <div class="co-item-price">${fmt(item.price*item.qty)}</div>
    </div>`).join('');
}

function selectPay(el){ document.querySelectorAll('.pay-opt').forEach(e=>{ e.classList.remove('on'); e.querySelector('input').checked=false; }); el.classList.add('on'); el.querySelector('input').checked=true; }

function placeOrder(){
  // Check if cart is empty
  if (cart.length === 0) {
    showToast('Your cart is empty');
    return;
  }

  // Validate required fields
  const requiredFields = [
    { id: 'co-fullname', name: 'Full Name' },
    { id: 'co-email', name: 'Email' },
    { id: 'co-phone', name: 'Phone Number' },
    { id: 'co-addr', name: 'Address' },
    { id: 'co-city', name: 'City' },
    { id: 'co-pin', name: 'Pincode' },
    { id: 'co-state', name: 'State' }
  ];

  for (const field of requiredFields) {
    const element = document.getElementById(field.id);
    if (!element.value.trim()) {
      showToast(`Please fill in ${field.name}`);
      element.focus();
      return;
    }
  }

  // Validate email format
  const email = document.getElementById('co-email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showToast('Please enter a valid email address');
    document.getElementById('co-email').focus();
    return;
  }

  // Validate phone number (basic validation for Indian numbers)
  const phone = document.getElementById('co-phone').value;
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
    showToast('Please enter a valid 10-digit phone number');
    document.getElementById('co-phone').focus();
    return;
  }

  // Collect form data
  const orderData = {
    orderId: 'VK' + Date.now().toString().slice(-6),
    customer: {
      fullName: document.getElementById('co-fullname').value.trim(),
      email: email,
      phone: phone
    },
    deliveryAddress: {
      address: document.getElementById('co-addr').value.trim(),
      city: document.getElementById('co-city').value.trim(),
      pincode: document.getElementById('co-pin').value.trim(),
      state: document.getElementById('co-state').value,
      country: 'India'
    },
    paymentMethod: document.querySelector('.pay-opt.on label').textContent,
    items: cart.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.qty,
      total: item.price * item.qty
    })),
    orderSummary: {
      subtotal: cart.reduce((sum, item) => sum + (item.price * item.qty), 0),
      discount: discount,
      shipping: 0,
      total: cart.reduce((sum, item) => sum + (item.price * item.qty), 0) - discount
    },
    orderDate: new Date().toISOString(),
    status: 'pending'
  };

  // Show loading state
  const placeOrderBtn = document.querySelector('.place-order-btn');
  const originalText = placeOrderBtn.textContent;
  placeOrderBtn.textContent = 'Placing Order...';
  placeOrderBtn.disabled = true;

  // Save to Firebase
  addDoc(collection(window.db, 'orders'), orderData)
    .then((docRef) => {
      console.log('Order saved with ID: ', docRef.id);
      // Clear cart and show success
      cart = [];
      discount = 0;
      updateBadge();
      document.getElementById('success-order-id').textContent = 'Order ID: #' + orderData.orderId;

      // Redirect to WhatsApp
      const whatsappMessage = `Hello! I've placed an order on VK Accessories.\n\nOrder ID: ${orderData.orderId}\nCustomer: ${orderData.customer.fullName}\nPhone: ${orderData.customer.phone}\nEmail: ${orderData.customer.email}\n\nTotal: ₹${orderData.orderSummary.total}\n\nPlease confirm my order.`;
      const whatsappUrl = `https://wa.me/918270534479?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      navigate('success');
    })
    .catch((error) => {
      console.error('Error saving order: ', error);
      showToast('Error placing order. Please try again.');
    })
    .finally(() => {
      // Reset button state
      placeOrderBtn.textContent = originalText;
      placeOrderBtn.disabled = false;
    });
}

/* ══════════════════════════
   WISHLIST
══════════════════════════ */
function toggleWish(id){
  if(wishlist.has(id)){ wishlist.delete(id); showToast('Removed from wishlist'); }
  else { wishlist.add(id); showToast('Added to wishlist ♡'); }
  renderHomeProducts(); renderListing();
}

/* ══════════════════════════
   SEARCH
══════════════════════════ */
function toggleSearch(){
  const b=document.getElementById('search-bar');
  const open=b.style.display!=='block';
  b.style.display=open?'block':'none';
  if(open) b.querySelector('input').focus();
}

function handleSearch(e){
  const q=e.target.value.trim().toLowerCase();
  if(!q) return;
  listingCatFilter='All'; listingRatingFilter=0; listingPage=20;
  const g=document.getElementById('listing-grid');
  document.getElementById('listing-title').textContent='Results for "'+e.target.value+'"';
  document.getElementById('listing-breadcrumb').textContent='Search';
  const res=PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q));
  document.getElementById('listing-count').textContent=res.length+' Results';
  g.innerHTML=res.length?res.map((p,i)=>productCard(p,i)).join(''):'<p style="grid-column:1/-1;text-align:center;padding:60px;color:var(--mid)">No results found.</p>';
  navigate('listing');
}

/* ══════════════════════════
   PINCODE
══════════════════════════ */
function openPincodeModal(){ document.getElementById('m-modal').classList.add('on'); document.getElementById('m-overlay').classList.add('on'); document.body.style.overflow='hidden'; setTimeout(()=>document.getElementById('pin-input').focus(),120); }
function closePincodeModal(){ document.getElementById('m-modal').classList.remove('on'); document.getElementById('m-overlay').classList.remove('on'); document.body.style.overflow=''; }
function savePincode(){ const v=document.getElementById('pin-input').value.trim(); if(!/^\d{6}$/.test(v)){ showToast('Enter a valid 6-digit pincode'); return; } document.getElementById('pin-label').textContent='Deliver to '+v; closePincodeModal(); showToast('Pincode updated to '+v+' ✓'); }

/* ══════════════════════════
   ACCORDION
══════════════════════════ */
function toggleAcc(head){ const body=head.nextElementSibling; const open=body.classList.toggle('open'); head.classList.toggle('open',open); }

/* ══════════════════════════
   TOAST
══════════════════════════ */
function showToast(msg){ const t=document.getElementById('toast'); if(toastTimer) clearTimeout(toastTimer); t.textContent=msg; t.classList.add('on'); toastTimer=setTimeout(()=>t.classList.remove('on'),3000); }

/* ══════════════════════════
   KEYBOARD
══════════════════════════ */
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closePincodeModal(); const sb=document.getElementById('filter-sidebar'); if(sb.classList.contains('open')) toggleFilters(); } });
document.getElementById('pin-input').addEventListener('keydown',e=>{ if(e.key==='Enter') savePincode(); });

/* ══════════════════════════
   ACCESSORIES SIDE PANEL
══════════════════════════ */
let accPanelProductId = null;
let accSelected = new Set(); // selected accessory IDs

// Matching accessories map by category
const ACC_MAP = {
  'Necklaces': [2,7,4,8],
  'Earrings':  [1,6,4,3],
  'Rings':     [2,4,5,10],
  'Bangles':   [1,7,5,8],
  'Bracelets': [2,7,3,10],
  'Watches':   [3,4,5,11],
  'default':   [2,4,7,10]
};

function openAccPanel(productId){
  accPanelProductId = productId;
  accSelected = new Set();
  const p = PRODUCTS.find(x=>x.id===productId);
  if(!p) return;

  // Fill header strip
  document.getElementById('acc-main-img').src = p.imgs[0];
  document.getElementById('acc-main-name').textContent = p.name;
  document.getElementById('acc-main-price').textContent = fmt(p.price);

  // Get matching accessories (products from related categories, excluding main product)
  const ids = ACC_MAP[p.category] || ACC_MAP['default'];
  const accessories = ids.map(id=>PRODUCTS.find(x=>x.id===id)).filter(x=>x&&x.id!==productId);

  // Render accessories list
  const body = document.getElementById('acc-panel-body');
  body.innerHTML = `
    <div class="acc-section-title">Matching Accessories</div>
    <div class="acc-list" id="acc-list">
      ${accessories.map(a=>`
        <div class="acc-item-row" id="acc-row-${a.id}" onclick="toggleAccItem(${a.id})">
          <img src="${a.imgs[0]}" alt="${a.name}"/>
          <div class="acc-item-info">
            <h4>${a.name}</h4>
            <div class="acc-cat">${a.category}</div>
            <div>
              <span class="acc-price">${fmt(a.price)}</span>
              <span class="acc-old">${fmt(a.old)}</span>
            </div>
          </div>
          <div class="acc-check">
            <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>`).join('')}
    </div>`;

  updateAccFooter(p);

  // Open panel
  document.getElementById('acc-panel').classList.add('open');
  document.getElementById('acc-overlay').classList.add('on');
  document.body.style.overflow='hidden';
}

function detailOpenAccPanel(){
  if(!detailProduct) return;
  openAccPanel(detailProduct.id);
}

function toggleAccItem(id){
  if(accSelected.has(id)) accSelected.delete(id);
  else accSelected.add(id);

  const row = document.getElementById('acc-row-'+id);
  if(row) row.classList.toggle('selected', accSelected.has(id));

  const mainP = PRODUCTS.find(x=>x.id===accPanelProductId);
  updateAccFooter(mainP);
}

function updateAccFooter(mainP){
  const selProducts = [...accSelected].map(id=>PRODUCTS.find(x=>x.id===id)).filter(Boolean);
  const accTotal = selProducts.reduce((s,x)=>s+x.price,0);
  const grandTotal = (mainP?mainP.price:0) + accTotal;

  const countTxt = document.getElementById('acc-count-txt');
  const grandEl = document.getElementById('acc-grand-total');

  if(accSelected.size===0){
    countTxt.textContent = 'No accessories selected';
  } else {
    countTxt.textContent = accSelected.size+' accessory'+(accSelected.size>1?'s':'')+' selected';
  }
  grandEl.textContent = fmt(grandTotal);
}

function accAddToCart(){
  const mainP = PRODUCTS.find(x=>x.id===accPanelProductId);
  if(mainP) addToCartById(mainP.id, 1);
  accSelected.forEach(id=>addToCartById(id, 1));
  closeAccPanel();
  showToast('Added to cart 🛍️');
  navigate('cart');
}

function accBuyNow(){
  const mainP = PRODUCTS.find(x=>x.id===accPanelProductId);
  if(mainP) addToCartById(mainP.id, 1);
  accSelected.forEach(id=>addToCartById(id, 1));
  closeAccPanel();
  navigate('cart');
}

function closeAccPanel(){
  document.getElementById('acc-panel').classList.remove('open');
  document.getElementById('acc-overlay').classList.remove('on');
  document.body.style.overflow='';
}

/* ══════════════════════════
   INIT
══════════════════════════ */
renderHomeProducts();
buildFilterUI();
renderListing();

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");
  
  menu.classList.toggle("open");
  toggle.classList.toggle("open");
  
  // Change icon between hamburger (☰) and close (✕)
  toggle.textContent = toggle.classList.contains("open") ? "✕" : "☰";
}

function closeMenu() {
  const menu = document.getElementById("mobileMenu");
  const toggle = document.querySelector(".menu-toggle");
  menu.classList.remove("open");
  toggle.classList.remove("open");
  toggle.textContent = "☰";
}

// Close mobile menu when a navigation item is clicked
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelectorAll('#mobileMenu .nav-btn');
  mobileMenuBtn.forEach(btn => {
    btn.addEventListener('click', closeMenu);
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const menu = document.getElementById("mobileMenu");
    const toggle = document.querySelector(".menu-toggle");
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggle = toggle.contains(event.target);
    
    if (!isClickInsideMenu && !isClickOnToggle && menu.classList.contains("open")) {
      closeMenu();
    }
  });
});