(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,s=n(0),j=n(13),d=n.n(j),l=(n(102),n(103),n(14)),u=n(24),b=n(160),h=n(86),O=n(180),x=n(175),p=n(119),m=n(78),g=n.n(m),f=n(4),v=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1],j=Object(s.useState)(!1),d=Object(u.a)(j,2),m=d[0],v=d[1],C=Object(s.useState)(""),y=Object(u.a)(C,2),w=y[0],k=y[1],S={backgroundColor:"#1bbd7e",margin:"auto"},F=Object(l.f)();return Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{elevation:10,style:{padding:20,alignment:"center",height:"70vh",width:500,margin:"20px auto"},children:[Object(f.jsxs)(b.a,{children:[Object(f.jsx)(O.a,{style:S,children:Object(f.jsx)(g.a,{})}),Object(f.jsx)("br",{}),Object(f.jsx)("h2",{style:S,children:"Sign In"})]}),Object(f.jsx)("br",{}),Object(f.jsx)(x.a,{label:"Username",error:m,helperText:w,placeholder:"Enter username",fullWidth:!0,required:!0,onChange:function(e){return r(e.target.value)}}),Object(f.jsx)(x.a,{label:"Password",error:m,helperText:w,placeholder:"Enter password",type:"password",fullWidth:!0,required:!0,onChange:function(e){return o(e.target.value)}}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(p.a,{type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0"},fullWidth:!0,onClick:function(){"prakash"===n&&"prakash"===i?F.push("/main"):(v(!0),k("Incorrect credentils"))},children:"Sign in"})]})})},C=n(176),y=n(83),w=n(60),k=n(40),S=n(66),F=n.n(S),T=n(79),E=n(178),B=n(29),I=n(30),R=I.a.div(r||(r=Object(B.a)(['\n\n    background-color: white;\n    border: 1px solid #ddd;\n    border-radius: auto;\n    margin: auto;\n    padding: auto;\n     width: inherit;\n    \n    Grid{\n        \n        container\n        direction="row"\n        justify="center"\n        alignItems="center"\n    }\n\n    img{              \n        border-radius: 8px;\n        object-fit: cover;\n        padding: 20px;\n        width: 300px;        \n        margin: auto;\n        height: 300px;     \n        objectFit: \'cover\';   \n    }\n    \n  Button{\n    border-radius: 0 0 20px 20px;\n    padding: auto;\n    margin: auto;\n    width: auto;\n  }\n\n']))),A=function(e){var t=e.item,n=e.handleAddToCart;return Object(f.jsxs)(R,{children:[Object(f.jsxs)(b.a,{children:[Object(f.jsx)("img",{src:t.image,alt:t.title}),Object(f.jsx)("h3",{children:t.title}),Object(f.jsxs)("h3",{children:["Rs. ",t.price]})]}),Object(f.jsx)("div",{style:{padding:20},children:Object(f.jsx)(p.a,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){return n(t)},children:"Add to cart"})})]})},N=n(164),z=n(165),P=I.a.div(a||(a=Object(B.a)(["\nimg{\n    border: 1px solid #ddd;\n    border-radius: 50px;\n    object-fit: cover;\n    padding: 60px;\n    width: 150px;\n\n}\n\nButtonGroup{\n    width:300px\n}\n\n"]))),W=function(e){var t=e.item,n=e.addToCart,r=e.removeFromCart;return Object(f.jsxs)(P,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:t.title}),Object(f.jsxs)("div",{className:"information",children:[Object(f.jsxs)("p",{children:["Price: Rs. ",t.price]}),Object(f.jsxs)("p",{children:["Total: Rs. ",(t.amount*t.price).toFixed(2)]}),Object(f.jsx)("img",{src:t.image,alt:t.title})]}),Object(f.jsx)("br",{}),Object(f.jsxs)(N.a,{size:"large",color:"primary","aria-label":"outlined primary button group",children:[Object(f.jsx)(p.a,{size:"small",disableElevation:!0,variant:"contained",color:"primary",onClick:function(){return r(t.id)},children:"-"}),Object(f.jsxs)(p.a,{children:[Object(f.jsxs)("p",{children:[t.amount," "]})," "]}),Object(f.jsx)(p.a,{size:"small",disableElevation:!0,variant:"contained",color:"primary",onClick:function(){return n(t)},children:"+"})]})]}),Object(f.jsx)("br",{}),Object(f.jsx)(z.a,{})]})},G=I.a.aside(c||(c=Object(B.a)(["\n    color: secondary;\n    font-family: Arial, Helvetice, sans-serif;\n    width: 500px;\n    padding: 20px;\n    \n\n"]))),L=n(169),q=n(167),J=n(168),Y=n(177),D=n(166),H=n(181),U=Object(D.a)((function(e){return Object(H.a)({root:{color:"white",borderRadius:3,textAlign:"center",height:48,padding:"50px 50px"}})})),K=function(e){var t=e.cartItems,n=e.addToCart,r=e.removeFromCart,a=Object(s.useState)(!1),c=Object(u.a)(a,2),i=c[0],o=c[1],j=Object(s.useState)(""),d=Object(u.a)(j,2),l=d[0],b=d[1],h=U(),O=function(e){return e.reduce((function(e,t){return e+t.amount*t.price}),0)},x=Object(f.jsx)(q.a,{style:{alignItems:"center",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",margin:"auto",height:200,width:500},children:Object(f.jsx)(J.a,{children:Object(f.jsx)(L.a,{variant:"h5",component:"h2",className:h.root,children:l})})});return Object(f.jsxs)(G,{children:[Object(f.jsx)("h2",{children:"Your Shopping Cart"}),Object(f.jsxs)("h2",{children:["Total RS: ",O(t).toFixed(2)]}),Object(f.jsx)(z.a,{}),0===t.length?Object(f.jsx)("p",{children:"No items in cart."}):null,t.map((function(e){return Object(f.jsx)(W,{item:e,addToCart:n,removeFromCart:r},e.id)})),Object(f.jsxs)(L.a,{variant:"h2",noWrap:!0,children:[Object(f.jsx)(z.a,{}),"Total RS: ",O(t).toFixed(2)]}),Object(f.jsx)(p.a,{size:"small",disableElevation:!0,variant:"contained",style:{margin:"auto",width:500,padding:10,backgroundColor:"#006600"},onClick:function(){t.length>0?(b("Thank you for shopping with us... "),o(!0)):(b("Your cart is empty..."),o(!0))},children:"Check Out"}),Object(f.jsx)(Y.a,{open:i,onClose:function(){o(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",style:{position:"absolute",display:"flex",margin:"auto"},children:x})]})},M=n(179),Q=n(171),V=n(84),X=n.n(V),Z=n(174),$=n(172),_=n(173),ee=n(170),te=I.a.div(i||(i=Object(B.a)(["\n  margin: 30px;\n"]))),ne=(Object(I.a)(ee.a)(o||(o=Object(B.a)(["\n  position: fixed;\n  z-index: 100;\n  right: 10px;\n  top: 20px;\n"]))),function(){var e=Object(T.a)(F.a.mark((function e(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fakestoreapi.com/products");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),re=Object(D.a)((function(e){return Object(H.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),ae=function(){var e,t=re(),n=Object(s.useState)(!1),r=Object(u.a)(n,2),a=r[0],c=r[1],i=Object(s.useState)([]),o=Object(u.a)(i,2),j=o[0],d=o[1],h=Object(l.f)(),O=Object(E.a)("products",ne),x=O.data,m=O.isLoading,g=O.error,v=function(e){d((function(t){return t.find((function(t){return t.id===e.id}))?t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{amount:t.amount+1}):t})):[].concat(Object(w.a)(t),[Object(k.a)(Object(k.a)({},e),{},{amount:1})])}))};return m?Object(f.jsx)(Q.a,{}):g?Object(f.jsx)("div",{children:"Something went wrong ..."}):Object(f.jsxs)(te,{children:[Object(f.jsx)($.a,{position:"static",children:Object(f.jsxs)(_.a,{children:[Object(f.jsx)(ee.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return c(!0)},children:Object(f.jsx)(Z.a,{badgeContent:(e=j,e.reduce((function(e,t){return e+t.amount}),0)),color:"error",children:Object(f.jsx)(X.a,{})})}),Object(f.jsx)(L.a,{variant:"h6",className:t.title,children:"Welcome Prakash"}),Object(f.jsx)(p.a,{color:"inherit",onClick:function(){h.push("/ShoppingSite")},children:"LogOut"})]})}),Object(f.jsx)("br",{}),Object(f.jsx)(M.a,{anchor:"left",open:a,onClose:function(){return c(!1)},children:Object(f.jsx)(K,{cartItems:j,addToCart:v,removeFromCart:function(e){d((function(t){return t.reduce((function(t,n){return n.id===e?1===n.amount?t:[].concat(Object(w.a)(t),[Object(k.a)(Object(k.a)({},n),{},{amount:n.amount-1})]):[].concat(Object(w.a)(t),[n])}),[])}))}})}),Object(f.jsx)(b.a,{container:!0,spacing:3,children:null===x||void 0===x?void 0:x.map((function(e){return Object(f.jsx)(b.a,{item:!0,xs:12,sm:4,children:Object(f.jsx)(A,{item:e,handleAddToCart:v})},e.id)}))})]})},ce=new C.a,ie=function(){return Object(f.jsx)(y.a,{client:ce,children:Object(f.jsx)(ae,{})})},oe=n(55),se=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(oe.a,{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/ShoppingSite",children:Object(f.jsx)(v,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/main",children:Object(f.jsx)(ie,{})})]})})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,183)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};d.a.render(Object(f.jsx)(se,{}),document.getElementById("root")),je()}},[[117,1,2]]]);
//# sourceMappingURL=main.d6b05d03.chunk.js.map