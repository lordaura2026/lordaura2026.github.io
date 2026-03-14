// 模拟文章数据
const articles = [
  {
    id: 1,
    title: "如何在职场中保持情绪稳定？",
    category: "Workplace",
    excerpt: "真正成熟的人会先暂停，再思考：\"我为什么这么生气？\"",
    date: "2024年3月",
    content: "真正成熟的人会先暂停，再思考：\"我为什么这么生气？\"\n\n在职场中，情绪稳定是一种非常重要的能力。它不仅有助于我们更好地处理工作中的挑战，还能让我们与同事、上司建立更良好的关系。那么，如何才能在职场中保持情绪稳定呢？\n\n首先，我们需要认识到情绪是正常的。每个人都会有情绪波动，关键在于如何管理这些情绪。当我们感到愤怒、沮丧或焦虑时，不要试图压抑这些情绪，而是要承认它们的存在，然后找到合适的方式来表达和释放。\n\n其次，我们需要学会深呼吸和冷静思考。当遇到让我们情绪激动的事情时，先深呼吸几次，让自己冷静下来，然后再思考如何处理问题。这样可以避免我们在情绪激动时做出冲动的决定。\n\n另外，我们还可以通过运动、冥想等方式来缓解压力和情绪。这些活动可以帮助我们放松身心，调整状态，从而更好地应对工作中的挑战。\n\n最后，我们需要建立良好的支持系统。与同事、朋友或家人分享我们的感受，寻求他们的建议和支持，可以帮助我们更好地应对工作中的压力和情绪问题。\n\n总之，保持情绪稳定需要我们不断地学习和实践。通过认识情绪、冷静思考、缓解压力和建立支持系统，我们可以在职场中保持良好的心态，更好地发挥自己的能力。"
  },
  {
    id: 2,
    title: "饭局上，如何优雅地拒绝劝酒？",
    category: "Life",
    excerpt: "不伤和气，又守住底线的三种话术。",
    date: "2024年2月",
    content: "不伤和气，又守住底线的三种话术。\n\n在饭局上，劝酒是一种常见的社交行为，但有时候我们可能不想喝酒，或者不能喝酒。这时候，如何优雅地拒绝劝酒，既不伤害对方的面子，又能守住自己的底线呢？\n\n第一种话术：以健康为由。可以说：\"最近身体不太舒服，医生建议我不要喝酒，实在抱歉。\"这样的理由既合理，又不会让对方觉得你是在故意拒绝。\n\n第二种话术：以工作为由。可以说：\"等下还有工作要做，需要保持清醒，不能喝酒。\"这样的理由既表明了你的责任心，又能让对方理解你的处境。\n\n第三种话术：以替代方案为由。可以说：\"我以茶代酒，敬您一杯。\"这样既回应了对方的热情，又避免了喝酒。\n\n总之，拒绝劝酒需要技巧，要既尊重对方，又坚持自己的原则。通过以上三种话术，我们可以在饭局上优雅地拒绝劝酒，保持良好的人际关系。"
  },
  {
    id: 3,
    title: "职场中如何与不同性格的同事相处？",
    category: "Workplace",
    excerpt: "理解差异，建立良好的职场关系。",
    date: "2024年1月",
    content: "理解差异，建立良好的职场关系。\n\n在职场中，我们会遇到各种各样性格的同事，如何与他们相处是一门学问。以下是一些建议：\n\n1. 了解不同性格类型：通过观察和交流，了解同事的性格特点，比如有些人比较直接，有些人比较敏感，有些人比较内向，有些人比较外向。\n\n2. 调整沟通方式：根据同事的性格特点，调整自己的沟通方式。比如，对于直接的同事，你可以直接表达自己的想法；对于敏感的同事，你需要更加注意措辞和语气。\n\n3. 尊重差异：每个人都有自己的性格特点，没有绝对的好坏之分。尊重同事的差异，不要试图改变他们，而是学会适应和理解。\n\n4. 寻找共同点：无论性格多么不同，人们总有一些共同点。找到与同事的共同点，可以帮助你建立更好的关系。\n\n5. 保持专业：无论与同事的关系如何，都要保持专业的工作态度，避免将个人情绪带入工作中。\n\n通过以上方法，你可以与不同性格的同事建立良好的关系，创造一个和谐的工作环境。"
  },
  {
    id: 4,
    title: "如何提高工作效率？",
    category: "Workplace",
    excerpt: "掌握时间管理技巧，提升工作效率。",
    date: "2023年12月",
    content: "掌握时间管理技巧，提升工作效率。\n\n在快节奏的职场中，提高工作效率是每个人都需要面对的挑战。以下是一些提高工作效率的方法：\n\n1. 制定计划：每天开始工作前，制定当天的工作计划，明确优先事项。\n\n2. 番茄工作法：将工作时间分为25分钟的工作时段和5分钟的休息时段，这样可以提高专注力。\n\n3. 减少干扰：关闭不必要的通知，创建一个安静的工作环境，减少干扰。\n\n4. 批量处理：将相似的任务集中处理，这样可以减少切换任务的时间成本。\n\n5. 学会说"不"：对于不属于自己职责范围的任务，学会合理拒绝，避免过度承诺。\n\n6. 定期休息：适当的休息可以恢复精力，提高工作效率。\n\n7. 持续学习：不断学习新技能和知识，提高自己的能力和效率。\n\n通过以上方法，你可以提高工作效率，更好地完成工作任务，同时也能有更多的时间用于个人生活。"
  },
  {
    id: 5,
    title: "如何在面试中脱颖而出？",
    category: "Workplace",
    excerpt: "掌握面试技巧，提高面试成功率。",
    date: "2023年11月",
    content: "掌握面试技巧，提高面试成功率。\n\n面试是求职过程中的重要环节，如何在面试中脱颖而出是每个求职者都关心的问题。以下是一些面试技巧：\n\n1. 充分准备：了解公司的背景、文化和职位要求，准备好常见问题的答案。\n\n2. 展示自信：保持良好的姿态和眼神交流，展示自己的自信。\n\n3. 突出优势：强调自己的技能和经验如何与职位要求匹配。\n\n4. 问有质量的问题：准备一些关于公司和职位的问题，展示你的兴趣和思考。\n\n5. 注意细节：注意着装、礼仪和时间观念，这些细节会影响面试官的印象。\n\n6. 真实回答：诚实回答问题，不要夸大自己的能力和经验。\n\n7. 后续跟进：面试后发送感谢邮件，表达你对职位的兴趣。\n\n通过以上技巧，你可以在面试中脱颖而出，提高面试成功率。"
  }
];

// 分页配置
const pageSize = 2;
let currentPage = 1;

// 初始化页面
function initPage() {
  renderArticles();
  renderPagination();
  bindEvents();
}

// 渲染文章列表
function renderArticles() {
  const container = document.getElementById('articles-container');
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageArticles = articles.slice(startIndex, endIndex);
  
  container.innerHTML = '';
  
  // 添加网站标题和描述
  const header = document.createElement('div');
  header.innerHTML = `
    <h1>人情世故网</h1>
    <p>专注职场人情与处世智慧 · 纯文字 · 极简阅读</p>
  `;
  container.appendChild(header);
  
  // 添加文章列表
  pageArticles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.className = 'card article-list-item';
    articleElement.innerHTML = `
      <div class="category-tag">${article.category}</div>
      <h3><a href="#article-${article.id}" onclick="showArticle(${article.id})">${article.title}</a></h3>
      <p class="excerpt">${article.excerpt}</p>
      <div class="meta">作者：www.人情世故.com　·　${article.date}</div>
    `;
    container.appendChild(articleElement);
  });
}

// 渲染分页控件
function renderPagination() {
  const pageNumbersElement = document.querySelector('.page-numbers');
  const totalPages = Math.ceil(articles.length / pageSize);
  
  pageNumbersElement.innerHTML = '';
  
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
    pageBtn.textContent = i;
    pageBtn.onclick = () => {
      currentPage = i;
      renderArticles();
      renderPagination();
    };
    pageNumbersElement.appendChild(pageBtn);
  }
  
  // 更新上一页和下一页按钮状态
  const prevBtn = document.querySelector('.page-btn.prev');
  const nextBtn = document.querySelector('.page-btn.next');
  
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
  
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderArticles();
      renderPagination();
    }
  };
  
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderArticles();
      renderPagination();
    }
  };
}

// 绑定事件
function bindEvents() {
  // 跳转按钮事件
  document.getElementById('goJump').onclick = () => {
    const pageInput = document.getElementById('pageJump');
    const page = parseInt(pageInput.value, 10);
    const totalPages = Math.ceil(articles.length / pageSize);
    
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      currentPage = page;
      renderArticles();
      renderPagination();
      pageInput.value = '';
    }
  };
  
  // 回车键跳转
  document.getElementById('pageJump').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('goJump').click();
    }
  });
}

// 显示文章详情
function showArticle(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;
  
  const container = document.getElementById('articles-container');
  
  container.innerHTML = `
    <a href="#" class="back-home" onclick="initPage(); return false;">返回首页</a>
    <article class="card">
      <h1 class="post-title">${article.title}</h1>
      <div class="meta">作者：www.人情世故.com　·　${article.date}</div>
      <div class="post-content">
        ${article.content.split('\n').map(p => p ? `<p>${p}</p>` : '').join('')}
      </div>
    </article>
    <div class="section-block">
      <h2>相关文章</h2>
      <ul>
        ${articles.filter(a => a.id !== id).slice(0, 3).map(a => `
          <li><a href="#article-${a.id}" onclick="showArticle(${a.id})">${a.title}</a> — ${a.date}</li>
        `).join('')}
      </ul>
    </div>
  `;
  
  // 隐藏分页
  document.querySelector('.pagination').style.display = 'none';
}

// 初始化页面
initPage();