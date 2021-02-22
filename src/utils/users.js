const users = []

//add user
const addUser = ({id, username, room}) => {
    //clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    
    //validate the data
    if (!username || !room) {
        return {
            error: "username and room are required"
        }
    }

    //check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    //validate username
    if (existingUser) return {error: 'Username in use'}

    //store user
    const user = {
        id, username, room
    }
    users.push(user)
    return {user}
}

//remove user
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index != -1)
        return users.splice(index, 1)[0]
}

//get user
const getUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index === -1) return undefined
    return users[index]
}

//list users
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser, 
    removeUser,
    getUser,
    getUsersInRoom
}
