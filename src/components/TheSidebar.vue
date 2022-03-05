<template>
  <c-box
    position="absolute"
    bg="#E27253"
    h="100vh"
    w="288px"
  >
  <c-flex
    display="flex"
    mt="30px"
    w="100%"
    justify="center">
    <c-image :src="require('@/assets/img/Logo2.svg')" w="120px" />
  </c-flex>
  <c-box pr="15px" pl="15px" mt="80px">
  <c-list styleType="none">
    <c-list-item bg="#FFBC9F" p="15px" borderRadius="10px">
      <router-link
        to="/dashboad"
      >
      <c-image
        :src="require('@/assets/img/dashboard-icon.svg')"
        w="25px"
        mr="15px"
        display="inline-block"
      />
      <c-box
        as="span"
        fontSize="25px"
        color="#fff"
        verticalAlign="middle"
        fontWeight="bold"
      >
        Dashboard
      </c-box>
      </router-link>
    </c-list-item>
  </c-list>
  </c-box>
  </c-box>
</template>
