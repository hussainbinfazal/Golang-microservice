package models

type User struct {
	ID    int    `json:"id" bson:"_id"`
	Name  string `json:"name"`
	Email string `json:"email"`
	Phone string `json:"phone"`
	Password string `json:"password"`
	Role string `json:"role"`
}

var users []User

func GetAllUsers() []User {
	return users
}

func CreateUser(user User) User {
	user.ID = len(users) + 1
	users = append(users, user)
	return user
}
func UpdateUser(id int, updatedUser User) User {
	for i, user := range users {
		if user.ID == id {
			updatedUser.ID = id
			users[i] = updatedUser
			return updatedUser
		}
	}
	return User{}
}
func DeleteUser(id int) User{
	for i, user := range users {
		if user.ID == id {
			users = append(users[:i], users[i+1:]...)
			return user
		}
	}
	return User{}
} 
func GetUserById(id int) User{
	for _, user := range users {
		if user.ID == id {
			return user
		}
	}
	return User{}
} 