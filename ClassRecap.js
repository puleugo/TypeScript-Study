var dict = {
    potato: 'food',
};
var Dict = /** @class */ (function () {
    function Dict() {
        this.words = {};
    }
    Dict.prototype.add = function (word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    };
    Dict.prototype.def = function (term) {
        if (this.words[term] !== undefined) {
            console.log(this.words[term]);
        }
        else {
            console.log('None');
        }
    };
    Dict.prototype.del = function (term) {
        if (this.words[term] !== undefined) {
            delete this.words[term];
        }
    };
    Dict.prototype.edit = function (term, newDef) {
        this.words[term] = newDef;
    };
    return Dict;
}());
var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var kimchi = new Word('kimchi', '한국의 음식');
var testDict = new Dict();
testDict.add(kimchi);
testDict.def('kimchi');
testDict.edit('kimchi', 'Korean Food');
testDict.def('kimchi');
testDict.del('kimchi');
testDict.def('kimchi');
