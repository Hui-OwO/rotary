document.addEventListener('DOMContentLoaded', function() {
    const newsSwiper = new Swiper('.news_swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.news_ctrls .next',
            prevEl: '.news_ctrls .prev',
        },
        on: {
            slideChange: function () {
                const prevBtn = document.querySelector('.news_ctrls .prev');
                const nextBtn = document.querySelector('.news_ctrls .next');
                
                if (this.isEnd) {
                    // 슬라이드가 끝에 도달하면 색상 교체
                    prevBtn.style.backgroundColor = '#1354A5';
                    nextBtn.style.backgroundColor = '#6DAEFE';
                } else if (this.isBeginning) {
                    // 슬라이드가 시작으로 돌아오면 기본 색상으로 복원
                    prevBtn.style.backgroundColor = '#6DAEFE';
                    nextBtn.style.backgroundColor = '#1354A5';
                }
            }
        }
    });

    // 초기 버튼 색상 설정
    const prevBtn = document.querySelector('.news_ctrls .prev');
    const nextBtn = document.querySelector('.news_ctrls .next');
    prevBtn.style.backgroundColor = '#6DAEFE';
    nextBtn.style.backgroundColor = '#1354A5';

    const campaignSwiper = new Swiper('.campaign_swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.section_ctrls .next',
            prevEl: '.section_ctrls .prev',
        },
        on: {
            slideChange: function () {
                const prevBtn = document.querySelector('.section_ctrls .prev');
                const nextBtn = document.querySelector('.section_ctrls .next');
                
                if (this.isEnd) {
                    // 슬라이드가 끝에 도달하면 색상 교체
                    prevBtn.style.backgroundColor = '#1354A5';
                    nextBtn.style.backgroundColor = '#6DAEFE';
                } else if (this.isBeginning) {
                    // 슬라이드가 시작으로 돌아오면 기본 색상으로 복원
                    prevBtn.style.backgroundColor = '#6DAEFE';
                    nextBtn.style.backgroundColor = '#1354A5';
                }
            }
        }
    });

    // 초기 버튼 색상 설정
    const campaignPrevBtn = document.querySelector('.section_ctrls .prev');
    const campaignNextBtn = document.querySelector('.section_ctrls .next');
    campaignPrevBtn.style.backgroundColor = '#6DAEFE';
    campaignNextBtn.style.backgroundColor = '#1354A5';
});