var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    return Player;
}());
var User = /** @class */ (function () {
    function User(firstName, lastName, nickname) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickname;
    }
    User.prototype.getFullName = function () {
        // 함수에도 private 사용가능
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return User;
}());
var Player2 = /** @class */ (function (_super) {
    __extends(Player2, _super);
    function Player2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 상속만 가능함, 새로운 인스턴스 생성 불가
    Player2.prototype.getNickName = function () {
        console.log(this.nickname);
    };
    return Player2;
}(User));
var nico1 = new Player("nico", "las", "니꼬");
var nico2 = new Player2("nico", "las", "니꼬");
nico1.nickname;
nico2.getFullName();
// nico2.nickname // protected는 외부에서 접근 불가, 자식 클래스에서는 사용 가능
