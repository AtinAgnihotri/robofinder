(this.webpackJsonprobofinder=this.webpackJsonprobofinder||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(3),o=n.n(c),s=(n(12),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))}),i=n(4),h=n(5),l=n(7),u=n(6),d=(n(13),n(0)),b=function(e){e.id;var t=e.name,n=e.username,r=e.email,a="https://robohash.org/"+n+"?200x200";return Object(d.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{src:a,alt:"robo-img"}),Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:r})]})]})},j=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,t){return Object(d.jsx)(b,{id:e.id,name:e.name,username:e.username,email:e.email},t)}))})},g=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",height:"800px"},children:e.children})},f=function(e){e.searchField;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{type:"search",name:"",id:"",placeholder:"Search Robot",className:"pa3 ba b--green bg-lightest-blue",onChange:t})})},m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({robots:t})}))}},{key:"getFilteredRobot",value:function(){var e=this.state,t=e.robots,n=e.searchField.toLowerCase();return t.filter((function(e){var t=e.name.toLowerCase().includes(n),r=e.username.toLowerCase().includes(n),a=e.email.toLowerCase().includes(n);return t||r||a}))}},{key:"getNumberOfRobots",value:function(){return this.state.robots.length}},{key:"getLoadingState",value:function(){return Object(d.jsx)("h1",{className:"f2 tc",children:"Loading . . ."})}},{key:"getLoadedState",value:function(){return Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f2",children:"Robofinder"}),Object(d.jsx)(f,{searchChange:this.onSearchChange}),Object(d.jsx)("hr",{}),Object(d.jsx)(g,{children:Object(d.jsx)(j,{robots:this.getFilteredRobot()})})]})}},{key:"render",value:function(){return this.getNumberOfRobots()?this.getLoadedState():this.getLoadingState()}}]),n}(r.Component);n(15);o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),s()}},[[16,1,2]]]);
//# sourceMappingURL=main.682921ea.chunk.js.map