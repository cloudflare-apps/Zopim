window.EagerZopim = {
  init: function(options) {
    if (!options.embed || typeof options.embed !== 'string') {
      return;
    }

    try {
      options.id = options.embed.replace(/((.|[\r\n])*)\/\/v2\.zopim\.com\/\?([a-zA-Z\d]{32})((.|[\r\n])*)/, '$3');
    } catch(){}

    if (options.id && typeof options.id == 'string' && options.id.length === 32) {
      window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
      d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
      _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
      $.src='//v2.zopim.com/?' + options.id;z.t=+new Date;$.
      type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
    }
  }
};
