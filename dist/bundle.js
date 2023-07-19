(() => {
  "use strict";
  var n = {
      424: (n, e, t) => {
        t.d(e, { Z: () => s });
        var r = t(81),
          o = t.n(r),
          i = t(645),
          a = t.n(i)()(o());
        a.push([
          n.id,
          ":root {\n  --primary: #ddd;\n  --secondary: #e5d4d4;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--primary);\n  font-family: 'Kalam', cursive;\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.container {\n  background-color: var(--secondary);\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding-top: 20px;\n}\n\n.container > * {\n  border-bottom: 1px solid #80808040;\n  padding: 0.7em;\n}\n\n.title-section {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\ninput {\n  border-color: transparent;\n  padding: 0.7em;\n  outline: none;\n}\n\n.input-task {\n  width: 90%;\n  position: relative;\n}\n\n.input-field {\n  position: relative;\n  margin: 1em 0;\n  display: flex;\n  align-items: center;\n}\n\n.input-field label {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  font-size: 16px;\n  color: #555;\n  pointer-events: none;\n  transition: 0.2s ease-out;\n}\n\n.input-field input:focus ~ label {\n  top: -20px;\n  left: 2px;\n  color: #777;\n  font-size: 14px;\n}\n\n#addBtn {\n  width: 11%;\n  font-size: 2rem;\n  position: absolute;\n  background-color: transparent;\n  border-color: transparent;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n\n.list-container-section {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n}\n\n.list-container-section li {\n  display: flex;\n  align-items: center;\n  gap: 0.7em;\n  padding: 0.5em;\n  border-bottom: 1px solid #ccc;\n}\n\n.todo-list {\n  padding-left: 0;\n}\n\n.clear-completed {\n  width: 100%;\n  padding: 0.5em;\n}\n\n.clear-completed:hover {\n  background: rgb(2, 0, 36);\n  background: radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 88%);\n  color: #f1eaea;\n}\n\n.task i {\n  margin-left: auto;\n}\n\n.fa-ellipsis-vertical:hover {\n  cursor: move;\n}\n",
          "",
        ]);
        const s = a;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var d = 0; d < n.length; d++) {
                var l = [].concat(n[d]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = i)),
                  t &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = t))
                      : (l[2] = t)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var i = {}, a = [], s = 0; s < n.length; s++) {
            var c = n[s],
              d = r.base ? c[0] + r.base : c[0],
              l = i[d] || 0,
              p = "".concat(d, " ").concat(l);
            i[d] = l + 1;
            var u = t(p),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: p, updater: m, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var s = t(i[a]);
              e[s].references--;
            }
            for (var c = r(n, o), d = 0; d < i.length; d++) {
              var l = t(i[d]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            i = c;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return n[r](i, i.exports, t), i.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      var n = t(379),
        e = t.n(n),
        r = t(795),
        o = t.n(r),
        i = t(569),
        a = t.n(i),
        s = t(565),
        c = t.n(s),
        d = t(216),
        l = t.n(d),
        p = t(589),
        u = t.n(p),
        f = t(424),
        m = {};
      (m.styleTagTransform = u()),
        (m.setAttributes = c()),
        (m.insert = a().bind(null, "head")),
        (m.domAPI = o()),
        (m.insertStyleElement = l()),
        e()(f.Z, m),
        f.Z && f.Z.locals && f.Z.locals;
      const v = document.getElementById("todoList"),
        g = [
          { description: "complete", completed: !0, index: 1 },
          { description: "To do something", completed: !1, index: 2 },
          { description: "list tasks", completed: !0, index: 3 },
        ];
      class h {
        static renderTasks() {
          g.sort((n, e) => n.index - e.index),
            (v.innerHTML = ""),
            g.forEach((n, e) => {
              v.innerHTML += `\n        <li class="task" draggable="true" data-index="${e}">\n          <div class="checkbox-container">\n            <input type="checkbox" name="${
                n.description
              }" ${
                n.completed ? "checked" : ""
              }>\n            <input type="text" value="${
                n.description
              }" readonly>\n          </div>\n          <i class="fas fa-ellipsis-vertical" data-index="${e}"></i>\n        </li>\n      `;
            });
        }
      }
      document.addEventListener("DOMContentLoaded", () => {
        h.renderTasks();
      });
    })();
})();
