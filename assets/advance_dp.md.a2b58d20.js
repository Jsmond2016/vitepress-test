import{o as n,c as s,d as a}from"./app.d77a6eb2.js";const p='{"title":"动态规划算法思想","description":"","frontmatter":{},"headers":[{"level":2,"title":"题型一：","slug":"题型一："}],"relativePath":"advance/dp.md","lastUpdated":1636195210482}',t={},o=a('<h1 id="动态规划算法思想"><a class="header-anchor" href="#动态规划算法思想" aria-hidden="true">#</a> 动态规划算法思想</h1><p>核心流程：</p><ul><li>初始态</li><li>方程式/状态转移方程式</li><li>终止态</li></ul><p><strong>核心：</strong> 找到状态转移方程式</p><p>以 斐波那契数列算法为例：</p><ul><li>初始态：F(0) = 0; F(1) = 1</li><li>方程式：F(n) = F(n-1) + F(n-2)</li><li>终止态：F(5) ?</li></ul><p>适用题型：</p><ul><li>计数：有多少种方式/ 方法；例如：机器人从左上角到右下角有多少个路径</li><li>求最值：极大值/ 极小值：例如：机器人从左到右路径的最大数字和</li><li>求存在性：是否存在某个可能；例如：是否存在一条路径使得机器人...</li></ul><p>推荐例题：</p><ul><li>509 斐波那契数</li><li>62 不同路径</li><li>121 买卖股票的最佳时机</li><li>70 爬楼梯</li><li>279 完全平方数</li></ul><hr><h2 id="题型一："><a class="header-anchor" href="#题型一：" aria-hidden="true">#</a> 题型一：</h2><ul><li><a href="https://leetcode-cn.com/problems/fibonacci-number/" target="_blank" rel="noopener noreferrer">509. 斐波那契数</a></li></ul><p>难度简单260收藏分享切换为英文接收动态反馈</p><p><strong>斐波那契数</strong>，通常用 <code>F(n)</code> 表示，形成的序列称为 <strong>斐波那契数列</strong> 。该数列由 <code>0</code> 和 <code>1</code> 开始，后面的每一项数字都是前面两项数字的和。也就是：</p><div class="language-"><pre><code>F(0) = 0，F(1) = 1\nF(n) = F(n - 1) + F(n - 2)，其中 n &gt; 1\n</code></pre></div><p>给你 <code>n</code> ，请计算 <code>F(n)</code> 。</p><p><strong>示例 1：</strong></p><div class="language-"><pre><code>输入：2\n输出：1\n解释：F(2) = F(1) + F(0) = 1 + 0 = 1\n</code></pre></div><p><strong>示例 2：</strong></p><div class="language-"><pre><code>输入：3\n输出：2\n解释：F(3) = F(2) + F(1) = 1 + 1 = 2\n</code></pre></div><p><strong>示例 3：</strong></p><div class="language-"><pre><code>输入：4\n输出：3\n解释：F(4) = F(3) + F(2) = 2 + 1 = 3\n</code></pre></div><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt;= 30</code></li></ul><hr><ul><li>视频：</li><li>题解：</li><li>方法：动态规划</li></ul><p>Code：</p><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">fib</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> n <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">return</span> sum\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li><a href="https://leetcode-cn.com/problems/unique-paths/" target="_blank" rel="noopener noreferrer">62. 不同路径</a></li></ul><p>难度中等936收藏分享切换为英文接收动态反馈</p><p>一个机器人位于一个 <code>m x n</code> 网格的左上角 （起始点在下图中标记为 “Start” ）。</p><p>机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。</p><p>问总共有多少条不同的路径？</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png" alt="img"></p><div class="language-"><pre><code>输入：m = 3, n = 7\n输出：28\n</code></pre></div><p><strong>示例 2：</strong></p><div class="language-"><pre><code>输入：m = 3, n = 2\n输出：3\n解释：\n从左上角开始，总共有 3 条路径可以到达右下角。\n1. 向右 -&gt; 向下 -&gt; 向下\n2. 向下 -&gt; 向下 -&gt; 向右\n3. 向下 -&gt; 向右 -&gt; 向下\n</code></pre></div><p><strong>示例 3：</strong></p><div class="language-"><pre><code>输入：m = 7, n = 3\n输出：28\n</code></pre></div><p><strong>示例 4：</strong></p><div class="language-"><pre><code>输入：m = 3, n = 3\n输出：6\n</code></pre></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= m, n &lt;= 100</code></li><li>题目数据保证答案小于等于 <code>2 * 109</code></li></ul><hr><ul><li>视频：</li><li>题解：<a href="https://leetcode-cn.com/problems/unique-paths/solution/bu-tong-lu-jing-by-leetcode-solution-hzjf/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/unique-paths/solution/bu-tong-lu-jing-by-leetcode-solution-hzjf/</a></li><li>方法：动态规划</li><li>思路：</li></ul><blockquote><p>我们用 f(i, j)f(i,j) 表示从左上角走到 (i, j)(i,j) 的路径数量，其中 ii 和 jj 的范围分别是 [0, m)[0,m) 和 [0, n)[0,n)。</p><p>由于我们每一步只能从向下或者向右移动一步，因此要想走到 (i, j)(i,j)，如果向下走一步，那么会从 (i-1, j)(i−1,j) 走过来；如果向右走一步，那么会从 (i, j-1)(i,j−1) 走过来。因此我们可以写出动态规划转移方程：</p><p>f(i, j) = f(i-1, j) + f(i, j-1) f(i,j)=f(i−1,j)+f(i,j−1)</p><p>需要注意的是，如果 i=0i=0，那么 f(i-1,j)f(i−1,j) 并不是一个满足要求的状态，我们需要忽略这一项；同理，如果 j=0j=0，那么 f(i,j-1)f(i,j−1) 并不是一个满足要求的状态，我们需要忽略这一项。</p><p>初始条件为 f(0,0)=1f(0,0)=1，即从左上角走到左上角有一种方法。</p><p>最终的答案即为 f(m-1,n-1)f(m−1,n−1)。</p><p>细节</p><p>为了方便代码编写，我们可以将所有的 f(0, j)f(0,j) 以及 f(i, 0)f(i,0) 都设置为边界条件，它们的值均为 11。</p></blockquote><p>Code：</p><div class="language-js"><pre><code><span class="token comment">/**\n * @param {number} m\n * @param {number} n\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">uniquePaths</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 初始化一个二维数组</span>\n    <span class="token keyword">const</span> f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">i</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        f<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> f<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> f<span class="token punctuation">[</span>m<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li><a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/" target="_blank" rel="noopener noreferrer">121. 买卖股票的最佳时机</a></li></ul><p>难度简单1539收藏分享切换为英文接收动态反馈</p><p>给定一个数组 <code>prices</code> ，它的第 <code>i</code> 个元素 <code>prices[i]</code> 表示一支给定股票第 <code>i</code> 天的价格。</p><p>你只能选择 <strong>某一天</strong> 买入这只股票，并选择在 <strong>未来的某一个不同的日子</strong> 卖出该股票。设计一个算法来计算你所能获取的最大利润。</p><p>返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 <code>0</code> 。</p><p><strong>示例 1：</strong></p><div class="language-"><pre><code>输入：[7,1,5,3,6,4]\n输出：5\n解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。\n     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。\n</code></pre></div><p><strong>示例 2：</strong></p><div class="language-"><pre><code>输入：prices = [7,6,4,3,1]\n输出：0\n解释：在这种情况下, 没有交易完成, 所以最大利润为 0。\n</code></pre></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= prices.length &lt;= 105</code></li><li><code>0 &lt;= prices[i] &lt;= 104</code></li></ul><hr><ul><li>视频：</li><li>题解：<a href="https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/121-mai-mai-gu-piao-de-zui-jia-shi-ji-by-leetcode-/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/121-mai-mai-gu-piao-de-zui-jia-shi-ji-by-leetcode-/</a></li><li>方法：一次遍历</li></ul><p>Code：</p><div class="language-js"><pre><code><span class="token comment">/**\n * @param {number[]} prices\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>prices<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>\n  <span class="token comment">// 定义最小价格</span>\n  <span class="token keyword">let</span> minPrice <span class="token operator">=</span> prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n  <span class="token comment">// 定义最大利润</span>\n  <span class="token keyword">let</span> maxProfit <span class="token operator">=</span> <span class="token number">0</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> minPrice<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      minPrice <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minPrice <span class="token operator">&gt;</span> maxProfit<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      maxProfit <span class="token operator">=</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> minPrice\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> maxProfit\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li><a href="https://leetcode-cn.com/problems/climbing-stairs/" target="_blank" rel="noopener noreferrer">70. 爬楼梯</a></li></ul><p>难度简单1571收藏分享切换为英文接收动态反馈</p><p>假设你正在爬楼梯。需要 <em>n</em> 阶你才能到达楼顶。</p><p>每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p><p>**注意：**给定 <em>n</em> 是一个正整数。</p><p><strong>示例 1：</strong></p><div class="language-"><pre><code>输入： 2\n输出： 2\n解释： 有两种方法可以爬到楼顶。\n1.  1 阶 + 1 阶\n2.  2 阶\n</code></pre></div><p><strong>示例 2：</strong></p><div class="language-"><pre><code>输入： 3\n输出： 3\n解释： 有三种方法可以爬到楼顶。\n1.  1 阶 + 1 阶 + 1 阶\n2.  1 阶 + 2 阶\n3.  2 阶 + 1 阶\n</code></pre></div><hr><ul><li>视频：</li><li>题解：<a href="https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/climbing-stairs/solution/pa-lou-ti-by-leetcode-solution/</a></li><li>方法：动态规划</li></ul><p>Code：</p><ul><li>方法1：</li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> q <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        p <span class="token operator">=</span> q<span class="token punctuation">;</span>\n        q <span class="token operator">=</span> r<span class="token punctuation">;</span>\n        r <span class="token operator">=</span> p <span class="token operator">+</span> q<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> r<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</code></pre></div><ul><li>方法2：<a href="https://leetcode-cn.com/problems/climbing-stairs/solution/hua-jie-suan-fa-70-pa-lou-ti-by-guanpengchn/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/climbing-stairs/solution/hua-jie-suan-fa-70-pa-lou-ti-by-guanpengchn/</a></li></ul><div class="language-js"><pre><code><span class="token comment">// 方法2</span>\n<span class="token comment">/**\n * @param {number} n\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">climbStairs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    dp<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><ul><li><a href="https://leetcode-cn.com/problems/perfect-squares/" target="_blank" rel="noopener noreferrer">279. 完全平方数</a></li></ul><p>难度中等816收藏分享切换为英文接收动态反馈</p><p>给定正整数 <em>n</em>，找到若干个完全平方数（比如 <code>1, 4, 9, 16, ...</code>）使得它们的和等于 <em>n</em>。你需要让组成和的完全平方数的个数最少。</p><p>给你一个整数 <code>n</code> ，返回和为 <code>n</code> 的完全平方数的 <strong>最少数量</strong> 。</p><p><strong>完全平方数</strong> 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，<code>1</code>、<code>4</code>、<code>9</code> 和 <code>16</code> 都是完全平方数，而 <code>3</code> 和 <code>11</code> 不是。</p><p><strong>示例 1：</strong></p><div class="language-"><pre><code>输入：n = 12\n输出：3 \n解释：12 = 4 + 4 + 4\n</code></pre></div><p><strong>示例 2：</strong></p><div class="language-"><pre><code>输入：n = 13\n输出：2\n解释：13 = 4 + 9\n</code></pre></div><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 104</code></li></ul><hr><ul><li>视频：</li><li>思路：<a href="https://leetcode-cn.com/problems/perfect-squares/solution/hua-jie-suan-fa-279-wan-quan-ping-fang-shu-by-guan/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/perfect-squares/solution/hua-jie-suan-fa-279-wan-quan-ping-fang-shu-by-guan/</a></li><li>解法：</li></ul><p>Code：</p><div class="language-js"><pre><code><span class="token comment">/**\n * @param {number} n\n * @return {number}\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">numSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">_</span><span class="token operator">=&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 数组长度为n+1，值均为0</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 最坏的情况就是每次+1</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">-</span> j <span class="token operator">*</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j <span class="token operator">*</span> j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 动态转移方程</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</code></pre></div>',96);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
