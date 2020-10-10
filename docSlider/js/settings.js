(function (){

    const ver = '3.0.0';

    setHeader();
    setDownloadLink(ver);
    setVersion(ver);

    function setHeader(){

        let toTop = typeof docSlider === 'undefined' ? '' : ' onclick="docSlider.jumpPage(0);return false;"';
        let body = document.body;
        let header =
            '<header class="Header">\n' +
            '   <h1 class="Header-logo">\n' +
            '        <a href="./"'+toTop+'><img src="images/logo.svg" width="120" alt="docSlider.js"></a>\n' +
            '    </h1>\n' +
            '    <div class="Header-content">\n' +
            '        <ul>\n' +
            '            <li class="Header-dl"><a href="document.html"><img src="images/doc.svg" alt="Document" width="24">Document</a></li>\n' +
            '            <li class="Header-dl sp"><a href="#" class="dlink"><img src="images/dl.svg" alt="Download" width="24">Download</a></li>\n' +
            '            <li class="Header-gh"><a href="https://github.com/prjct-samwest/docSlider/"><img src="images/gh.svg" alt="View on GitHub" width="30"></a></li>\n' +
            '            <li class="Header-profile"><a href="../"><img src="../_assets/images/my.png" width="30" alt="SamWest"></a></li>\n' +
            '        </ul>\n' +
            '    </div>\n' +
            '</header>';

        body.insertAdjacentHTML('afterbegin',header);

    }

    function setDownloadLink(ver){

        let url = 'https://github.com/prjct-samwest/docSlider/archive/v' + ver + '.zip'
        let zipLinks = document.querySelectorAll('a.dlink');

        for(let i=0; i<zipLinks.length; i++){

            let a = zipLinks[i];

            a.setAttribute('href',url);

            if(a.hasAttribute('data-text'))
                a.innerText = url;

        }

    }

    function setVersion(ver){

        let elms = document.querySelectorAll('.ver');

        for(let i=0; i<elms.length; i++){

            elms[i].innerHTML = ver;

        }

    }


})();