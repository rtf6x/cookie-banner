const cookiesBanner = class {
  constructor(opts){
    this.classes = ['cookies-banner', ...opts.classes];
    this.moreInfoLink = opts.moreInfoLink || 'http://wikipedia.org/wiki/HTTP_cookie';
    this.moreInfoText = opts.moreInfoText || 'More info';
    this.buttonText = opts.buttonText || 'Got it!';
    this.text = opts.text || 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.';

    const template = `<div class="${this.classes.join(' ')}"><div class="cookies-banner-close">${this.buttonText}</div><span class="cookies-banner-text">${this.text} <a class="cookies-banner-morelink" href="${this.moreInfoLink}">${this.moreInfoText}</a></span></div>`;

    if (document.cookie.indexOf('cookieBannerDisabled=') < 0){
      document.addEventListener("DOMContentLoaded", function(){
        document.body.insertAdjacentHTML('beforeend', template);
        document.getElementsByClassName('cookies-banner-close')[0].addEventListener('click', function (event) {
          document.getElementsByClassName('cookies-banner')[0].style.display = 'none';
          document.cookie = "cookieBannerDisabled=true; path=/;";
        });
      });
    }
  }
};
