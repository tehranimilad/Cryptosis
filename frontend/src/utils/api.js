import axios from 'axios';

const config = {
    headers: {
        'Authorization': localStorage.getItem('token')
    }
}

//USER AXIOS ROUTES 

// Log in to User Account
export async function userLogin(formData) {
    const { data } = await axios.post('http://localhost:8000/users/login', formData)
    return data
}

// Sign Up User Account 
export async function userSignUp(formData) {
    const { data } = await axios.post('http://localhost:8000/users/signup', formData)
    return data
}


// Show User / Posts (Account Page)

export async function getUserAccount(userId) {
    const { data } = await axios.get(`http://localhost:8000/users/${userId}`, config)
    return data
}


// Delete User and Associated comments

export async function deleteUserAccount(userId) {
    await axios.delete(`http://localhost:8000/users/${userId}`, config)
}

// Get token data
export async function getToken() {
    const { data } = await axios.get('http://localhost:8000/users/token', config)
    return data
}


export async function createcomments(formData) {
    const { data } = await axios.post('http://localhost:8000/comments/', formData, config)
    return data
}


// Get all commentss

export async function getAllcomments() {
    const { data } = await axios.get('http://localhost:8000/comments/')
    return data
}

// Show One comments

export async function showOnecomments(itemId) {
    const { data } = await axios.get(`http://localhost:8000/comments/${itemId}`)
    return data
}

// Update a comments

export async function updateOnecomments(itemId, formData) {
    const { data } = await axios.put(`http://localhost:8000/comments/${itemId}`, formData)
    return data
}

// Delete a comments

export async function deleteOnecomments(itemId) {
    await axios.delete(`http://localhost:8000/comments/${itemId}`, config)
}