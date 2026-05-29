<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md'
  },

  disabled: {
    type: Boolean,
    default: false
  },

  invalid: {
    type: Boolean,
    default: false
  },

  label: {
    type: String,
    default: ''
  },

  modelValue: {
    type: String,
    default: ''
  },

  defaultCountry: {
    type: String,
    default: 'MX'
  }
})

defineEmits(['update:modelValue'])

const countries = [
  { code: 'MX', dialCode: '+52',  flag: '🇲🇽', name: 'México' },
  { code: 'US', dialCode: '+1',   flag: '🇺🇸', name: 'Estados Unidos' },
  { code: 'CA', dialCode: '+1',   flag: '🇨🇦', name: 'Canadá' },
  { code: 'ES', dialCode: '+34',  flag: '🇪🇸', name: 'España' },
  { code: 'AR', dialCode: '+54',  flag: '🇦🇷', name: 'Argentina' },
  { code: 'BR', dialCode: '+55',  flag: '🇧🇷', name: 'Brasil' },
  { code: 'CL', dialCode: '+56',  flag: '🇨🇱', name: 'Chile' },
  { code: 'CO', dialCode: '+57',  flag: '🇨🇴', name: 'Colombia' },
  { code: 'VE', dialCode: '+58',  flag: '🇻🇪', name: 'Venezuela' },
  { code: 'PE', dialCode: '+51',  flag: '🇵🇪', name: 'Perú' },
  { code: 'EC', dialCode: '+593', flag: '🇪🇨', name: 'Ecuador' },
  { code: 'GT', dialCode: '+502', flag: '🇬🇹', name: 'Guatemala' },
  { code: 'CR', dialCode: '+506', flag: '🇨🇷', name: 'Costa Rica' },
  { code: 'PA', dialCode: '+507', flag: '🇵🇦', name: 'Panamá' },
  { code: 'DO', dialCode: '+1',   flag: '🇩🇴', name: 'República Dominicana' },
]

const selectedCode = ref(props.defaultCountry)

const selectedCountry = computed(() =>
  countries.find(c => c.code === selectedCode.value) ?? countries[0]
)

const sizeClasses = {
  sm: 'phone-sm',
  md: 'phone-md',
  lg: 'phone-lg'
}
</script>

<template>
  <div class="flex flex-col gap-2">

    <label v-if="label" class="text-sm">{{ label }}</label>

    <div
      class="phone-wrapper"
      :class="[sizeClasses[size], { 'phone-wrapper--invalid': invalid, 'phone-wrapper--disabled': disabled }]"
    >
      <select
        v-model="selectedCode"
        :disabled="disabled"
        class="phone-country"
        :class="sizeClasses[size]"
        aria-label="Código de país"
      >
        <option
          v-for="country in countries"
          :key="country.code"
          :value="country.code"
        >
          {{ country.flag }} {{ country.dialCode }}
        </option>
      </select>

      <div class="phone-divider" />

      <input
        type="tel"
        :value="modelValue"
        :disabled="disabled"
        :aria-invalid="invalid"
        placeholder="000 000 0000"
        class="phone-input"
        :class="sizeClasses[size]"
        @input="$emit('update:modelValue', $event.target.value)"
      />
    </div>

  </div>
</template>

<style scoped>

.phone-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid var(--color-border-secondary);
  background-color: var(--color-surface-default);
  transition: border-color 0.2s;

  &:focus-within {
    border-color: var(--color-border-action);
  }

  &:hover:not(:focus-within) {
    border-color: var(--color-border-default-hover);
  }
}

.phone-wrapper--invalid {
  border-color: var(--color-border-destructive) !important;
}

.phone-wrapper--disabled {
  background-color: var(--color-surface-disabled);
  border-color: var(--color-border-disabled);
  pointer-events: none;
}

.phone-country {
  appearance: none;
  -webkit-appearance: none;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0 0.75rem;
  color: var(--color-text-body-default);
  flex-shrink: 0;

  &:focus {
    outline: none;
  }
}

.phone-divider {
  width: 1px;
  align-self: stretch;
  background-color: var(--color-border-tertiary);
  margin: 8px 0;
}

.phone-input {
  flex: 1;
  border: none;
  background: transparent;
  padding: 0 0.75rem;
  color: var(--color-text-body-default);

  &::placeholder {
    color: var(--color-text-placeholder-default);
  }

  &:focus {
    outline: none;
  }
}

/* Tamaños */
.phone-sm {
  height: 44px;
  font-size: var(--font-size-body-sm);
}

.phone-md {
  height: 52px;
  font-size: var(--font-size-body-base);
}

.phone-lg {
  height: 60px;
  font-size: var(--font-size-body-lg);
}

</style>
