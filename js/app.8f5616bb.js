(function(t){function e(e){for(var r,i,o=e[0],l=e[1],d=e[2],c=0,v=[];c<o.length;c++)i=o[c],s[i]&&v.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08d8":function(t,e,a){},"0e12":function(t,e,a){"use strict";var r=a("35c7"),s=a.n(r);s.a},"19a0":function(t,e,a){"use strict";var r=a("08d8"),s=a.n(r);s.a},"25fd":function(t,e,a){},"35c7":function(t,e,a){},"3e3f":function(t,e,a){},"47c0":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),s=a("9f7b"),n=a("8aa5"),i=a.n(n),o=a("5f30"),l=a.n(o),d=(a("f9e3"),a("2dd8"),a("7bb1")),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("router-view"),a("app-footer")],1)},c=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"danger"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-navbar-brand",{attrs:{href:"#",to:"/dashboard"}},[t._v("Admin Panel")]),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[t.isLoggedIn?a("b-nav-item",{attrs:{href:"#",to:"/tutors-requests"}},[t._v("Tutor Request")]):t._e(),t.isLoggedIn?a("b-nav-item",{attrs:{href:"#"}},[t._v("Tutor Applications")]):t._e(),t.isLoggedIn?a("b-nav-item",{attrs:{href:"#"}},[t._v("Registered Tutors")]):t._e(),t.isLoggedIn?a("b-nav-item",{attrs:{href:"#",to:"/tutors-schedule"}},[t._v("Tutor Schedules")]):t._e()],1),a("b-navbar-nav",{staticClass:"ml-auto"},[t.isLoggedIn?a("b-button",{attrs:{variant:"light"}},[a("span",[a("i",{staticClass:"fas fa-user-circle"}),t._v("\n              My Account\n            ")])]):t._e(),t._v("\n       |\n      "),t.isLoggedIn?a("b-button",{attrs:{variant:"light"},on:{click:t.logout}},[a("span",[a("i",{staticClass:"fas fa-sign-out-alt"}),t._v("\n              Logout\n            ")])]):t._e(),t.isLoggedIn?t._e():a("b-button",{attrs:{to:"/",variant:"light"}},[a("span",[a("i",{staticClass:"fas fa-sign-in-alt"}),t._v("\n              Login\n            ")])])],1)],1)],1)},m=[],f=(a("a481"),{data:function(){return{drawer:!1,isLoggedIn:!1,currentUser:!1}},methods:{logout:function(){var t=this;i.a.auth().signOut().then(function(e){t.$router.replace("/"),t.isLoggedIn=!1,t.currentUser=!1})}},created:function(){i.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=i.a.auth().currentUser.email)}}),h=f,p=(a("19a0"),a("2877")),b=Object(p["a"])(h,v,m,!1,null,"524c4275",null);b.options.__file="Header.vue";var g=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"row",attrs:{id:"sitefooter"}},[a("div",{staticClass:"container text-center"},[a("h6",{staticClass:"pull-right"},[t._v("Home Tutor Admin")])])])}],x={},C=x,y=(a("a9bf"),Object(p["a"])(C,_,w,!1,null,"72747661",null));y.options.__file="Footer.vue";var T=y.exports,q={components:{"app-header":g,"app-footer":T},data:function(){return{logged:!0}},mounted:function(){}},D=q,k=(a("8609"),Object(p["a"])(D,u,c,!1,null,"72bc8322",null));k.options.__file="App.vue";var A=k.exports,S=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticClass:"bv-example-row"},[a("br"),a("h1",[a("i",{staticClass:"fas fa-cogs"}),t._v("\n        Dashboard\n    ")]),a("br"),a("b-row",[a("b-col",[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"primary","text-variant":"white",header:"Pending Tutor Request"}},[a("div",{staticClass:"text-center"},[a("b-button",{attrs:{variant:"light"}},[t._v("\n                    Requests "),a("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.requestCount))])],1)],1)])],1),a("b-col",[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"info","text-variant":"white",header:"New Applications"}},[a("div",{staticClass:"text-center"},[a("b-button",{attrs:{variant:"light"}},[t._v("\n                    Applications "),a("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.newAppCount))])],1),a("hr"),a("b-button",{attrs:{variant:"light"}},[t._v("\n                    Awaiting Interview "),a("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.interCount))])],1)],1)])],1),a("b-col",[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"success","text-variant":"white",header:"Tutor Schedules"}},[a("div",{staticClass:"text-center"},[a("b-button",{attrs:{variant:"light"}},[t._v("\n                    Schedules "),a("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.scheduleCount))])],1)],1)])],1),a("b-col",[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"danger","text-variant":"white",header:"Tutors"}},[a("div",{staticClass:"text-center"},[a("b-button",{attrs:{variant:"light"}},[t._v("\n                    Total Tutors "),a("b-badge",{attrs:{variant:"danger"}},[t._v(t._s(t.tutorCount))])],1)],1)])],1)],1),a("br"),a("div",[a("b-table",{attrs:{"sort-by":t.sortBy,"sort-desc":t.sortDesc,items:t.tutorRequest,fields:t.fields,responsive:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e}}})],1),a("br")],1)},E=[],P=(a("ac6a"),{data:function(){return{sortBy:"fullname",sortDesc:!1,requestCount:"",newAppCount:"",interCount:"",scheduleCount:"",tutorCount:"",fields:[{key:"full_name",sortable:!0},{key:"phone",sortable:!0},{key:"email",sortable:!0},{key:"address",sortable:!0},{key:"area",sortable:!0},{key:"region",sortable:!0},{key:"status",sortable:!0}],tutorRequest:[]}},created:function(){var t=this,e="pending";Ct.collection("requests").where("status","==",e).get().then(function(e){t.requestCount=e.size});var a="confirmed";Ct.collection("tutors").where("status",">",a).get().then(function(e){t.newAppCount=e.size}),Ct.collection("tutors").where("status","<",a).get().then(function(e){t.interCount=e.size}),Ct.collection("tutors").where("status","==","confirmed").get().then(function(e){t.tutorCount=e.size}),Ct.collection("engagements").get().then(function(e){t.scheduleCount=e.size}),Ct.collection("requests").where("status","==","pending").get().then(function(e){e.forEach(function(e){var a={address:e.data().address,area:e.data().area,email:e.data().email,full_name:e.data().fullname,phone:e.data().phone,region:e.data().region,date:e.data().requested_at,status:e.data().status};t.tutorRequest.push(a)})}),window.onload=function(){window.location.hash||(window.location=window.location+"#loaded",window.location.reload())}}}),I=P,$=(a("fce1"),Object(p["a"])(I,j,E,!1,null,"37f40e42",null));$.options.__file="Dashboard.vue";var N,R,O=$.exports,L={},U=Object(p["a"])(L,N,R,!1,null,null,null);U.options.__file="Tutors.vue";var M=U.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-form"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.logIn(e)}}},[t._m(0),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",name:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",name:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(1),r("div",{staticClass:"clearfix"},[r("router-link",{staticClass:"text-center",attrs:{to:"/forget-password"}},[r("p",{staticClass:"text-center"},[r("a",[t._v("Forgot Password?")])])])],1)]),t.loading?r("div",{staticClass:"shadow"},[r("img",{staticClass:"centeredImage",attrs:{src:a("fa5e")}})]):t._e()])},B=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"avatar"},[r("img",{attrs:{src:a("cf05"),alt:"Avatar"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"submit"}},[t._v("Login")])])}],F={data:function(){return{email:"",password:"",loading:!1}},methods:{logIn:function(){var t=this;this.loading=!0,Ct.collection("admin").where("email","==",this.email).get().then(function(e){e.empty?(alert("Invalid User, Please try again"),t.$router.go({path:t.$router.path})):i.a.auth().signInWithEmailAndPassword(t.email,t.password).then(function(e){t.loading=!1,t.$router.push("/dashboard")},function(t){alert(t.message)})},function(t){alert("Not a valid user "+t.message)})}},created:function(){i.a.auth().currentUser&&this.$router.replace("/dashboard"),window.onload=function(){window.location.hash||(window.location=window.location+"#loaded",window.location.reload())}}},H=F,G=(a("5f3e"),Object(p["a"])(H,z,B,!1,null,"becd8832",null));G.options.__file="Login.vue";var W=G.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("br"),a("h2",[a("i",{staticClass:"fas fa-chalkboard-teacher"}),t._v("\n        Tutor Requests\n    ")]),a("hr"),a("b-row",[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Name")]),a("th",[t._v("Phone")]),a("th",[t._v("Email")]),a("th",[t._v("Date")]),a("th",[t._v("Action")])])]),a("tbody",t._l(t.tutor,function(e,r){return a("tr",[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.full_name))]),a("td",[t._v(t._s(e.phone))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.date))]),a("td",[a("router-link",{staticClass:"btn btn-info mb-3",attrs:{to:{name:"assign-tutor",params:{request_id:e.id}}}},[a("i",{staticClass:"far fa-newspaper"}),t._v("\n                Details\n            ")])],1)])})),a("tfoot")])])]),a("hr")],1)},K=[],Z={data:function(){return{tutor:[],newDate:"",rid:""}},methods:{},created:function(){var t=this;Ct.collection("requests").where("status","==","pending").get().then(function(e){e.forEach(function(e){var a={address:e.data().address,area:e.data().area,email:e.data().email,full_name:e.data().fullname,phone:e.data().phone,region:e.data().region,date:e.data().requested_at,status:e.data().status,id:e.data().rid};t.tutor.push(a)})})}},V=Z,X=(a("9476"),Object(p["a"])(V,J,K,!1,null,"243f85bc",null));X.options.__file="TutorRequest.vue";var Y=X.exports,Q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",[r("br"),r("h2",[r("i",{staticClass:"far fa-newspaper"}),t._v("\n           Request Details\n       ")]),r("hr"),r("b-card",{attrs:{"bg-variant":"light",title:""}},[r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",{attrs:{sm:"4"}},[r("div",{staticClass:"pricing card-deck flex-column flex-md-row mb-3"},t._l(t.request,function(e){return r("div",{staticClass:"card card-pricing popular shadow text-center px-3 mb-4"},[r("span",{staticClass:"h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-danger text-white shadow-sm"},[t._v(t._s(e.id))]),r("div",{staticClass:"bg-transparent card-header pt-4 border-0"},[r("h1",{staticClass:"h1 font-weight-normal text-info text-center mb-0",attrs:{"data-pricing-value":"30"}},[r("span",{staticClass:"h6 text-muted ml-2"},[t._v(t._s(e.full_name))])])]),r("div",{staticClass:"card-body pt-0"},[r("ul",{staticClass:"list-unstyled mb-4"},[r("li",[t._v(t._s(e.phone))]),r("li",[t._v(t._s(e.email))]),r("li",[t._v(t._s(e.address))]),r("li",[t._v(t._s(e.area))]),r("li",[t._v(t._s(e.region))]),r("li",[t._v(t._s(e.date))])]),r("button",{staticClass:"btn btn-info mb-3",attrs:{type:"button"},on:{click:t.assign}},[r("i",{staticClass:"fas fa-check-circle"}),t._v("\n                       View\n                       ")]),r("button",{staticClass:"btn btn-danger mb-3",attrs:{type:"button"},on:{click:t.deleteRequest}},[r("i",{staticClass:"fas fa-trash-alt"}),t._v("\n                           Delete\n                       ")])])])}))]),t.showPart?r("b-col",{attrs:{sm:"8"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.beforeSubmit(e)}}},[r("b-card",[r("b-row",[r("b-col",[r("label",[t._v("Select Tutor")]),r("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"mb-3",class:{"is-invalid":t.submitted&&t.errors.has("Tutor")},attrs:{name:"Tutor",options:t.tutors},model:{value:t.selectedTutor,callback:function(e){t.selectedTutor=e},expression:"selectedTutor"}}),r("div",[t._v(t._s(t.selectedTutor))]),t.submitted&&t.errors.has("Tutor")?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("Tutor")))]):t._e()],1),r("b-col",[r("label",[t._v("Amount")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.eng.amount,expression:"eng.amount"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.errors.has("Amount")},attrs:{type:"number",step:"01",name:"Amount"},domProps:{value:t.eng.amount},on:{input:function(e){e.target.composing||t.$set(t.eng,"amount",e.target.value)}}}),t.submitted&&t.errors.has("Amount")?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("Amount")))]):t._e()])],1),r("hr"),r("b-row",[r("b-col",[r("b-card",[r("label",[t._v("Days")]),r("b-form-checkbox-group",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.submitted&&t.errors.has("Days")},attrs:{name:"Days",options:t.days},model:{value:t.eng.days,callback:function(e){t.$set(t.eng,"days",e)},expression:"eng.days"}}),t.submitted&&t.errors.has("Days")?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("Days")))]):t._e(),r("hr"),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("label",[t._v("Start Time")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.eng.startTime,expression:"eng.startTime"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.errors.has("Days")},attrs:{type:"time",name:"Start Time"},domProps:{value:t.eng.startTime},on:{input:function(e){e.target.composing||t.$set(t.eng,"startTime",e.target.value)}}}),t.submitted&&t.errors.has("Start Time")?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("Start Time")))]):t._e()]),r("div",{staticClass:"col"},[r("label",[t._v("End Time")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.eng.endTime,expression:"eng.endTime"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.errors.has("End Time")},attrs:{type:"time",name:"End Time"},domProps:{value:t.eng.endTime},on:{input:function(e){e.target.composing||t.$set(t.eng,"endTime",e.target.value)}}}),t.submitted&&t.errors.has("End Time")?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("End Time")))]):t._e()])]),r("hr"),r("div",{staticClass:"row"},[r("div",{staticClass:"col"},[r("label",[t._v("Start Date")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.eng.startDate,expression:"eng.startDate"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.errors.has("Start Date")},attrs:{type:"date",name:"Start Date"},domProps:{value:t.eng.startDate},on:{input:function(e){e.target.composing||t.$set(t.eng,"startDate",e.target.value)}}}),t.submitted&&t.errors.has("Start Date")?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("Start Date")))]):t._e()]),r("div",{staticClass:"col"},[r("label",[t._v("End Date")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.eng.endDate,expression:"eng.endDate"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.submitted&&t.errors.has("End Date")},attrs:{type:"date",name:"End Date"},domProps:{value:t.eng.endDate},on:{input:function(e){e.target.composing||t.$set(t.eng,"endDate",e.target.value)}}}),t.submitted&&t.errors.has("End Date")?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("End Date")))]):t._e()])]),r("hr"),r("label",[t._v("Levels")]),r("b-form-checkbox-group",{attrs:{name:"Levels",options:t.levels},model:{value:t.eng.levels,callback:function(e){t.$set(t.eng,"levels",e)},expression:"eng.levels"}}),r("hr"),r("label",[t._v("Subjects")]),r("b-form-checkbox-group",{attrs:{name:"Subjects",options:t.subjects},model:{value:t.eng.subjects,callback:function(e){t.$set(t.eng,"subjects",e)},expression:"eng.subjects"}}),r("hr"),r("label",[t._v("Description")]),r("b-form-textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],class:{"is-invalid":t.submitted&&t.errors.has("Description")},attrs:{id:"textarea1",placeholder:"Description",name:"Description",rows:3,"max-rows":6},model:{value:t.eng.description,callback:function(e){t.$set(t.eng,"description",e)},expression:"eng.description"}}),t.submitted&&t.errors.has("Description")?r("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("Description")))]):t._e()],1)],1)],1),r("br"),r("button",{staticClass:"btn btn-block btn-info",attrs:{type:"submit",size:"lg"}},[t._v("Assign Tutor")])],1)],1)]):t._e()],1)],1)],1),r("b-row"),r("hr"),t.loading?r("div",{staticClass:"shadow1"},[r("img",{staticClass:"centeredImage",attrs:{src:a("fa5e")}})]):t._e()],1)},tt=[],et={data:function(){return{id:"",submitted:!1,eng:{amount:"",days:[],endDate:"",endTime:"",id:"",levels:[],startDate:"",startTime:"",subjects:[],tutorId:"",description:""},request:[],loading:!1,nAddress:"",nName:"",nArea:"",nRegion:"",nRid:"",nPhone:"",tutors:[],showPart:!1,time:[{text:"8:00am",value:"8:00am"},{text:"8:30am",value:"8:30am"},{text:"9:00am",value:"9:00am"},{text:"9:30am",value:"9:30am"},{text:"10:00am",value:"10:00am"},{text:"8:00am",value:"8:00am"},{text:"8:00am",value:"8:00am"},{text:"8:00am",value:"8:00am"}],selectedTutor:null,subjects:[{text:"English",value:"Engliss"},{text:"Mathematics",value:"Mathematics"},{text:"Integrated Science",value:"Integrated Science"},{text:"Social Studies",value:"Social Studies"},{text:"Citizenship Education",value:"Citizenship Education"},{text:"BDT",value:"BDT"}],days:[{text:"Sunday",value:"Sunday"},{text:"Monday",value:"Monday"},{text:"Tuesday",value:"Tuesday"},{text:"Wednesday",value:"Wednesday"},{text:"Thursday",value:"Thursday"},{text:"Friday",value:"Friday"},{text:"Saturday",value:"Saturday"}],levels:[{text:"Nursery",value:"Nursery"},{text:"Lower Primary",value:"Lower Primary"},{text:"Upper Primary",value:"Upper Primary"},{text:"Junior High",value:"Junior High"},{text:"Senior High",value:"Senior High"},{text:"Under Graduate",value:"Under Graduate"}]}},created:function(){var t=this;Ct.collection("requests").where("rid","==",this.$route.params.request_id).get().then(function(e){e.forEach(function(e){var a={address:e.data().address,area:e.data().area,email:e.data().email,full_name:e.data().fullname,phone:e.data().phone,region:e.data().region,date:e.data().requested_at,status:e.data().status,id:e.data().rid};t.nName=e.data().fullname,t.nAddress=e.data().address,t.nArea=e.data().area,t.nRegion=e.data().region,t.nRid=e.data().rid,t.Nphone=e.data().phone,t.request.push(a)})}),Ct.collection("tutors").where("available","==","yes").get().then(function(e){e.forEach(function(e){var a={value:e.data().userId,text:e.data().firstname+" "+e.data().lastname};t.tutors.push(a)})})},methods:{deleteRequest:function(){var t=this;confirm("Are you sure?")&&Ct.collection("requests").where("rid","==",this.$route.params.request_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/tutors-requests")})})},assign:function(){this.showPart=!this.showPart},beforeSubmit:function(){var t=this;this.submitted=!0,this.$validator.validate().then(function(e){e&&(t.loading=!0,Ct.collection("engagements").add({address:t.nAddress,amount:t.eng.amount,client_name:t.nName,days:t.eng.days,end:t.eng.endDate,endtime:t.eng.endTime,id:t.nRid,levels:t.eng.levels,location:t.nArea,region:t.nRegion,start:t.eng.startDate,starttime:t.eng.startTime,subjects:t.eng.subjects,tutorId:t.selectedTutor,description:t.eng.description,client_phone:t.nPhone}).then(function(e){Ct.collection("requests").where("rid","==",t.nRid).get().then(function(t){t.forEach(function(t){t.ref.update({status:"assigned"})})}),Ct.collection("tutors").where("userId","==",t.selectedTutor).get().then(function(t){t.forEach(function(t){t.ref.update({available:"no"})})}),t.loading=!1,alert("Tutor Assigned Successfully"),t.$router.push("/tutors-requests")}).catch(function(t){alert(t)}))})}}},at=et,rt=(a("0e12"),Object(p["a"])(at,Q,tt,!1,null,"d3afa08e",null));rt.options.__file="Assign.vue";var st=rt.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("br"),a("h2",[a("i",{staticClass:"fas fa-chalkboard-teacher"}),t._v("\n        Tutor's Schedule\n    ")]),a("hr"),a("b-row",[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-hover"},[a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Client Name")]),a("th",[t._v("Phone")]),a("th",[t._v("Area")]),a("th",[t._v("Region")]),a("th",[t._v("Action")])])]),a("tbody",t._l(t.eng,function(e){return a("tr",[a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.client_name))]),a("td",[t._v(t._s(e.phone))]),a("td",[t._v(t._s(e.area))]),a("td",[t._v(t._s(e.region))]),a("td",[a("router-link",{staticClass:"btn btn-info mb-3",attrs:{to:{name:"ScheduleDetails",params:{request_id:e.id}}}},[a("i",{staticClass:"far fa-newspaper"}),t._v("\n                Details\n            ")])],1)])})),a("tfoot")])])]),a("hr")],1)},it=[],ot={data:function(){return{eng:[],newDate:"",rid:"",tutorId:""}},methods:{},created:function(){var t=this;Ct.collection("engagements").get().then(function(e){e.forEach(function(e){var a={address:e.data().address,amount:e.data().amount,client_name:e.data().client_name,days:e.data().days,description:e.data().description,endDate:e.data().end,endTime:e.data().endtime,id:e.data().id,"levels[]":e.data().levels,area:e.data().location,region:e.data().region,startDate:e.data().start,startTime:e.data().starttime,"subjects[]":e.data().subjects,phone:e.data().client_phone};t.tutorId=e.data().tutorId,t.eng.push(a)})})}},lt=ot,dt=(a("67f2"),Object(p["a"])(lt,nt,it,!1,null,"27b97144",null));dt.options.__file="TutorSchedule.vue";var ut=dt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("br"),a("h2",[a("i",{staticClass:"fas fa-address-card"}),t._v("\n        Details of Schedule ID: "+t._s(t.id)+"\n    ")]),a("hr"),a("b-row",[a("b-col",[a("b-card",{attrs:{"bg-variant":"light",title:"Tutor"}},[a("b-row",[a("b-col",{attrs:{cold:"6"}},[a("h6",[t._v("Abubakari Sherifdeen")]),a("p",[a("strong",[t._v("Tutor ID:")]),t._v(" 8848477")]),a("p",[a("strong",[t._v("Phone:")]),t._v(" 8848477")]),a("p",[a("strong",[t._v("Email:")]),t._v(" sherifdata@gmail.com")])]),a("b-col",{attrs:{cold:"6"}},[a("b-img",{staticClass:"m-1",attrs:{rounded:"circle",blank:"",width:"200",height:"200","blank-color":"#777",alt:"img"}})],1)],1)],1),a("hr"),a("b-card",{attrs:{"bg-variant":"light",title:"Client"}},[a("b-row",[a("b-col",[a("p",[a("strong",[t._v("Client Name: ")]),t._v(" Osman Ali")]),a("p",[a("strong",[t._v("Phone: ")]),t._v(" 0552537904")]),a("p",[a("strong",[t._v("Address: ")]),t._v(" 61 Block A Napogbakole")]),a("p",[a("strong",[t._v("Area: ")]),t._v(" Konta")]),a("p",[a("strong",[t._v("Region: ")]),t._v(" Upper West")])]),a("b-col",[a("p",[a("strong",[t._v("Start Month : ")]),t._v(" 2018-01")]),a("p",[a("strong",[t._v("End Month: ")]),t._v(" 2018-11")]),a("p",[a("strong",[t._v("Start Time: ")]),t._v(" 9:30am")]),a("p",[a("strong",[t._v("End Time: ")]),t._v(" 11:30am")]),a("p",[a("strong",[t._v("Region: ")]),t._v(" Upper West")])]),a("b-col",[a("p",[a("strong",[t._v("Fee : ")]),t._v(" 340.00")]),a("label",[a("strong",[t._v("Description: ")])]),a("p",[t._v("ldjfljflf l jfldfl fjdf dlfj dl fdljfld\n                         ldf jdlfjdl fldfdl ld fld fdfjd f fld\n                         f dljfldfjldf lfdl fld fld fld fl l\n                     ")])])],1)],1),a("hr"),a("b-card",{attrs:{"bg-variant":"light"}},[a("b-row",[a("b-col"),a("b-col"),a("b-col")],1)],1)],1)],1),a("br")],1)},vt=[],mt={data:function(){return{id:"",tutor:[],assign:[],tutorId:""}},created:function(){var t=this;this.id=this.$route.params.request_id,Ct.collection("engagements").where("id","==",this.id).get().then(function(e){e.forEach(function(e){var a={address:e.data().address,amount:e.data().amount,client_name:e.data().client_name,client_phone:e.data().client_phone,days:e.data().days,description:e.data().description,endDate:e.data().end,endTime:e.data().endtime,id:e.data().id,"levels[]":e.data().levels,area:e.data().location,region:e.data().region,startDate:e.data().start,startTime:e.data().starttime,"subjects[]":e.data().subjects,phone:e.data().client_phone};t.tutorId=e.data().userId,t.tutor.push(a)})})}},ft=mt,ht=(a("5e6a"),Object(p["a"])(ft,ct,vt,!1,null,"0bf04154",null));ht.options.__file="ScheduleDetails.vue";var pt=ht.exports;r["a"].use(S["a"]);var bt=new S["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Login",component:W,meta:{requireAuth:!0}},{path:"/dashboard",name:"Dashboard",component:O,meta:{requireGuest:!0}},{path:"/tutors",name:"Tutors",component:M,meta:{requireAuth:!0}},{path:"/schedule-details/:request_id",name:"ScheduleDetails",component:pt,meta:{requireAuth:!0}},{path:"/tutors-schedule",name:"TutorsSchedule",component:ut,meta:{requireAuth:!0}},{path:"/assign/:request_id",name:"assign-tutor",component:st,meta:{requireAuth:!0}},{path:"/tutors-requests",name:"TutorRequests",component:Y,meta:{requireAuth:!0}}]});bt.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?i.a.auth().currentUser?a():a({path:"Login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&i.a.auth().currentUser?a({path:"Dashboard",query:{redirect:t.fullPath}}):a()});var gt=bt,_t=a("9483");Object(_t["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a.d(e,"db",function(){return Ct}),a("ea7b"),r["a"].use(s["a"]),r["a"].use(l.a),r["a"].use(d["a"]),r["a"].config.productionTip=!1;var wt={apiKey:"AIzaSyB1mTlFgZ7IXR8faKl1fY1hZ_D4G9KPPM0",authDomain:"home-tutor-85063.firebaseapp.com",databaseURL:"https://home-tutor-85063.firebaseio.com",projectId:"home-tutor-85063",storageBucket:"home-tutor-85063.appspot.com",messagingSenderId:"437239261623"};i.a.initializeApp(wt);var xt,Ct=i.a.firestore();i.a.auth().onAuthStateChanged(function(t){xt||(xt=new r["a"]({router:gt,render:function(t){return t(A)}}).$mount("#app"))})},"591f":function(t,e,a){},"5e6a":function(t,e,a){"use strict";var r=a("9395"),s=a.n(r);s.a},"5f3e":function(t,e,a){"use strict";var r=a("dbcf"),s=a.n(r);s.a},"67f2":function(t,e,a){"use strict";var r=a("47c0"),s=a.n(r);s.a},7208:function(t,e,a){},8609:function(t,e,a){"use strict";var r=a("591f"),s=a.n(r);s.a},9395:function(t,e,a){},9476:function(t,e,a){"use strict";var r=a("3e3f"),s=a.n(r);s.a},a9bf:function(t,e,a){"use strict";var r=a("25fd"),s=a.n(r);s.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},dbcf:function(t,e,a){},fa5e:function(t,e,a){t.exports=a.p+"img/loader.f2574ee1.gif"},fce1:function(t,e,a){"use strict";var r=a("7208"),s=a.n(r);s.a}});
//# sourceMappingURL=app.8f5616bb.js.map