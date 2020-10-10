const settings = (function (){

    let ver = '2.0.0';
    let url = 'https://github.com/prjct-samwest/scrollCue/archive/v' + ver + '.zip';

    function printHeader(page) {

        let wrapper = document.querySelector('.wrapper');
        let html = '<header class="Header">\n' +
            '        <h1 class="Header-logo"><a href="./"><img src="images/logo.svg" width="140" alt="scrollCue.js"></a></h1>\n' +
            '        <nav class="Header-menu">\n' +
            '            <ul>\n' +
            '                <li><'+ (page === 'examples' ? 'span' : 'a') + ' href="examples.html">EXAMPLES</'+ (page === 'examples' ? 'span' : 'a') + '></li>\n' +
            '                <li><'+ (page === 'customize' ? 'span' : 'a') + ' href="customize.html">CUSTOMIZE</'+ (page === 'customize' ? 'span' : 'a') + '></li>\n' +
            '                <li><'+ (page === 'document' ? 'span' : 'a') + ' href="document.html">DOCUMENT</'+ (page === 'document' ? 'span' : 'a') + '></li>\n' +
            '            </ul>\n' +
            '        </nav>\n' +
            '        <nav class="Header-icon">\n' +
            '            <ul>\n' +
            '                <li><a href="https://github.com/prjct-samwest/scrollCue"><img src="images/gh.svg" width="30" alt="View on GitHub"></a></li>\n' +
            '                <li class="Header-profile"><a href="../"><img src="../_assets/images/my.png" width="30" alt="SamWest"></a></li>\n' +
            '            </ul>\n' +
            '        </nav>';

        if(page === 'examples'){
            html += '    <form class="Preview">\n' +
                '        <select onchange="ac(this.value);">\n' +
                '            <option value="fadeIn">fadeIn</option>\n' +
                '            <option value="slideInLeft">slideInLeft</option>\n' +
                '            <option value="slideInRight">slideInRight</option>\n' +
                '            <option value="slideInDown">slideInDown</option>\n' +
                '            <option value="slideInUp">slideInUp</option>\n' +
                '            <option value="zoomIn">zoomIn</option>\n' +
                '            <option value="zoomOut">zoomOut</option>\n' +
                '            <option value="rotateIn">rotateIn</option>\n' +
                '            <option value="bounceIn">bounceIn</option>\n' +
                '            <option value="bounceInLeft">bounceInLeft</option>\n' +
                '            <option value="bounceInRight">bounceInRight</option>\n' +
                '            <option value="bounceInDown">bounceInDown</option>\n' +
                '            <option value="bounceInUp">bounceInUp</option>\n' +
                '            <option value="flipInX">flipInX</option>\n' +
                '            <option value="flipInY">flipInY</option>\n' +
                '        </select>\n' +
                '        <input type="button" value="RELOAD" onclick="reload();">\n' +
                '    </form>\n';
        }

        html += '</header>';

        wrapper.insertAdjacentHTML('afterbegin', html);
    }

    function printMv(target,group,copy){

        let mv = document.querySelector(target);

        let html =
            '<div class="Mv-inner">\n' +
            '    <h1 class="Mv-title" data-cues="fadeIn" data-sort="random" data-group="'+group+'"><span>s</span><span>c</span><span>r</span><span>o</span><span>l</span><span>l</span><span>C</span><span>u</span><span>e</span><span data-order="-4">.</span><span data-order="-3">j</span><span data-order="-2">s</span><span class="Mv-author" data-duration="1000" data-order="-1">Created by SamWest.</span></h1>\n' +
            '    <p><a href="https://github.com/prjct-samwest/scrollCue" target="_blank" rel="noopener" class="btn">View on GitHub</a></p>\n' +
            '    <p class="sp"><a href="' +url+ '" class="btn">File Download</a></p>\n' +
            '</div>\n'

        if(copy){
            html +=
                '<div class="Mv-copy">\n' +
                '            Copyright (c) 2020 SamWest.\n' +
                '        </div>';
        }

        mv.insertAdjacentHTML('afterbegin', html);

    }

    (function setDownloadLink(ver){

        let zipLinks = document.querySelectorAll('a.dlink');

        for(let i=0; i<zipLinks.length; i++){

            let a = zipLinks[i];

            a.setAttribute('href',url);

            if(a.hasAttribute('data-text'))
                a.innerText = url;

        }

    })();

    return {
        printHeader : function (page){
            printHeader(page);
        },
        printMv : function (target,group,copy){
            printMv(target,group,copy);
        }
    }

})();

