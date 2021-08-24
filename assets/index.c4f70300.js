import{p as e,a as t,c as a,r as n,o,b as s,t as i,n as r,d as l,F as d,e as c,f as h,g as u,w as m,h as f,i as p,j as g,k as v}from"./vendor.760b179a.js";const b={name:"HSlash"};e("data-v-9718d6aa");const w={class:"select-none uppercase text-xs font-medium text-gray-300 graphik"};t(),b.render=function(e,t,s,i,r,l){return o(),a("p",w,[n(e.$slots,"default",{},void 0,!0)])},b.__scopeId="data-v-9718d6aa";const y={name:"HImage",props:{src:String}};e("data-v-17c6f86b");const x={class:"absolute h-full w-full top-0 left-0"},k=["src"],_=s("div",{class:"absolute h-full w-full top-0 left-0 bg-gradient-to-r from-black via-black opacity-70 gradient-rotate-180"},null,-1);t(),y.render=function(e,t,n,i,r,l){return o(),a("div",x,[s("img",{class:"absolute h-full w-full top-0 left-0 object-cover",src:n.src},null,8,k),_])},y.__scopeId="data-v-17c6f86b";const S={name:"HText",props:{content:String,delay:Number,animation:String},data:()=>({isOnDelay:!0}),methods:{setDelay(){this.isOnDelay=!0,setTimeout((()=>{this.isOnDelay=!1}),200*this.delay)}},mounted(){this.setDelay()}};e("data-v-594b0925");const A={class:"overflow-hidden p-2"};t(),S.render=function(e,t,n,l,d,c){return o(),a("a",A,[s("span",{ref:"text",class:r("relative block "+n.animation),style:"left:1000px; opacity: 0"},i(n.content),3)])},S.__scopeId="data-v-594b0925";const T={name:"HAnimateText",props:["animation","contents"]};T.render=function(e,t,n,r,h,u){return o(!0),a(d,null,l(n.contents,((e,t)=>(o(),a("div",{key:t,class:"overflow-hidden"},[s("p",{ref:"text",class:"relative block",style:c("left: 1000px; opacity: 0; animation: ease-out "+n.animation+(t+1)+" 0.6s forwards")},i(e),5)])))),128)},T.__scopeId="data-v-53c59c5e";const I={name:"VCarouselItem",props:{contents:Array,link:String,index:String,background:String,bottomContent:String,isActive:Boolean,isLeaving:Boolean,isNext:Boolean},watch:{isActive(e){}},components:{HAnimateText:T,HText:S,HImage:y,HSlash:b}};e("data-v-1464e150");const C={class:"flex flex-col text-left h-fit w-fit graphik relative z-30 mr-48"},W=["href"];t(),I.render=function(e,t,n,i,l,d){const c=h("HAnimateText"),p=h("HSlash"),g=h("HImage");return o(),a("div",{class:r("flex h-full w-full items-center justify-center"+(n.isActive?"":" hidden"))},[s("div",C,[u(p,{class:"absolute -left-15vw top-0"},{default:m((()=>[u(c,{contents:["/ "+n.index],animation:n.isLeaving?"leftOut":"leftIn"},null,8,["contents","animation"])])),_:1}),n.isActive||n.isLeaving?(o(),a("div",{key:0,class:"text-7xl text-white font-thin",href:n.link},[u(c,{contents:n.contents,animation:n.isLeaving?"leftOut":"leftIn"},null,8,["contents","animation"])],8,W)):f("",!0),u(p,{class:"absolute -bottom-40"},{default:m((()=>[u(c,{contents:["/ "+n.bottomContent],animation:n.isLeaving?"leftOut":"leftIn"},null,8,["contents","animation"])])),_:1})]),u(g,{class:"z-0",src:n.background},null,8,["src"])],2)},I.__scopeId="data-v-1464e150";const D={name:"HLink",components:{HSlash:b},props:{mouseAnimation:{default:null}},data:()=>({hovered:!1}),methods:{enterHover(e){this.hovered=!0,e.pageX,e.pageY},leaveHover(e){this.hovered=!1}},mounted(){}};e("data-v-5e9dca21");const H={ref:"magnet",class:"transform w-16 h-16 hover:scale-125 origin-center opacity-0 top-4 left-4 hover:opacity-25 fade absolute rounded-full border-2 border-white transition-all duration-300 block"};t(),D.render=function(e,t,i,r,l,d){const c=h("HSlash");return o(),a("div",{ref:"container",class:"cursor-pointer p-8 relative",onMouseover:t[0]||(t[0]=(...e)=>d.enterHover&&d.enterHover(...e)),onMouseleave:t[1]||(t[1]=(...e)=>d.leaveHover&&d.leaveHover(...e)),onMousemove:t[2]||(t[2]=(...e)=>d.enterHover&&d.enterHover(...e))},[u(c,null,{default:m((()=>[n(e.$slots,"default",{},void 0,!0)])),_:3}),s("span",H,null,512)],544)},D.__scopeId="data-v-5e9dca21";const j={name:"VCarousel",components:{HLink:D,VCarouselItem:I},computed:{},data:()=>({currentSlide:0,slides:[{id:"01",contents:["We move the","Digital Industry","Forward."],linkedContent:"",background:"/assets/image.3ed2933b.webp",bottom:"Digital Agency"},{id:"02",contents:["We move the","Digital Industry","Forward."],linkedContent:"",background:"",bottom:"Digital Agency"}],isLeaving:!1,isNext:!1}),methods:{changeSlide(e=1){this.isLeaving=!0,this.isNext=e>0,setTimeout((()=>{this.currentSlide=this.currentSlide+e,this.currentSlide>=this.slides.length?this.currentSlide=0:this.currentSlide<0&&(this.currentSlide=this.slides.length-1),this.isLeaving=!1}),500)}}};e("data-v-c41a18d0");const F=s("div",null,null,-1),L={class:"h-screen relative bg-black"},B={class:"absolute bottom-16 right-16 flex items-center"},O=g(" Prev "),z=s("div",{class:"block h-0.25 w-32 bg-gray-400 rounded-full"},null,-1),V=g(" Next ");t(),j.render=function(e,t,n,i,r,c){const f=h("VCarouselItem"),g=h("HLink");return o(),a(d,null,[F,s("div",L,[(o(!0),a(d,null,l(r.slides,((e,t)=>(o(),p(f,{key:t,"is-leaving":t===r.currentSlide&&r.isLeaving,"is-active":t===r.currentSlide,"is-next":r.isNext,contents:e.contents,link:e.linkedContent,index:e.id,background:e.background,"bottom-content":e.bottom},null,8,["is-leaving","is-active","is-next","contents","link","index","background","bottom-content"])))),128)),s("div",B,[u(g,{onClick:t[0]||(t[0]=e=>c.changeSlide(-1))},{default:m((()=>[O])),_:1}),z,u(g,{onClick:t[1]||(t[1]=e=>c.changeSlide())},{default:m((()=>[V])),_:1})])])],64)},j.__scopeId="data-v-c41a18d0";const P={name:"HArrow",components:{HLink:D}};e("data-v-51291176");const E={class:"flex flex-row items-center nowrap relative graphik"},M=s("span",{class:"transform-gpu text-sm font-black transition duration-200 block scale-150"}," ⟶ ",-1);t(),P.render=function(e,t,s,i,r,l){const d=h("HLink");return o(),a("div",E,[n(e.$slots,"default",{},void 0,!0),u(d,{class:"absolute left-0 text-sm"},{default:m((()=>[M])),_:1})])},P.__scopeId="data-v-51291176";const R={name:"VContainer",components:{HArrow:P,HSlash:b}};e("data-v-38d9a052");const Y={class:"py-32 flex items-center justify-center graphik"},$={class:"relative mx-16 py-12 w-120 flex flex-wrap gap-10 items-end justify-between"},N=g(" / Expertise "),G=s("p",{class:"max-w-[480px] text-4xl font-thin text-left leading-snug"},[g(" Elevating "),s("a",{class:"cursor-pointer border-b-2 border-white"},"Brands"),g(" through innovation in Digital Transformation. ")],-1),J=s("p",{class:"graphik font-medium"},"What we do",-1);t(),R.render=function(e,t,n,i,r,l){const d=h("HSlash"),c=h("HArrow");return o(),a("div",Y,[s("div",$,[u(d,{class:"absolute top-0"},{default:m((()=>[N])),_:1}),G,u(c,{class:"ml-auto"},{default:m((()=>[J])),_:1})])])},R.__scopeId="data-v-38d9a052";const q={name:"Home",components:{VContainer:R,VCarousel:j}};q.render=function(e,t,n,s,i,r){const l=h("VCarousel"),c=h("VContainer");return o(),a(d,null,[u(l),u(c,{class:"bg-black text-white"})],64)};const K={name:"SmallCaps"};e("data-v-2332bbcc");const X={class:"small_caps my-6"};t(),K.render=function(e,t,s,i,r,l){return o(),a("p",X,[n(e.$slots,"default",{},void 0,!0)])},K.__scopeId="data-v-2332bbcc";const Q={name:"Section",props:{backgroundColor:{default:"white"}},computed:{classes(){return"bg-"+this.backgroundColor+" container-section"}}};Q.render=function(e,t,s,i,l,d){return o(),a("div",{class:r(d.classes)},[n(e.$slots,"default",{},void 0,!0)],2)},Q.__scopeId="data-v-9cb599c8";const U={name:"Container"};e("data-v-a8d8b556");const Z={class:"px-10vw mx-auto w-full",style:{"max-width":"1280px"}};t(),U.render=function(e,t,s,i,r,l){return o(),a("div",Z,[n(e.$slots,"default",{},void 0,!0)])},U.__scopeId="data-v-a8d8b556";const ee={name:"TextMedium"};e("data-v-5235e1ce");const te={class:"font-light font_medium my-11"};t(),ee.render=function(e,t,s,i,r,l){return o(),a("h3",te,[n(e.$slots,"default",{},void 0,!0)])},ee.__scopeId="data-v-5235e1ce";const ae={name:"IndustryRecognition",components:{TextMedium:ee,SmallCaps:K,Container:U,Section:Q}};e("data-v-3f3ec86a");const ne={class:"flex mx-auto",style:{"max-width":"900px"}},oe={class:"block w-2/3"},se=g(" / Industry Recognition "),ie=g(" Nominated as Agency of the Year amongst best Digital Agencies Worldwide. "),re=s("div",{class:"flex w-1/3 items-end pb-8"},[s("div",null,[s("img",{src:"/assets/badge.f11236b8.webp",width:"200",class:"mr-9",alt:"Agency of the Year: Fleava - Bali & Jakarta, Singapore Digital Agency"})])],-1);t(),ae.render=function(e,t,a,n,i,r){const l=h("SmallCaps"),d=h("TextMedium"),c=h("Container"),f=h("Section");return o(),p(f,{class:"pb-[360px]"},{default:m((()=>[u(c,null,{default:m((()=>[s("div",ne,[s("div",oe,[u(l,null,{default:m((()=>[se])),_:1}),u(d,null,{default:m((()=>[ie])),_:1})]),re])])),_:1})])),_:1})},ae.__scopeId="data-v-3f3ec86a";const le={name:"Video"};e("data-v-e4aeabd4");const de={class:"video-container",muted:"muted","data-scroll":"",playsinline:"","data-scroll-speed":"-3",autoplay:"",loop:"loop"},ce=[s("source",{src:"/assets/trophy.b89f1c7f.mp4",type:"video/mp4"},null,-1)];t(),le.render=function(e,t,n,s,i,r){return o(),a("video",de,ce)},le.__scopeId="data-v-e4aeabd4";const he={name:"FlyingWWW",components:{Video:le,Section:Q}};e("data-v-de766f94");const ue={class:"relative w-[83%] h-[85vh] mb-[-100px] max-h-[700px] overflow-hidden x-3 transform translate-y-[-35%] z-30 overflow-hidden"};t(),he.render=function(e,t,a,n,i,r){const l=h("Video"),d=h("Section");return o(),p(d,{"background-color":"gray",class:"p-none"},{default:m((()=>[s("a",null,[s("div",ue,[u(l,{class:"absolute z-10 top-0 bg-black w-[110%] h-[110%] flex justify-center items-center"})])])])),_:1})},he.__scopeId="data-v-de766f94";var me=[{index:"01",title:"Commarts: Behind our Digital Transformation campaign",link:"journal/transform-story",excerpt:"We've been interviewed with Communication Arts — the largest international trade journal of visual communications — about our campaign: Transform with Fleava.",contents:["# We've been interviewed with Communication Arts — the largest international trade journal of visual communications — about our Digital Transformation campaign: Transform with Fleava.","On our [previous interview](https://example.com) with Communication Arts, we've explained the Story behind the revamp project of our corporate website. And now we get a chance to tell the story behind our new campaign, what drives us, what it's about, and we talked a bit about the design and technology aspect of the landing page. And here's the story.","# What is the background of the project?","The pandemic has affected many businesses worldwide, forcing them to review their business strategies to overcome the crisis. It’s not easy for anyone, but it’s even more difficult for companies that still rely on the traditional way of doing things: selling offline, advertising on print media, relying on walk-ins—the list goes on. We have seen many local businesses closing their doors for the last time, and their number just keeps growing.","The only way businesses can succeed in a post-pandemic era is through digital transformation. It’s no longer a “nice-to-have” strategy but the very key to a company’s survival. But it’s not as easy as it sounds: digital transformation, for most, means changing business models entirely. For some, they will have to face drastic changes in their company cultures, and be open to experimentation and failures.","That’s where we come in. We want to help businesses get through the post-pandemic era and help them transform to digital. We’ve been in the digital landscape for more than 10 years; we have the team and expertise to help businesses undergo a digital transformation.","# What is the core design of the project?","We wanted to bring up the “dark” side of the problem—hence the colors, the static effects and the RGB-color-shifting effect as you scroll through the site. At the same time, we used a fluid-scrolling effect on the images to make it more playful and represent how companies need to be more “fluid” in nature when undergoing digital transformation. One more detail is the blue cross symbol, which represents digital aid.","# What are your favourite details on the site?","When you scroll through the page, you’ll notice a black rectangle on the background that rotates as we scroll. That represents a business or individual free falling through the webpage. And when it reaches the very bottom, it lands perfectly on the call-to-action: Let’s Talk. Basically, we wanted to show our empathy to those who are falling, and when they’ve hit rock bottom, we’re here to help.","# Which thechnologies did you use on the development of the site?","On the front end, this is a React and Node.js web app, combined with three.js, WebGL and GSAP for the animations. On the back end, we used our own CMS product, VOLD. It’s the easiest, most powerful and yet simplest CMS we have ever experienced. It uses the same JavaScript languages, live web editor, modular, headless, AWS integration, and basically all the latest web technology has to offer.","Read the full Story [here](http://example.com)."]},{index:"02",title:"Fleava is nominated as the 2020 Designer of the Year on CSS Design Awards.",link:"journal/designer-of-the-year",excerpt:"CSSDA is awarding those that inspire the rest of us to be more creative, more innovative and more inspiring. This year, Fleava is nominated as the Designer of the Year (Agency) on their 2020 DOTD Awards.",contents:["# CSSDA is awarding those that inspire the rest of us to be more creative, more innovative and more inspiring. This year, Fleava is nominated as the Designer of the Year (Agency) on their 2020 DOTD Awards.","The web design and dev industry has come so far so quickly that it almost seems hard to believe. Time flies when you are working hard yet sometimes we must pause and give praise to those that push the envelope. That's what DOTY is all about. Awarding those that inspire the rest of us to be more creative, more innovative and more inspiring. It's time to raise your virtual glass (or real glass) to send a big 'pat on the back' to those that the industry has deemed be the best designers and developers of 2020!","This year, Fleava has nominated as the Designer of the Year (Agency), among 21 other nominees out of thousands of best Digital Agencies worldwide.","Visit our nomination page [here](http://example.com)."]},{index:"03",title:"Fleava is nominated as the 2020 Agency of the Year on Awwwards.",excerpt:"Awwwards recognizes the talent and effort of industry-leading web professionals and agencies all around the world. This year, Fleava is nominated as the Agency of the Year on their 2020 Annual Awards.",contents:["# Awwwards recognizes the talent and effort of industry-leading web professionals and agencies all around the world. This year, Fleava is nominated as the Agency of the Year on their 2020 Annual Awards.","At the end of every year, Awwward's International Jury (consists of world-renowned designers and developers) select the most dazzling projects, companies, and professionals around the world throughout the year, to be recognized as the winner of their annual awards. This competition has multiple categories such as Sites of the Year, Agency of the Year, Independent of the Year, and so on. And there will only be one winner for each category.","This year, Fleava has been once again nominated as the Agency of the Year, among 39 other nominees out of thousands of best Digital Agencies worldwide.","However given the current circumstance, there won't be any physical event held this year as per the annual traditions — so the Awwwards team is working on a virtual prize-giving ceremony to reward, as always, the talent and effort of the best studios, agencies, and independent professionals.","Visit our nomination page [here](http://example.com)."]},{index:"04",title:"Commarts: Behind our Digital Transformation campaign",link:"journal/agency-of-the-year-2020",excerpt:"We've been interviewed with Communication Arts — the largest international trade journal of visual communications — about our Digital Transformation campaign: Transform with Fleava.",contents:["# We've been interviewed with Communication Arts — the largest international trade journal of visual communications — about our Digital Transformation campaign: Transform with Fleava.","On our [previous interview](https://example.com) with Communication Arts, we've explained the Story behind the revamp project of our corporate website. And now we get a chance to tell the story behind our new campaign, what drives us, what it's about, and we talked a bit about the design and technology aspect of the landing page. And here's the story.","# What is the background of the project?","The pandemic has affected many businesses worldwide, forcing them to review their business strategies to overcome the crisis. It’s not easy for anyone, but it’s even more difficult for companies that still rely on the traditional way of doing things: selling offline, advertising on print media, relying on walk-ins—the list goes on. We have seen many local businesses closing their doors for the last time, and their number just keeps growing.","The only way businesses can succeed in a post-pandemic era is through digital transformation. It’s no longer a “nice-to-have” strategy but the very key to a company’s survival. But it’s not as easy as it sounds: digital transformation, for most, means changing business models entirely. For some, they will have to face drastic changes in their company cultures, and be open to experimentation and failures.","That’s where we come in. We want to help businesses get through the post-pandemic era and help them transform to digital. We’ve been in the digital landscape for more than 10 years; we have the team and expertise to help businesses undergo a digital transformation.","# What is the core design of the project?","We wanted to bring up the “dark” side of the problem—hence the colors, the static effects and the RGB-color-shifting effect as you scroll through the site. At the same time, we used a fluid-scrolling effect on the images to make it more playful and represent how companies need to be more “fluid” in nature when undergoing digital transformation. One more detail is the blue cross symbol, which represents digital aid.","# What are your favourite details on the site?","When you scroll through the page, you’ll notice a black rectangle on the background that rotates as we scroll. That represents a business or individual free falling through the webpage. And when it reaches the very bottom, it lands perfectly on the call-to-action: Let’s Talk. Basically, we wanted to show our empathy to those who are falling, and when they’ve hit rock bottom, we’re here to help.","# Which thechnologies did you use on the development of the site?","On the front end, this is a React and Node.js web app, combined with three.js, WebGL and GSAP for the animations. On the back end, we used our own CMS product, VOLD. It’s the easiest, most powerful and yet simplest CMS we have ever experienced. It uses the same JavaScript languages, live web editor, modular, headless, AWS integration, and basically all the latest web technology has to offer.","Read the full Story [here](http://example.com)."]},{index:"05",title:"Commarts: Behind our Digital Transformation campaign",excerpt:"We've been interviewed with Communication Arts — the largest international trade journal of visual communications — about our Digital Transformation campaign: Transform with Fleava.",contents:["# We've been interviewed with Communication Arts — the largest international trade journal of visual communications — about our Digital Transformation campaign: Transform with Fleava.","On our [previous interview](https://example.com) with Communication Arts, we've explained the Story behind the revamp project of our corporate website. And now we get a chance to tell the story behind our new campaign, what drives us, what it's about, and we talked a bit about the design and technology aspect of the landing page. And here's the story.","# What is the background of the project?","The pandemic has affected many businesses worldwide, forcing them to review their business strategies to overcome the crisis. It’s not easy for anyone, but it’s even more difficult for companies that still rely on the traditional way of doing things: selling offline, advertising on print media, relying on walk-ins—the list goes on. We have seen many local businesses closing their doors for the last time, and their number just keeps growing.","The only way businesses can succeed in a post-pandemic era is through digital transformation. It’s no longer a “nice-to-have” strategy but the very key to a company’s survival. But it’s not as easy as it sounds: digital transformation, for most, means changing business models entirely. For some, they will have to face drastic changes in their company cultures, and be open to experimentation and failures.","That’s where we come in. We want to help businesses get through the post-pandemic era and help them transform to digital. We’ve been in the digital landscape for more than 10 years; we have the team and expertise to help businesses undergo a digital transformation.","# What is the core design of the project?","We wanted to bring up the “dark” side of the problem—hence the colors, the static effects and the RGB-color-shifting effect as you scroll through the site. At the same time, we used a fluid-scrolling effect on the images to make it more playful and represent how companies need to be more “fluid” in nature when undergoing digital transformation. One more detail is the blue cross symbol, which represents digital aid.","# What are your favourite details on the site?","When you scroll through the page, you’ll notice a black rectangle on the background that rotates as we scroll. That represents a business or individual free falling through the webpage. And when it reaches the very bottom, it lands perfectly on the call-to-action: Let’s Talk. Basically, we wanted to show our empathy to those who are falling, and when they’ve hit rock bottom, we’re here to help.","# Which thechnologies did you use on the development of the site?","On the front end, this is a React and Node.js web app, combined with three.js, WebGL and GSAP for the animations. On the back end, we used our own CMS product, VOLD. It’s the easiest, most powerful and yet simplest CMS we have ever experienced. It uses the same JavaScript languages, live web editor, modular, headless, AWS integration, and basically all the latest web technology has to offer.","Read the full Story [here](http://example.com)."]}];const fe={name:"TextLarge"};e("data-v-750bbb4c");const pe={class:"v-text-large"};t(),fe.render=function(e,t,s,i,r,l){return o(),a("p",pe,[n(e.$slots,"default",{},void 0,!0)])},fe.__scopeId="data-v-750bbb4c";const ge={name:"TextSmall"};e("data-v-2abf1464");const ve={class:"v-text"};t(),ge.render=function(e,t,s,i,r,l){return o(),a("p",ve,[n(e.$slots,"default",{},void 0,!0)])},ge.__scopeId="data-v-2abf1464";const be={name:"TextExtraSmall"};e("data-v-bd93c5f4");const we={class:"v-text"};t(),be.render=function(e,t,s,i,r,l){return o(),a("p",we,[n(e.$slots,"default",{},void 0,!0)])},be.__scopeId="data-v-bd93c5f4";const ye={name:"StoryCard",components:{TextExtraSmall:be,TextSmall:ge,SmallCaps:K,TextLarge:fe},props:{title:String,description:String,index:{default:1}}};e("data-v-69c5bd6a");const xe={class:"story-card cursor-pointer"},ke={class:"block py-10 border-b-1 border-gray-500 group hover:border-white transition duration-300"},_e={class:"flex items-start justify-start relative"},Se=g("/ News & Stories"),Ae=s("span",{class:"absolute right-0 top-0 font-thin text-gray-500 group-hover:text-white transition duration-300",style:{"font-size":"60px","line-height":"0.5"}},"+",-1);t(),ye.render=function(e,t,n,r,l,d){const c=h("SmallCaps"),f=h("TextSmall"),p=h("TextExtraSmall");return o(),a("div",xe,[s("a",ke,[s("div",_e,[u(c,{class:"mt-2 mr-0"},{default:m((()=>[g(" / "+i(n.index),1)])),_:1}),u(f,{class:"v-title"},{default:m((()=>[g(i(n.title),1)])),_:1}),u(p,{class:"v-description"},{default:m((()=>[g(i(n.description)+" ",1),u(c,{class:"opacity-25 mb-0"},{default:m((()=>[Se])),_:1})])),_:1}),Ae])])])},ye.__scopeId="data-v-69c5bd6a";const Te=me,Ie={name:"FeaturedStories",components:{HArrow:P,SmallCaps:K,StoryCard:ye,Container:U,Section:Q},data:()=>({stories:Te})};e("data-v-3e139d74");const Ce={class:"flex"},We={class:"block flex-grow flex-shrink"},De={class:"relative mt-[100px] ml-10"},He=g(" / Featured Stories "),je={class:"w-full flex items-center mt-10"},Fe=g(" Explore the Journal ");t(),Ie.render=function(e,t,n,i,r,c){const f=h("SmallCaps"),g=h("StoryCard"),v=h("HArrow"),b=h("Container"),w=h("Section");return o(),p(w,{class:"pt-none text-white","background-color":"gray"},{default:m((()=>[u(b,null,{default:m((()=>[s("div",Ce,[s("div",We,[s("div",De,[u(f,null,{default:m((()=>[He])),_:1}),(o(!0),a(d,null,l(r.stories.filter(((e,t)=>t<3)),((e,t)=>(o(),p(g,{key:t,title:e.title,description:e.excerpt,index:1+t},null,8,["title","description","index"])))),128))]),s("div",je,[u(v,{class:"mx-auto"},{default:m((()=>[Fe])),_:1})])])])])),_:1})])),_:1})},Ie.__scopeId="data-v-3e139d74";const Le={name:"HParallax",props:{speed:{default:.5},zIndex:{default:1}},data:()=>({currentTop:0,hasMounted:!1}),mounted(){this.hasMounted||window.addEventListener("scroll",(e=>{let t=this.$refs.parent.getBoundingClientRect().y;this.currentTop=-this.speed*t,this.$refs.container.style.top=this.currentTop+"px"})),this.hasMounted=!0}};e("data-v-9daee78a");const Be={class:"relative h-screen w-full h-[120vh]",ref:"parent"};t(),Le.render=function(e,t,i,r,l,d){return o(),a("div",Be,[n(e.$slots,"fixed",{},void 0,!0),s("div",{class:"absolute w-full h-[120vh] top-0",ref:"container",style:c("z-index: "+i.zIndex)},[n(e.$slots,"parallax",{},void 0,!0)],4)],512)},Le.__scopeId="data-v-9daee78a";const Oe={name:"Parallax",props:{url:{default:"../assets/about.webp"}},components:{HParallax:Le,TextLarge:fe,Container:U,Section:Q,SmallCaps:K}};e("data-v-82686cf8");const ze=s("img",{class:"w-full h-full object-cover",src:"/assets/about.2f2b4b01.webp"},null,-1),Ve={class:"h-screen w-full z-10 relative"},Pe=g(" / THE AGENCY "),Ee=g(" We do amazing"),Me=s("br",null,null,-1),Re=g("things with amazing"),Ye=s("br",null,null,-1),$e=g("People. ");t(),Oe.render=function(e,t,a,n,i,r){const l=h("SmallCaps"),d=h("TextLarge"),c=h("Container"),f=h("HParallax"),g=h("Section");return o(),p(g,{class:"p-none text-white overflow-hidden","background-color":"black"},{default:m((()=>[u(f,null,{parallax:m((()=>[ze])),fixed:m((()=>[u(f,{"z-index":"3",speed:"0.3"},{parallax:m((()=>[s("a",null,[s("div",Ve,[u(c,{class:"top-[40vh] absolute"},{default:m((()=>[u(l,null,{default:m((()=>[Pe])),_:1}),u(d,{class:"my-14"},{default:m((()=>[Ee,Me,Re,Ye,$e])),_:1})])),_:1})])])])),_:1})])),_:1})])),_:1})},Oe.__scopeId="data-v-82686cf8";const Ne={name:"FooterDetails",components:{TextExtraSmall:be}};e("data-v-028e7c78");const Ge={class:"w-full h-full flex flex-col items-start justify-center footer-meta"},Je=s("a",{href:"mailto:ali5alkaf5@gmail.com",class:"font-thin text-gray-400 relative slider-parent",style:{"font-size":"80px"}},[s("span",null,"hello@fleava.com"),s("span",{class:"slider"})],-1),qe={class:"w-full mt-24 group-hover text-gray-300 hover:text-gray-400 transition duration-200"},Ke={class:"flex gap-20"},Xe=g(" Singapore "),Qe=s("p",{class:"address"},[s("b",{class:"font-black"},"FLEAVA PTE. LTD."),s("br"),g(" 160 Robinson Road, #14-04"),s("br"),g(" Singapore Business Federation"),s("br"),g(" Centre - 068914, Singapore"),s("br")],-1),Ue=g(" Bali "),Ze=s("p",{class:"address"},[s("b",{class:"font-black"},"PT FLEAVA DIGITAL MEDIA"),s("br"),g(" Jalan Merta Agung, No.25,"),s("br"),g(" Kerobokan Kelod, Badung,"),s("br"),g(" Bali - 80361, Indonesia"),s("br")],-1),et=g(" Home "),tt=g(" Works "),at=g(" Expertise "),nt=g(" About "),ot=g(" Journal "),st=g(" Awards "),it=g(" Brands "),rt=g(" Careers "),lt=g(" Inquiries "),dt=g(" Transform ⟶ "),ct={class:"mt-8 flex"},ht=g(" Fb "),ut=g(" Tw "),mt=g(" Ig "),ft=g(" In "),pt=g(" Bw "),gt={class:"mt-2 flex items-center"},vt=s("a",{class:"text-gray-500 small mr-1"}," @2021 ",-1),bt=g(" Fleava. "),wt=g(" Terms. "),yt=g(" Sitemap. ");t(),Ne.render=function(e,t,n,i,r,l){const d=h("TextExtraSmall");return o(),a("div",Ge,[Je,s("div",qe,[s("div",Ke,[s("div",null,[u(d,{class:"cursor-pointer hover:text-gray-300 transition duration-200"},{default:m((()=>[Xe])),_:1}),Qe]),s("div",null,[u(d,{class:"cursor-pointer hover:text-gray-300 transition duration-200"},{default:m((()=>[Ue])),_:1}),Ze]),s("div",null,[u(d,{class:"homer"},{default:m((()=>[et])),_:1}),u(d,{class:"homer"},{default:m((()=>[tt])),_:1}),u(d,{class:"homer"},{default:m((()=>[at])),_:1}),u(d,{class:"homer"},{default:m((()=>[nt])),_:1}),u(d,{class:"homer"},{default:m((()=>[ot])),_:1})]),s("div",null,[u(d,{class:"homer"},{default:m((()=>[st])),_:1}),u(d,{class:"homer"},{default:m((()=>[it])),_:1}),u(d,{class:"homer"},{default:m((()=>[rt])),_:1}),u(d,{class:"homer"},{default:m((()=>[lt])),_:1}),u(d,{class:"homer"},{default:m((()=>[dt])),_:1})])]),s("div",ct,[u(d,{class:"small-link"},{default:m((()=>[ht])),_:1}),u(d,{class:"small-link"},{default:m((()=>[ut])),_:1}),u(d,{class:"small-link"},{default:m((()=>[mt])),_:1}),u(d,{class:"small-link"},{default:m((()=>[ft])),_:1}),u(d,{class:"small-link"},{default:m((()=>[pt])),_:1})]),s("div",gt,[vt,u(d,{class:"small-link"},{default:m((()=>[bt])),_:1}),u(d,{class:"small-link"},{default:m((()=>[wt])),_:1}),u(d,{class:"small-link"},{default:m((()=>[yt])),_:1})])])])},Ne.__scopeId="data-v-028e7c78";const xt={name:"Footer",components:{FooterDetails:Ne,TextExtraSmall:be,HParallax:Le,Section:Q}};e("data-v-7189463f");const kt=s("div",{class:"block w-full h-full absolute bg-gradient z-10"},null,-1),_t=s("img",{src:"/assets/footer.8cce9236.webp",class:"w-full h-full object-cover overflow-hidden"},null,-1);t(),xt.render=function(e,t,a,n,s,i){const r=h("FooterDetails"),l=h("HParallax"),d=h("Section");return o(),p(d,{"background-color":"black",class:"p-none text-white w-full h-screen overflow-hidden"},{default:m((()=>[u(l,null,{parallax:m((()=>[kt,_t])),fixed:m((()=>[u(l,{"z-index":"2",speed:"0.4"},{parallax:m((()=>[u(r)])),_:1})])),_:1})])),_:1})},xt.__scopeId="data-v-7189463f";const St={name:"Percobaan",components:{Footer:xt,Parallax:Oe,FeaturedStories:Ie,FlyingWWW:he,IndustryRecognition:ae,SmallCaps:K}};St.render=function(e,t,n,s,i,r){const l=h("Parallax"),c=h("IndustryRecognition"),m=h("FlyingWWW"),f=h("FeaturedStories"),p=h("Footer");return o(),a(d,null,[u(l),u(c),u(m),u(f),u(p)],64)};const At={name:"App",components:{Percobaan:St,Home:q}};At.render=function(e,t,a,n,s,i){const r=h("Percobaan");return o(),p(r,{class:"graphik app"})};v(At).mount("#app");
