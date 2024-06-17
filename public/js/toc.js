document.addEventListener("DOMContentLoaded", function() {
    const toc = document.getElementById('toc');
    const headers = document.querySelectorAll('h2, h3, h4, h5, h6');

    if (headers.length === 0) return;

    const tocList = document.createElement('ul');

    headers.forEach(header => {
        const id = header.id || header.textContent.replace(/\s+/g, '-').toLowerCase();
        header.id = id;

        const tocItem = document.createElement('li');
        const tocLink = document.createElement('a');

        tocLink.textContent = header.textContent;
        tocLink.href = `#${id}`;
        tocLink.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(tocLink.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });

        tocItem.appendChild(tocLink);
        tocList.appendChild(tocItem);
    });

    toc.appendChild(tocList);

    const tocLinks = toc.querySelectorAll('a');

    function onScroll() {
        let current = '';
        headers.forEach(header => {
            const headerTop = header.getBoundingClientRect().top;
            if (headerTop <= 150) {
                current = header.id;
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
});
