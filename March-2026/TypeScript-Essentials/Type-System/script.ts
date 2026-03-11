// Ek In Memory DB
// save('user-1', { fname, lname, })

// HashMap (Key, Value)
//        String String


// 1 { fname, lname, email, contact: { mobile }, address: { street, pin, country } }

type UserID = string



interface User {
    id: UserID
    fname: string
    lname?: string
    email: string
    contact: {
        mobile: string
    }
    address: {
        street: number
        pin: number
        country: string
    }
}


class InMemoryDB {
    private _db: Map<UserID, User>

    constructor() {
        this._db = new Map()
    }

    public insertUser(data: User): UserID {
        if (this._db.has(data.id)) {
            throw new Error(`User with ID ${data.id} already exists`)
        }
        this._db.set(data.id, data)
        return data.id
    }

    public updateUser(id: UserID, updateData: Omit<User, 'id'>): boolean {
        if (!this._db.has(id)) throw new Error(`User with ID ${id} does not exists`)
        this._db.set(id, { ...updateData, id })
        return true
    }

    public getUserById(id: UserID): User {
        if (!this._db.has(id)) throw new Error(`User with ID ${id} does not exists`)
        return this._db.get(id)!
    }
}


const myDb = new InMemoryDB()
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
})
myDb.updateUser('1', {
    fname: 'Piyush',
    email: 'piyush@email.com',
    contact: { mobile: '99999' },
    address: {
        country: 'In',
        pin: 147001,
        street: 1
    }
})