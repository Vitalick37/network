import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": 'd3e9db55-8986-4705-a8d3-b42af80b5ce1',
    },
})

export const usersAPI = {

    getUsers(currentPage, pageSize) {

        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    
    },

    getFollow(id) {
        return instance.post(`follow/${id}`, null)
                            .then(response => response.data)
    },

    getUnFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    getProfile(userId) {
        console.warn('obsolete metod')
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },

    savePhoto(photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, 
        {headers: {
            'Content-Type': 'multipart/form-data'
        }})
    },

}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
                .then(response => response)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    },
}

