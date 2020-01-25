!function(e,t,n){var i=function(n,i){"use strict";var s=function(e,t){if(!i.versionCheck||!i.versionCheck("1.10.1"))throw"DataTables Responsive requires DataTables 1.10.1 or newer";e.responsive||(this.s={dt:new i.Api(e),columns:[]},t&&"string"==typeof t.details&&(t.details={type:t.details}),this.c=n.extend(!0,{},s.defaults,t),e.responsive=this,this._constructor())};s.prototype={_constructor:function(){var t=this,i=this.s.dt;i.settings()[0]._responsive=this,n(e).on("resize.dtr orientationchange.dtr",i.settings()[0].oApi._fnThrottle(function(){t._resize()})),i.on("destroy.dtr",function(){n(e).off("resize.dtr orientationchange.dtr")}),this.c.breakpoints.sort(function(e,t){return e.width<t.width?1:e.width>t.width?-1:0}),this._classLogic(),this._resizeAuto(),this._resize();var s=this.c.details;s.type&&(t._detailsInit(),this._detailsVis(),i.on("column-visibility.dtr",function(){t._detailsVis()}),n(i.table().node()).addClass("dtr-"+s.type))},_columnsVisiblity:function(t){var i,s,o=this.s.dt,a=this.s.columns,r=n.map(a,function(e){return(!e.auto||null!==e.minWidth)&&(!0===e.auto?"-":-1!==e.includeIn.indexOf(t))}),l=0;for(i=0,s=r.length;i<s;i++)!0===r[i]&&(l+=a[i].minWidth);var d=o.table().container().offsetWidth-l;if(!a[0].minWidthDesktop)for(var c=0;c<a.length;c++)a[c].minWidthDesktop=a[c].minWidth;if("mobile-l"==t||"mobile-p"==t||"tablet-l"==t||"tablet-p"==t)for(c=0;c<a.length;c++)e.innerWidth<550&&(a[c].minWidth=207);else for(c=0;c<a.length;c++)a[c].minWidth=a[c].minWidthDesktop;for(i=0,s=r.length;i<s;i++)a[i].control?d-=a[i].minWidth:"-"===r[i]&&(r[i]=!(d-a[i].minWidth<0),d-=a[i].minWidth);var h=!1;for(i=0,s=a.length;i<s;i++)if(!a[i].control&&!r[i]){h=!0;break}for(i=0,s=a.length;i<s;i++)a[i].control&&(r[i]=h);return r},_classLogic:function(){var e=this,t=this.c.breakpoints,i=this.s.dt.columns().eq(0).map(function(e){return{className:this.column(e).header().className,includeIn:[],auto:!1,control:!1}}),s=function(e,t){var n=i[e].includeIn;-1===n.indexOf(t)&&n.push(t)},o=function(n,o,a,r){var l,d,c;if(a){if("max-"===a)for(l=e._find(o).width,d=0,c=t.length;d<c;d++)t[d].width<=l&&s(n,t[d].name);else if("min-"===a)for(l=e._find(o).width,d=0,c=t.length;d<c;d++)t[d].width>=l&&s(n,t[d].name);else if("not-"===a)for(d=0,c=t.length;d<c;d++)-1===t[d].name.indexOf(r)&&s(n,t[d].name)}else i[n].includeIn.push(o)};i.each(function(e,i){for(var s=e.className.split(" "),a=!1,r=0,l=s.length;r<l;r++){var d=n.trim(s[r]);if("all"===d)return a=!0,void(e.includeIn=n.map(t,function(e){return e.name}));if("none"===d)return void(a=!0);if("control"===d)return a=!0,void(e.control=!0);n.each(t,function(e,t){var n=t.name.split("-"),s=new RegExp("(min\\-|max\\-|not\\-)?("+n[0]+")(\\-[_a-zA-Z0-9])?"),r=d.match(s);r&&(a=!0,r[2]===n[0]&&r[3]==="-"+n[1]?o(i,t.name,r[1],r[2]+r[3]):r[2]!==n[0]||r[3]||o(i,t.name,r[1],r[2]))})}a||(e.auto=!0)}),this.s.columns=i},_detailsInit:function(){var e=this,t=this.s.dt,i=this.c.details;"inline"===i.type&&(i.target="td:first-child");var s=i.target,o="string"==typeof s?s:"td";n(t.table().body()).on("click",o,function(i){if(n(t.table().node()).hasClass("collapsed")){if("number"==typeof s){var o=s<0?t.columns().eq(0).length+s:s;if(t.cell(this).index().column!==o)return}var a=t.row(n(this).closest("tr"));if(a.child.isShown())a.child(!1),n(a.node()).removeClass("parent");else if(!n(a.node()).hasClass("parent")){var r=e.c.details.renderer(t,a[0]);a.child(r,"child").show(),n(a.node()).addClass("parent")}}})},_detailsVis:function(){var e=this,t=this.s.dt,i=t.columns(":hidden").indexes().flatten(),s=!0;(0===i.length||1===i.length&&this.s.columns[i[0]].control)&&(s=!1),s?(n(t.table().node()).addClass("collapsed"),t.rows().eq(0).each(function(n){var i=t.row(n);if(i.child()){var s=e.c.details.renderer(t,i[0]);!1===s?i.child.hide():i.child(s,"child").show()}})):(n(t.table().node()).removeClass("collapsed"),t.rows().eq(0).each(function(e){t.row(e).child.hide()}))},_find:function(e){for(var t=this.c.breakpoints,n=0,i=t.length;n<i;n++)if(t[n].name===e)return t[n]},_resize:function(){var t=this.s.dt,i=n(e).width(),s=this.c.breakpoints,o=s[0].name;e.innerWidth<400&&(o=s[3].name);for(var a=s.length-1;a>=0;a--)if(i<=s[a].width){o=s[a].name;break}var r=this._columnsVisiblity(o);t.columns().eq(0).each(function(e,n){t.column(e).visible(r[n])})},_resizeAuto:function(){var e=this.s.dt,t=this.s.columns;if(this.c.auto&&-1!==n.inArray(!0,n.map(t,function(e){return e.auto}))){e.table().node().offsetWidth,e.columns;var i=e.table().node().cloneNode(!1),s=n(e.table().header().cloneNode(!1)).appendTo(i),o=n(e.table().body().cloneNode(!1)).appendTo(i);e.rows({page:"current"}).indexes().each(function(t){var i=e.row(t).node().cloneNode(!0);e.columns(":hidden").flatten().length&&n(i).append(e.cells(t,":hidden").nodes().to$().clone()),n(i).appendTo(o)});var a=e.columns().header().to$().clone(!1).wrapAll("tr").appendTo(s),r=n("<div/>").css({width:1,height:1,overflow:"hidden"}).append(i).insertBefore(e.table().node());e.columns().eq(0).each(function(e){t[e].minWidth=a[e].offsetWidth||0}),r.remove()}}},s.breakpoints=[{name:"desktop",width:1/0},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}],s.defaults={breakpoints:s.breakpoints,auto:!0,details:{renderer:function(e,t){var i=e.cells(t,":hidden").eq(0).map(function(t){var i=n(e.column(t.column).header());return i.hasClass("control")?"":'<li><span class="dtr-title">'+i.text()+':</span> <span class="dtr-data">'+e.cell(t).data()+"</span></li>"}).toArray().join("");return!!i&&n("<ul/>").append(i)},target:0,type:"inline"}};var o=n.fn.dataTable.Api;return o.register("responsive()",function(){return this}),o.register("responsive.recalc()",function(e,t,n){this.iterator("table",function(e){e._responsive&&(e._responsive._resizeAuto(),e._responsive._resize())})}),s.version="1.0.1",n.fn.dataTable.Responsive=s,n.fn.DataTable.Responsive=s,n(t).on("init.dt.dtr",function(e,t,i){if(n(t.nTable).hasClass("responsive")||n(t.nTable).hasClass("dt-responsive")||t.oInit.responsive){var o=t.oInit.responsive;!1!==o&&new s(t,n.isPlainObject(o)?o:{})}}),s};"function"==typeof define&&define.amd?define(["jquery","datatables"],i):"object"==typeof exports?i(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.Responsive&&i(jQuery,jQuery.fn.dataTable)}(window,document);
