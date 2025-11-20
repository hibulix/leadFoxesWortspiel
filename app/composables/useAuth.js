import { ref, readonly } from 'vue'

const user = ref(null)

export const useAuth = () => {
    const login = async (username, password) => {
        console.log('Login attempt:', username, password)

        if (username && password) {
            const userData = {
                id: Date.now(),
                username,
                isAdmin: username === 'admin'
            }
            user.value = userData

            if (process.client) {
                localStorage.setItem('user', JSON.stringify(userData))
            }

            console.log('Login successful:', userData)
            return true
        }

        console.log('Login failed: missing credentials')
        return false
    }

    const logout = async () => {
        user.value = null
        if (process.client) {
            localStorage.removeItem('user')
        }
        await navigateTo('/')
    }

    const initAuth = () => {
        if (process.client) {
            const stored = localStorage.getItem('user')
            if (stored) {
                try {
                    user.value = JSON.parse(stored)
                    console.log('Restored user from localStorage:', user.value)
                } catch (error) {
                    console.error('Error parsing stored user:', error)
                    localStorage.removeItem('user')
                }
            }
        }
    }

    if (process.client) {
        initAuth()
    }

    return {
        user: readonly(user),
        login,
        logout,
        initAuth
    }
}