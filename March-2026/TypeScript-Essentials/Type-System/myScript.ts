export { }

type UserID = string;

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

    /*  function insertUser(data) {
   if (data.id) {
       throw new Error(`User with ID ${id} does not exists`)
   }
  
   await db.set(data.id, data)
   return data.id
   } */
    // Set a session parameter
    // await db.set('current_user', { name: 'Loid Forger', id: 1 });  

    public updateUser(id: UserID, updateData: Omit<User, 'id'>): boolean {
        if (!this._db.has(id)) throw new Error(`User with id ${id} does not exists`)
        this._db.set(id, { ...updateData, id })
        return true
    }

    public getUserById(id: UserID): User {
        if (!this._db.has(id)) throw new Error(`User does not exists`)
        return this._db.get(id)! // id can be there maybe not
    }
}

const myDb = new InMemoryDB()
myDb.insertUser({
    id: '1',
    fname: 'Loid',
    email: 'forger@email.com',
    contact: { mobile: '48301-79238' },
    address: {
        country: 'OS',
        pin: 147001,
        street: 128
    }
})
myDb.updateUser('1', {
    fname: 'Yor',
    email: 'yoryuri@email.com',
    contact: { mobile: '99999' },
    address: {
        country: 'OS',
        pin: 147001,
        street: 128
    }
})