const $=s=>document.querySelector(s);
const brl=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const km=n=>n.toLocaleString('pt-BR',{minimumFractionDigits:1,maximumFractionDigits:1})+' km';
const CATS=[['all','Tudo','✨'],['skincare','Skincare','🧴'],['maquiagem','Maquiagem','💄'],['cabelos','Cabelos','💆'],['perfumes','Perfumes','🌸'],['corpo','Corpo e Banho','🛁']];
const tons=[{n:'Claro',d:0,c:'#f1d3bd'},{n:'Médio',d:0,c:'#d9a784'},{n:'Escuro',d:0,c:'#a56b4b'}];
const P=[
{id:1,cat:'skincare',brand:'Lumi',name:'Sérum Vitamina C 10%',price:129.9,r:4.8,n:312,t:'drop',c:'#e8a23c',vt:'Tamanho',vars:[{n:'30 ml',d:0},{n:'50 ml',d:42}],desc:'Sérum antioxidante que uniformiza o tom e devolve o brilho da pele em poucas semanas.',use:'Aplique 3 gotas no rosto limpo pela manhã, antes do hidratante e do protetor solar.',ing:'Ácido ascórbico estável, ácido ferúlico, vitamina E, niacinamida.'},
{id:2,cat:'skincare',brand:'Aqua Viva',name:'Hidratante Facial Ácido Hialurônico',price:89.9,r:4.7,n:540,t:'jar',c:'#8fc1d4',desc:'Gel-creme leve de absorção rápida que mantém a pele hidratada por até 48 horas.',use:'Espalhe sobre rosto e pescoço, manhã e noite, com movimentos suaves.',ing:'Ácido hialurônico de 3 pesos, pantenol, glicerina, extrato de pepino.'},
{id:3,cat:'skincare',brand:'Solaris',name:'Protetor Solar Facial FPS 60 Toque Seco',price:74.9,r:4.6,n:803,t:'tube',c:'#f0b95a',desc:'Proteção UVA/UVB alta, sem deixar a pele oleosa nem esbranquiçada.',use:'Aplique generosamente 15 minutos antes da exposição e reaplique a cada 2 horas.',ing:'Filtros UV de amplo espectro, vitamina E, extrato de camomila.'},
{id:4,cat:'maquiagem',brand:'Velour',name:'Base Líquida Efeito Natural',price:99.9,r:4.5,n:221,t:'bottle',c:'#d9a784',vt:'Tom',vars:[{n:'Claro 10',d:0,c:'#f1d3bd'},{n:'Médio 20',d:0,c:'#d9a784'},{n:'Escuro 30',d:0,c:'#a56b4b'}],desc:'Cobertura média e acabamento aveludado, com fórmula leve que respeita a pele.',use:'Aplique do centro do rosto para fora com esponja ou pincel. Construa a cobertura em camadas.',ing:'Pigmentos minerais, ácido hialurônico, vitamina E, silicone volátil.'},
{id:5,cat:'maquiagem',brand:'Rosa Cacau',name:'Batom Cremoso Longa Duração',price:54.9,r:4.9,n:467,t:'lip',c:'#9c3050',vt:'Cor',vars:[{n:'Rosé',d:0,c:'#d98a95'},{n:'Terracota',d:0,c:'#b5573e'},{n:'Vinho',d:0,c:'#7b2d42'}],desc:'Cor intensa em uma passada, textura confortável que não resseca os lábios.',use:'Aplique direto dos lábios ao centro, contornando com a ponta do bastão.',ing:'Manteiga de karité, óleo de jojoba, vitamina E, pigmentos.'},
{id:6,cat:'cabelos',brand:'Fio de Seda',name:'Shampoo Reconstrutor',price:58.9,r:4.6,n:389,t:'bottle',c:'#c9a0dc',vt:'Tamanho',vars:[{n:'300 ml',d:0},{n:'500 ml',d:21}],desc:'Limpa com suavidade e repõe massa capilar de fios danificados por química e calor.',use:'Massageie no couro cabeludo molhado, deixe agir 1 minuto e enxágue.',ing:'Queratina vegetal, aminoácidos, óleo de argan, pantenol.'},
{id:7,cat:'cabelos',brand:'Fio de Seda',name:'Máscara Capilar Nutrição Intensa',price:79.9,r:4.8,n:276,t:'jar',c:'#b98060',desc:'Tratamento profundo que devolve maciez, brilho e controle do frizz.',use:'Após o shampoo, aplique no comprimento, aguarde 5 minutos e enxágue.',ing:'Manteiga de murumuru, óleo de coco, proteínas do trigo.'},
{id:8,cat:'cabelos',brand:'Raiz Brasil',name:'Óleo Capilar Finalizador',price:49.9,r:4.4,n:158,t:'drop',c:'#d6a24a',desc:'Finalizador leve que sela as pontas e deixa um brilho sedoso sem pesar.',use:'Aplique 2 a 3 gotas nas pontas com o cabelo úmido ou seco.',ing:'Óleo de argan, óleo de macadâmia, vitamina E.'},
{id:9,cat:'perfumes',brand:'Maison Aurora',name:'Eau de Parfum Flor de Laranjeira',price:219.9,r:4.9,n:134,t:'perf',c:'#e9b49a',vt:'Tamanho',vars:[{n:'50 ml',d:0},{n:'100 ml',d:120}],desc:'Floral cítrico com fundo amadeirado, elegante e de ótima fixação.',use:'Borrife a 15 cm de distância em pulsos, colo e atrás das orelhas.',ing:'Notas de topo: bergamota. Coração: flor de laranjeira. Fundo: sândalo e almíscar.'},
{id:8+2,cat:'perfumes',brand:'Doce Brisa',name:'Body Splash Baunilha e Coco',price:69.9,r:4.5,n:412,t:'bottle',c:'#f2d6a2',desc:'Fragrância refrescante e envolvente para usar o dia todo.',use:'Borrife sobre o corpo seco depois do banho.',ing:'Notas de baunilha, coco, flor de tiaré. Contém aloe vera.'},
{id:11,cat:'corpo',brand:'Terra Viva',name:'Esfoliante Corporal de Café',price:64.9,r:4.7,n:298,t:'jar',c:'#7a5a48',desc:'Renova a pele e estimula a circulação, deixando-a macia e uniforme.',use:'Massageie sobre a pele úmida com movimentos circulares e enxágue.',ing:'Café, açúcar mascavo, óleo de amêndoas doces.'},
{id:12,cat:'corpo',brand:'Terra Viva',name:'Sabonete Líquido Lavanda',price:34.9,r:4.6,n:190,t:'bottle',c:'#b9a3d6',vt:'Tamanho',vars:[{n:'300 ml',d:0},{n:'500 ml',d:14}],desc:'Limpeza suave com aroma calmante de lavanda, ideal para a rotina da noite.',use:'Espalhe sobre o corpo molhado, faça espuma e enxágue.',ing:'Óleo essencial de lavanda, glicerina, extrato de camomila.'}
];
P[9].id=10;
/* Fotos reais: coloque os arquivos na pasta imagens/. Se um arquivo não existir, o app usa a ilustração. */
const IMG={1:'serum-vitamina-c.jpg',2:'hidratante-facial.jpg',3:'protetor-solar.jpg',4:'base-liquida.jpg',5:'batom-cremoso.jpg',6:'shampoo-reconstrutor.jpg',7:'mascara-capilar.jpg',8:'oleo-capilar.jpg',9:'eau-de-parfum.jpg',10:'body-splash.jpg',11:'esfoliante-corporal.jpg',12:'sabonete-liquido.jpg'};
P.forEach(p=>p.img=IMG[p.id]);
const U0={lat:-22.7307,lng:-48.5706,name:'São Manuel, SP'};
let user={...U0};
const S=[
{id:'a',name:'Pétala Centro',lat:-22.7200,lng:-48.5706,m:1,open:true,out:[]},
{id:'b',name:'Aurora Cosméticos Jardim',lat:-22.7480,lng:-48.5560,m:.97,open:true,out:[3,9]},
{id:'c',name:'Perfumaria Vila Nova',lat:-22.7800,lng:-48.5300,m:1.04,open:false,out:[1,4,7,12]}
];
const dist=s=>{const R=6371,t=x=>x*Math.PI/180,a=Math.sin(t(s.lat-user.lat)/2)**2+Math.cos(t(user.lat))*Math.cos(t(s.lat))*Math.sin(t(s.lng-user.lng)/2)**2;return 2*R*Math.asin(Math.sqrt(a))*1.3};
const eta=s=>{const d=dist(s),a=Math.round(15+d*4);return `${a}–${a+10} min`};
const sorted=()=>[...S].sort((x,y)=>dist(x)-dist(y));
let store=sorted().find(s=>s.open),cat='all',query='',shown=0,cart={};const BATCH=8;
try{const c=JSON.parse(sessionStorage.getItem('petala')||'null');if(c&&c.cart)cart=c.cart}catch(e){}
const save=()=>{try{sessionStorage.setItem('petala',JSON.stringify({cart}))}catch(e){}};

function art(p,col){const c=col||p.c;let s='';
const t=p.t;
if(t==='jar')s=`<rect x="26" y="46" width="48" height="34" rx="8" fill="${c}"/><rect x="24" y="36" width="52" height="13" rx="5" fill="#fff" opacity=".85"/><rect x="34" y="56" width="32" height="14" rx="3" fill="#fff" opacity=".35"/>`;
else if(t==='bottle')s=`<rect x="42" y="14" width="16" height="10" rx="3" fill="#fff" opacity=".9"/><rect x="45" y="22" width="10" height="10" fill="${c}"/><rect x="30" y="32" width="40" height="52" rx="10" fill="${c}"/><rect x="36" y="48" width="28" height="22" rx="3" fill="#fff" opacity=".4"/>`;
else if(t==='tube')s=`<path d="M34 20h32l-3 58H37z" fill="${c}"/><rect x="34" y="12" width="32" height="10" rx="3" fill="#fff" opacity=".9"/><rect x="40" y="38" width="20" height="20" rx="3" fill="#fff" opacity=".4"/>`;
else if(t==='lip')s=`<rect x="36" y="52" width="28" height="34" rx="3" fill="#2b2224"/><rect x="38" y="30" width="24" height="24" fill="#c8b08a"/><path d="M40 30V16q10-8 20 0v14z" fill="${c}"/>`;
else if(t==='drop')s=`<rect x="40" y="12" width="20" height="9" rx="3" fill="#2b2224"/><path d="M44 21h12v8H44z" fill="#fff" opacity=".8"/><rect x="32" y="29" width="36" height="56" rx="9" fill="${c}"/><rect x="38" y="46" width="24" height="22" rx="3" fill="#fff" opacity=".4"/>`;
else s=`<rect x="44" y="10" width="12" height="10" rx="2" fill="#2b2224"/><rect x="40" y="20" width="20" height="8" fill="#c8b08a"/><rect x="26" y="28" width="48" height="56" rx="10" fill="${c}" opacity=".9"/><rect x="34" y="42" width="32" height="26" rx="3" fill="#fff" opacity=".45"/>`;
return `<svg viewBox="0 0 100 100" role="img" aria-label="${p.name}"><rect width="100" height="100" fill="${c}" opacity=".18"/><circle cx="50" cy="92" r="30" fill="${c}" opacity=".2"/><ellipse cx="50" cy="88" rx="26" ry="3.5" fill="#000" opacity=".1"/>${s}</svg>`}
function photo(p,col){const s=art(p,col);if(!p.img)return s;const f=encodeURIComponent(s).replace(/'/g,'%27');return `<img src="imagens/${p.img}" alt="${p.name}" loading="lazy" onerror="this.outerHTML=decodeURIComponent('${f}')">`}
const star='<svg viewBox="0 0 24 24"><path d="m12 2 2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.300 5.800 21l1.600-7L2 9.200l7.100-.6z"/></svg>';
const stars=p=>`<span class="stars">${star}<b style="color:var(--ink)">${p.r.toLocaleString('pt-BR',{minimumFractionDigits:1})}</b> (${p.n})</span>`;
const priceOf=(p,v)=>Math.round((p.price+(v?v.d:0))*store.m*100)/100;
const avail=p=>!store.out.includes(p.id);
const list=()=>P.filter(p=>avail(p)&&(cat==='all'||p.cat===cat)&&(!query||(p.name+' '+p.brand).toLowerCase().includes(query)));

function renderStoreBtn(){$('#storeLbl').textContent=`${store.name} · ${km(dist(store))}`}
function renderCats(){$('#cats').innerHTML=CATS.map(([k,n,e])=>`<button class="cat" data-cat="${k}" aria-pressed="${k===cat}"><i>${e}</i>${n}</button>`).join('')}
function card(p){return `<article class="card"><button class="img" data-open="${p.id}" aria-label="Ver detalhes de ${p.name}">${photo(p)}</button><div class="info"><span class="brand">${p.brand}</span><button class="name" data-open="${p.id}" style="text-align:left;padding:0">${p.name}</button>${stars(p)}<div class="price">${p.vars?'a partir de ':''}${brl(priceOf(p))}</div><button class="add" data-add="${p.id}">+ Adicionar</button></div></article>`}
function renderGrid(reset){const L=list();if(reset){shown=0;$('#grid').innerHTML='';window.scrollTo({top:Math.min(window.scrollY,0)})}
$('#gt').textContent=cat==='all'?'Para você':CATS.find(c=>c[0]===cat)[1];
$('#gc').textContent=`${L.length} ${L.length===1?'produto':'produtos'} em ${store.name}`;
if(!L.length){$('#grid').innerHTML='<div class="empty" style="grid-column:1/-1">Nenhum produto encontrado nesta loja. Tente outra categoria ou troque de loja.</div>';$('#sentinel').textContent='';return}
more()}
function more(){const L=list();if(shown>=L.length)return;$('#grid').insertAdjacentHTML('beforeend',L.slice(shown,shown+BATCH).map(card).join(''));shown=Math.min(L.length,shown+BATCH);$('#sentinel').textContent=shown>=L.length?'Você viu tudo desta loja':'Carregando mais produtos…'}
new IntersectionObserver(e=>{if(e[0].isIntersecting)more()},{rootMargin:'400px'}).observe($('#sentinel'));

let openEl=null;
function show(el){$('#ov').classList.add('on');el.classList.add('on');openEl=el}
function closeAll(){document.querySelectorAll('.on').forEach(e=>e.classList.remove('on'));openEl=null}
$('#ov').onclick=closeAll;document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()});
document.querySelectorAll('[data-close]').forEach(b=>b.onclick=closeAll);

function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('on'),2200)}

function renderStores(){$('#storeList').innerHTML=sorted().map(s=>`<button class="store" data-store="${s.id}" aria-pressed="${s.id===store.id}"><div class="row"><b>${s.name}</b><span class="tag ${s.open?'open':'closed'}">${s.open?'Aberta agora':'Fechada'}</span></div><div class="meta"><span>${km(dist(s))}</span><span>Entrega em ${eta(s)}</span><span>Retirada em 15 min</span></div></button>`).join('')}
function setStore(id){const s=S.find(x=>x.id===id);if(s.id===store.id){closeAll();return}
store=s;let removed=0;for(const k in cart){if(store.out.includes(cart[k].id)){delete cart[k];removed++}}
save();renderStoreBtn();renderGrid(true);renderCart();closeAll();
toast(removed?`Loja trocada. ${removed} item(ns) indisponível(is) saiu do carrinho.`:`Agora você compra em ${s.name}`)}
$('#storeBtn').onclick=()=>{renderStores();show($('#storeD'))};
$('#geoBtn').onclick=()=>{const n=$('#geoNote');if(!navigator.geolocation){n.textContent='Seu navegador não permite localização. Mantendo São Manuel, SP.';return}
n.textContent='Buscando sua localização…';
navigator.geolocation.getCurrentPosition(p=>{user={lat:p.coords.latitude,lng:p.coords.longitude,name:'Sua localização'};$('#addr').textContent='Sua localização';n.innerHTML='Lojas ordenadas a partir de <b>sua localização</b>.';renderStores();renderStoreBtn();renderGrid(true)},()=>{n.textContent='Não foi possível obter a localização. Ative a permissão ou continue com São Manuel, SP.'},{timeout:8000})};

document.addEventListener('click',e=>{
const a=e.target.closest('[data-add]'),o=e.target.closest('[data-open]'),c=e.target.closest('[data-cat]'),st=e.target.closest('[data-store]');
if(a){const p=P.find(x=>x.id==a.dataset.add);addItem(p,p.vars?0:-1,1);toast(`${p.name} adicionado${p.vars?' ('+p.vars[0].n+')':''}`)}
else if(o)openProduct(+o.dataset.open);
else if(c){cat=c.dataset.cat;renderCats();renderGrid(true)}
else if(st)setStore(st.dataset.store)});
$('#q').oninput=e=>{query=e.target.value.trim().toLowerCase();renderGrid(true)};

function addItem(p,vi,q){const k=p.id+'-'+vi;cart[k]=cart[k]?{...cart[k],q:cart[k].q+q}:{id:p.id,vi,q};save();renderCart()}
let sel={p:null,vi:0,q:1};
function openProduct(id){const p=P.find(x=>x.id===id);sel={p,vi:p.vars?0:-1,q:1};drawProduct();show($('#pm'))}
function drawProduct(){const {p,vi,q}=sel,v=p.vars&&p.vars[vi],tone=v&&v.c;
$('#pm').innerHTML=`<button class="ico mclose" data-close aria-label="Fechar">✕</button><div class="pm"><div class="img">${photo(p,tone)}</div><div><span class="brand">${p.brand}</span><h3>${p.name}</h3>${stars(p)}<div class="price" style="font-size:24px">${brl(priceOf(p,v)*q)}</div><p>${p.desc}</p>
${p.vars?`<h4>${p.vt}: ${v.n}</h4><div class="chips">${p.vars.map((x,i)=>`<button class="chip" data-v="${i}" aria-pressed="${i===vi}">${x.c?`<i style="background:${x.c}"></i>`:''}${x.n}${x.d?` <small>+${brl(Math.round(x.d*store.m*100)/100)}</small>`:''}</button>`).join('')}</div>`:''}
<h4>Modo de uso</h4><p>${p.use}</p><h4>Ingredientes principais</h4><p>${p.ing}</p>
<div style="display:flex;gap:12px;align-items:center;margin-top:18px"><div class="qty"><button data-q="-1" aria-label="Menos">−</button><span>${q}</span><button data-q="1" aria-label="Mais">+</button></div><button class="btn" id="pmAdd">Adicionar ao carrinho</button></div></div></div>`;
$('#pm').querySelector('[data-close]').onclick=closeAll;
$('#pm').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{sel.vi=+b.dataset.v;drawProduct()});
$('#pm').querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{sel.q=Math.max(1,sel.q+ +b.dataset.q);drawProduct()});
$('#pmAdd').onclick=()=>{addItem(p,vi,q);closeAll();toast('Adicionado ao carrinho')}}

let mode='delivery',done=null;
const lines=()=>Object.entries(cart).map(([k,i])=>{const p=P.find(x=>x.id===i.id),v=i.vi>=0?p.vars[i.vi]:null;return {k,p,v,q:i.q,u:priceOf(p,v)}});
const freight=sub=>mode==='pickup'?0:sub>=199?0:Math.round((5.9+1.4*dist(store))*100)/100;
function renderCart(){const L=lines(),n=L.reduce((a,l)=>a+l.q,0),b=$('#badge');b.hidden=!n;b.textContent=n;
if(done){$('#cartB').innerHTML=`<div class="done"><div style="font-size:44px">🌸</div><h3>Pedido ${done} confirmado</h3><p class="note">${mode==='pickup'?`Retire em ${store.name} em cerca de 15 minutos.`:`Entrega saindo de ${store.name}. Chegada em ${eta(store)}.`}</p></div>`;$('#cartF').innerHTML='<button class="btn" id="again">Continuar comprando</button>';$('#again').onclick=()=>{done=null;renderCart();closeAll()};return}
if(!L.length){$('#cartB').innerHTML='<div class="empty">Seu carrinho está vazio.<br>Adicione produtos da vitrine para começar.</div>';$('#cartF').innerHTML='';return}
const sub=L.reduce((a,l)=>a+l.u*l.q,0),f=freight(sub),d=dist(store);
$('#cartB').innerHTML=L.map(l=>`<div class="line"><div class="th">${photo(l.p,l.v&&l.v.c)}</div><div class="t"><div>${l.p.name}</div><small>${l.v?l.v.n+' · ':''}${brl(l.u)}</small><div style="margin-top:6px"><span class="qty"><button data-cq="${l.k}|-1" aria-label="Menos">−</button><span>${l.q}</span><button data-cq="${l.k}|1" aria-label="Mais">+</button></span></div></div><b>${brl(l.u*l.q)}</b></div>`).join('')+
`<h3 style="font-size:18px;margin:20px 0 10px">Como receber</h3><button class="opt" data-mode="delivery" aria-pressed="${mode==='delivery'}"><span>🛵</span><span><b>Entrega em casa</b><br><small>${eta(store)} · ${sub>=199?'frete grátis':'frete por distância'}</small></span><span>${sub>=199?'Grátis':brl(Math.round((5.9+1.4*d)*100)/100)}</span></button><button class="opt" data-mode="pickup" aria-pressed="${mode==='pickup'}"><span>🏬</span><span><b>Retirar em ${store.name}</b><br><small>Pronto em 15 min · ${km(d)} de você</small></span><span>Grátis</span></button><p class="note">Frete de R$ 5,90 + R$ 1,40 por km. Grátis em pedidos a partir de R$ 199,00.</p>`;
$('#cartF').innerHTML=`<div class="sum"><span>Subtotal</span><span>${brl(sub)}</span></div><div class="sum"><span>${mode==='pickup'?'Retirada':'Frete'}</span><span>${f?brl(f):'Grátis'}</span></div><div class="sum tot"><span>Total</span><span>${brl(sub+f)}</span></div><button class="btn" id="fin" style="margin-top:10px" ${store.open?'':'disabled'}>${store.open?'Finalizar compra':'Loja fechada — troque de loja'}</button>`;
$('#fin').onclick=()=>{done='#'+Math.floor(1000+Math.random()*9000);cart={};save();renderCart()}}
$('#cartB').addEventListener('click',e=>{const q=e.target.closest('[data-cq]'),m=e.target.closest('[data-mode]');
if(q){const[k,d]=q.dataset.cq.split('|');cart[k].q+= +d;if(cart[k].q<1)delete cart[k];save();renderCart()}
else if(m){mode=m.dataset.mode;renderCart()}});
$('#cartBtn').onclick=()=>{renderCart();show($('#cartD'))};

renderStoreBtn();renderCats();renderGrid(true);renderCart();
