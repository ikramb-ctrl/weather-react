(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[1],{128:function(e,t,a){"use strict";var n=a(31),r=a.n(n);t.a=function(e,t,a){return r.a.tz(1e3*e,t).format(a)}},139:function(e,t,a){"use strict";var n=a(24),r=a.n(n),c=a(131),l=a(52),s=a.n(l),m=a(132),o=a.n(m),i=a(120),u=a(119),d=a(171),f=a(128),b=a(9);o()(s.a,{retryDelay:o.a.exponentialDelay});var p=function(e){return"".concat("https://cors-anywhere.herokuapp.com","/https://api.darksky.net/forecast/").concat("4e27157cf1858c6667c07568e8e21a56","/").concat(e,"?extend=hourly&exclude=minutely,flags")};t.a=function(e){var t,a,n,l,m,o,x,y,h;return r.a.async((function(E){for(;;)switch(E.prev=E.next){case 0:if(t=e.latlong,a={},n={},Object(i.a)(t)||Object(u.a)(t)||Object(d.a)(t)){E.next=16;break}return E.prev=4,E.next=7,r.a.awrap(s.a.get(p(t)));case 7:l=E.sent,m=l.data,o=m,Object(u.a)(o)||Object(i.a)(o)||(x=o.timezone,a=Object(c.a)({timezone:x},o.currently,{sunrise:o.daily.data[0].sunriseTime,sunset:o.daily.data[0].sunsetTime}),y={},o.hourly.data.forEach((function(e){var t=Object(f.a)(e.time,x,"MM/DD/YYYY");Object.keys(y).includes(t)?y[t].push(Object(c.a)({timezone:x},e)):y[t]=[Object(c.a)({timezone:x},e)]})),h={},o.daily.data.forEach((function(e){var t=Object(f.a)(e.time,x,"MM/DD/YYYY");h[t]=Object(c.a)({timezone:x},e)})),n={timeFrames:y,days:h}),E.next=16;break;case 13:E.prev=13,E.t0=E.catch(4),b.a(E.t0);case 16:return E.abrupt("return",{weatherCurrent:a,weatherForecast:n});case 17:case"end":return E.stop()}}),null,null,[[4,13]])}},140:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"mobile";return{width:"100%",slidesToShow:"time"===e?"tablet"===t?8:3:1,slidesToScroll:"time"===e?"tablet"===t?8:3:1,initialSlideHeight:"time"===e?100:200,slideWidth:"time"===e?"tablet"===t?1:.95:1,speed:1e3,easing:"easeSinInOut",defaultControlsConfig:{prevButtonStyle:{display:"none"},nextButtonStyle:{display:"none"},pagingDotsStyle:{fill:"#cfd9df",display:"flex",position:"relative",top:"day"===e?"25px":"35px",margin:"10px 5px"}}}}},142:function(e,t,a){"use strict";var n=a(32);t.a=function(e,t){switch(e){case"favorites":Object(n.a)({category:"Favorites",action:"Select Favorite",label:t});break;case"explore-life":Object(n.a)({category:"Explore Life",action:"Click on Explore Life",label:t});break;case"powered-by":Object(n.a)({category:"Powered By",action:"Click on Powered By",label:t})}}},144:function(e,t,a){"use strict";var n=a(131),r=a(1),c=a.n(r),l=a(14),s=a(51),m=a(31),o=a.n(m),i=function(e,t,a){return"sunrise"===e||"sunset"===e?o()(1e3*t).tz(a).format("H:mm"):o()().tz(a).format("H:mm")},u=function(e,t){var a=e.split(":")[0],n=t.split(":")[0];return Number(a)===Number(n)-1||Number(a)===Number(n)},d=function(e){var t=e.icon,a=e.timezone,n=e.sunrise,r=e.sunset,c=i("sunrise",n,a),l=i("sunset",r,a),m=i("hour",0,a),o=function(e,t,a){var n=e.split(":"),r=Object(s.a)(n,2),c=r[0],l=r[1],m=t.split(":"),o=Object(s.a)(m,2),i=o[0],u=o[1],d=a.split(":"),f=Object(s.a)(d,2),b=f[0],p=f[1];return c===i||c===b?Number(l)>=Number(u)||Number(l)<Number(p)?"day":"night":Number(c)>Number(i)&&Number(c)<Number(b)?"day":"night"}(m,c,l),d=u(m,c),f=u(m,l);if(t)switch(t){case"clear-day":return f?"dusk":d?"dawn":"clear-day";case"clear-night":return f?"dusk":d?"dawn":"clear-night";case"rain":case"snow":case"sleet":return"overcast-".concat(o);case"wind":return"cloudy-".concat(o);case"fog":return"overcast-".concat(o);case"cloudy":case"partly-cloudy-day":case"partly-cloudy-night":return"cloudy-".concat(o);case"hail":return"overcast-".concat(o);case"thunderstorm":return"thunderstorm";case"tornado":return"tornado";default:return"clear-day"}return"clear-day"},f=a(145),b=a(123),p=a(120),x=a(119),y=a(32),h=a(27),E=function(e){var t=e.address,a=e.latlong,n=e.urbanArea,l=e.weatherCurrent,m=Object(r.useContext)(b.a).updateFavorites,i=Object(r.useState)(""),u=Object(s.a)(i,2),d=u[0],E=u[1],g=Object(r.useState)(""),w=Object(s.a)(g,2),v=w[0],N=w[1],j=function(e,t){Object(y.a)({category:"Favorite City",action:"".concat(e," city"),label:t})},O=Object(r.useRef)(),k=function(){return!!localStorage.getItem("favorites")&&JSON.parse(localStorage.getItem("favorites")).filter((function(e){return e.address.cityName===t.cityName})).length>0},C=function(e){E(Object(p.a)(e)?"":e.format("MMMM Do, YYYY")),N(Object(p.a)(e)?"":e.format("dddd h:mm A")),O.current=e||null};return Object(r.useEffect)((function(){C(o()(1e3*l.time).tz(l.timezone));var e=setInterval((function(){if(l.time){var e=o.a.tz(O.current,l.timezone).add(1,"s");C(e)}}),1e3);return function(){clearInterval(e)}}),[l]),c.a.createElement("div",{className:"flex justify-between items-start"},c.a.createElement("div",{className:"pt-4 px-4"},c.a.createElement("p",{className:"font-bold"},t.cityName),c.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row font-light"},Object(x.a)(d)||Object(x.a)(v)?null:c.a.createElement(r.Fragment,null,c.a.createElement("p",null,d,c.a.createElement("span",{className:"invisible md:visible"},"\xa0|\xa0")),c.a.createElement("p",null,v)))),c.a.createElement("div",{className:"mt-6 mr-6 cursor-pointer text-2xl",title:k()?"Remove this city from favorites":"Favorite this city",onClick:function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites")),r=e.filter((function(e){return e.address.cityName===t.cityName}));if(r.length){var c=e.findIndex((function(e){return e.address.cityName===r[0].address.cityName}));if(-1!==c){var l=Object(f.a)(e);l.splice(c,1),localStorage.setItem("favorites",JSON.stringify(l)),j("remove",t.cityName),m({favorites:l})}}else{var s=[].concat(Object(f.a)(e),[{address:t,latlong:a,urbanArea:n}]);localStorage.setItem("favorites",JSON.stringify(s)),j("add",t.cityName),m({favorites:s})}}else localStorage.setItem("favorites",JSON.stringify([{address:t,latlong:a,urbanArea:n}])),j("add",t.cityName),m({favorites:[{address:t,latlong:a,urbanArea:n}]})}},k()?c.a.createElement(h.a,null):c.a.createElement(h.d,null)))},g=a(127),w=function(e){return e>=0&&e<=45?"up":e>=46&&e<=90?"up-right":e>=91&&e<=135?"right":e>=136&&e<=180?"down-right":e>=181&&e<=225?"down":e>=226&&e<=270?"down-left":e>=271&&e<=315?"left":"up-left"},v=function(e){var t=e.icon,a=e.time,n=e.timezone,r=o()(1e3*a).tz(n).format("H"),c=r>=6&&r<=18?"day":"night";if(t)switch(t){case"clear-day":return"day";case"clear-night":return"night";case"rain":return"".concat(c,"-rain");case"snow":return"".concat(c,"-snow");case"sleet":return"sleet";case"wind":case"fog":return"".concat(c,"-cloudy");case"cloudy":return"cloudy";case"partly-cloudy-day":return"day-cloudy";case"partly-cloudy-night":return"night-cloudy";case"hail":return"hail";case"thunderstorm":return"thunder";case"tornado":return"wi-tornado";default:return"wi-na"}return"wi-na"},N=function(e){return Math.round(5*(e-32)/9)},j=a(138),O=a(160),k=function(e){var t=e.type;return{"wi-day-fog":c.a.createElement(O.b,null),"wi-night-fog":c.a.createElement(O.m,null),"wi-day-windy":c.a.createElement(O.a,null),"wi-night-windy":c.a.createElement(O.l,null),"wi-tornado":c.a.createElement(O.p,null),"wi-na":c.a.createElement(O.k,null),up:c.a.createElement(O.h,null),"up-right":c.a.createElement(O.j,null),right:c.a.createElement(O.g,null),"down-right":c.a.createElement(O.e,null),down:c.a.createElement(O.c,null),"down-left":c.a.createElement(O.d,null),left:c.a.createElement(O.f,null),"up-left":c.a.createElement(O.i,null),sunrise:c.a.createElement(O.n,null),sunset:c.a.createElement(O.o,null)}[t]||c.a.createElement(O.k,null)},C=function(e){var t=e.weatherCurrent,a=Object(r.useContext)(g.a),n=a.weatherUnit,l=a.updateWeatherUnit,s=function(e){Object(y.a)({category:"Weather Unit",action:"Set Unit",label:e}),l(e)},m=function(e){return"F"===n?Math.round(t["".concat(e)]):N(t["".concat(e)])};return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"sm:flex-col md:flex md:flex-row justify-between my-2 px-6 sm:mt-5 sm:mb-5 sm:px-4"},c.a.createElement("div",{className:"flex-col sm:w-full lg:w-1/2"},c.a.createElement("div",{className:"flex flex-row justify-between sm:justify-start sm:items-center"},c.a.createElement("div",{className:"flex flex-col justify-center items-center"},c.a.createElement("div",null,v(t).startsWith("wi")?c.a.createElement("p",{className:"text-6xl sm:mx-2 mt-2",title:t.summary},c.a.createElement(k,{type:v(t)})):c.a.createElement("img",{src:"./weather/".concat(v(t),".svg"),alt:"icon",title:t.summary,className:"-mt-2 -ml-4 sm:mx-0 w-32 h-32 object-contain"})),c.a.createElement("p",{className:"hidden sm:flex sm:flex-no-wrap font-medium -mt-2 ml-3 capitalize"},t.summary)),c.a.createElement("div",{className:"flex justify-start items-center sm:-mt-3 sm:ml-3"},c.a.createElement("div",null,c.a.createElement("span",{className:"text-6xl font-bold"},m("temperature"))),c.a.createElement("p",{className:"-mt-8 text-3xl"},c.a.createElement("sup",null,"o")),c.a.createElement("div",{className:"-mt-10 mx-2 text-xl"},c.a.createElement("span",{className:"cursor-pointer ".concat("C"===n?"font-bold border-b border-light":"font-light opacity-75"),title:"Celcius",onClick:function(){return s("C")}},"C"),c.a.createElement("span",{className:"mx-1 opacity-25"},"|"),c.a.createElement("span",{className:"cursor-pointer ".concat("F"===n?"font-bold border-b border-light":"font-light opacity-75"),title:"Fahrenheit",onClick:function(){return s("F")}},"F"))))),c.a.createElement("div",{className:"flex flex-col justify-center items-center sm:mt-6 sm:w-full lg:w-1/2"},c.a.createElement("p",{className:"sm:hidden font-medium capitalize text-2xl -mt-2 mb-2"},t.summary),c.a.createElement("div",{className:"text-sm sm:text-lg ml-8"},c.a.createElement("div",{className:"flex flex-row sm:my-2"},c.a.createElement("p",{className:"font-light"},"Humidity:"),"\xa0",c.a.createElement("p",{className:"mx-1 font-bold"},Math.round(t.humidity)),c.a.createElement("p",{className:"text-sm mt-1"},c.a.createElement(j.a,null))),c.a.createElement("div",{className:"flex items-center sm:my-2"},c.a.createElement("p",null,c.a.createElement("span",{className:"font-light"},"Wind:"),"\xa0",c.a.createElement("span",{className:"font-bold"},function(){return"F"===n?"".concat(Math.round(t.windSpeed)," mph"):"".concat((e=t.windSpeed,Math.round(1.6*e))," kmph");var e}()," ")),c.a.createElement("p",{className:"text-3xl"},c.a.createElement(k,{type:w(t.windBearing)}))),c.a.createElement("p",null,c.a.createElement("span",{className:"font-light sm:my-2"},"Feels like:"),"\xa0",c.a.createElement("span",{className:"font-bold"},m("apparentTemperature")),c.a.createElement("sup",null,"o"))))))},F=a(50),S=a(133),z=function(e){var t=e.weatherCurrent,a=e.address,n=e.latlong,l=e.urbanArea;return c.a.createElement(S.a,null,c.a.createElement(r.Fragment,null,a&&t?c.a.createElement("div",null,c.a.createElement(E,{address:a,latlong:n,urbanArea:l,weatherCurrent:t}),c.a.createElement(C,{weatherCurrent:t})):c.a.createElement(F.a,null)))},M=a(24),T=a.n(M),Y=a(143),D=a(128),I=function(e){var t=e.day,a=e.index,n=e.selectedIndex,s=Object(r.useContext)(g.a).weatherUnit,m=Object(r.useContext)(l.a),o=m.theme,i=m.colorTheme,u=function(e){return"F"===s?Math.round(t["temperature".concat(e)]):N(t["temperature".concat(e)])};return c.a.createElement("div",{className:"md:hover:bg-".concat(i," md:hover:text-").concat(o," items-center text-center sm:flex-1 sm:py-1 sm:pb-3 cursor-pointer  ").concat(a===n?"bg-".concat(i," text-").concat(o):""),onClick:function(){e.selectedDay({day:t})}},c.a.createElement("div",{className:"flex flex-row flex-no-wrap sm:flex-col sm:flex-wrap justify-around items-center px-2"},c.a.createElement("p",{className:"flex w-1/6 sm:w-full sm:justify-center text-base font-semibold"},Object(D.a)(t.time,t.timezone,"ddd")),c.a.createElement("div",{className:"flex w-1/6 sm:w-full"},v(t).startsWith("wi")?c.a.createElement("p",{className:"my-1 sm:mt-1 sm:mb-3 mx-auto text-3xl",title:t.summary},c.a.createElement(k,{type:v(t)})):c.a.createElement("img",{src:"./weather/".concat(v(t),".svg"),alt:"icon",title:t.summary,className:"sm:-mt-2 sm:-mb-1 mx-auto w-12 h-12 sm:w-16 sm:h-16 object-contain"})),c.a.createElement("div",{className:"flex flex-row justify-center items-center font-light w-1/4 sm:w-full mt-1 sm:mt-0"},c.a.createElement("p",{className:"mx-2 text-xs sm:text-sm"},u("High"),c.a.createElement("sup",null,"o")),c.a.createElement("p",{className:"mx-2 text-xs"},u("Low"),c.a.createElement("sup",null,"o"))),c.a.createElement("div",{className:"".concat("flex"," flex-row justify-around sm:justify-center sm:flex sm:flex-col w-5/12 sm:w-full font-light mt-1")},c.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},c.a.createElement("p",{className:"text-xl lg:text-2xl text-sun mr-2 md:mr-3",title:"sunrise"},c.a.createElement(k,{type:"sunrise"})),c.a.createElement("p",null,Object(D.a)(t.sunriseTime,t.timezone,"h:mm"))),c.a.createElement("div",{className:"flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm"},c.a.createElement("p",{className:"text-xl lg:text-2xl text-sun mr-2 md:mr-1",title:"sunset"},c.a.createElement(k,{type:"sunset"})),c.a.createElement("p",null,Object(D.a)(t.sunsetTime,t.timezone,"HH:mm"))))))},A=function(e){var t=e.Timeframe,a=Object(r.useContext)(g.a).weatherUnit,n=Object(r.useContext)(l.a).colorTheme,s=function(e){return"F"===a?Math.round(t["".concat(e)]):N(t["".concat(e)])};return c.a.createElement("div",{className:"border-none flex flex-col justify-start items-center mx-3 mb-3 w-full font-light text-".concat(n," md:text-light")},c.a.createElement("div",null,v(t).startsWith("wi")?c.a.createElement("p",{className:"text-5xl mt-4",title:t.summary},c.a.createElement(k,{type:v(t)})):c.a.createElement("img",{src:"./weather/".concat(v(t),".svg"),alt:"icon",title:t.summary,className:"w-16 h-16 object-contain"})),c.a.createElement("p",{className:"text-base pb-1"},s("temperature"),c.a.createElement("sup",null,"o")),c.a.createElement("p",{className:"text-xs pb-1"},s("apparentTemperature"),c.a.createElement("sup",null,"o")),c.a.createElement("p",{className:"text-sm font-medium"},Object(D.a)(t.time,t.timezone,"h:mm A")))},H=a(140),J=a(122),W=function(e){var t=e.cityName,a=e.weatherCurrent,n=e.weatherForecast,l=Object(r.useState)(""),m=Object(s.a)(l,2),o=m[0],i=m[1],u=Object(r.useState)(0),d=Object(s.a)(u,2),f=d[0],b=d[1],y=a.time,h=a.timezone,E=function(e){var t=Object.keys(n.days).indexOf(e);b(-1!==t?t:0)};return Object(r.useEffect)((function(){!function(){var e;T.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:Object(p.a)(a.time)||(e=Object(D.a)(y,h,"MM/DD/YYYY"),Object(x.a)(n)||Object(p.a)(n)||(i(n.days[e]?e:""),E(n.days[e]?e:"")));case 1:case"end":return t.stop()}}))}()}),[n]),c.a.createElement(S.a,null,c.a.createElement(r.Fragment,null,Object(x.a)(n.days)||Object(x.a)(o)?c.a.createElement("div",{className:"mb-3"},Object(x.a)(n.days)?c.a.createElement(J.a,{errorMessage:"No forecast data available for this city!",showCloseBtn:!1}):c.a.createElement(F.a,{loaderText:"Fetching 7 days weather forecast for ".concat(t)})):c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"sm:hidden pb-3"},n.timeFrames[o]?c.a.createElement(Y.a,Object(H.a)("time"),n.timeFrames[o].map((function(e,t){return c.a.createElement(A,{Timeframe:e,key:t})}))):c.a.createElement(J.a,{errorMessage:"No hourly forecast available for ".concat(o)})),c.a.createElement("div",{className:"hidden sm:flex sm:pb-3 sm:mb-4"},n.timeFrames[o]?c.a.createElement(Y.a,Object(H.a)("time","tablet"),n.timeFrames[o].map((function(e,t){return c.a.createElement(A,{Timeframe:e,key:t})}))):c.a.createElement(J.a,{errorMessage:"No hourly forecast available for ".concat(o)})),c.a.createElement("div",{className:"flex flex-col mt-4 sm:mt-0 sm:flex-row w-full rounded"},Object.keys(n.days).map((function(e,t){return c.a.createElement(I,{day:n.days[e],key:t,index:t,selectedIndex:f,selectedDay:function(){return function(e){i(e),E(e)}(e)}})}))))))},B=a(142);a(167),t.a=function(e){var t=e.weatherCurrent,a=e.weatherForecast,s=e.address,m=e.latlong,o=e.urbanArea,i=Object(r.useContext)(l.a),u=i.theme,f=i.colorTheme,b={borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem"};return c.a.createElement(r.Fragment,null,c.a.createElement("div",{className:"flex flex-col justify-center items-center lg:px-5 pt-10"},c.a.createElement("div",{className:"sm:w-full lg:w-5/6 xl:max-w-6xl bg-".concat(u," text-").concat(f," border border-").concat(f," md:border-none rounded-t-2xl shadow-lg")},c.a.createElement("div",{className:"relative overflow-hidden"},c.a.createElement("img",{src:"./weather-backgrounds/".concat(d(t),".jpg"),alt:"clear day",className:"w-full object-cover object-center weather-background",style:b}),c.a.createElement("div",null,["rain","snow","sleet","hail"].includes(t.icon)&&c.a.createElement("img",{src:"./weather-backgrounds/".concat("snow"===t.icon?"snow":"rain",".svg"),alt:"clear day",className:"w-full object-cover object-center absolute top-0 right-0 bottom-0 left-0 weather-background",style:b})),c.a.createElement("div",{className:"block md:hidden absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto text-light",style:Object(n.a)({background:"rgba(0,0,0,0.2)"},b)},c.a.createElement(z,{weatherCurrent:t,address:s,latlong:m,urbanArea:o})),c.a.createElement("div",{className:"hidden md:block absolute top-0 bottom-0 left-0 right-0 my-auto mx-auto text-light",style:Object(n.a)({background:"rgba(0,0,0,0.2)"},b)},c.a.createElement(z,{weatherCurrent:t,address:s,latlong:m,urbanArea:o}),c.a.createElement(W,{cityName:s.cityName,weatherCurrent:t,weatherForecast:a}))),c.a.createElement("div",{className:"block md:hidden"},c.a.createElement(W,{cityName:s.cityName,weatherCurrent:t,weatherForecast:a})))),c.a.createElement("div",{className:"relative"},c.a.createElement("p",{className:"mx-auto text-center pt-2 pb-10 text-xs font-light text-".concat(f," bg-").concat(u)},"Powered by\xa0",c.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(u),onClick:function(){return Object(B.a)("powered-by","Dark Sky")}},"Dark Sky")),c.a.createElement("div",{className:"bg-".concat(u)},o.slug?c.a.createElement("div",{className:"mx-auto text-center pb-5"},c.a.createElement("p",null,c.a.createElement("a",{href:"https://teleport.org/cities/".concat(o.slug),target:"_blank",rel:"noreferrer noopener",className:"hover:no-underline",onClick:function(){return Object(B.a)("explore-life",o.name)}},c.a.createElement("button",{className:"bg-".concat(f," text-").concat(u," font-semibold py-3 px-6 rounded-full capitalize")},"Explore ",o.name))),c.a.createElement("p",{className:"py-1 text-xs font-light text-".concat(f)},"Powered by\xa0",c.a.createElement("a",{href:"https://teleport.org/",target:"_blank",rel:"noreferrer noopener",className:"link z-0 font-medium hover:text-".concat(u),onClick:function(){return Object(B.a)("powered-by","Teleport")}},"Teleport"))):null)))}},167:function(e,t,a){}}]);
//# sourceMappingURL=1.990ca244.chunk.js.map