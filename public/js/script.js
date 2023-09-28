"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./dark_mode.js");
var searchInput = document.querySelector("#search-input");
var cardsSection = document.querySelector("#cards");
function searchCards() {
    var inputValue = searchInput.value.toLowerCase();
    var listOfCards = document.querySelectorAll(".card");
    for (var _i = 0, listOfCards_1 = listOfCards; _i < listOfCards_1.length; _i++) {
        var card = listOfCards_1[_i];
        var cardContent = card.textContent.toLowerCase();
        card.style.display = cardContent.includes(inputValue) ? "" : "none";
    }
}
function insertCardsIntoHtml(data) {
    var cards = "";
    data.forEach(function (card) {
        cards += "\n        <section class=\"card\">\n            <h3 class=\"card__title\">".concat(card.title, "</h3>\n            <p class=\"card__description\">").concat(card.description, "</p>\n        ");
        if (card.content && card.content.code) {
            cards += "\n            <div class=\"card__content\">\n                <code class=\"card__code\">".concat(card.content.code, "</code>\n            </div>\n            ");
        }
        cards += "</section>";
    });
    cardsSection.innerHTML = cards;
}
function sortCardsByTitle(data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, data.cards.sort(function (a, b) { return a.title.localeCompare(b.title); })];
        });
    });
}
function getCardsFromJson() {
    return __awaiter(this, void 0, void 0, function () {
        var res, data, sortedCards, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, fetch("./assets/data/cards_pt-br.json")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    return [4 /*yield*/, sortCardsByTitle(data)];
                case 3:
                    sortedCards = _a.sent();
                    insertCardsIntoHtml(sortedCards);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("An error occurred while fetching card data.", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
searchInput.addEventListener("input", searchCards);
getCardsFromJson();
