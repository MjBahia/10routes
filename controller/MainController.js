const main ={
    index:(req, res)=>{
        res.render('index');
    },
    about:(req, res)=>{
        res.render('about');
    },
    gallery:(req, res)=>{
        res.render('gallery');
    },
    faq:(req, res)=>{
        res.render('faq');
    },
    soon:(req, res)=>{
        res.render('soon');
    },
    home:(req, res)=>{
        res.render('home');
    },
    contact:(req, res)=>{
        res.render('contact');
    },
    four:(req, res)=>{
        res.render('404');
    },
    blog:(req, res)=>{
        res.render('blog');
    },
    blogpost:(req, res)=>{
        res.render('blogpost');
    },
    modules:(req, res)=>{
        res.render('modules');
    },
    accordion:(req, res)=>{
        res.render('accordion');
    },
    blockquote:(req, res)=>{
        res.render('blockquote');
    }
    
   
}
module.exports=main; 