(this["webpackJsonpstar-game"]=this["webpackJsonpstar-game"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/star.45dd5470.png"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAQAAABu4E3oAAAC6XpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHja7ZdbktwgDEX/WUWWgCSExHIwmKrsIMvPBdM93TOTVyVfqTZlwAIL+R5Bz4Tz29cRvuCikjkkNc8l54grlVS4ouPxusqqKaZVXw9lj9GzPdwHGCZBK9ej1T2/wq5vL9zWoOPZHnyPsG9He+DmUObKjE5/DBJ2vuyUtqNyXp1c3B5DPfhq2564Qtn3sZ2uiOL1HB4NyaBSVywkzKeQxFX7FYFcd8UtqGHHPNp9DmhUeEcCQZ4+79bG+CjQk8i3Xniv/r33Tnyu2y7vtMxbI3Q+HSD9XPwl8cPCco+InwdMbq4+ijxG9zHO6+tqylA074xaYtPNDSYekFzWaxnFcCv6tkpB8VhjA/IeWzxQGhViUBmBEnWqNOhcbaOGEBOfbGiZG8uyuRgXbjI5pVlosEmRLg6Wjc8AfEn4Hgutdctar5Fj5U6YygRngPzjEn42+CcljNGmRBT9rhXi4plZCGOSmzVmAQiNzU2XwLey8ceH/EGqgqAumR0fWONxuTiU3nJLFmfBPEV7bSEK1rcDSIS1FcGQgEDMJEqZojEbEXR0AKqInCXxAQKkyh1BchLBeWSMLYO18Y7RmsvKmacZZxNAqGQxsClSASslRf5YcuRQVdGkqllNPWjRmiWnrDlny/OQqyaWTC2bmVux6uLJ1bObuxevhYvgDNSSixUvpdTKoWKhCl8V8yssBx9ypEOPfNjhRzlqQ/q01LTlZs1babVzl45joudu3Xvp9aRw4qQ406lnPu30s5x1INeGjDR05GHDRxn1Tm1T/VD+gBptarxIzXl2pwZrMLu5oHmc6GQGYpwIxG0SQELzZBadUuJJbjKLhbEplBGkTjah0yQGhOkk1kF3dm/kfotbUP8tbvwrcmGi+xfkAtB95PYJtT5/59oidu3CqWkU7D6Mn14De50/avVv25ejl6OXo5ejl6OXo5ej/8DRwB8P+Cc2fAdTeZ49IszlYgAAASRpQ0NQSUNDIHByb2ZpbGUAACiRnZCxSsNQFIa/tGJFdFFxUIcMTkLBxUwuVSEICjFWsDqlSYrFJIYkpfgGvok+TAdB8Al8AgVn/xsdHMzihcP/cTjn/++90LKTMC3ndiHNqsL1e4PLwZXdeaPNCh122AzCMu953gmN5/MVy+hL13g1z/155qO4DKUzVRbmRQXWvtiZVrlhFWu3ff9Q/CC2ozSLxE/i7SiNDJtdP00m4Y+nuc1SnF2cm75qC5djTvGwGTJhTEJFV5qpc4TDntSlIOCeklCaEKs31UzFjaiUk8uBqC/SbRryNuo8TylDeYzlZRLuSOVp8jD/+732cVZvWuuzPCiCutVWtUYjeH+E5QGsPsPidUPWwu+3Ncw49cw/3/gF6JZQZYRssUsAAAACYktHRAD/h4/MvwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+QDEgcqNLchOOgAAACZSURBVDjL5dJBDsIgFIThP/Gx8TiWK+pWV3oFSz2BJzJpgkd4LqRgpRT2nR1kJl9IgM3nyA1p6AlXTgBnFOWBqQwMA4pygRFFUfpVSbiH3ggdPhzKkuBCx2Phd7Qs7aLwppsubRwNmWT+hSmHOHIzSehzYU0qCiUpPXpByCXHvibk0qsu5NJ3YFv+XJJ8XZhLjUKSnu3CpvIBEGVvIbHlTUcAAAAASUVORK5CYII="},,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(2),r=a.n(l),u=a(7),i=a(3),c=a(4),m=a(9),o=a(8),d=(a(15),a(5)),A=a.n(d),g=a(6),h=a.n(g),v=function(e){return s.a.createElement("button",{className:"number ".concat(e.status),onClick:function(){return e.onClick(e.value,e.status)}},e.value)},S=function(e){return s.a.createElement("img",{className:"star",src:e.url,alt:"Star",height:"40",width:"40"})},b=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).startGame=function(){var t=e.state,a=t.availableNums,n=t.randomStars,s=p.generateStars(a,9,n);e.setState({isActive:!0,randomStars:s}),e.timerInterval=setInterval(e.timerUpdate,1e3)},e.stopGame=function(t,a,n){clearInterval(e.timerInterval),e.setState({isActive:!1,timer:t,availableNums:[1,2,3,4,5,6,7,8,9],selectedNums:[],randomStars:a,selectedNumsSum:0,gameStatus:n})},e.playAgain=function(){e.setState({isActive:!1,timer:10,availableNums:[1,2,3,4,5,6,7,8,9],selectedNums:[],randomStars:9,selectedNumsSum:0,gameStatus:""})},e.timerUpdate=function(){var t=e.state,a=t.timer;0===t.availableNums.length?e.stopGame(a,0,"You Won"):a>0?e.setState({timer:a-1}):e.stopGame(0,0,"You Lost")},e.numberStatus=function(t){var a=e.state,n=a.selectedNums,s=a.availableNums,l=a.randomStars,r=a.selectedNumsSum;return s.includes(t)?"available":n.includes(t)?r>l?"wrong":"selected":"used"},e.buttonClick=function(t,a){if(e.state.isActive&&"used"!==a){var n=e.state,s=n.selectedNums,l=n.availableNums,r=n.randomStars;l.includes(t)?(s.push(t),l=l.filter((function(e){return e!==t}))):(l.push(t),s=s.filter((function(e){return e!==t})));var u=p.sum(s);u===r&&(s=[],r=p.generateStars(l,9,r)),e.setState({selectedNums:s,availableNums:l,selectedNumsSum:u,randomStars:r})}},e.toggle=function(){return e.setState({toggle:!e.state.toggle})},e.nums=[1,2,3,4,5,6,7,8,9],e.state={isActive:!1,timer:10,availableNums:[1,2,3,4,5,6,7,8,9],selectedNums:[],randomStars:9,selectedNumsSum:0,gameStatus:"",toggle:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"layout"},s.a.createElement("h1",{className:"title"},"iT mAY sTAR aLL oVER yOU "),s.a.createElement("div",{className:"playArea"},s.a.createElement("div",{className:"playArea-left",id:"test"},""!==this.state.gameStatus&&s.a.createElement("div",{className:"gameStatus"},s.a.createElement("h2",{className:"gameMessage"},this.state.gameStatus),s.a.createElement("button",{className:"btn btn-md btn-warning",onClick:this.playAgain},"Play Again")),this.nums.map((function(t){return t<=e.state.randomStars?s.a.createElement(S,{key:t,url:A.a}):null}))),s.a.createElement("div",{className:"playArea-right"},this.nums.map((function(t){return s.a.createElement(v,{key:t,value:t,status:e.numberStatus(t),onClick:e.buttonClick})})))),s.a.createElement("span",{className:"timer"},"TIMER : ",this.state.timer," sec. . ."),""===this.state.gameStatus&&!this.state.isActive&&s.a.createElement("a",{href:"#test"},s.a.createElement("button",{className:"btn btn-md btn-warning",onClick:this.startGame},"Start")),this.state.isActive&&s.a.createElement("button",{className:"btn btn-md btn-danger",onClick:function(){return e.stopGame(10,9,"")}},"Exit"),s.a.createElement("div",{className:"rules"},s.a.createElement("div",{className:"rules-title"},s.a.createElement("h2",null,"Game Play"),s.a.createElement("img",{style:{cursor:"pointer"},src:h.a,alt:"Show",onClick:this.toggle})),this.state.toggle&&s.a.createElement("div",{className:"rules-content"},s.a.createElement("p",{style:{fontSize:"20px"}},"On the left of the play area random number of stars will be displayed. You will have to select either a number or set of numbers whose value will be equal to the number of stars present on the left."),s.a.createElement("h3",null,"Color Representation:"),s.a.createElement("ul",null,s.a.createElement("li",null,"Default - Available"),s.a.createElement("li",null,"Yellow - Used"),s.a.createElement("li",null,"Blue - Currently selected"),s.a.createElement("li",null,"Red - Wrong selection")))))}}]),a}(s.a.Component),p={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},random:function(e,t){return Math.floor(Math.random()*(t-e))+e},generateStars:function(e,t,a){for(var n=[],s=0;s<e.length-1;++s)for(var l=s+1;l<e.length;++l){var r=e[s]+e[l];r<=t&&!n.includes(r)&&r!==a&&n.push(r)}return 0===n.length&&(n=Object(u.a)(e)),n[p.random(0,n.length-1)]}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.38d737b7.chunk.js.map