<script setup>
const { user, logout } = useAuth()
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow-sm">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-gray-900">
              🎮 LeadFoxes Wortspiel
            </NuxtLink>
          </div>

          <div class="flex items-center space-x-4">
            <NuxtLink to="/highscore" class="text-gray-600 hover:text-gray-900">Punktzahl</NuxtLink>
            <NuxtLink v-if="!user" to="/login" class="btn btn-primary">Login</NuxtLink>
            <div v-else class="flex items-center space-x-2">
              <span class="text-gray-700">{{ user.username }}</span>
              <NuxtLink v-if="user.isAdmin" to="/admin" class="text-blue-600 hover:text-blue-800">Admin</NuxtLink>
              <button @click="logout" class="btn btn-secondary">Logout</button>/>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <slot />
    </main>

    <footer class="bg-white border-t mt-auto">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-600">&copy; 2025 LeadFoxes Wortspiel. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>