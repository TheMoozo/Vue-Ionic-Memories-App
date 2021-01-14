import { mount } from '@vue/test-utils'
import MemoriesPage from '@/pages/MemoriesPage.vue'

describe('MemoriesPage.vue', () => {
  it('renders MemoriesPage vue', () => {
    const wrapper = mount(MemoriesPage)
    expect(wrapper.text()).toMatch('Ready to create an app?')
  })
})
