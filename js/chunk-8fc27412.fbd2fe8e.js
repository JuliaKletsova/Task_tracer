(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fc27412"],{"1d21":function(t,e,s){"use strict";s.r(e);s("a4d3"),s("e01a");var i=s("7a23"),c=Object(i["F"])("data-v-f0bce61e");Object(i["s"])("data-v-f0bce61e");var a={class:"row"},n={key:0,class:"col s12"},r={class:"chips input-field",ref:"chips"},d={class:"input-field description"},o=Object(i["g"])("label",{for:"description"},"Description",-1),l={class:"character-counter",style:{float:"right","font-size":"12px"}},p={type:"text",class:"datepicker",ref:"datepicker"},u={key:0,class:"buttons"},h=Object(i["g"])("button",{class:"btn",type:"submit"},"Edit",-1),b={key:1,class:"else"};Object(i["q"])();var f=c((function(t,e,s,c,f,k){return Object(i["p"])(),Object(i["d"])("div",a,[k.task?(Object(i["p"])(),Object(i["d"])("div",n,[Object(i["g"])("h1",null,Object(i["y"])(k.task.title),1),Object(i["g"])("form",{class:"col s6",onSubmit:e[3]||(e[3]=Object(i["E"])((function(){return k.submitHandler.apply(k,arguments)}),["prevent"]))},[Object(i["g"])("div",r,null,512),Object(i["g"])("div",d,[Object(i["D"])(Object(i["g"])("textarea",{"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.description=e}),id:"description",class:"materialize-textarea"},null,512),[[i["B"],t.description]]),o,Object(i["g"])("span",l,Object(i["y"])(t.description.length)+"/2048",1)]),Object(i["g"])("input",p,null,512),"completed"!==k.task.status?(Object(i["p"])(),Object(i["d"])("div",u,[h,Object(i["g"])("button",{class:" complete btn deep-purple darken-4",type:"button",onClick:e[2]||(e[2]=function(){return k.completeTask.apply(k,arguments)})},"Complete task")])):Object(i["e"])("",!0)],32)])):(Object(i["p"])(),Object(i["d"])("h2",b,"Task cannot be found"))])})),k=(s("fb6a"),s("4d5c")),O=s.n(k),j={computed:{task:function(){return this.$store.getters.taskById(+String(this.$route.params.id).slice(1))}},data:function(){return{description:"",chips:null,date:null}},mounted:function(){this.description=this.task.description,this.chips=O.a.Chips.init(this.$refs.chips,{placeholder:"Tags",data:this.task.tags}),this.date=O.a.Datepicker.init(this.$refs.datepicker,{placeholder:"Choose deadline date",minDate:new Date(this.task.date),disableWeekends:!0,firstDay:1,setDefaultDate:!0,defaultDate:new Date(this.task.date)}),setTimeout((function(){O.a.updateTextFields()}),0),console.log(this.$store.state)},methods:{submitHandler:function(){this.$store.dispatch("editTask",{id:this.task.id,description:this.description,date:this.date.date}),this.$router.push("/list")},completeTask:function(){this.$store.dispatch("completeTask",this.task.id),this.$router.push("/list")}},unmounted:function(){this.date&&this.date.destroy&&this.date.destroy(),this.chips&&this.chips.destroy&&this.chips.destroy()}};s("8789");j.render=f,j.__scopeId="data-v-f0bce61e";e["default"]=j},8789:function(t,e,s){"use strict";s("89d7")},"89d7":function(t,e,s){},fb6a:function(t,e,s){"use strict";var i=s("23e7"),c=s("861d"),a=s("e8b5"),n=s("23cb"),r=s("50c4"),d=s("fc6a"),o=s("8418"),l=s("b622"),p=s("1dde"),u=s("ae40"),h=p("slice"),b=u("slice",{ACCESSORS:!0,0:0,1:2}),f=l("species"),k=[].slice,O=Math.max;i({target:"Array",proto:!0,forced:!h||!b},{slice:function(t,e){var s,i,l,p=d(this),u=r(p.length),h=n(t,u),b=n(void 0===e?u:e,u);if(a(p)&&(s=p.constructor,"function"!=typeof s||s!==Array&&!a(s.prototype)?c(s)&&(s=s[f],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return k.call(p,h,b);for(i=new(void 0===s?Array:s)(O(b-h,0)),l=0;h<b;h++,l++)h in p&&o(i,l,p[h]);return i.length=l,i}})}}]);
//# sourceMappingURL=chunk-8fc27412.fbd2fe8e.js.map