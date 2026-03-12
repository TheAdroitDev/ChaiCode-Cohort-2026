// Ek In Memory DB
// save('user-1', { fname, lname, })
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var InMemoryDB = /** @class */ (function () {
    function InMemoryDB() {
        this._db = new Map()
    }
    InMemoryDB.prototype.insertUser = function (data) {
        if (this._db.has(data.id)) {
            throw new Error("User with ID ".concat(data.id, " already exists"));
        }
        this._db.set(data.id, data);
        return data.id;
    };
    InMemoryDB.prototype.updateUser = function (id, updateData) {
        if (!this._db.has(id))
            throw new Error("User with ID ".concat(id, " does not exists"));
        this._db.set(id, __assign(__assign({}, updateData), { id: id }));
        return true;
    };
    InMemoryDB.prototype.getUserById = function (id) {
        if (!this._db.has(id))
            throw new Error("User with ID ".concat(id, " does not exists"));
        return this._db.get(id);
    };
    return InMemoryDB;
}());
var myDb = new InMemoryDB();
myDb.insertUser({
    id: '1',
    fname: 'Piyush',
    email: 'piyush@email.com',
    contact: { mobile: '99999' },
    address: {
        country: 'In',
        pin: 147001,
        street: 1
    }
});
myDb.updateUser('1', {
    fname: 'Piyush',
    email: 'piyush@email.com',
    contact: { mobile: '99999' },
    address: {
        country: 'In',
        pin: 147001,
        street: 1
    }
});
