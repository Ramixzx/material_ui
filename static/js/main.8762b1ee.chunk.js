(this["webpackJsonptemplate-simple-react"]=this["webpackJsonptemplate-simple-react"]||[]).push([[0],{79:function(t,e,a){},80:function(t,e,a){},81:function(t,e,a){},90:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),c=a(9),r=a.n(c),i=(a(57),a(58),a(79),a(46)),l=a(38),o=(a(80),a(81),a(120)),u=a(124),j=a(45),d=a.n(j),b=a(11),O=function(t){return t.tasks.length>0?t.tasks.map((function(e){return Object(b.jsxs)(o.a,{className:"task-card",children:[Object(b.jsx)(u.a,{variant:"body1",className:"task-title",children:e.title}),Object(b.jsx)(d.a,{className:"task-delete",onClick:function(){return t.deleteTask(e.id)}})]},e.id)})):Object(b.jsx)(u.a,{variant:"h3",className:"no-tasks",children:"No hay tareas. Agregar una tarea por favor."})},f=a(125),h=function(){var t=Object(n.useState)([]),e=Object(l.a)(t,2),a=e[0],s=e[1],c=Object(n.useState)(1),r=Object(l.a)(c,2),j=r[0],d=r[1],h=function(t){var e;13===t.charCode&&""!==t.target.value&&(e=t.target.value,s([{title:e,id:j}].concat(Object(i.a)(a))),d(parseInt(j)+1),t.target.value="")};return console.log(a),Object(b.jsxs)(o.a,{className:"main-card",children:[Object(b.jsx)(u.a,{align:"center",variant:"h1",children:"To Do List"}),Object(b.jsx)(f.a,{type:"text",variant:"standard",label:"Ingresa una nueva tarea",className:"task-input",onKeyPress:function(t){return h(t)}}),Object(b.jsx)(O,{tasks:a,deleteTask:function(t){s(a.filter((function(e){return e.id!==t})))}})]})};var m=function(){return Object(b.jsx)(h,{})};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.8762b1ee.chunk.js.map