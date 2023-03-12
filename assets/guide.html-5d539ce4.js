import{a2 as n,Y as a,Z as l,a4 as p,a3 as s}from"./framework-18e271cf.js";const e={},o=s(`<p>This plugin will inject expect reading time and word count statistics into the page data.</p><p>Relevant information will be injected into the <code>readingTime</code> property in the following format:</p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">interface</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">ReadingTime</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** Expect reading minute */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">minutes</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">/** Words count */</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">words</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">number</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div>`,3),t=s(`<h2 id="node-side" tabindex="-1"><a class="header-anchor" href="#node-side" aria-hidden="true">#</a> Node Side</h2><p>For any page, you can get estimated reading time and word count from <code>page.data.readingTime</code>:</p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E5C07B;">page</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">readingTime</span><span style="color:#ABB2BF;">; </span><span style="color:#7F848E;font-style:italic;">// { minutes: 3.2, words: 934 }</span></span>
<span class="line"></span></code></pre></div><p>You can access it for further processing in the <code>extendsPage</code> lifecycle:</p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">extendsPage</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">page</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">readingTime</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre></div><p>You can also get the reading time of each page in the <code>onInitialized</code> lifecycle:</p><div class="language-typescript" data-ext="ts"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">onInitialized</span><span style="color:#ABB2BF;">: (</span><span style="color:#E06C75;font-style:italic;">app</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">app</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">pages</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">map</span><span style="color:#ABB2BF;">((</span><span style="color:#E06C75;font-style:italic;">page</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">page</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">data</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">readingTime</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#ABB2BF;">  },</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="client-side" tabindex="-1"><a class="header-anchor" href="#client-side" aria-hidden="true">#</a> Client Side</h2><p>You can get relevant data directly on the client side:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;Expect reading time: {{ page.readingTime.minutes }} minute(s)&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;Word count: {{ page.readingTime.words }} words&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">setup</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lang</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;ts&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">usePageData</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;@vuepress/client&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">computed</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vue&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pageData</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">usePageData</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to use with different locales, we provide the multilingual variable <code>R<wbr>EADING_TIME_LOCALES</code> globally. By installing and introducing <code>vuepress-shared</code>, you can automatically provide multilingual text for all pages:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;{{ readingTimeInfo.time }}&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;{{ readingTimeInfo.word }}&lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">setup</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lang</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;ts&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">usePageData</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;@vuepress/client&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">computed</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vue&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">useLocaleConfig</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;vuepress-shared/client&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pageData</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">usePageData</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">readingTimeLocale</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">useLocaleConfig</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">readingTimeLocales</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// locale text</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">readingTimeInfo</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">computed</span><span style="color:#ABB2BF;">(() </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">minutes</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">words</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">pageData</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">value</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">readingTime</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">time</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E06C75;">minutes</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">?</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;">// we have a special hint for &lt; 1 min</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">readingTimeLocale</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">value</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">less1Minute</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">readingTimeLocale</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">value</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">time</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">replace</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#98C379;">&quot;$time&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E5C07B;">Math</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">round</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">minutes</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">toString</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">          ),</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">word</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">readingTimeLocale</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">value</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">word</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">replace</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;$word&quot;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;">words</span><span style="color:#ABB2BF;">),</span></span>
<span class="line"><span style="color:#ABB2BF;">  };</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function c(B,r){return a(),l("div",null,[o,p(" more "),t])}const y=n(e,[["render",c],["__file","guide.html.vue"]]);export{y as default};
