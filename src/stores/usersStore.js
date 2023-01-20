import { defineStore } from 'pinia'
import { ref } from 'vue'

let usersStore = defineStore('usersStore', () => {
  let users = ref([
    { id: 1, email: 'user1@mail.ru', password: '12345678FFff$', fullName: 'Paul' },
    { id: 2, email: 'user2@mail.ru', password: '12345678FFff$', fullName: 'Mike' },
    { id: 3, email: 'user3@mail.ru', password: '12345678FFff$', fullName: 'Alex' },
  ])

  let isAuthorized = ref(false)
  let authorizedUser = ref(null)

  function addUser(email, password, full_name, id) {
    if (email && password && full_name && id) {
      let user = {
        id: id,
        email: email,
        password: password,
        fullName: full_name,
      }
      users.value.push(user)
    }
  }

  function findUserIdByEmail(email) {
    let findableUser = users.value.find((user) => user.email === email)
    if (findableUser) {
      return findableUser.id
    } else {
      return false
    }
  }

  function findUserById(id) {
    let findableUser = users.value.find((user) => user.id === id)
    if (findableUser) {
      return findableUser
    } else {
      return false
    }
  }

  function authorizeUser(id) {
    isAuthorized.value = true
    authorizedUser.value = users.value.find((user) => user.id === id)
  }

  function auth(email, password, findableUser) {
    return findableUser.email === email && findableUser.password === password
  }

  return {
    users,
    addUser,
    isAuthorized,
    authorizeUser,
    findUserIdByEmail,
    findUserById,
    authorizedUser,
    auth,
  }
})

export { usersStore }
