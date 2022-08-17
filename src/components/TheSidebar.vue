<template>
  <c-box
    position="fixed"
    :top="{ base: 'inherit', lg: 0 }"
    :bottom="{ base: 0, lg: 'inherit' }"
    bg="#E27253"
    :h="{ base: '60px', lg: '100vh' }"
    :w="{ base: '100%', lg: '288px' }"
    zIndex="10"
  >
    <c-flex :display="{ base: 'none', lg: 'flex' }" mt="30px" w="100%" justify="center">
      <c-image :src="require('@/assets/img/Logo2.svg')" w="120px" />
    </c-flex>
    <c-box
      :pr="{ base: '0px', lg: '15px' }"
      :pl="{ base: '0px', lg: '15px' }"
      :mt="{ base: '0px', lg: '80px' }"
      :w="{ base: '100%' }"
      :h="{ base: '100%', lg: 'auto' }"
    >
      <c-list styleType="none" :display="{ base: 'flex', lg: 'block' }" w="100%" h="100%">
        <template v-for="(item, index) in topLink">
          <c-list-item
            :display="{ base: 'flex', lg: 'block' }"
            justifyContent="center"
            alignItems="center"
            :bg="$route.path === item.url ? '#FFBC9F' : ''"
            :_hover="{ bg: '#FFBC9F' }"
            h="100%"
            :borderRadius="{ base: '0px', lg: '10px' }"
            :key="index"
            w="100%"
            :p="{ base: 0, lg: '15px 0px 15px 15px' }"
          >
            <c-link as="router-link" :to="item.url" :_hover="{ decoration: 'none' }">
              <c-image
                :src="item.icon"
                w="20px"
                :mr="{ base: 0, lg: '15px' }"
                display="inline-block"
              />
              <c-box
                :display="{ base: 'none', lg: 'inline-block' }"
                as="span"
                fontSize="18px"
                color="#fff"
                verticalAlign="middle"
                :fontWeight="$route.path === item.url ? 'medium' : ''"
              >
                {{ item.name }}
              </c-box>
            </c-link>
          </c-list-item>
        </template>
        <c-list-item
          :display="{ base: 'flex', lg: 'none' }"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          <c-link @click="showMenu = !showMenu">
            <c-image :src="require('@/assets/img/dots-icon.svg')" />
          </c-link>
        </c-list-item>
      </c-list>
    </c-box>
    <c-box :display="{ base: 'none', lg: 'block' }" mt="50px" pr="15px" pl="15px">
      <c-image :src="require('@/assets/img/line.svg')" />
    </c-box>
    <c-box
      :display="{ base: showMenu === true ? 'block' : 'none', lg: 'block' }"
      :position="{ base: 'absolute', lg: 'relative' }"
      right="0"
      :bottom="{ base: '60px', lg: 'auto' }"
      bg="#E27253"
      :pr="{ base: '0px', lg: '15px' }"
      :pl="{ base: '0px', lg: '15px' }"
      :mt="{ base: '0px', lg: '50px' }"
      :w="{ base: '60px', lg: '100%' }"
      :h="{ base: '100px', lg: 'auto' }"
    >
      <c-list
        styleType="none"
        :display="{ base: 'flex', lg: 'block' }"
        justifyContent="space-around"
        flexDirection="column"
        w="100%"
        h="100%"
      >
        <template v-for="(item, index) in bottomLink">
          <c-list-item
            :display="{ base: 'flex', lg: 'block' }"
            justifyContent="center"
            alignItems="center"
            :bg="$route.path === item.url ? '#FFBC9F' : ''"
            :_hover="{ bg: '#FFBC9F' }"
            h="100%"
            :borderRadius="{ base: '0px', lg: '10px' }"
            :key="index"
            w="100%"
            :p="{ base: 0, lg: '15px 0px 15px 15px' }"
          >
            <c-link as="router-link" :to="item.url" :_hover="{ decoration: 'none' }">
              <c-image
                :src="item.icon"
                w="20px"
                :mr="{ base: 0, lg: '15px' }"
                display="inline-block"
              />
              <c-box
                :display="{ base: 'none', lg: 'inline-block' }"
                as="span"
                fontSize="18px"
                color="#fff"
                verticalAlign="middle"
                :fontWeight="$route.path === item.url ? 'bold' : ''"
              >
                {{ item.name }}
              </c-box>
            </c-link>
          </c-list-item>
        </template>
      </c-list>
    </c-box>
  </c-box>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      topLink: [
        {
          url: '/admin/dashboard',
          name: 'Dashboard',
          icon: require('@/assets/img/dashboard-icon.svg')
        },
        {
          url: '/admin/sales',
          name: 'Sales',
          icon: require('@/assets/img/users.svg')
        },
        {
          url: '/admin/automatic-configuration',
          name: 'Automation configuration',
          icon: require('@/assets/img/note-icon.svg')
        },
        {
          url: '/admin/segmentation',
          name: 'Segmentation',
          icon: require('@/assets/img/note-icon.svg')
        }
      ],
      bottomLink: [
        {
          url: '/admin/settings',
          name: 'Settings',
          icon: require('@/assets/img/settings-icon.svg')
        },
        {
          url: '/admin/support',
          name: 'Support',
          icon: require('@/assets/img/help-icon.svg')
        }
      ],
      showMenu: false
    }
  }
}
</script>
