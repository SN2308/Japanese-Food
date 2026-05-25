const MENU = [
  // ══ SUSHI & SASHIMI ══
  { id:1, cat:'sushi',
    img:'https://i.pinimg.com/1200x/9a/40/ac/9a40ac62175923821c5d1c2b61c98ad3.jpg',
    name:'ຊູຊິແຊວມ້ອນ Sushi Salmon', nameJp:'寿司サーモン', price:120000 },
  { id:2, cat:'sushi',
    img:'https://i.pinimg.com/736x/2e/60/e1/2e60e199031cedf4f822e2f08248518c.jpg',
    name:'ຊູຊິປາໄຫຼ Sushi Eel', nameJp:'鰻寿司', price:130000 },
  { id:3, cat:'sushi',
    img:'https://i.pinimg.com/1200x/b8/02/a1/b802a1dd68e3ab32a3d2cdae4f3a131e.jpg',
    name:'ຊູຊິທູນ່າ Sushi Tuna', nameJp:'寿司マグロ', price:130000 },
  { id:4, cat:'sushi',
    img:'https://i.pinimg.com/736x/cb/f9/36/cbf936eafb14008272b516d573e20e41.jpg',
    name:'ຊູຊິອູນິ Sushi Uni', nameJp:'寿司うに', price:130000 },
  { id:5, cat:'sushi',
    img:'https://i.pinimg.com/1200x/d1/64/ac/d164ac434e35b062eca075d7bcea2403.jpg',
    name:'ຊູຊິ 10 ຊິ້ນ Sushi 10 pieces', nameJp:'寿司 10貫', price:130000 },
  { id:6, cat:'sushi',
    img:'https://i.pinimg.com/1200x/09/82/8e/09828ed133bf89e35a46e2566db30bc0.jpg',
    name:'ແຊວມ້ອນໂຣວ Salmon Roll', nameJp:'サーモンロール', price:120000 },
  { id:7, cat:'sushi',
    img:'https://i.pinimg.com/1200x/63/e5/d9/63e5d969ac69ad58a4d5d014299a288c.jpg',
    name:'ທູນ່າໂຣວ Tuna Roll', nameJp:'マグロロール', price:120000 },
  { id:8, cat:'sushi',
    img:'https://i.pinimg.com/736x/a4/ed/1a/a4ed1ad42f8daf80fec0e5ab47e13db0.jpg',
    name:'ແຊວມ້ອນຊາຊິມິ Salmon Sashimi ', nameJp:'サーモンの刺身', price:215000 },
  { id:9, cat:'sushi',
    img:'https://i.pinimg.com/736x/e0/23/ac/e023ac9bd43b1e198a52a845f9ff7e32.jpg',
    name:'ແຊວມ້ອນ&ທູນ່າຊາຊິມິ Salmon & Tuna Sashimi', nameJp:'サーモンとマグロの刺身', price:215000 },
  { id:10, cat:'sushi',
    img:'https://i.pinimg.com/1200x/f3/8a/6e/f38a6e74c2ca4b9071c9d4764b39e9a3.jpg',
    name:'ເຊັດຊາຊິມິ Set Sashimi', nameJp:'刺身セット', price:289000 },

  // ══ NOODLE ══
  { id:11, cat:'noodle',
    img:'https://i.pinimg.com/736x/97/67/8a/97678a9a2e66f240ddbb0d9738e70174.jpg',
    name:'ລາເມັນ Ramen', nameJp:'拉麺', price:55000 },
  { id:12, cat:'noodle',
    img:'https://i.pinimg.com/736x/b2/c2/f0/b2c2f0e5b28c2769ed0c17749bfdba0d.jpg',
    name:'ທົງຄັດສຶລາເມັນ Tonkatsu Ramen', nameJp:'とんかつラーメン', price:65000 },
  { id:13, cat:'noodle',
    img:'https://i.pinimg.com/736x/99/83/58/998358dd0c4f013ff4c63585a4b3bbd3.jpg',
    name:'ມຶໂຊະລາເມັນ Miso Ramen', nameJp:'味噌ラーメン', price:65000 },
  { id:14, cat:'noodle',
    img:'https://i.pinimg.com/1200x/ea/ce/35/eace35819ef9d1ee82b83a1529a22bab.jpg',
    name:'ໂຊຢຸລາເມັນ Shoyu Ramen', nameJp:'醤油ラーメン', price:65000 },
  { id:15, cat:'noodle',
    img:'https://i.pinimg.com/736x/b0/0a/1d/b00a1dcc75375ed27dfdb9256ed4d080.jpg',
    name:'ອູດົ້ງ Udon', nameJp:'うどん', price:55000 },
  { id:16, cat:'noodle',
    img:'https://i.pinimg.com/736x/0e/4f/e4/0e4fe47dc78eb27080802b9461dafee5.jpg',
    name:'ທົງຄັດສຶອູດົ້ງ Tonkatsu Udon', nameJp:'とんかつうどん', price:65000 },
  { id:17, cat:'noodle',
    img:'https://i.pinimg.com/1200x/8a/5b/f5/8a5bf5c4718b1b2563c4925e753e324d.jpg',
    name:'ເທມປຸລະອູດົ້ງ Tempura Udon', nameJp:'天ぷらうどん', price:65000 },
  { id:18, cat:'noodle',
    img:'https://i.pinimg.com/1200x/b6/f3/d0/b6f3d0d4f0e6c460235e1aaf833aeb72.jpg',
    name:'ໂຊບະ Soba', nameJp:'そば', price:55000 },
  { id:19, cat:'noodle',
    img:'https://i.pinimg.com/736x/f4/1e/ef/f41eef0180a4634e5e3d6f7b3892e234.jpg',
    name:'ໂຊບະເຢັນ Cold Soba', nameJp:'冷やしそば', price:55000 },
  { id:20, cat:'noodle',
    img:'https://i.pinimg.com/1200x/9c/d4/13/9cd413ba2863b439264637e2aac75eb4.jpg',
    name:'ມິໂຊະຊຸບ Miso Soup', nameJp:'味噌汁', price:35000 },
  { id:21, cat:'noodle',
    img:'https://i.pinimg.com/1200x/1b/12/84/1b12845f8d7f3f1733e9e647bd811048.jpg',
    name:'ເຕົາຫູ້ມິໂຊະຊຸບ Tofu Miso Soup', nameJp:'豆腐味噌汁', price:40000 }, 

  // ══ STEAK ══
  { id:22, cat:'steak',
    img:'https://i.pinimg.com/1200x/f1/11/43/f11143857989c1d45dd3d386fa2e60f5.jpg',
    name:'ສະເຕັກວາກິວ Wagyu Steak', nameJp:'和牛ステーキ', price:150000 },
  { id:23, cat:'steak',
    img:'https://i.pinimg.com/1200x/80/6c/a3/806ca3ed15a477b86e8f159ff5a281d5.jpg',
    name:'ສະເຕັກງົວ Beef Steak', nameJp:'ビーフステーキ', price:125000 },
  { id:24, cat:'steak',
    img:'https://i.pinimg.com/1200x/2d/82/ad/2d82ad0b6152cccb3472f0df6cd4f1ff.jpg',
    name:'ສະເຕັກເທີລິຢາກິ Teriyaki Steak', nameJp:'照り焼きステーキ', price:110000 },
  { id:25, cat:'steak',
    img:'https://i.pinimg.com/1200x/7d/50/6f/7d506f48a584303c9b1f1c8ab6922c6d.jpg',
    name:'ສະເຕັກແຊວມ້ອນ Salmon Steak', nameJp:'サーモンステーキ', price:130000 },
  { id:26, cat:'steak',
    img:'https://i.pinimg.com/1200x/46/93/87/46938777f5d356ff6dfd8b346ab37fba.jpg',
    name:'ຢາກິໂທລະ Yakitori', nameJp:'焼き鳥', price:80000 },
  { id:27, cat:'steak',
    img:'https://i.pinimg.com/736x/9a/e3/75/9ae3758b2b87516810cc55d78f4df39c.jpg',
    name:'ງົວສຽບໄມ້ Beef Skewers', nameJp:'牛肉の串焼き', price:80000 },
  { id:28, cat:'steak',
    img:'https://i.pinimg.com/736x/7c/6a/a2/7c6aa248cd57154c31961a5b23827b0a.jpg',
    name:'ໝູສຽບໄມ້ Pork Skewers', nameJp:'豚肉の串焼き', price:80000 },
  
  // ══ RICE ══
  { id:29, cat:'rice',
    img:'https://i.pinimg.com/736x/e1/01/81/e10181222329c10e4d61351cbb7da513.jpg',
    name:'ເຂົ້າກິວດົ້ງ Gyudon', nameJp:'牛丼', price:65000 },
  { id:30, cat:'rice',
    img:'https://i.pinimg.com/736x/bf/7c/82/bf7c828c0b9bddcf9123e003ea3db294.jpg',
    name:'ເຂົ້າໜ້າຄັດສຶດົ້ງ Katsudon', nameJp:'カツ丼', price:65000 },
  { id:31, cat:'rice',
    img:'https://i.pinimg.com/1200x/98/86/83/9886837132f8b5baeed27c4095a29eba.jpg',
    name:'ເຂົ້າໜ້າແຊວມ້ອນ Salmondon', nameJp:'サーモンドン', price:80000 },
  { id:32, cat:'rice',
    img:'https://i.pinimg.com/1200x/f7/a0/55/f7a0551f4b7a3783bcc5337e47438f27.jpg',
    name:'ເຂົ້າໜ້າທູນ່າ Tunadon', nameJp:'マグロ丼', price:75000 },
  { id:33, cat:'rice',
    img:'https://i.pinimg.com/736x/67/f9/bd/67f9bd04d55f45921cafe3bbfb5febcd.jpg',
    name:'ເຂົ້າແກງຢີ່ປຸ່ນ Curry Rice', nameJp:'カレーライス', price:55000 },
  { id:34, cat:'rice',
    img:'https://i.pinimg.com/736x/8d/70/04/8d7004579e4dc7f7c808473b9e378f75.jpg',
    name:'ເຂົ້າແກງກະລີ່ Katsu Curry Rice', nameJp:'カツカレーライス', price:55000 },
  { id:35, cat:'rice',
    img:'https://i.pinimg.com/1200x/f6/64/fb/f664fbc95411d0223dc28a2c1bbdb58b.jpg',
    name:'ເຂົ້າໜ້ານັດໂຕະ Natto Rice', nameJp:'納豆米', price:50000 },


  // ══ SALAD ══
  { id:36, cat:'salad',
    img:'https://i.pinimg.com/1200x/24/2e/3f/242e3fac5ed2c7479d90cf0b1d250148.jpg',
    name:'ສະລັດ Salad', nameJp:'サラダ', price:48000 },
  { id:37, cat:'salad',
    img:'https://i.pinimg.com/1200x/3b/a2/d5/3ba2d55fedae229d93e2c48e9b474075.jpg',
    name:'ຊີຊ່າສະລັດ Caesar Salad', nameJp:'シーザーサラダ', price:48000 },
  { id:38, cat:'salad',
    img:'https://i.pinimg.com/736x/16/12/b9/1612b9f01979f3ac3cd75c0f78d5f40f.jpg',
    name:'ສະລັດແຊວມ້ອນ Salmon Salad', nameJp:'サーモンサラダ', price:60000 },
  { id:39, cat:'salad',
    img:'https://i.pinimg.com/1200x/35/14/1b/35141b60226c5f520463efdec698af1f.jpg',
    name:'ສະລັດທູນ່າ Tuna Salad', nameJp:'ツナサラダ', price:60000 },
  { id:40, cat:'salad',
    img:'https://i.pinimg.com/1200x/21/e6/ab/21e6abd7651f8d583b776ef073b93dcf.jpg',
    name:'ສະລັດກຸ້ງ Shrimp Salad', nameJp:'エビサラダ', price:55000 },
  { id:41, cat:'salad',
    img:'https://i.pinimg.com/1200x/90/af/da/90afdab2882156fef2e28b427c67a5fd.jpg',
    name:'ສະລັດໄກ່ Chicken Salad', nameJp:'チキンサラダ', price:50000 },
  { id:42, cat:'salad',
    img:'https://i.pinimg.com/736x/4e/1e/d8/4e1ed8d7309cde631cf773c14495fc80.jpg',
    name:'ສະລັດອາໂວຄາໂດ້ Avocado Salad', nameJp:'アボカドサラダ', price:48000 },

  // ══ FRIED & SNACK ══
  { id:43, cat:'fried',
    img:'https://i.pinimg.com/736x/d4/83/2c/d4832cdfcba662815bdc55be95892738.jpg',
    name:'ເຟັ້ນຟຣາຍ French Fries', nameJp:'フライドポテト', price:40000 },
  { id:44, cat:'fried',
    img:'https://i.pinimg.com/736x/13/cb/a0/13cba04a3f319527876e722b303a8005.jpg',
    name:'ເທມປຸລະ Tempura', nameJp:'天ぷら', price:50000 },
  { id:45, cat:'fried',
    img:'https://i.pinimg.com/736x/1b/ab/f6/1babf6930b42d019bf94cc250fcb7b06.jpg',
    name:'ກ້ຽວຊ່າ Gyoza', nameJp:'餃子', price:50000 },
  { id:46, cat:'fried',
    img:'https://i.pinimg.com/736x/ca/23/a8/ca23a85423dffa7854c4301f718f991a.jpg',
    name:'ທາໂກຢາກິ 6 ລູກ Takoyaki 6 balls', nameJp:'たこ焼き 6 個', price:55000 },
  { id:47, cat:'fried',
    img:'https://i.pinimg.com/736x/8c/f3/c5/8cf3c53bc2cd3849a733974314312d55.jpg',
    name:'ທາໂກຢາກິ 12 ລູກ Takoyaki 12 Balls', nameJp:'たこ焼き 12 個', price:110000 },
  { id:48, cat:'fried',
    img:'https://i.pinimg.com/1200x/8c/d4/b0/8cd4b0bc40cdae4ac136d02f775273e0.jpg',
    name:'ຖົ່ວແຣະ Edamame', nameJp:'枝豆', price:20000 },
 
  // ══ ICE CREAM ══
  { id:49, cat:'icecream',
    img:'https://i.pinimg.com/1200x/66/03/d8/6603d827ac89083eaa5af79eef58b8f5.jpg',
    name:'ກະແລ້ມມັສຊະ Matcha Ice Cream', nameJp:'抹茶アイスクリーム', price:25000 },
  { id:50, cat:'icecream',
    img:'https://i.pinimg.com/736x/f7/02/4c/f7024cf26bbef4e696d698aa082ea1c2.jpg',
    name:'ກະແລ້ມວະນິລາ Vanilla Ice Cream', nameJp:'バニラアイスクリーム', price:25000 },
  { id:51, cat:'icecream',
    img:'https://i.pinimg.com/1200x/47/66/ad/4766ad132fab273e39a5a022295cf70b.jpg',
    name:'ກະແລ້ມຊ໋ອກໂກແລັດ Chocolate Ice Cream', nameJp:'チョコレートアイスクリーム', price:25000 },
  { id:52, cat:'icecream',
    img:'https://i.pinimg.com/736x/30/0a/e6/300ae6ba0ba40fec8afedcc3e36b34be.jpg',
    name:'ກະແລ້ມສະຕໍເບີລີ້ Strawberry Ice Cream', nameJp:'ストロベリーアイスクリーム', price:25000 },
  { id:53, cat:'icecream',
    img:'https://i.pinimg.com/736x/76/87/1f/76871f0a97630bea4ec61b98e63aee6d.jpg',
    name:'ກະແລ້ມມິ້ນຊ໋ອກ Mint Choc Ice Cream', nameJp:'ミントチョコアイスクリーム', price:25000 },

  // ══ DRINK ══
  { id:54, cat:'drink',
    img:'https://www.shopping-d.com/cdn/shop/products/11_4773d101-9fd9-4a3b-944e-7c28a4ca7faa.png?v=1661666561&width=533',
    name:'ນໍ້າດື່ມ Water', nameJp:'水', price:10000 },
  { id:55, cat:'drink',
    img:'https://i.pinimg.com/736x/82/98/59/8298599711c8f1162608ef50099d8e59.jpg',
    name:'ໂຄ້ກ Coke', nameJp:'コーラ', price:15000 },
  { id:56, cat:'drink',
    img:'https://i.pinimg.com/1200x/45/9a/fb/459afbc3f9000c8001ab06e67549b924.jpg',
    name:'ມັສຊະ Matcha', nameJp:'抹茶', price:45000 },
  { id:57, cat:'drink',
    img:'https://i.pinimg.com/736x/4a/c2/a4/4ac2a4d5c388265095f4f2b11e269af4.jpg',
    name:'ມັສຊະສະຕໍເບີລີ້ Strawberry Matcha', nameJp:'ストロベリー抹茶', price:45000 },
  { id:58, cat:'drink',
    img:'https://i.pinimg.com/736x/fa/9e/89/fa9e8965c41f027cba5530ed1a8700f1.jpg',
    name:'ໄຮນິເກັ້ນ Heineken', nameJp:'ハイネケン', price:22000 },
  { id:59, cat:'drink',
    img:'https://i.pinimg.com/1200x/c6/41/d6/c641d61ea730e0f014133297a7fb1d43.jpg',
    name:'ເບຍອາຊາອິ Asahi Beer', nameJp:'アサヒビール', price:22000 },
];

const DELIVERY_FEE = 15000;
const DISCOUNT_CODE = 'LAO2024';
const DISCOUNT_RATE = 0.05;

// ── State ──────────────────────────────
let cart = [];
let currentTable = 1;
let orderType = 'dine-in';
let discountApplied = false;
let currentCat = 'all';
let paymentMethod = 'transfer'; // kept for receipt compatibility

// ── DOM Refs ───────────────────────────
const menuGrid        = document.getElementById('menuGrid');
const cartItemsEl     = document.getElementById('cartItems');
const cartEmpty       = document.getElementById('cartEmpty');
const cartBadge       = document.getElementById('cartBadge');
const cartTotalMini   = document.getElementById('cartTotalMini');
const subtotalVal     = document.getElementById('subtotalVal');
const grandTotalVal   = document.getElementById('grandTotalVal');
const discountMsg     = document.getElementById('discountMsg');
const discountDisplay = document.getElementById('discountDisplay');
const discountAmt     = document.getElementById('discountAmt');
const deliveryFeeRow  = document.getElementById('deliveryFeeRow');
const addressRow      = document.getElementById('addressRow');
const fabBadge        = document.getElementById('fabBadge');

// ── INIT ───────────────────────────────
function init() {
  renderMenu('all');
  setupTableBtns();
  setupCatBtns();
  addCartOverlay();
}

// ── Render Menu ────────────────────────
function renderMenu(cat) {
  currentCat = cat;
  const filtered = cat === 'all' ? MENU : MENU.filter(m => m.cat === cat);
  menuGrid.innerHTML = '';
  filtered.forEach((item, i) => {
    const card = createMenuCard(item, i);
    menuGrid.appendChild(card);
  });
}

const FALLBACK_COLORS = {
  sushi:    'linear-gradient(135deg,#fde8ed,#f5c8d4)',
  noodle:   'linear-gradient(135deg,#fff0e0,#ffd9a8)',
  steak:    'linear-gradient(135deg,#ffe8e0,#ffb899)',
  rice:     'linear-gradient(135deg,#e8f5e8,#b8ddb8)',
  salad:    'linear-gradient(135deg,#e8ffe8,#a8e0a8)',
  fried:    'linear-gradient(135deg,#fff8e0,#ffe0a0)',
  icecream: 'linear-gradient(135deg,#f0e8ff,#d8c0f0)',
  drink:    'linear-gradient(135deg,#e8faf0,#a8dfc8)',
};
const FALLBACK_EMOJI = {
  sushi:'🍣', noodle:'🍜', steak:'🥩', rice:'🍱',
  salad:'🥗', fried:'🍤', icecream:'🍨', drink:'🍵',
};

function catLabel(cat) {
  const map = {
    sushi:'🍣 Sushi', noodle:'🍜 Noodle', steak:'🥩 Steak', rice:'🍱 Rice',
    salad:'🥗 Salad', fried:'🍤 Fried', icecream:'🍨 Ice Cream', drink:'🍵 Drink',
  };
  return map[cat] || cat;
}

function createMenuCard(item, index) {
  const div = document.createElement('div');
  div.className = 'menu-card pop-in';
  div.style.animationDelay = `${index * 0.04}s`;
  const qty = getCartQty(item.id);
  div.innerHTML = `
    <div class="card-img-wrap">
      <img class="card-img" src="${item.img}" alt="${item.name}" loading="lazy"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
      <div class="card-img-fallback" style="background:${FALLBACK_COLORS[item.cat]||'#fde8ed'};display:none;">
        <span>${FALLBACK_EMOJI[item.cat]||'🍽'}</span>
      </div>
      <div class="card-cat-badge">${catLabel(item.cat)}</div>
      <div class="card-qty-indicator ${qty > 0 ? 'visible' : ''}" id="qtyind-${item.id}">${qty}</div>
    </div>
    <div class="card-body">
      <div class="card-name">${item.name}</div>
      <div class="card-name-jp">${item.nameJp}</div>
      <div class="card-price">${fmtPrice(item.price)} <span>₭</span></div>
    </div>
    <div class="card-footer">
      <button class="add-btn ${qty > 0 ? 'added' : ''}" id="addbtn-${item.id}" onclick="addToCart(${item.id})">
        ${qty > 0 ? `✓ ເພີ່ມແລ້ວ (${qty})` : '+ ເພີ່ມໃສ່ຕະກ້າ'}
      </button>
    </div>
  `;
  return div;
}

// ── Cart Operations ────────────────────
function addToCart(id) {
  const item = MENU.find(m => m.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) { existing.qty++; } else { cart.push({ ...item, qty: 1 }); }
  updateCartUI();
  updateCardUI(id);
  bumpBadge();
}

function changeQty(id, delta) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
  updateCardUI(id);
}

function removeItem(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
  updateCardUI(id);
}

function clearCart() {
  if (cart.length === 0) return;
  if (!confirm('ລ້າງຕະກ້າທັງໝົດ?')) return;
  cart = [];
  discountApplied = false;
  document.getElementById('discountCode').value = '';
  discountMsg.textContent = '';
  discountMsg.className = 'discount-msg';
  discountDisplay.classList.add('hidden');
  updateCartUI();
  renderMenu(currentCat);
}

function getCartQty(id) {
  const item = cart.find(c => c.id === id);
  return item ? item.qty : 0;
}

// ── Cart UI ────────────────────────────
function updateCartUI() {
  renderCartItems();
  updateTotals();
  updateBadges();
}

function renderCartItems() {
  if (cart.length === 0) {
    cartEmpty.style.display = 'flex';
    document.querySelectorAll('.cart-item').forEach(e => e.remove());
    return;
  }
  cartEmpty.style.display = 'none';
  document.querySelectorAll('.cart-item').forEach(e => e.remove());
  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.id = `cartrow-${item.id}`;
    row.innerHTML = `
      <div class="item-thumb-wrap">
        <img class="item-thumb" src="${item.img}" alt="${item.name}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="item-thumb-fallback" style="display:none;background:${FALLBACK_COLORS[item.cat]||'#fde8ed'};">
          <span style="font-size:1rem;">${FALLBACK_EMOJI[item.cat]||'🍽'}</span>
        </div>
      </div>
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-price-line">${fmtPrice(item.price)} ₭ × ${item.qty}</div>
      </div>
      <div class="item-qty-ctrl">
        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <div class="item-subtotal">${fmtPrice(item.price * item.qty)} ₭</div>
      <button class="delete-btn" onclick="removeItem(${item.id})" title="ລົບ">🗑</button>
    `;
    cartItemsEl.appendChild(row);
  });
}

function updateTotals() {
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const discount = discountApplied ? Math.round(subtotal * DISCOUNT_RATE) : 0;
  const delivery = orderType === 'delivery' ? DELIVERY_FEE : 0;
  const grand = subtotal - discount + delivery;
  subtotalVal.textContent = `${fmtPrice(subtotal)} ₭`;
  grandTotalVal.textContent = `${fmtPrice(grand)} ₭`;
  cartTotalMini.textContent = `${fmtPrice(grand)} ₭`;
  if (discountApplied) {
    discountAmt.textContent = `-${fmtPrice(discount)} ₭`;
    discountDisplay.classList.remove('hidden');
  } else {
    discountDisplay.classList.add('hidden');
  }
}

function updateBadges() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  cartBadge.textContent = total;
  fabBadge.textContent = total;
}

function bumpBadge() {
  cartBadge.classList.add('bump');
  setTimeout(() => cartBadge.classList.remove('bump'), 200);
}

function updateCardUI(id) {
  const qty = getCartQty(id);
  const ind = document.getElementById(`qtyind-${id}`);
  const btn = document.getElementById(`addbtn-${id}`);
  if (ind) { ind.textContent = qty; ind.classList.toggle('visible', qty > 0); }
  if (btn) {
    btn.textContent = qty > 0 ? `✓ ເພີ່ມແລ້ວ (${qty})` : '+ ເພີ່ມໃສ່ຕະກ້າ';
    btn.classList.toggle('added', qty > 0);
  }
}

// ── Discount ───────────────────────────
function applyDiscount() {
  const code = document.getElementById('discountCode').value.trim().toUpperCase();
  if (code === DISCOUNT_CODE) {
    discountApplied = true;
    discountMsg.textContent = '✓ ສ່ວນລົດ 5% ໃຊ້ສຳເລັດ！';
    discountMsg.className = 'discount-msg success';
    updateTotals();
  } else {
    discountApplied = false;
    discountMsg.textContent = '✗ ລະຫັດບໍ່ຖືກຕ້ອງ';
    discountMsg.className = 'discount-msg error';
    discountDisplay.classList.add('hidden');
    updateTotals();
  }
}

// ── Order Type ─────────────────────────
function setOrderType(type) {
  orderType = type;
  document.getElementById('btnDineIn').classList.toggle('active', type === 'dine-in');
  document.getElementById('btnDelivery').classList.toggle('active', type === 'delivery');
  addressRow.classList.toggle('hidden', type !== 'delivery');
  deliveryFeeRow.classList.toggle('hidden', type !== 'delivery');
  document.querySelectorAll('.table-btn').forEach(b => {
    if (b.classList.contains('delivery')) b.classList.toggle('active', type === 'delivery');
  });
  updateTotals();
}

// ── Table Buttons ──────────────────────
function setupTableBtns() {
  document.querySelectorAll('.table-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('delivery')) {
        setOrderType('delivery');
        document.querySelectorAll('.table-btn:not(.delivery)').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      } else {
        setOrderType('dine-in');
        document.querySelectorAll('.table-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTable = parseInt(btn.dataset.table);
      }
    });
  });
}

// ── Category Buttons ───────────────────
function setupCatBtns() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.cat);
    });
  });
}

// ── Checkout ───────────────────────────
function checkout() {
  if (cart.length === 0) {
    alert('ກະລຸນາເລືອກເມນູກ່ອນ！\nまずメニューを選んでください。');
    return;
  }
  const customerName  = document.getElementById('customerName').value.trim();
  const customerPhone = document.getElementById('customerPhone').value.trim();
  const deliveryAddr  = document.getElementById('deliveryAddress')?.value.trim() || '';
  if (orderType === 'delivery' && !deliveryAddr) {
    alert('ກະລຸນາໃສ່ທີ່ຢູ່ສົ່ງ！\n配達先住所を入力してください。');
    return;
  }
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const discount = discountApplied ? Math.round(subtotal * DISCOUNT_RATE) : 0;
  const delivery = orderType === 'delivery' ? DELIVERY_FEE : 0;
  const grand = subtotal - discount + delivery;
  const order = {
    orderNo:       generateOrderNo(),
    date:          new Date().toLocaleString('lo-LA'),
    table:         orderType === 'dine-in' ? currentTable : null,
    orderType,
    paymentMethod,
    customerName:  customerName || 'ລູກຄ້າທົ່ວໄປ',
    customerPhone: customerPhone || '-',
    deliveryAddr,
    cart: [...cart],
    subtotal, discount, delivery, grand, discountApplied,
  };
  localStorage.setItem('sakura_order', JSON.stringify(order));
  window.open('receipt.html', '_blank');
}

function generateOrderNo() {
  const d = new Date();
  return `SK-${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${String(d.getHours()).padStart(2,'0')}${String(d.getMinutes()).padStart(2,'0')}${String(d.getSeconds()).padStart(2,'0')}`;
}

// ── Mobile Cart Toggle ─────────────────
function addCartOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'cart-overlay';
  overlay.id = 'cartOverlay';
  overlay.onclick = toggleMobileCart;
  document.body.appendChild(overlay);
}

function toggleMobileCart() {
  const panel = document.getElementById('cartPanel');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = panel.classList.contains('mobile-open');
  panel.classList.toggle('mobile-open', !isOpen);
  overlay.classList.toggle('visible', !isOpen);
}

// ── Utilities ──────────────────────────
function fmtPrice(n) { return n.toLocaleString('en-US'); }

// ── Start ──────────────────────────────
document.addEventListener('DOMContentLoaded', init);