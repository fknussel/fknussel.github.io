define(['hogan'], function(Hogan) {
  var t = {
    /* jshint ignore:start */
    'card' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"card\">");t.b("\n" + i);t.b("  <div class=\"card-container\">");t.b("\n" + i);t.b("    <div class=\"card-image\">");t.b("\n" + i);t.b("      <img src=\"");t.b(t.v(t.f("image",c,p,0)));t.b("\" alt=\"");t.b(t.v(t.f("title",c,p,0)));t.b("\">");t.b("\n" + i);t.b("      <div class=\"title\">");t.b("\n" + i);if(t.s(t.f("repository",c,p,1),c,p,0,172,384,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <a href=\"");t.b(t.v(t.f("repository",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <svg class=\"icon icon-github pull-right\">");t.b("\n" + i);t.b("              <use xlink:href=\"/src/images/symbol-defs.svg#icon-github\"></use>");t.b("\n" + i);t.b("            </svg>");t.b("\n" + i);t.b("          </a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);if(t.s(t.f("url",c,p,1),c,p,0,417,636,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <a href=\"");t.b(t.v(t.f("url",c,p,0)));t.b("\">");t.b("\n" + i);t.b("            <svg class=\"icon icon-external-link pull-right\">");t.b("\n" + i);t.b("              <use xlink:href=\"/src/images/symbol-defs.svg#icon-external-link\"></use>");t.b("\n" + i);t.b("            </svg>");t.b("\n" + i);t.b("          </a>");t.b("\n" + i);});c.pop();}t.b("\n" + i);t.b("        <h2>");t.b(t.v(t.f("title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"card-description\">");t.b("\n" + i);t.b("      <p>");t.b(t.v(t.f("description",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("      <div class=\"tags\">");t.b("\n" + i);if(t.s(t.f("tags",c,p,1),c,p,0,803,869,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("          <span class=\"label label-default\">");t.b(t.v(t.d(".",c,p,0)));t.b("</span>");t.b("\n" + i);});c.pop();}t.b("      </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("  </div>");t.b("\n" + i);t.b("</div>");t.b("\n");return t.fl(); },partials: {}, subs: {  }}),
    'portfolio' : new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");if(t.s(t.f("cards",c,p,1),c,p,0,10,23,"{{ }}")){t.rs(c,p,function(c,p,t){t.b(t.rp("<card0",c,p,"  "));});c.pop();}return t.fl(); },partials: {"<card0":{name:"card", partials: {}, subs: {  }}}, subs: {  }})
    /* jshint ignore:end */
  },
  r = function(n) {
    var tn = t[n];
    return function(c, p, i) {
      return tn.render(c, p || t, i);
    };
  };
  return {
    'card' : r('card'),
    'portfolio' : r('portfolio')
  };
});