// Copyright (c) 2022 Elton Zheng
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { ref } from 'vue';

export default function Count() {
  let count = ref(0);
  const add = () => count.value++;

  return { count, add };
}
