webpackJsonp([4],{278:function(n,i,t){"use strict";var a=t(314),e=t.n(a);i.a={paddingSquare:e.a}},28:function(n,i,t){var a=t(2)(t(285),t(324),null,null);n.exports=a.exports},285:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=t(278);i.default={data:function(){return{text:"",dialog:!1}},mounted:function(){a.a[this.$route.params.name]?this.text=a.a[this.$route.params.name]:this.open()},methods:{open:function(){this.dialog=!0},close:function(){this.dialog=!1},redirect:function(){this.$router.push("/List/blog")}}}},314:function(n,i){n.exports='    <style>\n      *{\n        padding: 0;\n        margin: 0;\n      }\n      .list{\n        width: 100%;\n        padding: 5px 16px;\n        box-sizing: border-box;\n      }\n      /*用padding的方式*/\n      .square-box{\n        margin: 5px auto;\n        padding: 0 5px;\n        box-sizing: border-box;\n        float:left;\n        width:calc(100%/3)\n      }\n      .square{\n        width: calc(100%);\n        padding-bottom: 100%;\n        background: red;\n        box-sizing: border-box;\n      }\n      /*用calc的方式*/\n      /*.square-box{\n        margin: 5px auto;\n        box-sizing: border-box;\n        float:left;\n        width:calc(100%/3)\n      }\n      .square{\n        margin: 0 auto;\n        width: calc(100% - 16px * 2);\n        padding-bottom: calc(100% - 16px * 2);\n        background: red;\n        box-sizing: border-box;\n      }*/\n    </style>\n\n    <div class="list">\n      <div class="square-box">\n        <div class="square"></div>\n      </div>\n      <div class="square-box">\n        <div class="square"></div>\n      </div>\n      <div class="square-box">\n        <div class="square"></div>\n      </div>\n      <div class="square-box">\n        <div class="square"></div>\n      </div>\n      <div class="square-box">\n        <div class="square"></div>\n      </div>\n    </div>\n    <div style="clear:both"></div>\n'},324:function(n,i){n.exports={render:function(){var n=this,i=n.$createElement,t=n._self._c||i;return t("div",[t("mu-dialog",{attrs:{open:n.dialog,title:"Alert Dialog"}},[n._v("\n    没有找到对应的示例,将为您跳转到博客列表页\n    "),t("mu-flat-button",{attrs:{label:"确定",primary:""},on:{click:n.redirect},slot:"actions"})],1),n._v(" "),t("example-page",{attrs:{text:n.text}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=4.7f03aa404832e60a4914.js.map