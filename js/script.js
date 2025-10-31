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
            slidesPerView: 3,
            spaceBetween: 30,
            on: {
                slideChange: function () {
                    const prevBtn = document.querySelector('.action_ctrls .prev');
                    const nextBtn = document.querySelector('.action_ctrls .next');
                    
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

        const actionPrevBtn = document.querySelector('.action_ctrls .prev');
        const actionNextBtn = document.querySelector('.action_ctrls .next');

        if (actionPrevBtn && actionNextBtn) {
            actionPrevBtn.style.color = '#6DAEFE';
            actionNextBtn.style.color = '#1354A5';

            actionPrevBtn.addEventListener('click', () => actionSwiper.slidePrev());
            actionNextBtn.addEventListener('click', () => actionSwiper.slideNext());
        }
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

    // Initialize Swiper for subpage03 (Coverflow effect)
    const subpage03SwiperElement = document.querySelector('#subpage03_swiper');
    if (subpage03SwiperElement) {
        var swiper = new Swiper(subpage03SwiperElement, {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }
});