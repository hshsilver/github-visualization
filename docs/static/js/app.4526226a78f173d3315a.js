webpackJsonp([1],{0:function(t,e){},"10kp":function(t,e){},"7zck":function(t,e){},Fiiu:function(t,e){},Gg6h:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-navigation-drawer",{attrs:{app:""}},[n("v-toolbar",{attrs:{flat:""}},[t._v("\n      Gitlab Dashboard\n    ")]),t._v(" "),n("v-divider"),t._v(" "),n("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.items,function(e){return n("v-list-tile",{key:e.title,on:{click:function(n){t.switchComponent(e.to)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}))],1),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),t._v(" "),n("v-footer",{attrs:{app:""}})],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App",data:function(){return{items:[{title:"Config",icon:"dashboard",to:"config"},{title:"Main",icon:"question_answer",to:"main"}]}},methods:{switchComponent:function(t){this.$router.push(t)}}},a,!1,function(t){n("NnMq")},null,null).exports,o=n("/ocq"),s={name:"ProjectPlot",data:function(){return{g:null,height:700,areaScale:null,textScale:null,simulation:null,div:null}},computed:{repositoryList:function(){return this.$store.state.userinfo.repositoryBeanList}},methods:{initChartContainer:function(){if(!this.g){var t=this.$d3.select("#projectViewSvg");this.g=t.append("g"),this.div=this.$d3.select("#projectViewDiv")}},startDisplay:function(){var t=this;this.areaScale=this.$d3.scaleSqrt().domain([this.$d3.min(this.repositoryList,function(t){return t.count}),this.$d3.max(this.repositoryList,function(t){return t.count})]).range([20,80]),this.textScale=this.$d3.scaleSqrt().domain([this.$d3.min(this.repositoryList,function(t){return t.count}),this.$d3.max(this.repositoryList,function(t){return t.count})]).range([6,24]);var e=this,n=this.div.style("width");this.width=parseFloat(n.substr(0,n.length-2)),this.simulation=this.$d3.forceSimulation(this.repositoryList).force("charge",this.$d3.forceManyBody()).force("collide",this.$d3.forceCollide().radius(function(e){return t.areaScale(e.count)+3})).force("forceX",this.$d3.forceX(this.width/2).strength(.05)).force("forceY",this.$d3.forceY(this.height/2).strength(.05)).on("tick",function(){var t=e.g.selectAll("circle").data(e.repositoryList);t.enter().append("circle").merge(t).attr("cx",function(t){return t.x}).attr("cy",function(t){return t.y}).attr("r",function(t){return e.areaScale(t.count)}).call(e.enableDragFunc()),t.exit().remove();var n=e.div.selectAll("span").data(e.repositoryList);n.enter().append("span").merge(n).text(function(t){return t.name}).style("font-size",function(t){return e.textScale(t.count)+"px"}).style("left",function(t){return t.x-1.5*e.areaScale(t.count)/2+"px"}).style("top",function(t){return t.y-e.textScale(t.count)/2+"px"}).style("width",function(t){return 1.5*e.areaScale(t.count)+"px"}),n.exit().remove()}),this.enableDragFunc()},enableDragFunc:function(){var t=this;return this.$d3.drag().on("start",function(e){t.$d3.event.active||t.simulation.alphaTarget(.3).restart(),e.fx=t.$d3.event.x,e.fy=t.$d3.event.y}).on("drag",function(e){e.fx=t.$d3.event.x,e.fy=t.$d3.event.y}).on("end",function(e){t.$d3.event.active||t.simulation.alphaTarget(0),e.fx=null,e.fy=null})},update:function(){this.initChartContainer(),this.startDisplay()}},mounted:function(){console.log("get data in mounted state"+this.repositoryList),window.vue=this}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{on:{click:t.update}},[t._v("Update")]),t._v(" "),n("div",{attrs:{id:"projectViewContainer"}},[n("svg",{attrs:{id:"projectViewSvg"}}),t._v(" "),n("div",{attrs:{id:"projectViewDiv"}})]),t._v(" "),n("v-list",[t._l(t.repositoryList,function(e){return[n("div",{key:e.id},[n("span",[t._v(t._s(e.name+"   ~   "+e.count))])])]})],2)],1)},staticRenderFns:[]};var u=n("VU/8")(s,c,!1,function(t){n("10kp")},null,null).exports,l=n("mvHQ"),d=n.n(l),f=n("Zrlr"),p=n.n(f),v=n("wxAW"),h=n.n(v),m=n("NYxO"),g={state:{domainName:"https://api.github.com/graphql",privateToken:"83f30f4332b2371486791b2fadd8f677f476a8c2"},mutations:{},actions:{}},y={state:{avatarUrl:"https://avatars3.githubusercontent.com/u/10973821?v=4",follwerList:[],followingList:[],repositoryBeanList:[]},mutations:{updateUserInfo:function(t,e){t.avatarUrl=e.avatarUrl},updateRepositoryBeanList:function(t,e){t.repositoryBeanList=e}},actions:{}};i.a.use(m.a);var _=new m.a.Store({modules:{gitlabConfig:g,userinfo:y}}),x=n("mtWM"),$=n.n(x).a.create({baseURL:"https://api.github.com/graphql",headers:{Authorization:"Bearer "+"e741155e35e144246dfe8e1afc09af750997de3b".split("").reverse().join("")}}),w=function t(e,n){p()(this,t),this.name=e,this.count=n},b=function(){function t(){p()(this,t),this.store=_}return h()(t,[{key:"getRepositoryBeanListFromQuery",value:function(t){if(t){for(var e=[],n=t.user.repositories.nodes,i=0;i<n.length;i++){var a=n[i];e.push(new w(a.name,a.ref.target.history.totalCount))}return e}}},{key:"getAllProjects",value:function(){var t=this;$.post("",d()({query:'query {\n        user(login: "ssthouse") {\n          avatarUrl\n          name\n          repositories(first: 100){\n            totalCount\n            pageInfo{\n              hasNextPage\n              endCursor\n            }\n            nodes{\n              id\n              name\n              ref(qualifiedName: "master") {\n                target {\n                  ... on Commit {\n                    history {\n                      totalCount\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }'})).then(function(e){var n=e.data.data.user;t.store.commit("updateUserInfo",{avatarUrl:n.avatarUrl}),t.store.commit("updateRepositoryBeanList",t.getRepositoryBeanListFromQuery(e.data.data))}).catch(function(t){console.log("~~~~~~~~~~~~~~~~error get all projects")})}}]),t}(),C={name:"Main",components:{"project-plot":u},data:function(){return{projectDao:new b}},computed:{avatarUrl:function(){return this.$store.state.userinfo.avatarUrl}},methods:{showProjects:function(){this.projectDao.getAllProjects()}}},j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",[e("v-btn",{on:{click:this.showProjects}},[this._v("show projects")])],1),this._v(" "),e("v-avatar",{staticClass:"grey lighten-4",attrs:{tile:!1,size:"120px"}},[e("img",{attrs:{src:this.avatarUrl,alt:"avatar"}})]),this._v(" "),e("project-plot")],1)},staticRenderFns:[]};var L=n("VU/8")(C,j,!1,function(t){n("Fiiu")},"data-v-06e993a0",null).exports,k={name:"Config",data:function(){return{projectDao:new b,domainName:this.$store.state.gitlabConfig.domainName,privateToken:this.$store.state.gitlabConfig.privateToken}},methods:{testConnection:function(){this.projectDao.getAllProjects()}}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n  Config page:\n  "),n("v-text-field",{attrs:{label:"domain:",value:t.domainName}}),t._v(" "),n("v-text-field",{attrs:{label:"private token:",value:t.privateToken}}),t._v(" "),n("v-btn",{on:{click:function(e){t.testConnection()}}},[t._v("Test connection")])],1)},staticRenderFns:[]};var S=n("VU/8")(k,U,!1,function(t){n("Gg6h")},"data-v-852ba536",null).exports;i.a.use(o.a);var q=new o.a({routes:[{path:"/",redirect:"main"},{path:"/main",name:"main",component:L},{path:"/config",name:"config",component:S}]}),D=(n("7zck"),n("3EgV")),F=n.n(D),N=n("8+8L"),A=n("vwbq");i.a.use(N.a),i.a.use(F.a),i.a.config.productionTip=!1,i.a.prototype.$axios=$,i.a.prototype.$d3=A,new i.a({el:"#app",router:q,store:_,components:{App:r},template:"<App/>"})},NnMq:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4526226a78f173d3315a.js.map