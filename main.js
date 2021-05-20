function myFunction(x){
    
    var layer3 = document.getElementById('mountain')
    scroll = window.pageYOffset;
    document.addEventListener('scroll', function(e){
        var offset = window.pageYOffset;
        scroll = offset;
        layer3.style.top = (55 + scroll/30) + '%';
    });
    }

    var layer3 = document.getElementById('mountain')
    scroll = window.pageYOffset;
    document.addEventListener('scroll', function(e){
        var offset = window.pageYOffset;
        scroll = offset;
        layer3.style.top = (41 + scroll/10) + '%';
    });
    }
}
if (matchMedia) {
    const x = window.matchMedia("(max-width: 1050px)");
    x.addListener(myFunction);
    myFunction(x);
}
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
