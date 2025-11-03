document.addEventListener('DOMContentLoaded', function() {
    // News Swiper
    const newsSwiperElement = document.querySelector('.news_swiper');
    if (newsSwiperElement) {
        const newsSwiper = new Swiper(newsSwiperElement, {
            slidesPerView: 4,
            spaceBetween: 20,
            on: {
                slideChange: function () {
                    const prevBtn = document.querySelector('.news_ctrls .prev');
                    const nextBtn = document.querySelector('.news_ctrls .next');
                    
                    if (this.isEnd) {
                        prevBtn.style.color = '#1354A5';
                        nextBtn.style.color = '#6DAEFE';
                    } else if (this.isBeginning) {
                        prevBtn.style.color = '#6DAEFE';
                        nextBtn.style.color = '#1354A5';
                    } else {
                        prevBtn.style.color = '#1354A5';
                        nextBtn.style.color = '#1354A5';
                    }
                }
            }
        });

        const prevBtn = document.querySelector('.news_ctrls .prev');
        const nextBtn = document.querySelector('.news_ctrls .next');

        if (prevBtn && nextBtn) {
            prevBtn.style.color = '#6DAEFE';
            nextBtn.style.color = '#1354A5';

            prevBtn.addEventListener('click', () => newsSwiper.slidePrev());
            nextBtn.addEventListener('click', () => newsSwiper.slideNext());
        }
    }

    // Campaign Swiper
    const campaignSwiperElement = document.querySelector('.campaign_swiper');
    if (campaignSwiperElement) {
        const campaignSwiper = new Swiper(campaignSwiperElement, {
            slidesPerView: 4,
            spaceBetween: 20,
            on: {
                slideChange: function () {
                    const prevBtn = document.querySelector('.section_ctrls .prev');
                    const nextBtn = document.querySelector('.section_ctrls .next');
                    
                    if (this.isEnd) {
                        prevBtn.style.color = '#1354A5';
                        nextBtn.style.color = '#6DAEFE';
                    } else if (this.isBeginning) {
                        prevBtn.style.color = '#6DAEFE';
                        nextBtn.style.color = '#1354A5';
                    } else {
                        prevBtn.style.color = '#1354A5';
                        nextBtn.style.color = '#1354A5';
                    }
                }
            }
        });

        const campaignPrevBtn = document.querySelector('.section_ctrls .prev');
        const campaignNextBtn = document.querySelector('.section_ctrls .next');

        if (campaignPrevBtn && campaignNextBtn) {
            campaignPrevBtn.style.color = '#6DAEFE';
            campaignNextBtn.style.color = '#1354A5';

            campaignPrevBtn.addEventListener('click', () => campaignSwiper.slidePrev());
            campaignNextBtn.addEventListener('click', () => campaignSwiper.slideNext());
        }
    }

    // Action Swiper for subpage02
    const actionSwiperElement = document.querySelector('.action_swiper');
    if (actionSwiperElement) {
        const actionSwiper = new Swiper(actionSwiperElement, {
            slidesPerView: 'auto',
            spaceBetween: 15,
            centeredSlides: true,
            loop: true,
            // 루프에 필요한 추가 슬라이드 수를 충분히 설정합니다. -> 이 옵션이 문제를 일으킬 수 있으므로 제거합니다.
            
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.action_slider .next',
                prevEl: '.action_slider .prev',
            },
            // 문제를 일으켰던 'on' 이벤트 핸들러를 제거합니다.
        });
    }

    // Search Modal
    const searchModal = document.getElementById('searchModal');
    const openSearchModalBtn = document.getElementById('openSearchModal');
    const closeSearchModalBtn = document.querySelector('.close-search-modal');
    const searchForm = document.getElementById('searchForm');

    if (searchModal && openSearchModalBtn && closeSearchModalBtn && searchForm) {
        openSearchModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchModal.style.display = 'block';
            document.querySelector('#searchModal input[type="search"]').focus();
        });

        closeSearchModalBtn.addEventListener('click', () => {
            searchModal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target == searchModal) {
                searchModal.style.display = 'none';
            }
        });

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = document.querySelector('#searchModal input[type="search"]').value;
            if (query) {
                alert(`'${query}'에 대한 검색을 수행합니다.`);
                // 실제 검색 기능은 여기에 구현합니다.
                // 예: window.location.href = '/search?query=' + encodeURIComponent(query);
                searchModal.style.display = 'none';
            } else {
                alert('검색어를 입력하세요.');
            }
        });
    }

    /* Scroll to Top Button */
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        const progressRing = document.querySelector('.progress-ring__circle');
        const radius = progressRing.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference;

        function setProgress(percent) {
            const offset = circumference - (percent / 100) * circumference;
            progressRing.style.strokeDashoffset = offset;
        }

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            
            if (docHeight > 0) {
                const scrollPercent = (scrollTop / docHeight) * 100;
                setProgress(scrollPercent);
            } else {
                setProgress(0);
            }

            if (scrollTop > 200) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        window.dispatchEvent(new Event('scroll'));
    }
});