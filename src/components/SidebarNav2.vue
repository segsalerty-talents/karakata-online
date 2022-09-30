<template>
  <c-list-item
    :display="{ base: 'flex', lg: 'block' }"
    justifyContent="center"
    alignItems="center"
    :bg="$route.path === url ? '#FFBC9F' : ''"
    :_hover="{ bg: '#FFBC9F' }"
    h="100%"
    :borderRadius="{ base: '0px', lg: '10px' }"
    w="100%"
    :p="{ base: 0, lg: '15px 0px 15px 15px' }"
  >
    <c-link as="router-link" :to="url" :_hover="{ decoration: 'none' }">
      <!-- <c-image
        :src="item.icon"
        w="20px"
        :mr="{ base: 0, lg: '15px' }"
        display="inline-block"
      /> -->
      <c-box
        as="i"
        verticalAlign="middle"
        display="inline-block"
        :mr="{ base: 0, lg: '15px' }"
      >
        <slot></slot>
      </c-box>
      <c-box
        :display="{ base: 'none', lg: 'inline-block' }"
        as="span"
        fontSize="18px"
        color="#fff"
        verticalAlign="middle"
        :fontWeight="$route.path === url ? 'bold' : ''"
      >
        {{ label }}
      </c-box>
    </c-link>
  </c-list-item>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '/admin/dashboard'
    },
    label: {
      type: String,
      default: 'Dashboard'
    }
  }
}
</script>
