import HW from "../src/views/HW.vue"
import { mount } from "@vue/test-utils"

test("HW Component renders the correct text", () => {
  // Arrange
  const textAssert = "Hello there!"

  // Act
  const wrapper = mount(HW);
  
  // Assert
  expect(wrapper.text()).toBe(textAssert)
})
