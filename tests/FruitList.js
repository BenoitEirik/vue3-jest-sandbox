import FruitList  from '../src/views/FruitList.vue'
import { mount } from "@vue/test-utils"

describe('FruitList component', () => {
  test('Test initial fruitlist value', () => {
    // Arrange
    const fruitsAssert = ["apple","banana","orange"]

    // Act
    const wrapper = mount(FruitList)

    // Assert
    expect(wrapper.vm.fruits).toEqual(fruitsAssert)
  })

  test('', () => {
    const nbFruitsAssert = 3
    const nbFruitsNotAssert = 2

    const wrapper = mount(FruitList)

    expect(wrapper.vm.nbFruits).toBe(nbFruitsAssert)
    expect(wrapper.vm.nbFruits).not.toBe(nbFruitsNotAssert)
  })
})
