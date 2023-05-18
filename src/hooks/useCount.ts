import { computed, onUpdated, reactive, ref, watch, watchEffect } from 'vue'

export const useCount = () => {
  const num = ref(0)
  const test = ref(1)
  const obj = reactive({ count: 0 })
  const updateCount = () => {
    obj.count++
  }
  const computedNum = computed({
    get: () => num.value,
    set: (val) => {
      num.value = val - 2
    }
  })
  const computedTest = computed(() => test.value + 2)
  onUpdated(() => {
    console.log(obj.count, 'count')
  })
  watchEffect(() => {
    console.log(obj.count, 'watchEffect')
  })
  watch(
    () => obj.count,
    (count, preCount) => {
      console.log(count, preCount, 'count,preCount')
    }
  )
  return {
    obj,
    computedNum,
    updateCount,
    computedTest
  }
}
