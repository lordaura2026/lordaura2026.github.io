// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    // Mock 数据模拟文章列表
    const mockArticles = Array.from({ length: 30 }, (_, i) => ({
        title: `文章标题 ${i + 1}`,
        content: '这里是文章的内容...'
    }));

    const articlesPerPage = 10;
    let currentPage = 1;
    const totalPages = Math.ceil(mockArticles.length / articlesPerPage);

    function loadArticles(page) {
        const start = (page - 1) * articlesPerPage;
        const end = start + articlesPerPage;
        const pageArticles = mockArticles.slice(start, end);

        const container = document.getElementById('articles-container');
        container.innerHTML = '';

        pageArticles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article-item');
            articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
            container.appendChild(articleElement);
        });

        updatePagination(page);
    }

    function updatePagination(currentPage) {
        const paginationNumbers = document.querySelector('.page-numbers');
        paginationNumbers.innerHTML = '';

        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);

        for (let i = startPage; i <= endPage; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            if (i === currentPage) btn.classList.add('active');
            btn.onclick = () => loadArticles(i);
            paginationNumbers.appendChild(btn);
        }

        document.querySelector('.prev').disabled = currentPage === 1;
        document.querySelector('.next').disabled = currentPage === totalPages;

        document.querySelector('.prev').onclick = () => {
            if (currentPage > 1) loadArticles(--currentPage);
        };

        document.querySelector('.next').onclick = () => {
            if (currentPage < totalPages) loadArticles(++currentPage);
        };

        document.getElementById('goJump').onclick = () => {
            const jumpPage = parseInt(document.getElementById('pageJump').value);
            if (jumpPage >= 1 && jumpPage <= totalPages) {
                loadArticles(jumpPage);
                currentPage = jumpPage;
            }
        };
    }

    loadArticles(currentPage);
});