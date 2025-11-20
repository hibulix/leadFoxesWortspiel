<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold text-center mb-6">Anmeldung</h1>

    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">Benutzername</label>
        <input
            v-model="username"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Benutzername eingeben"
        >
      </div>

      <div class="mt-6">
        <label class="block text-sm font-medium text-gray-700 mb-2">Passwort</label>
        <input
            v-model="password"
            type="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            placeholder="Passwort eingeben"
        >
      </div>

      <button type="submit" class="w-full mb-4 btn btn-primary" :disabled="loading">
        {{ loading ? 'Anmelden...' : 'Anmelden' }}
      </button>
    </form>

    <div class="text-center">
      <p class="text-sm text-gray-600">Einfach einen beliebigen Benutzername und Passwort eingeben!</p>
      <p class="text-xs text-gray-500 mt-2">(Admin-Zugang mit Benutzername "admin")</p>
    </div>
  </div>
</template>

<script setup>
const { login } = useAuth()

const username = ref('')
const password = ref('')
const loading = ref(false)

const handleSubmit = async () => {
  console.log('Submitting login form with:', username.value, password.value)
  loading.value = true

  try {
    const success = await login(username.value, password.value)
    console.log('Login attempt result:', success)

    if (success) {
      console.log('Login successful, redirecting to /spiel...')
      await navigateTo('/spiel')
    } else {
      console.error('Login failed')
      alert('Anmeldung fehlgeschlagen')
    }
  } catch (error) {
    console.error('Error during login:', error)
    alert('Ein Fehler ist aufgetreten:' + error.message)
  } finally {
    loading.value = false
  }
}
</script>
