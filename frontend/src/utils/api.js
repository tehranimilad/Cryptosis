import axios from 'axios';

const config = {
    headers: {
        'Authorization': localStorage.getItem('token')
    }
}

//USER AXIOS ROUTES 

// Log in to User Account
export async function userLogin(formData) {
    const { data } = await axios.post('users/login', formData)
    return data
}

// Sign Up User Account 
export async function userSignUp(formData) {
    const { data } = await axios.post('users/signup', formData)
    return data
}


// Show User / Posts (Account Page)

export async function getUserAccount(userId) {
    const { data } = await axios.get(`users/${userId}`, config)
    return data
}


// Delete User and Associated comments

export async function deleteUserAccount(userId) {
    await axios.delete(`users/${userId}`, config)
}



// Get token data
export async function getToken() {
    const { data } = await axios.get('users/token', config)
    return data
}

// Create Comment
export async function createComments(formData) {
    const { data } = await axios.post('comments/', formData, config)
    return data
}


// Get all comments

export async function getAllComments() {
    const { data } = await axios.get('comments/')
    return data
}


// Get All User Comments
export async function getUserComments(itemId) {
    const { data } = await axios.get(`users/${itemId}`)
    return data
}


// Show One comments

export async function showOneComments(itemId) {
    const { data } = await axios.get(`/comments/${itemId}`)
    return data
}

// Update a comments

export async function updateOneComments(itemId, formData) {
    const { data } = await axios.put(`/comments/${itemId}`, formData)
    return data
}

// Delete a comments

export async function deleteOneComments(itemId) {
    await axios.delete(`/comments/${itemId}`, config)
}