import { ref } from 'vue'

export default defineComponent({
  name: 'AppAlert',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    title: {
      type: String,
      default: ''
    }
  },
  async setup(props, { slots }) {
    const count = ref(123456)
    const { data, error, status } = await useFetch('https://void.ebichu.cc/sts')

    return () => (
      <div class={`alert alert-${props.type}`}>
        {props.title && <h4>{props.title}</h4>}
        {slots.default?.()}
        <button onClick={() => count.value++}>
          Clicked {count.value} times
        </button>
        <label>Status: {status.value}</label>
        <pre>
          {JSON.stringify(data.value, null, 2)}
        </pre>
      </div>
    )
  }
})