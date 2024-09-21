const express = require('express');
const router = express.Router();

const main = require('../controller/MainController');

router.get('/', main.index);
router.get('/index', main.index);
router.get('/about', main.about);
router.get('/gallery', main.gallery);
router.get('/faq', main.faq);
router.get('/soon', main.soon);
router.get('/home', main.home);
router.get('/contact', main.contact);
router.get('/404', main.four);
router.get('/blog', main.blog);
router.get('/blog-post', main.blogpost);
router.get('/modules', main.modules);
router.get('/accordion', main.accordion);
router.get('/blockquote', main.blockquote);

module.exports = router;
