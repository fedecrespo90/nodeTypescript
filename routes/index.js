"use strict";
var Route;
(function (Route) {
    class Index {
        index(req, res, next) {
            res.render("index");
        }
    }
    Route.Index = Index;
    class Human {
        human(req, res, next) {
            res.render("human");
        }
    }
    Route.Human = Human;
})(Route || (Route = {}));
module.exports = Route;
