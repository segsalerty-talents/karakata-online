<template>
  <c-flex
    :ml="{ base: 0, lg: '288px' }"
    p="1.25rem 0.9rem"
    justify="flex-start"
    flexFlow="row nowrap"
  >
    <c-list
      styleType="none"
      display="flex"
    >
      <c-list-item>
        <c-heading as="h3">
          Dashboard
        </c-heading>
      </c-list-item>
    </c-list>
    <c-list
      styleType="none"
      display="flex"
      ml="auto"
      flexDirection="row"
    >
    <c-list-item
      pr="3rem"
      :display="{ base: 'none', lg: 'block' }">
      <c-input placeholder="Search..." borderRadius="8px"/>
    </c-list-item>
    <c-list-item
      pr="1rem" alignSelf="center"
      :display="{ base: 'none', lg: 'block' }"
    >
      <c-image
        rounded="full"
        h="40px"
        w="40px"
        :src="require('@/assets/img/avatar.svg')"
        alt="Olakunle Boye"
      />
    </c-list-item>
    <c-list-item
      pr="1rem"
      alignSelf="center">
      <c-text>Boye</c-text>
    </c-list-item>
    <c-list-item
      pr="1rem"
      alignSelf="center">
      <c-image
        h="20px"
        w="20px"
        :src="require('@/assets/img/dropdown.svg')"
      />
      </c-list-item>
    </c-list>
  </c-flex>
</template>
