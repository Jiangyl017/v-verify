webpackJsonp([4],{328:function(n,e){n.exports={template:'<div class="markdown-body"><h3 id="-">基本示例</h3>\n<h3 id="-">开始之前</h3>\n<pre><code class="lang-javascript"><span class="hljs-keyword">import</span> vVerify <span class="hljs-keyword">from</span> <span class="hljs-string">\'v-verify\'</span>\n\nVue.use(vVerify, {\n  <span class="hljs-attr">mode</span>: <span class="hljs-string">\'insert\'</span>,\n  <span class="hljs-attr">errorClass</span>: <span class="hljs-string">\'example-error\'</span>,\n  <span class="hljs-attr">errorForm</span>: <span class="hljs-string">\'example-form-error\'</span>,\n  <span class="hljs-attr">errorIcon</span>: <span class="hljs-string">\'icon-warn iconfont\'</span>,\n  <span class="hljs-attr">validators</span>: { <span class="hljs-comment">// 自定义验证器</span>\n    zing: <span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {\n      <span class="hljs-keyword">return</span> <span class="hljs-regexp">/^[a-zA-Z0-9_-]+@zing\\\\.com$/</span>.test(value)\n    }\n  },\n  <span class="hljs-attr">messages</span>: { <span class="hljs-comment">// 验证器消息提示</span>\n    zing: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> <span class="hljs-string">`<span class="hljs-subst">${name}</span>必须以@zing.com结尾`</span>\n  }\n})\n</code></pre>\n<h4 id="1-input-blur-">1.使用 <code>input</code> <code>blur</code> 触发验证</h4>\n<p><vuep template="#demo1"></vuep></p>\n<script v-pre type="text/x-template" id="demo1">\n  <template>\n    <div>\n      <h3 class="example-main-color">date - input</h3>\n      <div>\n        <input class="example-input"\n               v-verify.input.blur="\'required|date\'"\n               placeholder="YYYY-MM-DD"/>\n      </div>\n    </div>\n  </template>\n<\/script>\n\n<h4 id="2-initial-change-">2.使用 <code>initial</code> 初始化验证并使用 <code>change</code> 触发验证</h4>\n<p><vuep template="#demo2"></vuep></p>\n<script v-pre type="text/x-template" id="demo2">\n  <template>\n    <div>\n      <h3 class="example-main-color">date - initial</h3>\n      <div>\n        <input v-model="time"\n               class="example-input"\n               v-verify.initial.change="\'required|date:DD/MM/YYYY\'"\n               placeholder="DD/MM/YYYY"/>\n      </div>\n    </div>\n  </template>\n  <script>\n    module.exports = {\n      data () {\n        return {\n          time: \'2018-09-24\'\n        }\n      }\n    }\n  <\/script>\n<\/script>\n\n<h4 id="3-tip-">3.使用tip模式展示 错误信息</h4>\n<p><vuep template="#demo3"></vuep></p>\n<script v-pre type="text/x-template" id="demo3">\n  <template>\n    <div>\n      <h3 class="example-main-color">date - initial</h3>\n      <div>\n        <input v-model="time"\n               class="example-input"\n               v-verify.initial.change="{\n                 regs: \'required|date:DD/MM/YYYY\',\n                 mode: \'tip\',\n                 name: \'日期\'\n                }"\n               placeholder="DD/MM/YYYY"/>\n      </div>\n    </div>\n  </template>\n  <script>\n    module.exports = {\n      data () {\n        return {\n          time: \'2018-09-24\'\n        }\n      }\n    }\n  <\/script>\n<\/script>\n\n<h4 id="4-">4.使用自定义验证器</h4>\n<p><vuep template="#demo4"></vuep></p>\n<script v-pre type="text/x-template" id="demo4">\n  <template>\n    <div>\n      <h3 class="example-main-color">date - initial</h3>\n      <div>\n        <input v-model="email"\n               class="example-input"\n               v-verify.initial.change.blur="{\n                 regs: \'required|email|zing\',\n                 name: \'邮箱\'\n               }"\n               placeholder="xxx@zing.com"/>\n      </div>\n    </div>\n  </template>\n  <script>\n    module.exports = {\n      data () {\n        return {\n          email: \'hu141418@gmail.com\'\n        }\n      }\n    }\n  <\/script>\n<\/script>\n\n<h3 id="-">使用指令修饰符</h3>\n<p>v-verify 可以添加 <code>vue</code> 指令修饰符 focus 、input 、blur 、change 、 initial 等修饰符表示验证器触发等时机</p>\n<h3 id="-">指令表达式</h3>\n<p>v－verify 表达式值可以为一组字符串表示的验证器，多个验证器之间用符号 <code>|</code> 分割，指令v-verify将依次验证分割后的验证器。</p>\n<h3 id="-">使用自定义属性</h3>\n<p>属性 <code>data-verify-dom</code> 表示当验证不通过时，提示消息展示的dom容器,其值为选择器</p>\n<blockquote>\n<p>这里的 <code>data-verify-dom</code> 和 <code>input</code> 必需拥有同一个父元素 不然将无法查找到 data-verify-dom</p>\n</blockquote>\n</div>'}}});
//# sourceMappingURL=4.chunk.js.map