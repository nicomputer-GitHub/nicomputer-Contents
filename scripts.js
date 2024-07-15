document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");

    // メニューアイコンをクリックした時の処理
    menuIcon.addEventListener("click", function() {
        sidebar.style.width = "250px";
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto";
    });

    // クローズボタンをクリックした時の処理
    closeBtn.addEventListener("click", function() {
        sidebar.style.width = "0";
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
    });

    // オーバーレイをクリックした時の処理
    overlay.addEventListener("click", function(event) {
        sidebar.style.width = "0";
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
    });

    // スライドショーの設定
    let slideIndex = 1;
    showSlides(slideIndex);

    // 次のスライドを表示する関数
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    };

    // 現在のスライドを表示する関数
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    };

    // 自動でスライドを変更する関数
    function autoSlide() {
        plusSlides(1);
    }

    // 自動でスライドを変更するタイマー
    let slideInterval = setInterval(autoSlide, 5000);

    // 前のスライドを表示する関数
    window.minusSlides = function(n) {
        showSlides(slideIndex -= n);
    };

    // スライドを表示する関数
    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        // すべてのスライドを非表示にする
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // すべてのドットを非アクティブにする
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // 現在のスライドを表示し、ドットをアクティブにする
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // マウスがスライドショーに乗った時に自動スライドショーを停止する
    const slideshowContainer = document.getElementsByClassName("slideshow-container")[0];
    slideshowContainer.addEventListener("mouseenter", function() {
        clearInterval(slideInterval);
    });

    // マウスがスライドショーから離れた時に自動スライドショーを再開する
    slideshowContainer.addEventListener("mouseleave", function() {
        slideInterval = setInterval(autoSlide, 5000);
    });

    // 事前に用意したお知らせを表示する
    const announcements = [
        {
            title: "Important Information",
            content: "I created a homepage.",
            date: "2024/07/15"
        },

        //{
            
        //}
    ];

    const announcementList = document.getElementById("announcement-list");

    // announcements配列の各要素をお知らせリストに追加する
    announcements.forEach(announcement => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${announcement.title}</strong> - <span class="announcement-date">${announcement.date}</span><p>${announcement.content}</p>`;
        announcementList.appendChild(li);
    });
});
