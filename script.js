// =========================================
// DOM読み込み後
// =========================================

document.addEventListener("DOMContentLoaded", () => {


// =========================================
// ハンバーガーメニュー
// =========================================

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if(hamburger && nav){

hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
nav.classList.toggle("active");

});

}


// =========================================
// ナビリンククリックでメニュー閉じる
// =========================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

link.addEventListener("click", () => {

if(hamburger){
hamburger.classList.remove("active");
}

if(nav){
nav.classList.remove("active");
}

});

});


// =========================================
// FAQ アコーディオン
// =========================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

const question = item.querySelector(".faq-q");

if(question){

question.addEventListener("click", () => {

item.classList.toggle("active");

});

}

});


// =========================================
// ヘッダースクロール演出
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(!header) return;

if(window.scrollY > 100){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


// =========================================
// スムーススクロール
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

const target = document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

const offset = 80;

const position = target.offsetTop - offset;

window.scrollTo({

top: position,
behavior: "smooth"

});

});

});


// =========================================
// スクロールアニメーション
// =========================================

const targets = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

/* 一度表示したら監視解除（軽量化） */

observer.unobserve(entry.target);

}

});

});

targets.forEach(target => {

observer.observe(target);

});


});