<script setup>
import AswarLogo from "@images/favicon.png";

import navItems from '@/navigation/vertical'
import NavBar from "@layouts/components/NavBar.vue";
// SECTION: Loading Indicator
const isFallbackStateActive = ref(false)
const refLoadingIndicator = ref(null)

const router = useRouter()
watch([
  isFallbackStateActive,
  refLoadingIndicator,
], () => {
  if (isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.fallbackHandle()
  if (!isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.resolveHandle()
}, { immediate: true })
// !SECTION
</script>

<template>

    <VLayout class="flex justify-start items-center w-full h-screen ">
      <VNavigationDrawer


        class="flex justify-start items-center  h-full "
      >
        <VList>
          <VListItem
          @click="()=>{router.push('/') }"
            :prepend-avatar="AswarLogo"

            title="Aswar Tool Kit"
          ></VListItem>
        </VList>

        <VDivider/>

        <VList class="" density="compact" nav>
          <VListItem  v-for="item in navItems" :key="item.title" @click="()=>{router.push(item.to) }" :prepend-avatar="item.icon" class="text-xl" :title="item.title" :value="item.title"/>


        </VList>

        <VDivider/>
      </VNavigationDrawer>

      <VMain class="h-full w-full  flex flex-col justify-start items-center">
        <NavBar/>
        <AppLoadingIndicator ref="refLoadingIndicator" />
       <!-- 👉 Pages -->
        <RouterView v-slot="{ Component }">
          <Suspense
            :timeout="0"
            @fallback="isFallbackStateActive = true"
            @resolve="isFallbackStateActive = false"
          >
            <Component :is="Component" />
          </Suspense>
        </RouterView>



      </VMain>
    </VLayout>






</template>
