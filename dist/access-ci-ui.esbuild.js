(() => {
  // dist/access-ci-ui.js
  var me = [{
    name: "Researchers",
    href: "https://access-ci.org/get-started/for-researchers/"
  }, {
    name: "Educators",
    href: "https://access-ci.org/get-started/for-educators/"
  }, {
    name: "Graduate Students",
    href: "https://access-ci.org/get-started/for-graduate-students/"
  }, {
    name: "Resource Providers",
    href: "https://access-ci.org/get-started/for-resource-providers/"
  }, {
    name: "Programs & Organizations",
    href: "https://access-ci.org/get-started/for-programs-organizations/"
  }];
  var Ye = [{
    name: "Allocations",
    href: "https://allocations.access-ci.org/",
    classes: "track"
  }, {
    name: "Resources",
    href: "https://allocations.access-ci.org/resources",
    classes: "track"
  }, {
    name: "Events & Trainings",
    href: "https://support.access-ci.org/events",
    classes: "track"
  }, {
    name: "Support",
    href: "https://support.access-ci.org/",
    classes: "track"
  }, {
    name: "News",
    href: "https://access-ci.org/news/",
    classes: "track"
  }, {
    name: "About",
    href: "https://access-ci.org/about/",
    classes: "track grow"
  }, {
    name: "Find info for you",
    classes: "highlight",
    items: me
  }, {
    name: "ACCESS Home",
    href: "https://access-ci.org/",
    classes: "icon icon-home"
  }, {
    name: "Search",
    href: "https://support.access-ci.org/find",
    classes: "icon icon-search"
  }];
  var Ue = {
    name: "My ACCESS",
    items: [{
      name: "Allocations",
      href: "https://allocations.access-ci.org/requests"
    }, {
      name: "Community Persona",
      href: "https://support.access-ci.org/community-persona"
    }, {
      name: "Edit Profile",
      href: "https://allocations.access-ci.org/profile"
    }, {
      name: "Publications",
      href: "https://allocations.access-ci.org/publications"
    }, {
      name: "Share with ORCID",
      href: "https://allocations.access-ci.org/orcid"
    }, {
      name: "Log out",
      href: "https://cilogon.org/logout/?skin=access"
    }]
  };
  var ze = {
    name: "Login",
    items: [{
      name: "Login",
      href: "https://cilogon.org/?skin=access"
    }, {
      name: "Questions",
      href: "https://identity.access-ci.org/"
    }, {
      name: "Register",
      href: "https://identity.access-ci.org/new-user"
    }, {
      name: "Reset Password",
      href: "https://identity.access-ci.orgg/password-reset"
    }]
  };
  var Oe = [{
    className: "x",
    href: "https://twitter.com/ACCESSforCI",
    name: "X"
  }, {
    className: "youtube",
    href: "https://www.youtube.com/c/ACCESSforCI",
    name: "YouTube"
  }, {
    className: "facebook",
    href: "https://www.facebook.com/ACCESSforCI",
    name: "Facebook"
  }, {
    className: "linkedin",
    href: "https://www.linkedin.com/company/accessforci/",
    name: "LinkedIn"
  }];
  var We = [{
    href: "https://access-ci.org/acceptable-use/",
    name: "Acceptable Use"
  }, {
    href: "https://access-ci.org/code-of-conduct/",
    name: "Code of Conduct"
  }, {
    href: "https://access-ci.org/privacy-policy",
    name: "Privacy Policy"
  }, {
    href: "https://access-ci.org/glossary/",
    name: "Glossary"
  }, {
    href: "https://access-ci.org/site-map/",
    name: "Site Map"
  }];
  var U = `:host,:root{--contrast: #232323;--contrast-2: #3f3f3f;--contrast-3: #707070;--orange-400: #f07537;--teal-100: #cee8e9;--teal-400: #48c0b9;--teal-600: #107180;--teal-700: #1a5b6e;--yellow-400: #ffc42d;--color: white;--padding: 30px;--offset: 0px;--outline: white;color:var(--contrast)}:host,:host button,:root,:root button{font-family:Archivo,sans-serif}.container{margin:0 auto;padding:0 var(--padding);width:var(--width)}@media (min-width: 600px){:host,:root{--padding: calc((100% - var(--width)) / 2);--offset: 7px;--width: 540px}}@media (min-width: 768px){:host,:root{--width: 712px}}@media (min-width: 900px){:host,:root{--width: 840px}}@media (min-width: 1024px){:host,:root{--width: 940px}}@media (min-width: 1280px){:host,:root{--padding: 10px;--offset: 0px;--width: 1180px}}
`;
  var Fe = `:host{background-color:#fbfbfb}.container{color:var(--contrast)}a{color:var(--teal-600);font-weight:800;text-decoration:none}a:active,a:focus,a:hover{text-decoration:underline}.about{padding-top:25px}.awards{font-size:15px;line-height:21px;margin:0 0 20px}.disclaimer{font-size:12px;line-height:18px;margin:0 0 15px}.contact{font-size:14px;font-stretch:70%;text-transform:uppercase}.social{align-items:center;display:flex;flex-direction:row;justify-content:flex-start;list-style-type:none;margin:0;padding:20px 0 10px}.social li{margin:0 35px 0 0;padding:0}.social li:last-child{margin:-10px}.social a{background-size:contain;background-repeat:no-repeat;display:block;height:25px;text-indent:-999999px;width:25px}.x{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23232323' class='bi bi-twitter-x' viewBox='0 0 16 16'><path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z'/></svg>")}.youtube{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23232323' viewBox='0 0 16 16'><path d='M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z'/></svg>")}.facebook{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23232323' viewBox='0 0 16 16'><path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951'/></svg>")}a.linkedin{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23232323' viewBox='0 0 16 16'><path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z'/></svg>")}.lower{border-top:1px solid var(--contrast-3);padding:10px 0 60px}.links{display:flex;flex-direction:row;flex-wrap:wrap;list-style-type:none;margin:20px 0 0;padding:0}.links li{padding:0 20px 10px 0}.links li:last-child{padding-right:0}.links a{font-size:12px;font-weight:600}.scroll-to-top{background-color:#00000080;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' stroke='white' stroke-width='1' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z'/></svg>");background-position:center;background-repeat:no-repeat;background-size:13px;border:0 none transparent;bottom:30px;cursor:pointer;display:block;height:40px;opacity:0;position:fixed;right:30px;text-indent:-999999px;transition:opacity .25s ease-out;width:40px}.scroll-to-top.visible{opacity:1}.personas{box-sizing:border-box;font-size:15px;padding:20px 0}.personas p{margin:0}.personas ul{list-style-type:none;margin:5px 0;padding:0}.personas li{padding:3px 0}@media (min-width: 900px){.upper{display:flex;flex-direction:row;justify-content:space-between}.upper>*{width:calc((var(--width) - 20px) / 2)}.about{padding:40px 0 30px}.awards{font-size:18px;line-height:24px}.personas{font-size:18px;padding:40px calc(((var(--width) - 140px) / 8) + 20px) 30px}.lower{align-items:start;display:flex;flex-direction:row;justify-content:space-between}.links{margin-top:0}}
`;
  var R;
  var p;
  var Ie;
  var E;
  var ae;
  var xe;
  var q;
  var B = {};
  var ye = [];
  var Ze = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var ie = Array.isArray;
  function S(e, t) {
    for (var i in t)
      e[i] = t[i];
    return e;
  }
  function Le(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function Qe(e, t, i) {
    var s, a, n, r = {};
    for (n in t)
      n == "key" ? s = t[n] : n == "ref" ? a = t[n] : r[n] = t[n];
    if (arguments.length > 2 && (r.children = arguments.length > 3 ? R.call(arguments, 2) : i), typeof e == "function" && e.defaultProps != null)
      for (n in e.defaultProps)
        r[n] === void 0 && (r[n] = e.defaultProps[n]);
    return O(e, r, s, a, null);
  }
  function O(e, t, i, s, a) {
    var n = { type: e, props: t, key: i, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: a ?? ++Ie };
    return a == null && p.vnode != null && p.vnode(n), n;
  }
  function b(e) {
    return e.children;
  }
  function W(e, t) {
    this.props = e, this.context = t;
  }
  function G(e, t) {
    if (t == null)
      return e.__ ? G(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var i; t < e.__k.length; t++)
      if ((i = e.__k[t]) != null && i.__e != null)
        return i.__e;
    return typeof e.type == "function" ? G(e) : null;
  }
  function ve(e) {
    var t, i;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((i = e.__k[t]) != null && i.__e != null) {
          e.__e = e.__c.base = i.__e;
          break;
        }
      return ve(e);
    }
  }
  function ce(e) {
    (!e.__d && (e.__d = true) && E.push(e) && !H.__r++ || ae !== p.debounceRendering) && ((ae = p.debounceRendering) || xe)(H);
  }
  function H() {
    var e, t, i, s, a, n, r, l, u;
    for (E.sort(q); e = E.shift(); )
      e.__d && (t = E.length, s = void 0, a = void 0, n = void 0, l = (r = (i = e).__v).__e, (u = i.__P) && (s = [], a = [], (n = S({}, r)).__v = r.__v + 1, oe(u, r, n, i.__n, u.ownerSVGElement !== void 0, r.__h != null ? [l] : null, s, l ?? G(r), r.__h, a), be(s, r, a), r.__e != l && ve(r)), E.length > t && E.sort(q));
    H.__r = 0;
  }
  function Ae(e, t, i, s, a, n, r, l, u, w, g) {
    var o, M, f, d, h, j, m, I, L, N, v = 0, A = s && s.__k || ye, D = A.length, T = D, y = t.length;
    for (i.__k = [], o = 0; o < y; o++)
      (d = i.__k[o] = (d = t[o]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? O(null, d, null, null, d) : ie(d) ? O(b, { children: d }, null, null, null) : d.__b > 0 ? O(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null && (d.__ = i, d.__b = i.__b + 1, (I = Ge(d, A, m = o + v, T)) === -1 ? f = B : (f = A[I] || B, A[I] = void 0, T--), oe(e, d, f, a, n, r, l, u, w, g), h = d.__e, (M = d.ref) && f.ref != M && (f.ref && ne(f.ref, null, d), g.push(M, d.__c || h, d)), h != null && (j == null && (j = h), N = !(L = f === B || f.__v === null) && I === m, L ? I == -1 && v-- : I !== m && (I === m + 1 ? (v++, N = true) : I > m ? T > y - m ? (v += I - m, N = true) : v-- : v = I < m && I == m - 1 ? I - m : 0), m = o + v, N = N || I == o && !L, typeof d.type != "function" || I === m && f.__k !== d.__k ? typeof d.type == "function" || N ? d.__d !== void 0 ? (u = d.__d, d.__d = void 0) : u = h.nextSibling : u = Ce(e, h, u) : u = Ne(d, u, e), typeof i.type == "function" && (i.__d = u)));
    for (i.__e = j, o = D; o--; )
      A[o] != null && (typeof i.type == "function" && A[o].__e != null && A[o].__e == i.__d && (i.__d = A[o].__e.nextSibling), je(A[o], A[o]));
  }
  function Ne(e, t, i) {
    for (var s, a = e.__k, n = 0; a && n < a.length; n++)
      (s = a[n]) && (s.__ = e, t = typeof s.type == "function" ? Ne(s, t, i) : Ce(i, s.__e, t));
    return t;
  }
  function Ce(e, t, i) {
    return i == null || i.parentNode !== e ? e.insertBefore(t, null) : t == i && t.parentNode != null || e.insertBefore(t, i), t.nextSibling;
  }
  function Ge(e, t, i, s) {
    var a = e.key, n = e.type, r = i - 1, l = i + 1, u = t[i];
    if (u === null || u && a == u.key && n === u.type)
      return i;
    if (s > (u != null ? 1 : 0))
      for (; r >= 0 || l < t.length; ) {
        if (r >= 0) {
          if ((u = t[r]) && a == u.key && n === u.type)
            return r;
          r--;
        }
        if (l < t.length) {
          if ((u = t[l]) && a == u.key && n === u.type)
            return l;
          l++;
        }
      }
    return -1;
  }
  function He(e, t, i, s, a) {
    var n;
    for (n in i)
      n === "children" || n === "key" || n in t || J(e, n, null, i[n], s);
    for (n in t)
      a && typeof t[n] != "function" || n === "children" || n === "key" || n === "value" || n === "checked" || i[n] === t[n] || J(e, n, t[n], i[n], s);
  }
  function le(e, t, i) {
    t[0] === "-" ? e.setProperty(t, i ?? "") : e[t] = i == null ? "" : typeof i != "number" || Ze.test(t) ? i : i + "px";
  }
  function J(e, t, i, s, a) {
    var n;
    e:
      if (t === "style")
        if (typeof i == "string")
          e.style.cssText = i;
        else {
          if (typeof s == "string" && (e.style.cssText = s = ""), s)
            for (t in s)
              i && t in i || le(e.style, t, "");
          if (i)
            for (t in i)
              s && i[t] === s[t] || le(e.style, t, i[t]);
        }
      else if (t[0] === "o" && t[1] === "n")
        n = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + n] = i, i ? s || e.addEventListener(t, n ? ue : re, n) : e.removeEventListener(t, n ? ue : re, n);
      else if (t !== "dangerouslySetInnerHTML") {
        if (a)
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e)
          try {
            e[t] = i ?? "";
            break e;
          } catch {
          }
        typeof i == "function" || (i == null || i === false && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, i));
      }
  }
  function re(e) {
    return this.l[e.type + false](p.event ? p.event(e) : e);
  }
  function ue(e) {
    return this.l[e.type + true](p.event ? p.event(e) : e);
  }
  function oe(e, t, i, s, a, n, r, l, u, w) {
    var g, o, M, f, d, h, j, m, I, L, N, v, A, D, T, y = t.type;
    if (t.constructor !== void 0)
      return null;
    i.__h != null && (u = i.__h, l = t.__e = i.__e, t.__h = null, n = [l]), (g = p.__b) && g(t);
    try {
      e:
        if (typeof y == "function") {
          if (m = t.props, I = (g = y.contextType) && s[g.__c], L = g ? I ? I.props.value : g.__ : s, i.__c ? j = (o = t.__c = i.__c).__ = o.__E : ("prototype" in y && y.prototype.render ? t.__c = o = new y(m, L) : (t.__c = o = new W(m, L), o.constructor = y, o.render = Re), I && I.sub(o), o.props = m, o.state || (o.state = {}), o.context = L, o.__n = s, M = o.__d = true, o.__h = [], o._sb = []), o.__s == null && (o.__s = o.state), y.getDerivedStateFromProps != null && (o.__s == o.state && (o.__s = S({}, o.__s)), S(o.__s, y.getDerivedStateFromProps(m, o.__s))), f = o.props, d = o.state, o.__v = t, M)
            y.getDerivedStateFromProps == null && o.componentWillMount != null && o.componentWillMount(), o.componentDidMount != null && o.__h.push(o.componentDidMount);
          else {
            if (y.getDerivedStateFromProps == null && m !== f && o.componentWillReceiveProps != null && o.componentWillReceiveProps(m, L), !o.__e && (o.shouldComponentUpdate != null && o.shouldComponentUpdate(m, o.__s, L) === false || t.__v === i.__v)) {
              for (t.__v !== i.__v && (o.props = m, o.state = o.__s, o.__d = false), t.__e = i.__e, t.__k = i.__k, t.__k.forEach(function(z) {
                z && (z.__ = t);
              }), N = 0; N < o._sb.length; N++)
                o.__h.push(o._sb[N]);
              o._sb = [], o.__h.length && r.push(o);
              break e;
            }
            o.componentWillUpdate != null && o.componentWillUpdate(m, o.__s, L), o.componentDidUpdate != null && o.__h.push(function() {
              o.componentDidUpdate(f, d, h);
            });
          }
          if (o.context = L, o.props = m, o.__P = e, o.__e = false, v = p.__r, A = 0, "prototype" in y && y.prototype.render) {
            for (o.state = o.__s, o.__d = false, v && v(t), g = o.render(o.props, o.state, o.context), D = 0; D < o._sb.length; D++)
              o.__h.push(o._sb[D]);
            o._sb = [];
          } else
            do
              o.__d = false, v && v(t), g = o.render(o.props, o.state, o.context), o.state = o.__s;
            while (o.__d && ++A < 25);
          o.state = o.__s, o.getChildContext != null && (s = S(S({}, s), o.getChildContext())), M || o.getSnapshotBeforeUpdate == null || (h = o.getSnapshotBeforeUpdate(f, d)), Ae(e, ie(T = g != null && g.type === b && g.key == null ? g.props.children : g) ? T : [T], t, i, s, a, n, r, l, u, w), o.base = t.__e, t.__h = null, o.__h.length && r.push(o), j && (o.__E = o.__ = null);
        } else
          n == null && t.__v === i.__v ? (t.__k = i.__k, t.__e = i.__e) : t.__e = Je(i.__e, t, i, s, a, n, r, u, w);
      (g = p.diffed) && g(t);
    } catch (z) {
      t.__v = null, (u || n != null) && (t.__e = l, t.__h = !!u, n[n.indexOf(l)] = null), p.__e(z, t, i);
    }
  }
  function be(e, t, i) {
    for (var s = 0; s < i.length; s++)
      ne(i[s], i[++s], i[++s]);
    p.__c && p.__c(t, e), e.some(function(a) {
      try {
        e = a.__h, a.__h = [], e.some(function(n) {
          n.call(a);
        });
      } catch (n) {
        p.__e(n, a.__v);
      }
    });
  }
  function Je(e, t, i, s, a, n, r, l, u) {
    var w, g, o, M = i.props, f = t.props, d = t.type, h = 0;
    if (d === "svg" && (a = true), n != null) {
      for (; h < n.length; h++)
        if ((w = n[h]) && "setAttribute" in w == !!d && (d ? w.localName === d : w.nodeType === 3)) {
          e = w, n[h] = null;
          break;
        }
    }
    if (e == null) {
      if (d === null)
        return document.createTextNode(f);
      e = a ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), n = null, l = false;
    }
    if (d === null)
      M === f || l && e.data === f || (e.data = f);
    else {
      if (n = n && R.call(e.childNodes), g = (M = i.props || B).dangerouslySetInnerHTML, o = f.dangerouslySetInnerHTML, !l) {
        if (n != null)
          for (M = {}, h = 0; h < e.attributes.length; h++)
            M[e.attributes[h].name] = e.attributes[h].value;
        (o || g) && (o && (g && o.__html == g.__html || o.__html === e.innerHTML) || (e.innerHTML = o && o.__html || ""));
      }
      if (He(e, f, M, a, l), o)
        t.__k = [];
      else if (Ae(e, ie(h = t.props.children) ? h : [h], t, i, s, a && d !== "foreignObject", n, r, n ? n[0] : i.__k && G(i, 0), l, u), n != null)
        for (h = n.length; h--; )
          n[h] != null && Le(n[h]);
      l || ("value" in f && (h = f.value) !== void 0 && (h !== e.value || d === "progress" && !h || d === "option" && h !== M.value) && J(e, "value", h, M.value, false), "checked" in f && (h = f.checked) !== void 0 && h !== e.checked && J(e, "checked", h, M.checked, false));
    }
    return e;
  }
  function ne(e, t, i) {
    try {
      typeof e == "function" ? e(t) : e.current = t;
    } catch (s) {
      p.__e(s, i);
    }
  }
  function je(e, t, i) {
    var s, a;
    if (p.unmount && p.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || ne(s, null, t)), (s = e.__c) != null) {
      if (s.componentWillUnmount)
        try {
          s.componentWillUnmount();
        } catch (n) {
          p.__e(n, t);
        }
      s.base = s.__P = null, e.__c = void 0;
    }
    if (s = e.__k)
      for (a = 0; a < s.length; a++)
        s[a] && je(s[a], t, i || typeof e.type != "function");
    i || e.__e == null || Le(e.__e), e.__ = e.__e = e.__d = void 0;
  }
  function Re(e, t, i) {
    return this.constructor(e, i);
  }
  function Ke(e, t, i) {
    var s, a, n, r;
    p.__ && p.__(e, t), a = (s = typeof i == "function") ? null : i && i.__k || t.__k, n = [], r = [], oe(t, e = (!s && i || t).__k = Qe(b, null, [e]), a || B, B, t.ownerSVGElement !== void 0, !s && i ? [i] : a ? null : t.firstChild ? R.call(t.childNodes) : null, n, !s && i ? i : a ? a.__e : t.firstChild, s, r), be(n, e, r);
  }
  R = ye.slice, p = { __e: function(e, t, i, s) {
    for (var a, n, r; t = t.__; )
      if ((a = t.__c) && !a.__)
        try {
          if ((n = a.constructor) && n.getDerivedStateFromError != null && (a.setState(n.getDerivedStateFromError(e)), r = a.__d), a.componentDidCatch != null && (a.componentDidCatch(e, s || {}), r = a.__d), r)
            return a.__E = a;
        } catch (l) {
          e = l;
        }
    throw e;
  } }, Ie = 0, W.prototype.setState = function(e, t) {
    var i;
    i = this.__s != null && this.__s !== this.state ? this.__s : this.__s = S({}, this.state), typeof e == "function" && (e = e(S({}, i), this.props)), e && S(i, e), e != null && this.__v && (t && this._sb.push(t), ce(this));
  }, W.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = true, e && this.__h.push(e), ce(this));
  }, W.prototype.render = b, E = [], xe = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, q = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, H.__r = 0;
  var Xe = 0;
  function c(e, t, i, s, a, n) {
    var r, l, u = {};
    for (l in t)
      l == "ref" ? r = t[l] : u[l] = t[l];
    var w = { type: e, props: u, key: i, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Xe, __source: a, __self: n };
    if (typeof e == "function" && (r = e.defaultProps))
      for (l in r)
        u[l] === void 0 && (u[l] = r[l]);
    return p.vnode && p.vnode(w), w;
  }
  var _e = "https://www.nsf.gov/awardsearch/showAward";
  var P = ({
    number: e
  }) => c("a", {
    href: `${_e}?AWD_ID=${e}&HistoricalAwards=false`,
    children: ["#", e]
  });
  var F = ({
    className: e = null,
    items: t
  }) => c("ul", {
    class: e,
    children: t.map(({
      className: i,
      name: s,
      href: a
    }) => c("li", {
      children: c("a", {
        className: i,
        href: a,
        children: s
      })
    }))
  });
  var qe = `.logo{align-items:start;display:flex;flex-direction:row}.nsf-logo{height:49px}.access-logo{height:23px;margin-top:12px}.access,.nsf{display:block;text-decoration:none}.divider{border-right:2px solid #bbbbbb;height:40px;margin:4px 15px 0 12px;width:0}.name{color:var(--teal-700);display:block;font-size:17.5px;font-stretch:80%;font-weight:200;line-height:1;margin:3px 0 0;text-align:right}.name:before{content:"";display:inline-block;height:0;margin:0 5px 0 0;width:0}.name-allocations:before{border-bottom:12px solid var(--orange-400);border-left:12px solid transparent}.name-coordination-office:before{background-color:var(--teal-400);border-radius:6px;height:12px;margin:0 6px 0 0;width:12px}.name-metrics:before{background-image:url("data:image/svg+xml;utf8,<svg viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg' width='12'><circle cx='12' cy='0' r='12' fill='%23008496' /></svg>");background-size:cover;height:12px;margin:0 2px 0 0;width:12px}.name-operations:before{border-top:12px solid var(--yellow-400);border-right:12px solid transparent}.name-support:before{background-color:var(--teal-700);height:12px;margin:0 6px 0 0;width:12px}.logo-footer .nsf-logo{height:40px}.logo-footer .divider{height:34px;margin:3px 11px 0 9px}.logo-footer .access-logo{margin-top:10px;height:21px;width:auto}@media (min-width: 900px){.nsf-logo{height:82px}.divider{height:70px;margin:6px 23px 0 20px}.access-logo{height:auto;margin-top:22px;width:253px}.name{font-size:30px}.name-allocations:before{border-bottom:20px solid var(--orange-400);border-left:20px solid transparent}.name-metrics:before{height:20px;margin:0 4px 0 0;width:20px}.name-operations:before{border-top:20px solid var(--yellow-400);border-right:20px solid transparent}.name-coordination-office:before{border-radius:9.5px;height:19px;width:19px}.name-support:before{height:19px;margin:0 7px 0 0;width:19px}}
`;
  var $e = "data:image/png;base64,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";
  var et = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4gPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgdmlld0JveD0iMCAwIDI2OS4xNCA0MS4zNyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIxNC45OSIgeTE9IjI1LjU5IiB4Mj0iNDIuMzgiIHkyPSItMS44IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZTQ3NjM3Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuODgiIHN0b3AtY29sb3I9IiNmZmNjNTIiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTIiIHgxPSI4Ny43MiIgeTE9IjI2LjY2IiB4Mj0iMTEyLjg3IiB5Mj0iMS41MSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwODU5NyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ4YzBiOSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMyIgeDE9IjIzMy42OSIgeTE9IjEwLjIxIiB4Mj0iMTk1Ljg5IiB5Mj0iMzIuMDMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4yIiBzdG9wLWNvbG9yPSIjMDA4NTk3Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNDhjMGI5Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC00IiB4MT0iNDUuODQiIHkxPSIyOS4wNyIgeDI9IjgyLjA5IiB5Mj0iMjkuMDciIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4xOCIgc3RvcC1jb2xvcj0iIzQ4YzBiOSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjgxIiBzdG9wLWNvbG9yPSIjMDA4NTk3Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC01IiB4MT0iNDMuMjIiIHkxPSIyMC42OCIgeDI9IjY4LjAzIiB5Mj0iMjAuNjgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4yMiIgc3RvcC1jb2xvcj0iIzQ4YzBiOSI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwODU5NyI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNiIgeDE9IjE2NS4wNSIgeTE9IjM1Ljk4IiB4Mj0iMTk0LjIxIiB5Mj0iMzUuOTgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4wMyIgc3RvcC1jb2xvcj0iIzAwODU5NyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ4YzBiOSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNyIgeDE9IjEyMy45MSIgeTE9IjExLjY4IiB4Mj0iMTYwLjM1IiB5Mj0iMTEuNjgiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQtMiI+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC04IiB4MT0iMjY5LjE0IiB5MT0iMjAuNjkiIHgyPSIyMzQuNzkiIHkyPSIyMC42OSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjAzIiBzdG9wLWNvbG9yPSIjMDM4NTk2Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuODIiIHN0b3AtY29sb3I9IiM2NmQ2ZDYiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTkiIHgxPSIyNzEuMDciIHkxPSIxMC4yMSIgeDI9IjIzMy4yNiIgeTI9IjMyLjAzIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMiIgc3RvcC1jb2xvcj0iIzAwODU5NyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzQ4YzBiOSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTAiIHkxPSIyMC4zNiIgeDI9IjE5MS4xNSIgeTI9IjIwLjM2IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50LTYiPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMTEiIHkxPSI1LjMiIHkyPSI1LjMiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQtNiI+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGc+PHBvbHlnb24gcG9pbnRzPSI0NC42MiAuNDMgMi41IDcuOTQgMzAuMDYgNDAuNjYgNDQuNjIgLjQzIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7Ij48L3BvbHlnb24+PHJlY3QgeD0iMTUuMjUiIHk9IjE3LjA3IiB3aWR0aD0iOC43OSIgaGVpZ2h0PSI4Ljc5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy40MSAtNy4zOSkgcm90YXRlKDQ5LjkpIiBzdHlsZT0iZmlsbDojZmZmOyI+PC9yZWN0PjxyZWN0IHg9IjguNTIiIHk9IjIyLjc0IiB3aWR0aD0iOC43OSIgaGVpZ2h0PSI4Ljc5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS4zNSAtLjIzKSByb3RhdGUoNDkuOSkiIHN0eWxlPSJmaWxsOiMxYTViNmU7Ij48L3JlY3Q+PHJlY3QgeD0iMS44IiB5PSIyOC40IiB3aWR0aD0iOC43OSIgaGVpZ2h0PSI4Ljc5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNy4yOSA2LjkzKSByb3RhdGUoNDkuOSkiIHN0eWxlPSJmaWxsOiNmMDc1Mzc7Ij48L3JlY3Q+PHJlY3QgeD0iMi44NiIgeT0iMTYuMDEiIHdpZHRoPSI4Ljc5IiBoZWlnaHQ9IjguNzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4LjE5IDEuNzEpIHJvdGF0ZSg0OS45KSIgc3R5bGU9ImZpbGw6IzQ4YzBiOTsiPjwvcmVjdD48cmVjdCB4PSIxNC4xOSIgeT0iMjkuNDYiIHdpZHRoPSI4Ljc5IiBoZWlnaHQ9IjguNzkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMyLjUxIC0yLjE3KSByb3RhdGUoNDkuOSkiIHN0eWxlPSJmaWxsOiMwMDg1OTc7Ij48L3JlY3Q+PC9nPjxnPjxnPjxwYXRoIGQ9Ik03MC4yNiwuNjdsMTQuNDQsNDAuMDNoLTExLjA5bC0yLjU3LTcuMjVoLTE0LjVsLTIuNTEsNy4yNWgtMTAuODJMNTcuNjYsLjY3aDEyLjZabS0xMC42NSwyNC4wM2g4LjM3bC00LjE4LTExLjkzLTQuMTgsMTEuOTNaIj48L3BhdGg+PHBhdGggZD0iTTEwMy40NiwzMS44OWMzLjY4LDAsNi4zLTIuNDUsNy4wMi02LjQxbDEwLjI2LDMuNGMtMi40NSw3LjUzLTguMjUsMTIuNDktMTcuMjMsMTIuNDktMTEuMjYsMC0xOS4yNC04LjY0LTE5LjI0LTIwLjY5UzkyLjI1LDAsMTAzLjUyLDBjOC45OCwwLDE0Ljc3LDQuOTYsMTcuMjMsMTIuNDlsLTEwLjI2LDMuNGMtLjcyLTMuOTYtMy4zNC02LjQxLTcuMDItNi40MS00Ljg1LDAtOC4yNSw0LjM1LTguMjUsMTEuMjFzMy40LDExLjIxLDguMjUsMTEuMjFaIiBzdHlsZT0iZmlsbDojMDA4NTk3OyI+PC9wYXRoPjxwYXRoIGQ9Ik04NC40MiwyMy4zN2MtMS4yNy0xNC4zMSw3LjgzLTIzLjM3LDE5LjA5LTIzLjM3LDguOTgsMCwxNC43Nyw0Ljk2LDE3LjIzLDEyLjQ5bC0xMC4yNiwzLjRjLS43Mi0zLjk2LTMuMzQtNi40MS03LjAyLTYuNDEtNC44NSwwLTguMjUsNC4zNS04LjI1LDExLjIxbC0xMC43OSwyLjY4WiIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtMik7Ij48L3BhdGg+PHBhdGggZD0iTTE0My4wMSwzMS44OWMzLjY4LDAsNi4zLTIuNDUsNy4wMi02LjQxbDEwLjI2LDMuNGMtMi40NSw3LjUzLTguMjUsMTIuNDktMTcuMjMsMTIuNDktMTEuMjYsMC0xOS4yNC04LjY0LTE5LjI0LTIwLjY5UzEzMS44LDAsMTQzLjA3LDBjOC45OCwwLDE0Ljc3LDQuOTYsMTcuMjMsMTIuNDlsLTEwLjI2LDMuNGMtLjcyLTMuOTYtMy4zNC02LjQxLTcuMDItNi40MS00Ljg1LDAtOC4yNSw0LjM1LTguMjUsMTEuMjFzMy40LDExLjIxLDguMjUsMTEuMjFaIiBzdHlsZT0iZmlsbDojMDA4NTk3OyI+PC9wYXRoPjxwYXRoIGQ9Ik0yMDMuMzgsMjYuNzZjMy40LDMuODUsNy45Miw1LjYzLDExLjk5LDUuNjMsMy4zNSwwLDUuNTgtMS4yMyw1LjU4LTMuNTEsMC0yLjU3LTIuODQtMi45LTguOTgtNC4xMy01Ljg1LTEuMTctMTIuMjYtMy4zNC0xMi4yNi0xMS40OXM3LjA4LTEzLjI3LDE1Ljk1LTEzLjI3YzcuMDIsMCwxMi41NCwyLjczLDE1LjcyLDYuMTlsLTUuOTEsNy4zNmMtMi42Mi0yLjktNi4xMy00LjU3LTEwLjA5LTQuNTctMi45NSwwLTQuOTYsMS4xMi00Ljk2LDMuMTgsMCwyLjI5LDIuNDUsMi42Nyw3LjMsMy42OCw2LjI1LDEuMjgsMTQuMDUsMy4wMSwxNC4wNSwxMS45M3MtNy41OCwxMy42MS0xNi44MywxMy42MWMtNi41MywwLTE0LjE2LTIuNTctMTcuNTEtNi42OWw1Ljk3LTcuOTJaIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0zKTsiPjwvcGF0aD48cGF0aCBkPSJNMjExLjk3LDI0Ljc2Yy01Ljg1LTEuMTctMTIuMjYtMy4zNC0xMi4yNi0xMS40OXM3LjA4LTEzLjI3LDE1Ljk1LTEzLjI3YzcuMDIsMCwxMi41NCwyLjczLDE1LjcyLDYuMTlsLTUuOTEsNy4zNmMtMi42Mi0yLjktNi4xMy00LjU3LTEwLjA5LTQuNTctMi45NSwwLTQuOTYsMS4xMi00Ljk2LDMuMTgsMCwyLjI5LDIuNDUsMi42Nyw3LjMsMy42OGwtNS43NCw4LjkyWiIgc3R5bGU9ImZpbGw6IzAwODU5NzsiPjwvcGF0aD48cGF0aCBkPSJNNzAuMjYsLjY3bDE0LjQ0LDQwLjAzaC0xMS4wOWwtMi41Ny03LjI1TDU5LjYyLC42N2gxMC42NVptLTIuMjksMjQuMDMiIHN0eWxlPSJmaWxsOiMwMDg1OTc7Ij48L3BhdGg+PHBhdGggZD0iTTE5NC4yMSwuNjdWOS45MmgtMTguNDZ2NS45N2gxNS4yOHY5LjAzaC0xNS4yOHY2LjUyaDE4LjQ2djkuMjZoLTI5LjE2Vi42N2gyOS4xNloiIHN0eWxlPSJmaWxsOiMwMDg1OTc7Ij48L3BhdGg+PC9nPjxwb2x5Z29uIHBvaW50cz0iODIuMDkgMzMuNDUgNzguOTMgMjQuNyA2Ny45OCAyNC43IDU5LjYxIDI0LjcgNDguOTkgMjQuNyA0NS44NCAzMy40NSA4Mi4wOSAzMy40NSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtNCk7Ij48L3BvbHlnb24+PHBhdGggZD0iTTY4LjAzLC42N2wtMTMuOTksNDAuMDNoLTEwLjgyTDU3LjY2LC42N2gxMC4zN1ptLTguNDIsMjQuMDNsNC4xOC0xMS45My00LjE4LDExLjkzWiIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtNSk7Ij48L3BhdGg+PHBvbHlnb24gcG9pbnRzPSIxNjUuMDUgMzEuMzUgMTY1LjA1IDQwLjYxIDE3NS43NiA0MC42MSAxNzYuNjYgNDAuNjEgMTk0LjIxIDQwLjYxIDE5NC4yMSAzMS4zNSAxNjUuMDUgMzEuMzUiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTYpOyI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz0iMTc1Ljc1IDE1LjM5IDE2NS4wNSAxNS4zOSAxNjUuMDUgLjc0IDE3NS43NSAuNjcgMTc1Ljc1IDE1LjM5IiBzdHlsZT0iZmlsbDojMDA4NTk3OyI+PC9wb2x5Z29uPjxwYXRoIGQ9Ik0xMjQuMDMsMjMuMzdjLTEuMjctMTQuMzEsNy44My0yMy4zNywxOS4wOS0yMy4zNyw4Ljk4LDAsMTQuNzcsNC45NiwxNy4yMywxMi40OWwtMTAuMjYsMy40Yy0uNzItMy45Ni0zLjM0LTYuNDEtNy4wMi02LjQxLTQuODUsMC04LjI1LDQuMzUtOC4yNSwxMS4yMWwtMTAuNzksMi42OFoiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTcpOyI+PC9wYXRoPjxwYXRoIGQ9Ik0yNDAuNzYsMjYuNzZjMy40LDMuODUsNy45Miw1LjYzLDExLjk5LDUuNjMsMy4zNSwwLDUuNTgtMS4yMyw1LjU4LTMuNTEsMC0yLjU3LTIuODQtMi45LTguOTgtNC4xMy01Ljg1LTEuMTctMTIuMjYtMy4zNC0xMi4yNi0xMS40OXM3LjA4LTEzLjI3LDE1Ljk1LTEzLjI3YzcuMDIsMCwxMi41NCwyLjczLDE1LjcyLDYuMTlsLTUuOTEsNy4zNmMtMi42Mi0yLjktNi4xMy00LjU3LTEwLjA5LTQuNTctMi45NSwwLTQuOTYsMS4xMi00Ljk2LDMuMTgsMCwyLjI5LDIuNDUsMi42Nyw3LjMsMy42OCw2LjI1LDEuMjgsMTQuMDUsMy4wMSwxNC4wNSwxMS45M3MtNy41OCwxMy42MS0xNi44MywxMy42MWMtNi41MywwLTE0LjE2LTIuNTctMTcuNTEtNi42OWw1Ljk3LTcuOTJaIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC04KTsiPjwvcGF0aD48cGF0aCBkPSJNMjQwLjc2LDI2Ljc2YzMuNCwzLjg1LDcuOTIsNS42MywxMS45OSw1LjYzLDMuMzUsMCw1LjU4LTEuMjMsNS41OC0zLjUxLDAtMi41Ny0yLjg0LTIuOS04Ljk4LTQuMTMtNS44NS0xLjE3LTEyLjI2LTMuMzQtMTIuMjYtMTEuNDlzNy4wOC0xMy4yNywxNS45NS0xMy4yN2M3LjAyLDAsMTIuNTQsMi43MywxNS43Miw2LjE5bC01LjkxLDcuMzZjLTIuNjItMi45LTYuMTMtNC41Ny0xMC4wOS00LjU3LTIuOTUsMC00Ljk2LDEuMTItNC45NiwzLjE4LDAsMi4yOSwyLjQ1LDIuNjcsNy4zLDMuNjgsNi4yNSwxLjI4LDE0LjA1LDMuMDEsMTQuMDUsMTEuOTNzLTcuNTgsMTMuNjEtMTYuODMsMTMuNjFjLTYuNTMsMC0xNC4xNi0yLjU3LTE3LjUxLTYuNjlsNS45Ny03LjkyWiIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXItZ3JhZGllbnQtOSk7Ij48L3BhdGg+PHBvbHlnb24gcG9pbnRzPSIxNjUuMDUgMTUuNzMgMTY1LjA1IDI0Ljk5IDE3NS43NiAyNC45OSAxNzYuNjYgMjQuOTkgMTkxLjE1IDI0Ljk5IDE5MS4xNSAxNS43MyAxNjUuMDUgMTUuNzMiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTEwKTsiPjwvcG9seWdvbj48cGF0aCBkPSJNMjQ5LjM0LDI0Ljc2Yy01Ljg1LTEuMTctMTIuMjYtMy4zNC0xMi4yNi0xMS40OXM3LjA4LTEzLjI3LDE1Ljk1LTEzLjI3YzcuMDIsMCwxMi41NCwyLjczLDE1LjcyLDYuMTlsLTUuOTEsNy4zNmMtMi42Mi0yLjktNi4xMy00LjU3LTEwLjA5LTQuNTctMi45NSwwLTQuOTYsMS4xMi00Ljk2LDMuMTgsMCwyLjI5LDIuNDUsMi42Nyw3LjMsMy42OGwtNS43NCw4LjkyWiIgc3R5bGU9ImZpbGw6IzAwODU5NzsiPjwvcGF0aD48cG9seWdvbiBwb2ludHM9IjE2NS4wNSAuNjcgMTY1LjA1IDkuOTIgMTc1Ljc2IDkuOTIgMTc2LjY2IDkuOTIgMTk0LjIxIDkuOTIgMTk0LjIxIC42NyAxNjUuMDUgLjY3IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0xMSk7Ij48L3BvbHlnb24+PC9nPjwvc3ZnPiA=";
  var Se = ({
    nsfUrl: e = "https://www.nsf.gov",
    placement: t = "header",
    siteName: i = "",
    siteUrl: s = "/"
  }) => c(b, {
    children: [c("div", {
      class: `logo logo-${t}`,
      children: [c("a", {
        class: "nsf",
        href: e,
        children: c("img", {
          class: "nsf-logo",
          src: $e,
          alt: "National Science Foundation"
        })
      }), c("div", {
        class: "divider"
      }), c("a", {
        class: "access",
        href: s,
        children: [c("img", {
          class: "access-logo",
          src: et,
          alt: "ACCESS"
        }), i && t == "header" ? c("span", {
          class: `name name-${i.toLocaleLowerCase().replace(" ", "-")}`,
          children: i
        }) : null]
      })]
    }), c("style", {
      children: qe
    })]
  });
  var Y;
  var x;
  var _;
  var de;
  var $ = 0;
  var De = [];
  var Z = [];
  var pe = p.__b;
  var ge = p.__r;
  var he = p.diffed;
  var Me = p.__c;
  var fe = p.unmount;
  function se(e, t) {
    p.__h && p.__h(x, e, $ || t), $ = 0;
    var i = x.__H || (x.__H = { __: [], __h: [] });
    return e >= i.__.length && i.__.push({ __V: Z }), i.__[e];
  }
  function K(e) {
    return $ = 1, tt(Te, e);
  }
  function tt(e, t, i) {
    var s = se(Y++, 2);
    if (s.t = e, !s.__c && (s.__ = [i ? i(t) : Te(void 0, t), function(l) {
      var u = s.__N ? s.__N[0] : s.__[0], w = s.t(u, l);
      u !== w && (s.__N = [w, s.__[1]], s.__c.setState({}));
    }], s.__c = x, !x.u)) {
      var a = function(l, u, w) {
        if (!s.__c.__H)
          return true;
        var g = s.__c.__H.__.filter(function(M) {
          return M.__c;
        });
        if (g.every(function(M) {
          return !M.__N;
        }))
          return !n || n.call(this, l, u, w);
        var o = false;
        return g.forEach(function(M) {
          if (M.__N) {
            var f = M.__[0];
            M.__ = M.__N, M.__N = void 0, f !== M.__[0] && (o = true);
          }
        }), !(!o && s.__c.props === l) && (!n || n.call(this, l, u, w));
      };
      x.u = true;
      var n = x.shouldComponentUpdate, r = x.componentWillUpdate;
      x.componentWillUpdate = function(l, u, w) {
        if (this.__e) {
          var g = n;
          n = void 0, a(l, u, w), n = g;
        }
        r && r.call(this, l, u, w);
      }, x.shouldComponentUpdate = a;
    }
    return s.__N || s.__;
  }
  function X(e, t) {
    var i = se(Y++, 3);
    !p.__s && st(i.__H, t) && (i.__ = e, i.i = t, x.__H.__h.push(i));
  }
  function it() {
    var e = se(Y++, 11);
    if (!e.__) {
      for (var t = x.__v; t !== null && !t.__m && t.__ !== null; )
        t = t.__;
      var i = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + i[0] + "-" + i[1]++;
    }
    return e.__;
  }
  function ot() {
    for (var e; e = De.shift(); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(Q), e.__H.__h.forEach(ee), e.__H.__h = [];
        } catch (t) {
          e.__H.__h = [], p.__e(t, e.__v);
        }
  }
  p.__b = function(e) {
    x = null, pe && pe(e);
  }, p.__r = function(e) {
    ge && ge(e), Y = 0;
    var t = (x = e.__c).__H;
    t && (_ === x ? (t.__h = [], x.__h = [], t.__.forEach(function(i) {
      i.__N && (i.__ = i.__N), i.__V = Z, i.__N = i.i = void 0;
    })) : (t.__h.forEach(Q), t.__h.forEach(ee), t.__h = [], Y = 0)), _ = x;
  }, p.diffed = function(e) {
    he && he(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (De.push(t) !== 1 && de === p.requestAnimationFrame || ((de = p.requestAnimationFrame) || nt)(ot)), t.__H.__.forEach(function(i) {
      i.i && (i.__H = i.i), i.__V !== Z && (i.__ = i.__V), i.i = void 0, i.__V = Z;
    })), _ = x = null;
  }, p.__c = function(e, t) {
    t.some(function(i) {
      try {
        i.__h.forEach(Q), i.__h = i.__h.filter(function(s) {
          return !s.__ || ee(s);
        });
      } catch (s) {
        t.some(function(a) {
          a.__h && (a.__h = []);
        }), t = [], p.__e(s, i.__v);
      }
    }), Me && Me(e, t);
  }, p.unmount = function(e) {
    fe && fe(e);
    var t, i = e.__c;
    i && i.__H && (i.__H.__.forEach(function(s) {
      try {
        Q(s);
      } catch (a) {
        t = a;
      }
    }), i.__H = void 0, t && p.__e(t, i.__v));
  };
  var we = typeof requestAnimationFrame == "function";
  function nt(e) {
    var t, i = function() {
      clearTimeout(s), we && cancelAnimationFrame(t), setTimeout(e);
    }, s = setTimeout(i, 100);
    we && (t = requestAnimationFrame(i));
  }
  function Q(e) {
    var t = x, i = e.__c;
    typeof i == "function" && (e.__c = void 0, i()), x = t;
  }
  function ee(e) {
    var t = x;
    e.__c = e.__(), x = t;
  }
  function st(e, t) {
    return !e || e.length !== t.length || t.some(function(i, s) {
      return i !== e[s];
    });
  }
  function Te(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  var te = (e = 900) => document.body.clientWidth >= e ? "desktop" : "mobile";
  var ke = (e = 900) => {
    const [t, i] = K(te(e));
    return X(() => {
      window.addEventListener("resize", () => i(te(e)));
    }, []), t;
  };
  var V = (e, t) => {
    const i = t.attachShadow({
      mode: "open"
    });
    Ke(e, i);
  };
  var Ee = () => window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var at = ({
    showAfterScroll: e = 300
  }) => {
    const [t, i] = K(false);
    return X(() => {
      window.addEventListener("scroll", () => i(Ee() >= e));
    }, []), c("button", {
      class: `scroll-to-top ${t ? "visible" : ""}`,
      title: "Return to Top",
      onClick: () => window.scrollTo({
        top: 0,
        behavior: "smooth"
      }),
      children: "Return to Top"
    });
  };
  var ct = (e = {}) => c(b, {
    children: [c("div", {
      class: "container",
      children: [c("div", {
        class: "upper",
        children: [c("div", {
          class: "about",
          children: [c("p", {
            class: "awards",
            children: ["ACCESS is an advanced computing and data resource program supported by the U.S. National Science Foundation (NSF) under the Office of Advanced Cyberinfrastructure awards", " ", c(P, {
              number: 2138259
            }), ", ", c(P, {
              number: 2138286
            }), ",", " ", c(P, {
              number: 2138307
            }), ", ", c(P, {
              number: 2137603
            }), " and", " ", c(P, {
              number: 2138296
            }), "."]
          }), c("p", {
            class: "disclaimer",
            children: "Any opinions, findings, conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect the views of NSF."
          }), c("a", {
            class: "contact",
            href: "https://access-ci.org/contact/",
            children: "Contact ACCESS"
          }), c(F, {
            className: "social",
            items: Oe
          })]
        }), c("div", {
          class: "personas",
          children: [c("p", {
            children: "For:"
          }), c(F, {
            items: me
          })]
        })]
      }), c("div", {
        class: "lower",
        children: [c(Se, {
          ...e,
          placement: "footer"
        }), c(F, {
          className: "links",
          items: We
        })]
      })]
    }), c(at, {
      ...e
    }), c("style", {
      children: U
    }), c("style", {
      children: Fe
    })]
  });
  var lt = `.container{box-sizing:content-box;height:84px;padding-top:20px}@media (min-width: 900px){.container{height:146px;padding-top:52px}}
`;
  var rt = (e = {}) => c(b, {
    children: [c("div", {
      class: "container",
      children: c(Se, {
        ...e
      })
    }), c("style", {
      children: U
    }), c("style", {
      children: lt
    })]
  });
  var Be = `.universal{--background: var(--teal-700);--border: rgba(19, 133, 151, .35)}.site{--background: var(--teal-600);--border: #157688}.site ul ul{--border: rgba(19, 133, 151, .35)}.menu ul,.menu li{list-style-type:none;margin:0;padding:0}.menu a{text-decoration:none}.item{background:transparent;border:0 none transparent;border-radius:0;box-sizing:border-box;cursor:pointer;display:block;text-align:left;width:100%}.item{font-size:14px;font-weight:600;line-height:21px;padding:13.5px var(--padding) 13.5px}.menu>ul>li>.item{font-weight:800}.item,.menu li:last-child li:last-child>.item{border-bottom:1px solid var(--border)}.menu li.highlight button,.menu li:last-child>.item,.menu>.collapsed{border-bottom:0 none transparent}.expanded{border-bottom-width:2px}.menu button{position:relative}.menu>button{font-weight:500;padding:13.5px var(--padding) 13.5px;text-transform:uppercase}.menu button:after{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>");background-repeat:no-repeat;background-size:18px;content:"";display:block;height:18px;right:calc(var(--padding) + var(--offset));position:absolute;top:15px;width:18px}.menu button.expanded:after{transform:rotate(180deg)}.menu .highlight button:after{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23232323' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>")}.menu button,.menu ul li{background-color:var(--background)}.menu button,.menu ul li a{color:var(--color)}.menu ul li li{background-color:#fff}.menu ul li li a{color:#138597}.icon>.item{background-position:calc(var(--padding) + var(--offset)) center;background-repeat:no-repeat;background-size:14px 14px;text-indent:-99999px}.icon-home>.item{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' viewBox='0 0 16 16'><path d='M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5'/></svg>")}.icon-search>.item{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' viewBox='0 0 16 16'><path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0'/></svg>")}.track .item{text-transform:uppercase;padding-top:4px;padding-bottom:4px}.track:first-child .item{padding-top:17px}.track.grow .item{padding-bottom:21px}.track .item{border-bottom:0 none transparent}.highlight button{background-color:var(--yellow-400);color:var(--contrast)}.footer{background-color:var(--teal-700);color:#fff}.columns{margin:0 auto;padding:50px var(--padding) 36px;width:var(--width)}.column{padding-bottom:14px}.footer a,.footer a:visited{color:#fff;text-decoration:none}.footer a:active,.footer a:focus,.footer a:hover{color:var(--teal-100);text-decoration:underline}.footer h2{font-size:14px;font-weight:800;margin:0}.footer ul{margin:0;padding:0}.footer li{font-size:14px;font-weight:600;list-style-type:none;padding:14px 0 0}@media (min-width: 768px){.columns{display:flex;flex-direction:row;flex-wrap:wrap;padding:50px 0 10px}.column{padding-bottom:40px;padding-right:20px;width:calc((var(--width) - 60px) / 4)}.column:nth-child(4),.column:last-child{padding-right:0}}@media (min-width: 1280px){.site{--background: white;--color: var(--teal-600);--outline: var(--teal-700);--padding: 20px;border-bottom:1px solid #d9d9d9;border-top:3px solid var(--teal-700)}.site>ul{justify-content:end}.menu>button{display:none}.menu>ul{display:flex;flex-direction:row;margin:0 auto;width:calc(var(--width) + (2 * var(--padding)))}.item,.track .item,.track:first-child .item,.track.grow .item{border-bottom:0 none transparent;padding-top:12px;padding-bottom:12px}.site .item{font-size:16px}.grow{flex:1 0 auto}.universal{background-color:var(--teal-700)}.universal>ul>li:last-child{margin-right:-10px}.universal li button{--padding: 20px}.icon>.item{background-position:center center;width:56px}.menu button:after,.menu button.expanded:after,.menu .highlight button:after,.menu .highlight button.expanded:after{display:none}.menu>ul>li{display:flex;flex-direction:row;justify-content:start;position:relative}.menu>ul>li.grow>.item{flex:0 1 0}.menu>ul>li.active>.item,.menu>ul>li>.expanded,.menu>ul>li>.item:active,.menu>ul>li>.item:focus,.menu>ul>li>.item:hover{background-color:var(--teal-600);color:#fff;outline:0 none transparent}.menu>ul>li>.item:focus-visible{outline:3px solid var(--outline);outline-offset:-3px;z-index:1000}.menu>ul ul{background-color:var(--teal-600);padding:10px 0;position:absolute;right:0;top:48px;z-index:9999}.menu>ul ul li{background-color:var(--teal-600)}.menu>ul ul .item{color:#fff;white-space:nowrap;padding:5px 20px}.menu>ul ul .item:active,.menu>ul ul .item:focus,.menu>ul ul .item:hover{color:#cee8e9;outline:0 none transparent;text-decoration:underline}.menu>ul ul .item:focus-visible{outline:3px solid white;outline-offset:-3px;z-index:1000}.menu>ul>li>.item{line-height:24px}}@media (min-width: 1280px){.columns{flex-wrap:nowrap;padding:72px 0 0}.column{padding-bottom:72px;width:calc((var(--width) - 120px) / 7)}.column:nth-child(4){padding-right:20px}}
`;
  var Ve = ({
    autoOpenMode: e,
    classes: t = "",
    href: i = "",
    html: s = "",
    items: a,
    mode: n,
    name: r,
    open: l,
    parentId: u = "root",
    setOpen: w
  }) => {
    const g = it(), o = l[u] == g, M = o || e == n, f = () => w({
      ...l,
      [u]: o ? null : g
    });
    if (s)
      return c("div", {
        dangerouslySetInnerHTML: {
          __html: s
        }
      });
    if (i)
      return c("a", {
        href: i,
        class: `item ${t || ""}`,
        children: r
      });
    if (a)
      return c(b, {
        children: [r && c("button", {
          "aria-expanded": M,
          "aria-controls": g,
          class: `item ${M ? "expanded" : "collapsed"}`,
          onClick: f,
          children: r
        }), c("ul", {
          class: t,
          id: g,
          hidden: !M,
          "aria-hidden": !M,
          children: a.map(({
            autoOpenMode: d,
            classes: h,
            href: j,
            html: m,
            items: I,
            name: L
          }) => c("li", {
            class: h || "",
            children: c(Ve, {
              autoOpenMode: d,
              href: j,
              html: m,
              items: I,
              mode: n,
              name: L,
              open: l,
              parentId: g,
              setOpen: w
            })
          }))
        })]
      });
  };
  var Pe = ({
    classes: e,
    items: t,
    name: i,
    target: s
  }) => {
    const a = ke(1280), [n, r] = K({});
    return X(() => {
      document.body.addEventListener("click", (l) => {
        l.target != s && te() == "desktop" && r({});
      }), s.addEventListener("keydown", ({
        key: l
      }) => {
        l == "Escape" && r({});
      });
    }, []), c(b, {
      children: [c("nav", {
        class: `menu ${e || ""}`,
        children: c(Ve, {
          autoOpenMode: "desktop",
          items: t,
          mode: a,
          name: i,
          open: n,
          setOpen: r
        })
      }), c("style", {
        children: U
      }), c("style", {
        children: Be
      })]
    });
  };
  var ut = ({
    items: e
  }) => {
    const t = ke(768), i = e.map(({
      name: s,
      href: a,
      items: n
    }) => {
      if (t == "mobile")
        for (; !a; )
          a = n[0].href, n = n[0];
      return a ? c("div", {
        class: "column",
        children: c("h2", {
          children: c("a", {
            href: a,
            children: s
          })
        })
      }) : c("div", {
        class: "column",
        children: [c("h2", {
          children: s
        }), c(F, {
          items: n
        })]
      });
    });
    return c(b, {
      children: [c("nav", {
        class: "footer",
        children: c("div", {
          class: "columns",
          children: i
        })
      }), c("style", {
        children: U
      }), c("style", {
        children: Be
      })]
    });
  };
  var dt = `.toc{background-color:var(--teal-600);color:#fff;padding:20px;position:sticky;top:50px}h2{font-size:16px;font-weight:800;margin:0 0 16px}ul{margin:0;padding:0 0 0 20px}li{line-height:1.125;list-style-type:none;margin:0;padding:9px 0}a{color:#fff;font-size:16px;font-weight:600;text-decoration:underline;text-decoration-color:transparent}a :active,a:focus,a:hover{color:var(--teal-100);text-decoration-color:var(--teal-100)}@media (min-width: 768px){a.active{color:var(--teal-100)}}@media (min-width: 900px){.toc{padding:32px}}
`;
  var pt = ({
    headings: e = [],
    idPrefix: t = "",
    smoothScroll: i = true
  }) => {
    const [s, a] = K(-1);
    let n;
    const r = [];
    if (e.forEach((l) => {
      l.tagName == "H1" ? n = l : l.tagName == "H2" && (r.push(l), l.id || (l.id = t + l.textContent.replace(/[^A-Za-z0-9]+/g, "-").toLowerCase()));
    }), X(() => {
      r.length && window.addEventListener("scroll", function() {
        const l = Ee() + window.innerHeight * 0.1;
        let u = -1;
        r.forEach((w, g) => {
          if (w.offsetTop < l)
            return u = g, false;
        }), a(u);
      });
    }, []), !!r.length)
      return c(b, {
        children: [c("div", {
          class: "toc",
          children: [n && c("h2", {
            children: n.textContent
          }), r.length > 0 && c("ul", {
            children: r.map((l, u) => c("li", {
              children: c("a", {
                href: `#${l.id}`,
                class: u == s ? "active" : "",
                onClick: (w) => {
                  i && (w.preventDefault(), window.scrollTo({
                    top: l.offsetTop,
                    behavior: "smooth"
                  }), history.pushState(null, null, `#${l.id}`));
                },
                children: l.textContent
              })
            }))
          })]
        }), c("style", {
          children: U
        }), c("style", {
          children: dt
        })]
      });
  };
  var k = {
    ...window.ACCESS_CI_UI_CONFIG
  };
  console.log("windowParamConfig", k);
  var C = {
    universalMenus: {
      loginUrl: "/login",
      logoutUrl: "/logout",
      siteName: "Allocations",
      targetId: "universal-menus",
      ...k.universalMenus
    },
    header: {
      siteName: "Allocations",
      targetId: "header",
      ...k.header
    },
    siteMenus: {
      items: [],
      siteName: "Allocations",
      targetId: "site-menus",
      ...k.siteMenus
    },
    tableOfContents: {
      headings: document.querySelectorAll("#body h1, #body h2"),
      targetId: "table-of-contents",
      ...k.tableOfContents
    },
    footerMenus: {
      items: [],
      targetId: "footer-menus",
      ...k.footerMenus
    },
    footer: {
      targetId: "footer",
      ...k.footer
    }
  };
  console.log("paramConfig", C);
  for (let e in C)
    C[e].target || (C[e].target = document.getElementById(C[e].targetId));
  var gt = (e = {}) => {
    V(c(ct, {
      ...e
    }), e.target);
  };
  var ht = (e = {}) => {
    V(c(rt, {
      ...e
    }), e.target);
  };
  var Mt = ({
    items: e,
    isLoggedIn: t,
    loginUrl: i,
    logoutUrl: s,
    siteName: a,
    target: n
  } = {}) => {
    if (t === void 0 && (t = document.cookie.split("; ").includes("SESSaccesscisso=1")), e === void 0) {
      const r = {
        ...t ? Ue : ze
      };
      r.items = r.items.map((l) => ({
        ...l,
        href: l.name == "Login" && i || l.name == "Log out" && s || l.href
      })), e = [...Ye, r], a && (e.find((l) => l.name == a).classes += " active");
    }
    V(c(Pe, {
      classes: "universal",
      items: e,
      name: "ACCESS Menu",
      target: n
    }), n);
  };
  var ft = ({
    items: e,
    siteName: t,
    target: i
  }) => V(c(Pe, {
    classes: "site",
    items: e,
    name: `${t} Menu`,
    target: i
  }), i);
  var wt = ({
    items: e,
    target: t
  }) => V(c(ut, {
    items: e
  }), t);
  var mt = ({
    headings: e = [],
    target: t
  }) => V(c(pt, {
    headings: e
  }), t);
  gt(C.footer);
  ht(C.header);
  Mt(C.universalMenus);
  wt(C.footerMenus);
  ft(C.siteMenus);
  mt(C.tableOfContents);
})();
