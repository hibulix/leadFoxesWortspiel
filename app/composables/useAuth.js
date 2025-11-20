const user = ref(null)

export const useAuth = () => {
    const login = async (username, password) => {
        console.log('Login attempt:', username, password)

        if (username && password) {
            user.value = {
                id: Date.now(),
                username,
                isAdmin: username === 'admin'
            }

            if (process.client) {
                localStorage.setItem('user', JSON.stringify(userData))
            }

            console.log('Login successsful', userData)
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
                } catch (e) {
                    console.error('Error parsing user data from localStorage:', e)
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