(this["webpackJsonpreact-employee-tracker"]=this["webpackJsonpreact-employee-tracker"]||[]).push([[0],{16:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t(0),s=t.n(n),i=t(5),d=t.n(i),o=(t(16),t(6)),c=t(7),m=t(10),l=t(9),p=(t(17),t(8)),u=t(2),b=function(e){Object(m.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=a.call.apply(a,[this].concat(n))).state={employees:p.results},e.sorting=function(){var a=e.state.employees.sort((function(e,a){return e.name.first<a.name.first?-1:e.name.first>a.name.first?1:0}));console.log(a),e.setState({employees:a})},e}return Object(c.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsxs)(u.a,{className:"mb-3",children:[Object(r.jsx)(u.a.Prepend,{children:Object(r.jsx)(u.a.Text,{id:"basic-addon1",children:"@"})}),Object(r.jsx)(u.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"})]}),Object(r.jsxs)("table",{id:"employeeTable",children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:Object(r.jsx)("button",{onClick:this.sorting,children:"Firstname"})}),Object(r.jsx)("th",{children:"Lastname"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Gender"})]}),this.state.employees.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name.first}),Object(r.jsx)("td",{children:e.name.last}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:e.gender})]})}))]})]})}}]),t}(n.Component);t(18);d.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('{"results":[{"gender":"male","name":{"title":"Mr","first":"Morris","last":"Fisher"},"location":{"street":{"number":7874,"name":"W Campbell Ave"},"city":"Fremont","state":"Louisiana","country":"United States","postcode":43557,"coordinates":{"latitude":"-20.8703","longitude":"-56.8919"},"timezone":{"offset":"+9:30","description":"Adelaide, Darwin"}},"email":"morris.fisher@example.com","login":{"uuid":"b3ece555-2228-49f6-b694-64c7bd32d631","username":"organicelephant470","password":"gotohell","salt":"ikkGJ9xn","md5":"58e35f6266f5779a42372bb32cb1285f","sha1":"e3a5082cf17c7ccb204b2ef9184b9392a2a53e7a","sha256":"87e2f10ad4754ecc1af09f12c123da3ce15d0f081d0a63c86cdd4ea48b05fd69"},"dob":{"date":"1958-03-29T03:16:04.821Z","age":62},"registered":{"date":"2015-10-06T06:08:17.720Z","age":5},"phone":"(782)-183-2074","cell":"(800)-759-1790","id":{"name":"SSN","value":"576-77-9463"},"picture":{"large":"https://randomuser.me/api/portraits/men/48.jpg","medium":"https://randomuser.me/api/portraits/med/men/48.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/48.jpg"},"nat":"US"},{"gender":"female","name":{"title":"Ms","first":"Lillie","last":"Hunter"},"location":{"street":{"number":2150,"name":"Frances Ct"},"city":"Beaumont","state":"New Hampshire","country":"United States","postcode":24438,"coordinates":{"latitude":"49.8678","longitude":"-26.0547"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},"email":"lillie.hunter@example.com","login":{"uuid":"d01c8f2c-f08b-4bcc-a7a5-af97e7341929","username":"blackpeacock710","password":"paper","salt":"J3vOC49j","md5":"f24bc19f310937f8249b12acd5611419","sha1":"08098f0b1a1868de68c9a3580e27178fe3b57acf","sha256":"a9cfd545a729c820b91ee9644def41263a3832031a45c8821c343a715c81a64b"},"dob":{"date":"1957-10-10T07:12:12.671Z","age":63},"registered":{"date":"2006-05-01T03:07:51.657Z","age":14},"phone":"(373)-418-9617","cell":"(304)-873-9805","id":{"name":"SSN","value":"009-06-0489"},"picture":{"large":"https://randomuser.me/api/portraits/women/8.jpg","medium":"https://randomuser.me/api/portraits/med/women/8.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/8.jpg"},"nat":"US"},{"gender":"male","name":{"title":"Mr","first":"Tyler","last":"Dunn"},"location":{"street":{"number":5032,"name":"Elgin St"},"city":"Clearwater","state":"Colorado","country":"United States","postcode":80374,"coordinates":{"latitude":"67.3455","longitude":"-52.2985"},"timezone":{"offset":"+1:00","description":"Brussels, Copenhagen, Madrid, Paris"}},"email":"tyler.dunn@example.com","login":{"uuid":"a7ef2a2c-a331-46c5-b1df-a2c516dc4fd1","username":"beautifulmouse363","password":"f**k","salt":"paFRA78r","md5":"441a8674dc870db01d3321c13a5ad744","sha1":"967f3b5c0bf2781e192183f651acfc89201f04d1","sha256":"b888abc9a7cb0b63cfbcc6c94f8304e9e203deda76fddbd69d1e5b51e23d2b81"},"dob":{"date":"1965-11-23T19:36:43.380Z","age":55},"registered":{"date":"2018-12-09T21:47:59.768Z","age":2},"phone":"(234)-357-0992","cell":"(647)-409-6379","id":{"name":"SSN","value":"948-02-7267"},"picture":{"large":"https://randomuser.me/api/portraits/men/59.jpg","medium":"https://randomuser.me/api/portraits/med/men/59.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/59.jpg"},"nat":"US"},{"gender":"male","name":{"title":"Mr","first":"Isaac","last":"Hall"},"location":{"street":{"number":8415,"name":"Homestead Rd"},"city":"Broken Arrow","state":"Tennessee","country":"United States","postcode":45518,"coordinates":{"latitude":"1.9313","longitude":"-160.6997"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"isaac.hall@example.com","login":{"uuid":"0e0907de-62f3-4784-a1c3-08b6ff451a46","username":"happybutterfly532","password":"5050","salt":"seWanQLe","md5":"cff2d2c21e5262df541a840848243d2a","sha1":"c695d0b5cc4c06b2988bf74765de56159ec3542b","sha256":"5e367c628da7d0436c8b2bdc3828818203e444f7243cd53d9ca9729fdc58ec17"},"dob":{"date":"1980-03-30T19:21:18.745Z","age":40},"registered":{"date":"2011-12-29T14:50:46.628Z","age":9},"phone":"(903)-184-6331","cell":"(049)-550-5894","id":{"name":"SSN","value":"217-07-2571"},"picture":{"large":"https://randomuser.me/api/portraits/men/28.jpg","medium":"https://randomuser.me/api/portraits/med/men/28.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/28.jpg"},"nat":"US"},{"gender":"female","name":{"title":"Miss","first":"Willie","last":"Young"},"location":{"street":{"number":1374,"name":"Lovers Ln"},"city":"Dayton","state":"Michigan","country":"United States","postcode":84752,"coordinates":{"latitude":"81.8404","longitude":"32.5496"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"willie.young@example.com","login":{"uuid":"35758c0e-e397-4b70-ba5c-ff7e03b49ba4","username":"yellowgorilla142","password":"1979","salt":"YY3tTpBL","md5":"6c415bcba77e3a388a8e7c06fa6db5af","sha1":"def84b57f0cf3fd21b39c09d8ac0edc9fadee1dd","sha256":"2474cd5d9be57fe486fdb30ce1c1a47607292ade5c35482075041b41d398f74e"},"dob":{"date":"1974-03-22T16:07:51.737Z","age":46},"registered":{"date":"2012-03-27T18:04:36.771Z","age":8},"phone":"(321)-914-4661","cell":"(556)-265-5571","id":{"name":"SSN","value":"304-32-5051"},"picture":{"large":"https://randomuser.me/api/portraits/women/31.jpg","medium":"https://randomuser.me/api/portraits/med/women/31.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/31.jpg"},"nat":"US"},{"gender":"male","name":{"title":"Mr","first":"Albert","last":"Nelson"},"location":{"street":{"number":7744,"name":"Hamilton Ave"},"city":"Arlington","state":"Iowa","country":"United States","postcode":21600,"coordinates":{"latitude":"-11.5014","longitude":"-54.0568"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"albert.nelson@example.com","login":{"uuid":"4d61d641-c03b-4910-a17a-84f051d7a551","username":"sadduck961","password":"monsters","salt":"oa1gSR72","md5":"a9ab9c7936f6e09f9e087036eeebed83","sha1":"e3264f40f163adb5ab8a504ef0c4bbc06320ec77","sha256":"5a62d3e6c9f071d5627aca839f40a2612a01634c7112f87ed2cdd3f445ede0fd"},"dob":{"date":"1975-08-17T18:33:18.339Z","age":45},"registered":{"date":"2004-12-08T23:00:26.703Z","age":16},"phone":"(442)-512-1797","cell":"(181)-610-1460","id":{"name":"SSN","value":"052-40-5799"},"picture":{"large":"https://randomuser.me/api/portraits/men/71.jpg","medium":"https://randomuser.me/api/portraits/med/men/71.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/71.jpg"},"nat":"US"},{"gender":"male","name":{"title":"Mr","first":"Kelly","last":"Castillo"},"location":{"street":{"number":4289,"name":"Plum St"},"city":"Oxnard","state":"Maine","country":"United States","postcode":66024,"coordinates":{"latitude":"-76.5444","longitude":"-7.7501"},"timezone":{"offset":"+10:00","description":"Eastern Australia, Guam, Vladivostok"}},"email":"kelly.castillo@example.com","login":{"uuid":"e8808de7-31b0-4c49-820e-ff0d2736dcde","username":"purplesnake833","password":"scrabble","salt":"oNv2JEvs","md5":"e2b3daba46b75cb7850e9ef48db2d424","sha1":"fd3dfecc9030cf240870f2c5dc26bf63b2d28d8b","sha256":"e1be7391fc5d2c0c3b3476aa7b39024d325bce84f873a15dba88ad9acce91567"},"dob":{"date":"1974-07-26T10:33:08.319Z","age":46},"registered":{"date":"2013-09-06T16:46:49.429Z","age":7},"phone":"(878)-835-5124","cell":"(644)-337-0339","id":{"name":"SSN","value":"387-57-3622"},"picture":{"large":"https://randomuser.me/api/portraits/men/68.jpg","medium":"https://randomuser.me/api/portraits/med/men/68.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/68.jpg"},"nat":"US"},{"gender":"female","name":{"title":"Miss","first":"Lillian","last":"Jensen"},"location":{"street":{"number":2392,"name":"Marsh Ln"},"city":"Irvine","state":"Minnesota","country":"United States","postcode":78967,"coordinates":{"latitude":"-34.6476","longitude":"84.6257"},"timezone":{"offset":"-10:00","description":"Hawaii"}},"email":"lillian.jensen@example.com","login":{"uuid":"3790f608-9563-42f2-b6aa-188b3a988b25","username":"crazygoose865","password":"oblivion","salt":"ERIZfej1","md5":"de19446ea7bbeb39194acf1e86a69b69","sha1":"84f32401123a48d5869274d7a6153b8a9897a451","sha256":"7ab502257de6fe0547ba713755802ae07440372cb1ea42e2d989561aa6ee58c6"},"dob":{"date":"1949-06-10T13:29:55.016Z","age":71},"registered":{"date":"2019-04-11T22:23:42.351Z","age":1},"phone":"(352)-396-4990","cell":"(443)-704-3246","id":{"name":"SSN","value":"355-02-4634"},"picture":{"large":"https://randomuser.me/api/portraits/women/25.jpg","medium":"https://randomuser.me/api/portraits/med/women/25.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/25.jpg"},"nat":"US"},{"gender":"female","name":{"title":"Miss","first":"Anita","last":"Andrews"},"location":{"street":{"number":2051,"name":"Lone Wolf Trail"},"city":"Lincoln","state":"Georgia","country":"United States","postcode":37063,"coordinates":{"latitude":"-88.5249","longitude":"-10.1701"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"anita.andrews@example.com","login":{"uuid":"539081c2-0a9c-4504-a30d-1bbfd9b3f92b","username":"happyduck468","password":"kkkk","salt":"yDIUVP0D","md5":"9016099d145be732e78f9708fb643a2a","sha1":"be363847d85b87703a73636bf54b11c69db31150","sha256":"b1de3d92e3cc39bc8185282781327601031ad901733fb59abb0d6685310bd64c"},"dob":{"date":"1962-09-03T01:41:13.272Z","age":58},"registered":{"date":"2015-06-29T14:46:03.125Z","age":5},"phone":"(436)-495-8482","cell":"(852)-488-9008","id":{"name":"SSN","value":"994-91-2614"},"picture":{"large":"https://randomuser.me/api/portraits/women/51.jpg","medium":"https://randomuser.me/api/portraits/med/women/51.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/51.jpg"},"nat":"US"},{"gender":"female","name":{"title":"Miss","first":"Letitia","last":"Douglas"},"location":{"street":{"number":8167,"name":"Cherry St"},"city":"Boston","state":"Pennsylvania","country":"United States","postcode":57195,"coordinates":{"latitude":"-16.8358","longitude":"-2.6817"},"timezone":{"offset":"+11:00","description":"Magadan, Solomon Islands, New Caledonia"}},"email":"letitia.douglas@example.com","login":{"uuid":"48143bfc-2d2a-4102-ba00-93709cee1592","username":"happypeacock344","password":"pheonix","salt":"Q4MQROey","md5":"fa9c42496e07655fa19ace3b4c8c8455","sha1":"707090b150ae5f7a655262e41267ac7c20295d56","sha256":"e96092c5afe81e92c945cd3c1ff30b8e850743f55eca0cb561af2a2a22891ed9"},"dob":{"date":"1979-08-12T07:35:20.468Z","age":41},"registered":{"date":"2009-08-04T09:41:15.716Z","age":11},"phone":"(865)-255-4066","cell":"(686)-880-8234","id":{"name":"SSN","value":"247-39-0258"},"picture":{"large":"https://randomuser.me/api/portraits/women/91.jpg","medium":"https://randomuser.me/api/portraits/med/women/91.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/91.jpg"},"nat":"US"}],"info":{"seed":"a02de4969a0d21da","results":10,"page":1,"version":"1.3"}}')}},[[19,1,2]]]);
//# sourceMappingURL=main.b61295a8.chunk.js.map