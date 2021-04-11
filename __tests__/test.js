import { mount, setupTest  } from '@nuxt/test-utils'
import ConfirmationModal from '../components/ConfirmationModal.vue'






describe('Confirmation modal window component', () => {
    setupTest ({})
    const wrapper = mount(ConfirmationModal)
it('Есть кнопка Да', () => {
    expect(wrapper.contains('button')).toBe(true)
})

console.log(wrapper)
})