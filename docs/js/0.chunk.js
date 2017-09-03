webpackJsonp([0],{148:function(s,n){s.exports={template:'<div class="markdown-body"><h2 id="demo">Demo</h2>\n<vuep template="#demo1"></vuep>\n\n<script v-pre type="text/x-template" id="demo1">\n  <style>\n    .main {\n      color: #2c3e50;\n    }\n    .text {\n      color: #4fc08d;\n    }\n  </style>\n\n  <template>\n    <div class="main">\n      <h2> Hello <span class="text">{{ name }}</span>!</h2>\n      <h2>Features</h2>\n      <ul>\n        <li v-for="text in features">{{ text }}</li>\n      </ul>\n    </div>\n  </template>\n\n  <script>\n    module.exports = {\n      data () {\n        return {\n          name: \'Vuep\',\n          features: [\n            \'Vue component spec\',\n            \'Scoped style\',\n            \'UMD and CommonJS build\'\n          ]\n        }\n      }\n    }\n  <\/script>\n<\/script>\n\n\n<p>Muse-UI 已经发布在 <a href="https://www.npmjs.com/package/muse-ui">npm</a>, 可以使用 <code>npm</code> 和 <code>yarn</code> 安装，或者使用 <code>&lt;script&gt;</code> 直接在网页中引入。</p>\n<h3 id="-">引入图标和字体</h3>\n<p>Muse-UI 使用了 material design 的字体和图标，需要在网页中引入。</p>\n<pre><code class="lang-html">&lt;link <span class="hljs-attribute">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-string">"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic"</span>&gt;\n&lt;link <span class="hljs-attribute">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attribute">href</span>=<span class="hljs-string">"https://fonts.googleapis.com/icon?family=Material+Icons"</span>&gt;\n</code></pre>\n<h3 id="npm-yarn-">npm / yarn 安装</h3>\n<pre><code class="lang-bash">npm <span class="hljs-keyword">install</span> <span class="hljs-comment">--save muse-ui</span>\n</code></pre>\n<p>或者</p>\n<pre><code class="lang-bash">yarn <span class="hljs-keyword">add</span><span class="bash"> muse-ui</span>\n</code></pre>\n<h3 id="-script-">使用 script 标签</h3>\n<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"path/to/muse-ui.css"</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"path/to/muse-ui.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre>\n<blockquote>\n<p>这里的 <strong>path/to</strong> 需要替换成实际路径</p>\n</blockquote>\n</div>'}}});
//# sourceMappingURL=0.chunk.js.map