function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTasksTasksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--PC View-->\r\n<div class=\"pc__bg\">\r\n    <div class=\"row m-0 p-0\">\r\n        <div class=\"pc__view\">\r\n            <div class=\"col-12 m-0 p-0\">\r\n                <div class=\"row m-0 p-0\">\r\n                    <div class=\"col-4 col-md-2 pcsb__bg m-0 p-0\">\r\n                        <!-- Side Bar -->\r\n                        <div class=\"row pc__sidebar m-0 p-0\"\r\n                            [ngClass]=\"{pc__sidebarWidthCl: !sideBarOpened, pc__sidebarWidthOp: sideBarOpened}\">\r\n                            <div class=\"col-12 m-0 p-0\">\r\n                                <div class=\"pcsb__container\">\r\n                                    <div class=\"container\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-12\">\r\n                                                <div class=\"menu__icon\" (click)=\"openSideBar()\">\r\n                                                    <div\r\n                                                        [ngClass]=\"{line1Closed: !sideBarOpened, line1Opened: sideBarOpened}\">\r\n                                                    </div>\r\n                                                    <div\r\n                                                        [ngClass]=\"{line2Closed: !sideBarOpened, line2Opened: sideBarOpened}\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"showItems == true\">\r\n                                        <div class=\"w-100\">\r\n                                            <div class=\"row pcsb__titleContainer p-0 m-0\">\r\n                                                <div class=\"col-12 p-0 m-0\">\r\n                                                    <p\r\n                                                        [ngClass]=\"{pcsb__titleCl:!showCategories, pcsb__titleOp:showCategories}\">\r\n                                                        choose your to do list</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"w-100\">\r\n                                            <ul class=\"pcsb__categories\">\r\n                                                <li (click)=\"changeList('today')\"\r\n                                                    [ngClass]=\"{pcsb__categoryCl:!showCategories, pcsb__categoryOp:showCategories}\">\r\n                                                    today</li>\r\n                                                <li (click)=\"changeList('tomorrow')\"\r\n                                                    [ngClass]=\"{pcsb__categoryCl:!showCategories, pcsb__categoryOp:showCategories}\">\r\n                                                    tomorrow</li>\r\n                                                <li (click)=\"changeList('this week')\"\r\n                                                    [ngClass]=\"{pcsb__categoryCl:!showCategories, pcsb__categoryOp:showCategories}\">\r\n                                                    this week</li>\r\n\r\n                                                <div\r\n                                                    [ngClass]=\"{pcsb__separatorCl:!showCategories, pcsb__separatorOp:showCategories}\">\r\n                                                </div>\r\n\r\n                                                <li (click)=\"changeList('shopping list')\"\r\n                                                    [ngClass]=\"{pcsb__categoryCl:!showCategories, pcsb__categoryOp:showCategories}\">\r\n                                                    shopping list</li>\r\n                                                <li (click)=\"changeList('work meetings')\"\r\n                                                    [ngClass]=\"{pcsb__categoryCl:!showCategories, pcsb__categoryOp:showCategories}\">\r\n                                                    work meetings</li>\r\n\r\n                                            </ul>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <div *ngIf=\"showItems == true\">\r\n                                        <a [ngClass]=\"{developerCopyrightCl:!showCategories, developerCopyrightOp:showCategories}\"\r\n                                            href=\"https://github.com/agnesft5\">Developed by Agnès Font © </a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-8 col-md-10 pc__mainbg m-0 p-0\">\r\n                        <!-- Main -->\r\n                        <div class=\"row m-0 p-0\">\r\n                            <div class=\"col-12 m-0 p-0\">\r\n                                <div class=\"pcm__container\">\r\n                                    <div class=\"row m-0 p-0\">\r\n                                        <h1 class=\"amaticFont ml-5\">empty your\r\n                                            mind, focus on what really matters.</h1>\r\n                                        <div class=\"col-12\">\r\n                                            <div class=\"row p-0 m-0 listTitle__container\">\r\n                                                <div class=\"col-12 p-0 m-0 text-left\">\r\n                                                    <p *ngIf=\"listTitle != 'shopping list' && listTitle != 'work meetings'\"\r\n                                                        class=\"listTitle\">{{listTitle}} &nbsp;<i\r\n                                                            class=\"fas fa-calendar-alt\"></i></p>\r\n                                                    <p *ngIf=\"listTitle == 'shopping list'\" class=\"listTitle\">\r\n                                                        {{listTitle}} &nbsp;<i class=\"fas fa-shopping-basket\"></i></p>\r\n                                                    <p *ngIf=\"listTitle == 'work meetings'\" class=\"listTitle\">\r\n                                                        {{listTitle}} &nbsp;<i class=\"fas fa-briefcase\"></i></p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--Input & button container-->\r\n                                            <div class=\"row m-0 p-0\">\r\n                                                <div class=\"col-12 m-0 p-0\">\r\n                                                    <!--New to do-->\r\n                                                    <div\r\n                                                        [ngClass]=\"{addToDo__containerCl:!sideBarOpened, addToDo__containerOp:sideBarOpened}\">\r\n                                                        <div class=\"row m-0 p-0\">\r\n                                                            <div class=\"col-2 m-0 p-0 text-center\">\r\n                                                                <button\r\n                                                                    [disabled]=\"newTask.invalid && newTask.touched && newTask.dirty || newTask.touched && newTask.pristine\"\r\n                                                                    (click)=\"addTask(); newTask.reset()\" type=\"submit\"\r\n                                                                    class=\"addButton\"><i class=\"fas fa-plus addIcon\"\r\n                                                                        style=\"font-size: 1.5rem;\"></i></button>\r\n                                                            </div>\r\n                                                            <div class=\"col-10 m-0 p-0\">\r\n                                                                <input type=\"text\" #newTask=\"ngModel\" [(ngModel)]=\"task\"\r\n                                                                    name=\"task\" class=\"AddToDo\" required\r\n                                                                    pattern=\"[A-zÀ-ú]*\"\r\n                                                                    placeholder=\"Write down your new to-do!\" required\r\n                                                                    pattern=\"([\\w ]+)\">\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <div class=\"row m-0 p-0\">\r\n                                                            <div class=\"col-12 m-0 p-0\">\r\n                                                                <p class=\"error\"\r\n                                                                    *ngIf=\"newTask.invalid && newTask.touched && newTask.dirty\">\r\n                                                                    Invalid format*</p>\r\n                                                                <p class=\"error\"\r\n                                                                    *ngIf=\"newTask.touched && newTask.pristine\">\r\n                                                                    This field is mandatory*</p>\r\n                                                                <p class=\"error\" *ngIf=\"advice\">\r\n                                                                    {{advice}}</p>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!--List Container-->\r\n                                            <div *ngIf=\"selectedList\">\r\n                                                <div [ngClass]=\"{list__containerCl:!sideBarOpened, list__containerOp:sideBarOpened}\"\r\n                                                    class=\"row m-0 p-0\">\r\n                                                    <div class=\"col-12 m-0 p-0\">\r\n                                                        <!--To do-->\r\n                                                        <div class=\"toDo__container\"\r\n                                                            [ngClass]=\"{toDo__undone: selected['done']==false, toDo__done: selected['done']==true}\"\r\n                                                            *ngFor=\"let selected of selectedList, let i= index\">\r\n                                                            <div class=\"row m-0 p-0\">\r\n                                                                <div class=\"col-9 m-0 p-0\">\r\n                                                                    <p (click)=\"taskDone(i)\" class=\"toDo\">{{selected['name']}}</p>\r\n                                                                    <small *ngIf=\"!sideBarOpened\" class=\"toDoDate\">{{selected['date']}}</small>\r\n                                                                </div>\r\n                                                                <div class=\"col-3 m-0 p-0 text-center\">\r\n                                                                    <p (click)=\"deleteTask(i)\" [ngClass]=\"{deleteIcon: selected['done']==false, delateIcon__done: selected['done']==true}\"><i\r\n                                                                            class=\"fas fa-trash-alt\"></i>\r\n                                                                    </p>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <a class=\"pictureCopyright\" href=\"https://unsplash.com/s/photos/anna-spratt\">Picture by Anna\r\n                                Spratt</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'to-do-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./views/tasks/tasks.component */
    "./src/app/views/tasks/tasks.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routerConfig = [{
      "path": "tasks",
      "component": _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"]
    }, {
      "path": "",
      "component": _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"]
    }, {
      "path": "**",
      "component": _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _views_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routerConfig, {
        useHash: true
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/views/tasks/tasks.component.css":
  /*!*************************************************!*\
    !*** ./src/app/views/tasks/tasks.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTasksTasksComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".showBorder{\r\n    border: 1px solid black;\r\n}\r\n.amaticFont{\r\n    font-family: 'Amatic SC', cursive;\r\n    font-size: 3.25rem;\r\n}\r\n.catamaranFont{\r\n    font-family: 'Catamaran', sans-serif;\r\n}\r\n.pc__bg{\r\n    background-color: #a3d5d1;\r\n    background-size: 100%;\r\n    height: 100vh;\r\n}\r\n.pc__view{\r\n    height: 90vh;\r\n    width: 75%;\r\n    position: relative;\r\n    margin: 2.25% auto;\r\n    background-color: white;\r\n    border-radius: .25rem;\r\n}\r\n.pcsb__bg{\r\n    background-color: rgb(246, 245, 250);\r\n}\r\n.pc__sidebar{\r\n    height: 90vh;\r\n    background-color: #333333;\r\n    border-radius: .25rem;\r\n    border-bottom-right-radius: 0rem;\r\n    border-top-right-radius: 0rem;\r\n    position: absolute;\r\n    z-index: 20;\r\n}\r\n.pc__sidebarWidthCl{\r\n    width: 50%;\r\n    transition: width 2s;\r\n}\r\n.pc__sidebarWidthOp{\r\n    width: 100%;\r\n    transition: width 2s;\r\n}\r\n.menu__icon{\r\n    position: absolute;\r\n    top: 6vh;\r\n    left: 2vw;\r\n    cursor: pointer;\r\n    height: 5vh;\r\n    width: 5vw;\r\n}\r\n.line1Closed, .line2Closed, .line1Opened, .line2Opened{\r\n    height: 3px;\r\n    width: 20px;\r\n    border-radius: .25rem;\r\n    background-color: #a3d5d1;\r\n    position: absolute;\r\n}\r\n.line1Closed{\r\n    transform: rotate(-45deg);\r\n    -webkit-transform: rotate(-45deg);\r\n    -moz-transform: rotate(-45deg);\r\n    -o-transform: rotate(-45deg);\r\n    -ms-transform: rotate(-45deg);\r\n    position: absolute;\r\n    top: 13px;\r\n    left: 0px;\r\n    transition: top 2s, left, 2s;\r\n}\r\n.line1Opened{\r\n    transform: rotate(-45deg);\r\n    -webkit-transform: rotate(-45deg);\r\n    -moz-transform: rotate(-45deg);\r\n    -o-transform: rotate(-45deg);\r\n    -ms-transform: rotate(-45deg);\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    transition: top 2s, left, 2s;\r\n}\r\n.line2Closed{\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n    -moz-transform: rotate(45deg);\r\n    -o-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    transition: top 2s, left, 2s;\r\n}\r\n.line2Opened{\r\n    transform: rotate(45deg);\r\n    -webkit-transform: rotate(45deg);\r\n    -moz-transform: rotate(45deg);\r\n    -o-transform: rotate(45deg);\r\n    -ms-transform: rotate(45deg);\r\n    position: absolute;\r\n    top: 13px;\r\n    left: 0px;\r\n    transition: top 2s, left, 2s;\r\n}\r\n.pc__mainbg{\r\n    position: relative;\r\n    background-image: url('main-background1.jpg');\r\n    background-size: cover;\r\n    height: 90vh;\r\n    border-radius: .25rem\r\n}\r\n.pcsb__container, .pcm__container{\r\n    height: 89.8vh;\r\n}\r\n.pcsb__container{\r\n    position: relative;\r\n    z-index: 20;\r\n}\r\n.pcsb__categories{\r\n    position: relative;\r\n    margin: 10% auto;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    text-align: center;\r\n    margin-top: 30%;\r\n}\r\n.pcsb__titleContainer{\r\n    position: relative;\r\n    top: 8vh;\r\n    margin: 0 auto;\r\n}\r\n.pcsb__titleCl{\r\n    color:#333333;\r\n    font-size: .3rem;\r\n    text-transform: uppercase;\r\n    padding: 25%;\r\n    text-align: center;\r\n    font-family: 'Catamaran', sans-serif;\r\n    transition: color .5s ,font-size 2s;\r\n}\r\n.pcsb__titleOp{\r\n    color: white;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n    text-transform: uppercase;\r\n    padding: 25%;\r\n    text-align: center;\r\n    font-family: 'Catamaran', sans-serif;\r\n    transition: color 2s, font-size 2s;\r\n}\r\n.pcsb__categoryCl{\r\n    color:#333333;\r\n    font-size: .3rem;\r\n    text-transform: uppercase;\r\n    margin: 10% auto;\r\n    font-family: 'Catamaran', sans-serif;\r\n    transition: color .5s ,font-size 2s;\r\n}\r\n.pcsb__categoryOp{\r\n    color: white;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    margin: 10% auto;\r\n    font-family: 'Catamaran', sans-serif;\r\n    transition: color 2s, font-size 2s;\r\n}\r\n.pcsb__categoryOp:hover{\r\n    color: #a3d5d1;\r\n    text-shadow: .5px .5px #80c9c6;\r\n}\r\n.pcsb__separatorCl{\r\n    background-color: #333333;\r\n    margin: 20% auto;\r\n    width: 0%;\r\n    height: 1px;\r\n    transition: width 2s, color .5s;\r\n}\r\n.pcsb__separatorOp{\r\n    background-color: #a3d5d1;\r\n    margin: 20% auto;\r\n    width: 70%;\r\n    height: 1px;\r\n    transition: width 2s, color 2s;\r\n}\r\n.pictureCopyright{\r\n    position: absolute;\r\n    bottom: 1.5vh;\r\n    right: 4vw;\r\n    color: #333333;\r\n    font-size: 11px;\r\n    font-family: 'Catamaran', sans-serif;\r\n}\r\n.developerCopyrightCl{\r\n    position: absolute;\r\n    bottom: 4vh;\r\n    left: 1vw;\r\n    color:#333333;\r\n    font-size: 5px;\r\n    font-family: 'Catamaran', sans-serif;\r\n    text-align: center;\r\n    padding: 10%;\r\n    transition: color 2s, font 2s;\r\n}\r\n.developerCopyrightOp{\r\n    position: absolute;\r\n    bottom: 4vh;\r\n    left: 1vw;\r\n    color:white;\r\n    font-size: 13px;\r\n    font-family: 'Catamaran', sans-serif;\r\n    text-align: center;\r\n    padding: 10%;\r\n    transition: color .5s, font 2s;\r\n}\r\n.listTitle__container{\r\n    margin-top: 5% !important;\r\n    margin-left: 5% !important;\r\n}\r\n.listTitle{\r\n    font-size: 1.25rem;\r\n    font-family: 'Catamaran', sans-serif;\r\n    color: #333333;\r\n    text-transform: capitalize;\r\n    font-weight: 700;\r\n}\r\n.list__containerOp{\r\n    background-color:rgb(255,255,255);\r\n    background-color:rgba(255,255,255,0.5);\r\n    border-radius: .25rem;\r\n    min-height: 30vh;\r\n    max-height: 50vh;\r\n    overflow-y: scroll;\r\n    width: 90%;\r\n    position: absolute;\r\n    left: 2vw;\r\n    margin: 0 auto !important;\r\n    margin-top: 1% !important;\r\n    transition: width 2s, left 2s;\r\n}\r\n.list__containerCl{\r\n    background-color:rgb(255,255,255);\r\n    background-color:rgba(255,255,255,0.5);\r\n    border-radius: .25rem;\r\n    min-height: 30vh;\r\n    max-height: 50vh;\r\n    overflow-y: scroll;\r\n    width: 100%;\r\n    margin: 0 auto !important;\r\n    margin-top: 1% !important;\r\n    position: absolute;\r\n    left:-5vw;\r\n    transition: width 2s, left 2s;\r\n}\r\n.toDo__container{\r\n    width: 90%;\r\n    margin: 3% auto!important;\r\n    background-color:rgb(255,255,255);\r\n    opacity: 1 !important;\r\n    min-height: 5vh;\r\n    position: relative;\r\n    z-index: 10;\r\n    border-radius: .25rem;\r\n    border-left: .30vw solid #a3d5d1;\r\n    cursor: pointer;\r\n}\r\n.toDo__undone{\r\n    border-left: .30vw solid #a3d5d1;\r\n}\r\n.toDo__done{\r\n    border-left: .30vw solid rgb(179,157,219);\r\n}\r\n.toDo{\r\n    color: #333333;\r\n    font-family: 'Catamaran', sans-serif;\r\n    position: absolute;\r\n    padding-left: 5%;\r\n    margin: 0;\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n}\r\n.toDoDate{\r\n    position: absolute;\r\n    right: -4vw;\r\n    bottom: -0.5vh;\r\n    color: #333333;\r\n    font-family: 'Catamaran', sans-serif;\r\n}\r\n.deleteIcon{\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    color: #333333;\r\n}\r\n.delateIcon__done{\r\n    padding-top: 1vh;\r\n    padding-bottom: 1vh;\r\n    margin: 0;\r\n    cursor: pointer;\r\n    color: #333333;\r\n}\r\n.delateIcon__done:hover{\r\n    color: rgb(179,157,219);\r\n}\r\n.deleteIcon:hover{\r\n    color: #a3d5d1;\r\n}\r\n.addToDo__containerCl{\r\n    width: 98%;\r\n    margin: 2% auto!important;\r\n    background-color: rgba(179,157,219, 0.6);\r\n    opacity: 1 !important;\r\n    min-height: 7vh;\r\n    position: relative;\r\n    left: -3.5vw;\r\n    z-index: 10;\r\n    border-radius: .25rem;\r\n    transition: width 2s, left 2s;\r\n}\r\n.addToDo__containerOp{\r\n    width: 90%;\r\n    margin: 2% auto!important;\r\n    background-color: rgba(179,157,219, 0.6);\r\n    opacity: 1 !important;\r\n    min-height: 7vh;\r\n    position: relative;\r\n    left: 0;\r\n    z-index: 10;\r\n    border-radius: .25rem;\r\n    transition: width 2s, left 2s;\r\n}\r\n.AddToDo{\r\n    background: none;\r\n    opacity: 1;\r\n    font-family: 'Catamaran', sans-serif;\r\n    position: absolute;\r\n    padding: 2vh .5vh;\r\n    margin: 0;\r\n    -webkit-appearance: media-slider;\r\n    width: 100%;\r\n}\r\n.AddToDo:focus{\r\n    background: none;\r\n    opacity: 1;\r\n    font-family: 'Catamaran', sans-serif;\r\n    position: absolute;\r\n    padding: 2vh .5vh;\r\n    margin: 0;\r\n    -webkit-appearance: media-slider;\r\n    color: white;\r\n    outline: none;\r\n    width: 100%;\r\n}\r\n.addButton{\r\n    border: none;\r\n    background: none;\r\n}\r\n.addButton:focus{\r\n    border: none;\r\n    background: none;\r\n    outline: none;\r\n}\r\n.addIcon{\r\n    color:rgb(255,255,255);\r\n    color:rgba(255,255,255,1);\r\n    padding-top: 2vh;\r\n    padding-bottom: 2vh;\r\n    margin: 0;\r\n    cursor: pointer;\r\n}\r\n.error{\r\n    position: absolute;\r\n    font-size: small;\r\n    color: #dc3545;\r\n    top: 1vh;\r\n    left: 8.65vw;\r\n}\r\ninput:invalid {\r\n    color: white;\r\n  }\r\n/*SCROLL BAR*/\r\n/* width */\r\n::-webkit-scrollbar {\r\nwidth: 10px;\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\nbackground: #f1f1f1;\r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\nbackground: #888;\r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\nbackground: #555;\r\n}\r\n/*INPUT PLACEHOLDER*/\r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: white;\r\n    opacity: 1; /* Firefox */\r\n}\r\n::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: white;\r\n    opacity: 1; /* Firefox */\r\n}\r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: white;\r\n    opacity: 1; /* Firefox */\r\n}\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: white;\r\n    opacity: 1; /* Firefox */\r\n}\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color:white;\r\n}\r\n@media screen and (max-width: 1567px){\r\n    .pcsb__titleOp{\r\n        padding: 25%;\r\n    }\r\n    .pcsb__titleCl{\r\n        padding: 25%;\r\n    }\r\n    .pcsb__categories{\r\n        margin-top: 30%;\r\n    }\r\n}\r\n@media screen and (max-width: 1199px) and (min-width: 992px){\r\n    .pcsb__titleOp{\r\n        font-size: 1.2rem;\r\n    }\r\n    .pcsb__categoryOp{\r\n        font-size: 1rem;\r\n    }\r\n    .amaticFont{\r\n        font-size: 3rem;\r\n    }\r\n}\r\n@media screen and (max-width: 991px) and (min-width: 768px){\r\n    .pcsb__titleOp{\r\n        font-size: 1rem;\r\n    }\r\n    .pcsb__categoryOp{\r\n        font-size: .8rem;\r\n    }\r\n    .amaticFont{\r\n        font-size: 2.5rem;\r\n    }\r\n    .pcsb__categories{\r\n        margin-top: 45%;\r\n        padding: 10%;\r\n    }\r\n    .pcsb__titleContainer{\r\n        top: 10vh;\r\n    }\r\n}\r\n@media screen and (max-width: 767px) and (min-width: 576px){\r\n    .pcsb__titleOp{\r\n        font-size: 1rem;\r\n        padding: 0 25%;\r\n    }\r\n    .pcsb__titleCl{\r\n        padding: 0 25%;\r\n    }\r\n    .pcsb__categoryOp{\r\n        font-size: .8rem;\r\n    }\r\n    .amaticFont{\r\n        font-size: 2.5rem;\r\n    }\r\n    .pcsb__categories{\r\n        margin-top: 20%;\r\n        padding: 10%;\r\n    }\r\n    .pcsb__titleContainer{\r\n        top: 10vh;\r\n    }\r\n}\r\n@media screen and (max-width: 575px){\r\n    .pc__view{\r\n        width: 100%;\r\n        height: 100vh;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .pc__sidebar{\r\n        height: 100vh\r\n    }\r\n    .pc__mainbg{\r\n        height: 100vh;\r\n    }\r\n    .pcm__container{\r\n        height: 100vh;\r\n    }\r\n    .pcsb__titleOp{\r\n        font-size: 1.25rem;\r\n        padding: 20%;\r\n    }\r\n    .pcsb__titleCl{\r\n        padding: 0 25%;\r\n    }\r\n    .pcsb__categoryOp{\r\n        font-size: .9rem;\r\n        margin: 15% auto;\r\n    }\r\n    .pcsb__categoryCl{\r\n        font-size: .9rem;\r\n        margin: 15% auto;\r\n    }\r\n    .amaticFont{\r\n        font-size: 2.15rem;\r\n        margin-left: 1.50% !important;\r\n    }\r\n    .pcsb__categories{\r\n        margin-top: 60%;\r\n        padding: 10%;\r\n    }\r\n    .pcsb__titleContainer{\r\n        top: 10vh;\r\n    }\r\n    .pcsb__container{\r\n        height: 100vh;\r\n        overflow: hidden;\r\n    }\r\n    .menu__icon{\r\n        left: 7vw;\r\n        z-index: 25;\r\n    }\r\n    .pc__mainbg{\r\n        background-image: url('main-background2.jpg');\r\n    }\r\n    .list__containerCl{\r\n        width: 120%;\r\n        left: -15vw;\r\n    }\r\n    .addToDo__containerCl{\r\n        width: 128%;\r\n        left: -15vw;\r\n    }\r\n    .toDo__undone{\r\n        border-left: 1.35vw solid #a3d5d1;\r\n    }\r\n    .toDo__done{\r\n        border-left: 1.35vw solid rgb(179,157,219);\r\n    }\r\n}\r\n/*iPad*/\r\n@media screen and (max-width: 1024px) and (min-width: 768px) and (max-height: 1024px) and (min-height: 768px){\r\n    .pc__view{\r\n        width: 100%;\r\n        height: 100vh;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .pc__sidebar{\r\n        height: 100vh\r\n    }\r\n    .pc__mainbg{\r\n        height: 100vh;\r\n    }\r\n    .pcm__container{\r\n        height: 100vh;\r\n    }\r\n    .pcsb__titleOp{\r\n        font-size: 1.25rem;\r\n        padding: 15%;\r\n    }\r\n    .pcsb__titleCl{\r\n        padding: 0 25%;\r\n    }\r\n    .pcsb__categoryOp{\r\n        font-size: .9rem;\r\n        margin: 15% auto;\r\n    }\r\n    .pcsb__categoryCl{\r\n        font-size: .9rem;\r\n        margin: 15% auto;\r\n    }\r\n    .amaticFont{\r\n        font-size: 3rem;\r\n    }\r\n    .pcsb__categories{\r\n        margin-top: 95%;\r\n        padding: 10%;\r\n    }\r\n    .pcsb__titleContainer{\r\n        top: 10vh;\r\n    }\r\n    .pcsb__container{\r\n        height: 100vh;\r\n        overflow: hidden;\r\n    }\r\n    .menu__icon{\r\n        left: 3.5vw;\r\n    }\r\n    .pc__mainbg{\r\n        background-image: url('main-background2.jpg');\r\n    }\r\n}\r\n/*iPad Pro*/\r\n@media screen and (max-width: 1366px) and (min-width: 1024px) and (max-height: 1366px) and (min-height: 1024px){\r\n    .pc__view{\r\n        width: 100%;\r\n        height: 100vh;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    .pc__sidebar{\r\n        height: 100vh\r\n    }\r\n    .pc__mainbg{\r\n        height: 100vh;\r\n    }\r\n    .pcm__container{\r\n        height: 100vh;\r\n    }\r\n    .pcsb__titleOp{\r\n        font-size: 1.25rem;\r\n        padding: 20%;\r\n    }\r\n    .pcsb__titleCl{\r\n        padding: 0 25%;\r\n    }\r\n    .pcsb__categoryOp{\r\n        font-size: .9rem;\r\n        margin: 15% auto;\r\n    }\r\n    .pcsb__categoryCl{\r\n        font-size: .9rem;\r\n        margin: 15% auto;\r\n    }\r\n    .amaticFont{\r\n        font-size: 3.15rem;\r\n    }\r\n    .pcsb__categories{\r\n        margin-top: 95%;\r\n        padding: 10%;\r\n    }\r\n    .pcsb__titleContainer{\r\n        top: 10vh;\r\n    }\r\n    .pcsb__container{\r\n        height: 100vh;\r\n        overflow: hidden;\r\n    }\r\n    .menu__icon{\r\n        left: 3.5vw;\r\n    }\r\n    .pc__mainbg{\r\n        background-image: url('main-background2.jpg');\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLGdDQUFnQztJ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O0lBQ2hCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLDZDQUEyRDtJQUMvRDtBQUNKO0FBQ0EsV0FBVztBQUNYO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLFNBQVM7UUFDVCxVQUFVO0lBQ2Q7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGVBQWU7UUFDZixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksNkNBQTJEO0lBQy9EO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90YXNrcy90YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3dCb3JkZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4uYW1hdGljRm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQW1hdGljIFNDJywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMy4yNXJlbTtcclxufVxyXG4uY2F0YW1hcmFuRm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcclxufVxyXG4ucGNfX2Jne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZDVkMTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLnBjX192aWV3e1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMi4yNSUgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcbi5wY3NiX19iZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDYsIDI0NSwgMjUwKTtcclxufVxyXG4ucGNfX3NpZGViYXJ7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDByZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDIwO1xyXG59XHJcbi5wY19fc2lkZWJhcldpZHRoQ2x7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnM7XHJcbn1cclxuLnBjX19zaWRlYmFyV2lkdGhPcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnM7XHJcbn1cclxuLm1lbnVfX2ljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDZ2aDtcclxuICAgIGxlZnQ6IDJ2dztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGhlaWdodDogNXZoO1xyXG4gICAgd2lkdGg6IDV2dztcclxufVxyXG4ubGluZTFDbG9zZWQsIC5saW5lMkNsb3NlZCwgLmxpbmUxT3BlbmVkLCAubGluZTJPcGVuZWR7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZDVkMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4ubGluZTFDbG9zZWR7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIDJzLCBsZWZ0LCAycztcclxufVxyXG4ubGluZTFPcGVuZWR7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMnMsIGxlZnQsIDJzO1xyXG59XHJcbi5saW5lMkNsb3NlZHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMnMsIGxlZnQsIDJzO1xyXG59XHJcbi5saW5lMk9wZW5lZHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIDJzLCBsZWZ0LCAycztcclxufVxyXG4ucGNfX21haW5iZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvbWFpbi1iYWNrZ3JvdW5kMS5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbVxyXG59XHJcbi5wY3NiX19jb250YWluZXIsIC5wY21fX2NvbnRhaW5lcntcclxuICAgIGhlaWdodDogODkuOHZoO1xyXG59XHJcbi5wY3NiX19jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLnBjc2JfX2NhdGVnb3JpZXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwJTtcclxufVxyXG4ucGNzYl9fdGl0bGVDb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDh2aDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5wY3NiX190aXRsZUNse1xyXG4gICAgY29sb3I6IzMzMzMzMztcclxuICAgIGZvbnQtc2l6ZTogLjNyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYXRhbWFyYW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjVzICxmb250LXNpemUgMnM7XHJcbn1cclxuLnBjc2JfX3RpdGxlT3B7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYXRhbWFyYW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMnMsIGZvbnQtc2l6ZSAycztcclxufVxyXG4ucGNzYl9fY2F0ZWdvcnlDbHtcclxuICAgIGNvbG9yOiMzMzMzMzM7XHJcbiAgICBmb250LXNpemU6IC4zcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbjogMTAlIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ0NhdGFtYXJhbicsIHNhbnMtc2VyaWY7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuNXMgLGZvbnQtc2l6ZSAycztcclxufVxyXG4ucGNzYl9fY2F0ZWdvcnlPcHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYXRhbWFyYW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMnMsIGZvbnQtc2l6ZSAycztcclxufVxyXG4ucGNzYl9fY2F0ZWdvcnlPcDpob3ZlcntcclxuICAgIGNvbG9yOiAjYTNkNWQxO1xyXG4gICAgdGV4dC1zaGFkb3c6IC41cHggLjVweCAjODBjOWM2O1xyXG59XHJcbi5wY3NiX19zZXBhcmF0b3JDbHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAycywgY29sb3IgLjVzO1xyXG59XHJcbi5wY3NiX19zZXBhcmF0b3JPcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhM2Q1ZDE7XHJcbiAgICBtYXJnaW46IDIwJSBhdXRvO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnMsIGNvbG9yIDJzO1xyXG59XHJcbi5waWN0dXJlQ29weXJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxLjV2aDtcclxuICAgIHJpZ2h0OiA0dnc7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcclxufVxyXG4uZGV2ZWxvcGVyQ29weXJpZ2h0Q2x7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDR2aDtcclxuICAgIGxlZnQ6IDF2dztcclxuICAgIGNvbG9yOiMzMzMzMzM7XHJcbiAgICBmb250LXNpemU6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDJzLCBmb250IDJzO1xyXG59XHJcbi5kZXZlbG9wZXJDb3B5cmlnaHRPcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNHZoO1xyXG4gICAgbGVmdDogMXZ3O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0NhdGFtYXJhbicsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuNXMsIGZvbnQgMnM7XHJcbn1cclxuLmxpc3RUaXRsZV9fY29udGFpbmVye1xyXG4gICAgbWFyZ2luLXRvcDogNSUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JSAhaW1wb3J0YW50O1xyXG59XHJcbi5saXN0VGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LWZhbWlseTogJ0NhdGFtYXJhbicsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ubGlzdF9fY29udGFpbmVyT3B7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsMjU1LDI1NSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDMwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDJ2dztcclxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxJSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnMsIGxlZnQgMnM7XHJcbn1cclxuLmxpc3RfX2NvbnRhaW5lckNse1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gICAgbWF4LWhlaWdodDogNTB2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDElICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0Oi01dnc7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAycywgbGVmdCAycztcclxufVxyXG4udG9Eb19fY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMyUgYXV0byFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsMjU1LDI1NSk7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA1dmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAuMzB2dyBzb2xpZCAjYTNkNWQxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50b0RvX191bmRvbmV7XHJcbiAgICBib3JkZXItbGVmdDogLjMwdncgc29saWQgI2EzZDVkMTtcclxufVxyXG4udG9Eb19fZG9uZXtcclxuICAgIGJvcmRlci1sZWZ0OiAuMzB2dyBzb2xpZCByZ2IoMTc5LDE1NywyMTkpO1xyXG59XHJcbi50b0Rve1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBmb250LWZhbWlseTogJ0NhdGFtYXJhbicsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxdmg7XHJcbn1cclxuLnRvRG9EYXRle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC00dnc7XHJcbiAgICBib3R0b206IC0wLjV2aDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYXRhbWFyYW4nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5kZWxldGVJY29ue1xyXG4gICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxdmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4uZGVsYXRlSWNvbl9fZG9uZXtcclxuICAgIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLmRlbGF0ZUljb25fX2RvbmU6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDE3OSwxNTcsMjE5KTtcclxufVxyXG4uZGVsZXRlSWNvbjpob3ZlcntcclxuICAgIGNvbG9yOiAjYTNkNWQxO1xyXG59XHJcbi5hZGRUb0RvX19jb250YWluZXJDbHtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW46IDIlIGF1dG8haW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzksMTU3LDIxOSwgMC42KTtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDd2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0zLjV2dztcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnMsIGxlZnQgMnM7XHJcbn1cclxuLmFkZFRvRG9fX2NvbnRhaW5lck9we1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMiUgYXV0byFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3OSwxNTcsMjE5LCAwLjYpO1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogN3ZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnMsIGxlZnQgMnM7XHJcbn1cclxuLkFkZFRvRG97XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2F0YW1hcmFuJywgc2Fucy1zZXJpZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDJ2aCAuNXZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBtZWRpYS1zbGlkZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uQWRkVG9Ebzpmb2N1c3tcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYXRhbWFyYW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcGFkZGluZzogMnZoIC41dmg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG1lZGlhLXNsaWRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYWRkQnV0dG9ue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4uYWRkQnV0dG9uOmZvY3Vze1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmFkZEljb257XHJcbiAgICBjb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xyXG4gICAgY29sb3I6cmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgIHBhZGRpbmctdG9wOiAydmg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnZoO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5lcnJvcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIHRvcDogMXZoO1xyXG4gICAgbGVmdDogOC42NXZ3O1xyXG59XHJcbmlucHV0OmludmFsaWQge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLypTQ1JPTEwgQkFSKi9cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbndpZHRoOiAxMHB4O1xyXG59XHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG5iYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuYmFja2dyb3VuZDogIzg4ODtcclxufVxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbmJhY2tncm91bmQ6ICM1NTU7XHJcbn1cclxuLypJTlBVVCBQTEFDRUhPTERFUiovXHJcbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxufVxyXG4gIFxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NjdweCl7XHJcbiAgICAucGNzYl9fdGl0bGVPcHtcclxuICAgICAgICBwYWRkaW5nOiAyNSU7XHJcbiAgICB9XHJcbiAgICAucGNzYl9fdGl0bGVDbHtcclxuICAgICAgICBwYWRkaW5nOiAyNSU7XHJcbiAgICB9XHJcbiAgICAucGNzYl9fY2F0ZWdvcmllc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSBhbmQgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gICAgLnBjc2JfX3RpdGxlT3B7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgICAucGNzYl9fY2F0ZWdvcnlPcHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuYW1hdGljRm9udHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAucGNzYl9fdGl0bGVPcHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAucGNzYl9fY2F0ZWdvcnlPcHtcclxuICAgICAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgfVxyXG4gICAgLmFtYXRpY0ZvbnR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICB9XHJcbiAgICAucGNzYl9fY2F0ZWdvcmllc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA0NSU7XHJcbiAgICAgICAgcGFkZGluZzogMTAlO1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX3RpdGxlQ29udGFpbmVye1xyXG4gICAgICAgIHRvcDogMTB2aDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgYW5kIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAgIC5wY3NiX190aXRsZU9we1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDI1JTtcclxuICAgIH1cclxuICAgIC5wY3NiX190aXRsZUNse1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjUlO1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX2NhdGVnb3J5T3B7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIH1cclxuICAgIC5hbWF0aWNGb250e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX2NhdGVnb3JpZXN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIH1cclxuICAgIC5wY3NiX190aXRsZUNvbnRhaW5lcntcclxuICAgICAgICB0b3A6IDEwdmg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgLnBjX192aWV3e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAucGNfX3NpZGViYXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aFxyXG4gICAgfVxyXG4gICAgLnBjX19tYWluYmd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICAgIC5wY21fX2NvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX3RpdGxlT3B7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwJTtcclxuICAgIH1cclxuICAgIC5wY3NiX190aXRsZUNse1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjUlO1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX2NhdGVnb3J5T3B7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgICAgICBtYXJnaW46IDE1JSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX2NhdGVnb3J5Q2x7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuICAgICAgICBtYXJnaW46IDE1JSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmFtYXRpY0ZvbnR7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjE1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjUwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX2NhdGVnb3JpZXN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIH1cclxuICAgIC5wY3NiX190aXRsZUNvbnRhaW5lcntcclxuICAgICAgICB0b3A6IDEwdmg7XHJcbiAgICB9XHJcbiAgICAucGNzYl9fY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5tZW51X19pY29ue1xyXG4gICAgICAgIGxlZnQ6IDd2dztcclxuICAgICAgICB6LWluZGV4OiAyNTtcclxuICAgIH1cclxuICAgIC5wY19fbWFpbmJne1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvbWFpbi1iYWNrZ3JvdW5kMi5qcGcpO1xyXG4gICAgfVxyXG4gICAgLmxpc3RfX2NvbnRhaW5lckNse1xyXG4gICAgICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgICAgIGxlZnQ6IC0xNXZ3O1xyXG4gICAgfVxyXG4gICAgLmFkZFRvRG9fX2NvbnRhaW5lckNse1xyXG4gICAgICAgIHdpZHRoOiAxMjglO1xyXG4gICAgICAgIGxlZnQ6IC0xNXZ3O1xyXG4gICAgfVxyXG4gICAgLnRvRG9fX3VuZG9uZXtcclxuICAgICAgICBib3JkZXItbGVmdDogMS4zNXZ3IHNvbGlkICNhM2Q1ZDE7XHJcbiAgICB9XHJcbiAgICAudG9Eb19fZG9uZXtcclxuICAgICAgICBib3JkZXItbGVmdDogMS4zNXZ3IHNvbGlkIHJnYigxNzksMTU3LDIxOSk7XHJcbiAgICB9XHJcbn1cclxuLyppUGFkKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDc2OHB4KXtcclxuICAgIC5wY19fdmlld3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLnBjX19zaWRlYmFye1xyXG4gICAgICAgIGhlaWdodDogMTAwdmhcclxuICAgIH1cclxuICAgIC5wY19fbWFpbmJne1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICAucGNtX19jb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIH1cclxuICAgIC5wY3NiX190aXRsZU9we1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxNSU7XHJcbiAgICB9XHJcbiAgICAucGNzYl9fdGl0bGVDbHtcclxuICAgICAgICBwYWRkaW5nOiAwIDI1JTtcclxuICAgIH1cclxuICAgIC5wY3NiX19jYXRlZ29yeU9we1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bztcclxuICAgIH1cclxuICAgIC5wY3NiX19jYXRlZ29yeUNse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bztcclxuICAgIH1cclxuICAgIC5hbWF0aWNGb250e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuICAgIC5wY3NiX19jYXRlZ29yaWVze1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDk1JTtcclxuICAgICAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICB9XHJcbiAgICAucGNzYl9fdGl0bGVDb250YWluZXJ7XHJcbiAgICAgICAgdG9wOiAxMHZoO1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX2NvbnRhaW5lcntcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAubWVudV9faWNvbntcclxuICAgICAgICBsZWZ0OiAzLjV2dztcclxuICAgIH1cclxuICAgIC5wY19fbWFpbmJne1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvbWFpbi1iYWNrZ3JvdW5kMi5qcGcpO1xyXG4gICAgfVxyXG59XHJcbi8qaVBhZCBQcm8qL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LWhlaWdodDogMTM2NnB4KSBhbmQgKG1pbi1oZWlnaHQ6IDEwMjRweCl7XHJcbiAgICAucGNfX3ZpZXd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5wY19fc2lkZWJhcntcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoXHJcbiAgICB9XHJcbiAgICAucGNfX21haW5iZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG4gICAgLnBjbV9fY29udGFpbmVye1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB9XHJcbiAgICAucGNzYl9fdGl0bGVPcHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMjAlO1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX3RpdGxlQ2x7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNSU7XHJcbiAgICB9XHJcbiAgICAucGNzYl9fY2F0ZWdvcnlPcHtcclxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87XHJcbiAgICB9XHJcbiAgICAucGNzYl9fY2F0ZWdvcnlDbHtcclxuICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87XHJcbiAgICB9XHJcbiAgICAuYW1hdGljRm9udHtcclxuICAgICAgICBmb250LXNpemU6IDMuMTVyZW07XHJcbiAgICB9XHJcbiAgICAucGNzYl9fY2F0ZWdvcmllc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiA5NSU7XHJcbiAgICAgICAgcGFkZGluZzogMTAlO1xyXG4gICAgfVxyXG4gICAgLnBjc2JfX3RpdGxlQ29udGFpbmVye1xyXG4gICAgICAgIHRvcDogMTB2aDtcclxuICAgIH1cclxuICAgIC5wY3NiX19jb250YWluZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLm1lbnVfX2ljb257XHJcbiAgICAgICAgbGVmdDogMy41dnc7XHJcbiAgICB9XHJcbiAgICAucGNfX21haW5iZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL21haW4tYmFja2dyb3VuZDIuanBnKTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/tasks/tasks.component.ts":
  /*!************************************************!*\
    !*** ./src/app/views/tasks/tasks.component.ts ***!
    \************************************************/

  /*! exports provided: TasksComponent */

  /***/
  function srcAppViewsTasksTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
      return TasksComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TasksComponent = /*#__PURE__*/function () {
      function TasksComponent() {
        _classCallCheck(this, TasksComponent);

        this.sideBarOpened = false;
        this.showCategories = false;
        this.showItems = false;
        this.listTitle = "today";
        this.todayList = [];
        this.tomorrowList = [];
        this.weekList = [];
        this.shoppingList = [];
        this.workList = [];
      }

      _createClass(TasksComponent, [{
        key: "deleteTask",
        value: function deleteTask(index) {
          //Today
          if (this.listTitle == "today") {
            this.todayList.splice(index, 1);

            if (typeof Storage !== 'undefined') {
              localStorage.setItem("today", JSON.stringify(this.todayList));
              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
            } //Tomorrow

          } else if (this.listTitle == "tomorrow") {
            this.tomorrowList.splice(index, 1);

            if (typeof Storage !== 'undefined') {
              localStorage.setItem("tomorrow", JSON.stringify(this.tomorrowList));
              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
            } //Week

          } else if (this.listTitle == "this week") {
            this.weekList.splice(index, 1);

            if (typeof Storage !== 'undefined') {
              localStorage.setItem("this week", JSON.stringify(this.weekList));
              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
            } //Shopping

          } else if (this.listTitle == "shopping list") {
            this.shoppingList.splice(index, 1);

            if (typeof Storage !== 'undefined') {
              localStorage.setItem("shopping list", JSON.stringify(this.shoppingList));
              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
            } //Work

          } else if (this.listTitle == "work meetings") {
            this.workList.splice(index, 1);

            if (typeof Storage !== 'undefined') {
              localStorage.setItem("work meetings", JSON.stringify(this.workList));
              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
            }
          }
        }
      }, {
        key: "taskDone",
        value: function taskDone(index) {
          // Today
          if (this.listTitle == "today") {
            if (this.todayList[index]['done'] == false) {
              this.todayList[index]['done'] = true;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("today", JSON.stringify(this.todayList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            } else {
              this.todayList[index]['done'] = false;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("today", JSON.stringify(this.todayList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            } //Tomorrow

          } else if (this.listTitle == "tomorrow") {
            if (this.tomorrowList[index]['done'] == false) {
              this.tomorrowList[index]['done'] = true;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("tomorrow", JSON.stringify(this.tomorrowList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            } else {
              this.tomorrowList[index]['done'] = false;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("tomorrow", JSON.stringify(this.tomorrowList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            } //This week

          } else if (this.listTitle == "this week") {
            if (this.weekList[index]['done'] == false) {
              this.weekList[index]['done'] = true;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("this week", JSON.stringify(this.weekList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            } else {
              this.weekList[index]['done'] = false;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("this week", JSON.stringify(this.weekList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            } //Shopping list

          } else if (this.listTitle == "shopping list") {
            if (this.shoppingList[index]['done'] == false) {
              this.shoppingList[index]['done'] = true;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("shopping list", JSON.stringify(this.shoppingList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            } else {
              this.shoppingList[index]['done'] = false;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("shopping list", JSON.stringify(this.shoppingList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            } //Work meetings

          } else if (this.listTitle == "work meetings") {
            if (this.workList[index]['done'] == false) {
              this.workList[index]['done'] = true;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("work meetings", JSON.stringify(this.workList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            } else {
              this.workList[index]['done'] = false;

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("work meetings", JSON.stringify(this.workList));
                this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              }
            }
          }
        }
      }, {
        key: "addTask",
        value: function addTask() {
          var _this = this;

          if (this.task != null || this.task != undefined) {
            this.advice = undefined;
            this.date = new Date();

            if (this.listTitle == "today") {
              this.todayList.push({
                name: this.task,
                date: this.date.toDateString(),
                done: false
              });
              console.log(this.todayList, 'today');

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("today", JSON.stringify(this.todayList));
              }

              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
              console.log(this.selectedList);
            } else if (this.listTitle == "tomorrow") {
              this.tomorrowList.push({
                name: this.task,
                date: this.date.toDateString(),
                done: false
              });
              console.log(this.tomorrowList, 'tomorrow');

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("tomorrow", JSON.stringify(this.tomorrowList));
              }

              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
            } else if (this.listTitle == "this week") {
              this.weekList.push({
                name: this.task,
                date: this.date.toDateString(),
                done: false
              });
              console.log(this.weekList, 'week');

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("this week", JSON.stringify(this.weekList));
              }

              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
            } else if (this.listTitle == "shopping list") {
              this.shoppingList.push({
                name: this.task,
                date: this.date.toDateString(),
                done: false
              });
              console.log(this.shoppingList, 'shop');

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("shopping list", JSON.stringify(this.shoppingList));
              }

              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
            } else if (this.listTitle == "work meetings") {
              this.workList.push({
                name: this.task,
                date: this.date.toDateString(),
                done: false
              });
              console.log(this.workList, 'work');

              if (typeof Storage !== 'undefined') {
                localStorage.setItem("work meetings", JSON.stringify(this.workList));
              }

              this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
            } else {
              console.log(this.task, "lol");
            }
          } else {
            this.advice = "Type your task so we can add it!";
            setTimeout(function () {
              _this.advice = undefined;
            }, 2500);
          }
        }
      }, {
        key: "changeList",
        value: function changeList(selectedList) {
          var _this2 = this;

          this.listTitle = selectedList;
          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
          console.log(this.selectedList);
          this.sideBarOpened = false;
          this.showCategories = false;
          setTimeout(function () {
            _this2.showItems = false;
          }, 1750);
        }
      }, {
        key: "openSideBar",
        value: function openSideBar() {
          var _this3 = this;

          if (this.sideBarOpened == false) {
            this.sideBarOpened = true;
            this.showItems = true;
            setTimeout(function () {
              _this3.showCategories = true;
            }, 1000);
          } else if (this.sideBarOpened == true) {
            this.sideBarOpened = false;
            this.showCategories = false;
            setTimeout(function () {
              _this3.showItems = false;
            }, 1750);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.todayList = JSON.parse(localStorage.getItem('today'));

          if (this.todayList == undefined || this.todayList == null) {
            this.todayList = [];
          }

          this.tomorrowList = JSON.parse(localStorage.getItem('tomorrow'));

          if (this.tomorrowList == undefined || this.todayList == null) {
            this.tomorrowList = [];
          }

          this.weekList = JSON.parse(localStorage.getItem('this week'));

          if (this.weekList == undefined || this.todayList == null) {
            this.weekList = [];
          }

          this.shoppingList = JSON.parse(localStorage.getItem('shopping list'));

          if (this.shoppingList == undefined || this.todayList == null) {
            this.shoppingList = [];
          }

          this.workList = JSON.parse(localStorage.getItem('work meetings'));

          if (this.workList == undefined || this.todayList == null) {
            this.workList = [];
          }

          this.selectedList = JSON.parse(localStorage.getItem(this.listTitle));
          console.log(this.selectedList);
        }
      }]);

      return TasksComponent;
    }();

    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tasks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tasks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/tasks/tasks.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tasks.component.css */
      "./src/app/views/tasks/tasks.component.css"))["default"]]
    })], TasksComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\agnes\Desktop\projectes\to-do-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map