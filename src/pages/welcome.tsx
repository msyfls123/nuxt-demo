import AppAlert from "~/components/AppAlert"

export default defineComponent({
  name: 'Welcome',
  setup() {
    return () => (
      <div>
        <h1>Welcome to Nuxt</h1>
        <p>
          For a guide and recipes on how to configure / customize this project,
          check out the
        </p>
        <AppAlert title="23123">
          sss
        </AppAlert>
      </div>
    )
  }
})