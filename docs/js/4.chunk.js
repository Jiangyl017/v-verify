webpackJsonp([4],{321:function(e,n){e.exports={template:'<div class="markdown-body"><h3 id="-">基本示例</h3>\n<h4 id="1-input-blur-">1.使用 <code>input</code> <code>blur</code> 触发验证</h4>\n<p><vuep template="#demo1"></vuep></p>\n<script v-pre type="text/x-template" id="demo1">\n  <template>\n    <div>\n      <h3 class="example-main-color">date - input</h3>\n      <div>\n        <input class="example-input"\n               v-verify.input.blur="\'required|date\'"\n               placeholder="YYYY-MM-DD"/>\n      </div>\n    </div>\n  </template>\n<\/script>\n\n<h4 id="2-initial-change-">2.使用 <code>initial</code> 初始化验证并使用 <code>change</code> 触发验证</h4>\n<p><vuep template="#demo2"></vuep></p>\n<script v-pre type="text/x-template" id="demo2">\n  <template>\n    <div>\n      <h3 class="example-main-color">date - initial</h3>\n      <div>\n        <input v-model="time"\n               class="example-input"\n               v-verify.initial.change="\'required|date:DD/MM/YYYY\'"\n               placeholder="DD/MM/YYYY"/>\n      </div>\n    </div>\n  </template>\n  <script>\n    module.exports = {\n      data () {\n        return {\n          time: \'2018-09-24\'\n        }\n      }\n    }\n  <\/script>\n<\/script>\n\n<h4 id="3-dom-">3.使用dom容器展示 错误信息</h4>\n<p>添加 <code>data-verify-dom</code> 属性</p>\n<p><vuep template="#demo3"></vuep></p>\n<script v-pre type="text/x-template" id="demo3">\n  <template>\n    <div>\n      <h3 class="example-main-color">date - initial</h3>\n      <div>\n        <input v-model="time"\n               class="example-input"\n               v-verify.initial.change="\'required|date:DD/MM/YYYY\'"\n               data-verify-dom=".example-error"\n               placeholder="DD/MM/YYYY"/>\n        <span class="example-error"></span>\n      </div>\n    </div>\n  </template>\n  <script>\n    module.exports = {\n      data () {\n        return {\n          time: \'2018-09-24\'\n        }\n      }\n    }\n  <\/script>\n<\/script>\n\n<h4 id="4-input-">4.给input 错误时样式</h4>\n<p>添加 <code>data-verify-style</code> 属性</p>\n<p><vuep template="#demo4"></vuep></p>\n<script v-pre type="text/x-template" id="demo4">\n  <template>\n    <div>\n      <h3 class="example-main-color">date - initial</h3>\n      <div>\n        <input v-model="time"\n               class="example-input"\n               v-verify.initial.change="\'required|date:DD/MM/YYYY\'"\n               data-verify-dom=".example-error"\n               data-verify-style="example-input-error"\n               placeholder="DD/MM/YYYY"/>\n        <span class="example-error"></span>\n      </div>\n    </div>\n  </template>\n  <script>\n    module.exports = {\n      data () {\n        return {\n          time: \'2018-09-24\'\n        }\n      }\n    }\n  <\/script>\n<\/script>\n\n<h3 id="-">使用指令修饰符</h3>\n<p>v-verify 可以添加 <code>vue</code> 指令修饰符 focus 、input 、blur 、change 、 initial 等修饰符表示验证器触发等时机</p>\n<h3 id="-">指令表达式</h3>\n<p>v－verify 表达式值可以为一组字符串表示的验证器，多个验证器之间用符号 <code>|</code> 分割，指令v-verify将依次验证分割后的验证器。</p>\n<h3 id="-">使用自定义属性</h3>\n<p>属性 <code>data-verify-dom</code> 表示当验证不通过时，提示消息展示的dom容器,其值为选择器</p>\n<blockquote>\n<p>这里的 <code>data-verify-dom</code> 和 <code>input</code> 必需拥有同一个父元素 不然将无法查找到 data-verify-dom</p>\n</blockquote>\n</div>'}}});
//# sourceMappingURL=4.chunk.js.map