import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useOrderDetailsStore = defineStore("orderDetails", () => {
  const orderDetails = ref({
    product: {},
    customerDetails: {
      name: null,
      email: null,
      phone: null,
      address: null,
    },
  });
  function setOrderDetails(val) {
    orderDetails.value = val;
  }

  return { orderDetails, setOrderDetails };
});
