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
    default: 'ES'
  }
})

defineEmits(['update:modelValue'])

const countries = [
  { code: 'AF', dialCode: '+93',  name: 'Afganistán' },
  { code: 'AL', dialCode: '+355', name: 'Albania' },
  { code: 'DE', dialCode: '+49',  name: 'Alemania' },
  { code: 'AD', dialCode: '+376', name: 'Andorra' },
  { code: 'AO', dialCode: '+244', name: 'Angola' },
  { code: 'AG', dialCode: '+1',   name: 'Antigua y Barbuda' },
  { code: 'SA', dialCode: '+966', name: 'Arabia Saudita' },
  { code: 'DZ', dialCode: '+213', name: 'Argelia' },
  { code: 'AR', dialCode: '+54',  name: 'Argentina' },
  { code: 'AM', dialCode: '+374', name: 'Armenia' },
  { code: 'AU', dialCode: '+61',  name: 'Australia' },
  { code: 'AT', dialCode: '+43',  name: 'Austria' },
  { code: 'AZ', dialCode: '+994', name: 'Azerbaiyán' },
  { code: 'BS', dialCode: '+1',   name: 'Bahamas' },
  { code: 'BH', dialCode: '+973', name: 'Bahréin' },
  { code: 'BD', dialCode: '+880', name: 'Bangladés' },
  { code: 'BB', dialCode: '+1',   name: 'Barbados' },
  { code: 'BE', dialCode: '+32',  name: 'Bélgica' },
  { code: 'BZ', dialCode: '+501', name: 'Belice' },
  { code: 'BJ', dialCode: '+229', name: 'Benín' },
  { code: 'BY', dialCode: '+375', name: 'Bielorrusia' },
  { code: 'BO', dialCode: '+591', name: 'Bolivia' },
  { code: 'BA', dialCode: '+387', name: 'Bosnia y Herzegovina' },
  { code: 'BW', dialCode: '+267', name: 'Botsuana' },
  { code: 'BR', dialCode: '+55',  name: 'Brasil' },
  { code: 'BN', dialCode: '+673', name: 'Brunéi' },
  { code: 'BG', dialCode: '+359', name: 'Bulgaria' },
  { code: 'BF', dialCode: '+226', name: 'Burkina Faso' },
  { code: 'BI', dialCode: '+257', name: 'Burundi' },
  { code: 'BT', dialCode: '+975', name: 'Bután' },
  { code: 'CV', dialCode: '+238', name: 'Cabo Verde' },
  { code: 'KH', dialCode: '+855', name: 'Camboya' },
  { code: 'CM', dialCode: '+237', name: 'Camerún' },
  { code: 'CA', dialCode: '+1',   name: 'Canadá' },
  { code: 'QA', dialCode: '+974', name: 'Catar' },
  { code: 'TD', dialCode: '+235', name: 'Chad' },
  { code: 'CL', dialCode: '+56',  name: 'Chile' },
  { code: 'CN', dialCode: '+86',  name: 'China' },
  { code: 'CY', dialCode: '+357', name: 'Chipre' },
  { code: 'CO', dialCode: '+57',  name: 'Colombia' },
  { code: 'KM', dialCode: '+269', name: 'Comoras' },
  { code: 'CG', dialCode: '+242', name: 'Congo' },
  { code: 'CD', dialCode: '+243', name: 'Congo (RD)' },
  { code: 'KP', dialCode: '+850', name: 'Corea del Norte' },
  { code: 'KR', dialCode: '+82',  name: 'Corea del Sur' },
  { code: 'CR', dialCode: '+506', name: 'Costa Rica' },
  { code: 'HR', dialCode: '+385', name: 'Croacia' },
  { code: 'CU', dialCode: '+53',  name: 'Cuba' },
  { code: 'DK', dialCode: '+45',  name: 'Dinamarca' },
  { code: 'DJ', dialCode: '+253', name: 'Yibuti' },
  { code: 'DM', dialCode: '+1',   name: 'Dominica' },
  { code: 'EC', dialCode: '+593', name: 'Ecuador' },
  { code: 'EG', dialCode: '+20',  name: 'Egipto' },
  { code: 'SV', dialCode: '+503', name: 'El Salvador' },
  { code: 'AE', dialCode: '+971', name: 'Emiratos Árabes Unidos' },
  { code: 'ER', dialCode: '+291', name: 'Eritrea' },
  { code: 'SK', dialCode: '+421', name: 'Eslovaquia' },
  { code: 'SI', dialCode: '+386', name: 'Eslovenia' },
  { code: 'ES', dialCode: '+34',  name: 'España' },
  { code: 'US', dialCode: '+1',   name: 'Estados Unidos' },
  { code: 'EE', dialCode: '+372', name: 'Estonia' },
  { code: 'SZ', dialCode: '+268', name: 'Esuatini' },
  { code: 'ET', dialCode: '+251', name: 'Etiopía' },
  { code: 'PH', dialCode: '+63',  name: 'Filipinas' },
  { code: 'FI', dialCode: '+358', name: 'Finlandia' },
  { code: 'FJ', dialCode: '+679', name: 'Fiyi' },
  { code: 'FR', dialCode: '+33',  name: 'Francia' },
  { code: 'GA', dialCode: '+241', name: 'Gabón' },
  { code: 'GM', dialCode: '+220', name: 'Gambia' },
  { code: 'GE', dialCode: '+995', name: 'Georgia' },
  { code: 'GH', dialCode: '+233', name: 'Ghana' },
  { code: 'GD', dialCode: '+1',   name: 'Granada' },
  { code: 'GR', dialCode: '+30',  name: 'Grecia' },
  { code: 'GT', dialCode: '+502', name: 'Guatemala' },
  { code: 'GN', dialCode: '+224', name: 'Guinea' },
  { code: 'GQ', dialCode: '+240', name: 'Guinea Ecuatorial' },
  { code: 'GW', dialCode: '+245', name: 'Guinea-Bisáu' },
  { code: 'GY', dialCode: '+592', name: 'Guyana' },
  { code: 'HT', dialCode: '+509', name: 'Haití' },
  { code: 'HN', dialCode: '+504', name: 'Honduras' },
  { code: 'HU', dialCode: '+36',  name: 'Hungría' },
  { code: 'IN', dialCode: '+91',  name: 'India' },
  { code: 'ID', dialCode: '+62',  name: 'Indonesia' },
  { code: 'IQ', dialCode: '+964', name: 'Irak' },
  { code: 'IR', dialCode: '+98',  name: 'Irán' },
  { code: 'IE', dialCode: '+353', name: 'Irlanda' },
  { code: 'IS', dialCode: '+354', name: 'Islandia' },
  { code: 'IL', dialCode: '+972', name: 'Israel' },
  { code: 'IT', dialCode: '+39',  name: 'Italia' },
  { code: 'JM', dialCode: '+1',   name: 'Jamaica' },
  { code: 'JP', dialCode: '+81',  name: 'Japón' },
  { code: 'JO', dialCode: '+962', name: 'Jordania' },
  { code: 'KZ', dialCode: '+7',   name: 'Kazajistán' },
  { code: 'KE', dialCode: '+254', name: 'Kenia' },
  { code: 'KG', dialCode: '+996', name: 'Kirguistán' },
  { code: 'KI', dialCode: '+686', name: 'Kiribati' },
  { code: 'KW', dialCode: '+965', name: 'Kuwait' },
  { code: 'LA', dialCode: '+856', name: 'Laos' },
  { code: 'LS', dialCode: '+266', name: 'Lesoto' },
  { code: 'LV', dialCode: '+371', name: 'Letonia' },
  { code: 'LB', dialCode: '+961', name: 'Líbano' },
  { code: 'LR', dialCode: '+231', name: 'Liberia' },
  { code: 'LY', dialCode: '+218', name: 'Libia' },
  { code: 'LI', dialCode: '+423', name: 'Liechtenstein' },
  { code: 'LT', dialCode: '+370', name: 'Lituania' },
  { code: 'LU', dialCode: '+352', name: 'Luxemburgo' },
  { code: 'MG', dialCode: '+261', name: 'Madagascar' },
  { code: 'MY', dialCode: '+60',  name: 'Malasia' },
  { code: 'MW', dialCode: '+265', name: 'Malaui' },
  { code: 'MV', dialCode: '+960', name: 'Maldivas' },
  { code: 'ML', dialCode: '+223', name: 'Malí' },
  { code: 'MT', dialCode: '+356', name: 'Malta' },
  { code: 'MA', dialCode: '+212', name: 'Marruecos' },
  { code: 'MH', dialCode: '+692', name: 'Islas Marshall' },
  { code: 'MR', dialCode: '+222', name: 'Mauritania' },
  { code: 'MU', dialCode: '+230', name: 'Mauricio' },
  { code: 'MX', dialCode: '+52',  name: 'México' },
  { code: 'FM', dialCode: '+691', name: 'Micronesia' },
  { code: 'MD', dialCode: '+373', name: 'Moldavia' },
  { code: 'MC', dialCode: '+377', name: 'Mónaco' },
  { code: 'MN', dialCode: '+976', name: 'Mongolia' },
  { code: 'ME', dialCode: '+382', name: 'Montenegro' },
  { code: 'MZ', dialCode: '+258', name: 'Mozambique' },
  { code: 'MM', dialCode: '+95',  name: 'Myanmar' },
  { code: 'NA', dialCode: '+264', name: 'Namibia' },
  { code: 'NR', dialCode: '+674', name: 'Nauru' },
  { code: 'NP', dialCode: '+977', name: 'Nepal' },
  { code: 'NI', dialCode: '+505', name: 'Nicaragua' },
  { code: 'NE', dialCode: '+227', name: 'Níger' },
  { code: 'NG', dialCode: '+234', name: 'Nigeria' },
  { code: 'NO', dialCode: '+47',  name: 'Noruega' },
  { code: 'NZ', dialCode: '+64',  name: 'Nueva Zelanda' },
  { code: 'OM', dialCode: '+968', name: 'Omán' },
  { code: 'NL', dialCode: '+31',  name: 'Países Bajos' },
  { code: 'PK', dialCode: '+92',  name: 'Pakistán' },
  { code: 'PW', dialCode: '+680', name: 'Palaos' },
  { code: 'PS', dialCode: '+970', name: 'Palestina' },
  { code: 'PA', dialCode: '+507', name: 'Panamá' },
  { code: 'PG', dialCode: '+675', name: 'Papúa Nueva Guinea' },
  { code: 'PY', dialCode: '+595', name: 'Paraguay' },
  { code: 'PE', dialCode: '+51',  name: 'Perú' },
  { code: 'PL', dialCode: '+48',  name: 'Polonia' },
  { code: 'PT', dialCode: '+351', name: 'Portugal' },
  { code: 'GB', dialCode: '+44',  name: 'Reino Unido' },
  { code: 'CF', dialCode: '+236', name: 'República Centroafricana' },
  { code: 'CZ', dialCode: '+420', name: 'República Checa' },
  { code: 'DO', dialCode: '+1',   name: 'República Dominicana' },
  { code: 'RO', dialCode: '+40',  name: 'Rumanía' },
  { code: 'RW', dialCode: '+250', name: 'Ruanda' },
  { code: 'RU', dialCode: '+7',   name: 'Rusia' },
  { code: 'WS', dialCode: '+685', name: 'Samoa' },
  { code: 'KN', dialCode: '+1',   name: 'San Cristóbal y Nieves' },
  { code: 'SM', dialCode: '+378', name: 'San Marino' },
  { code: 'VC', dialCode: '+1',   name: 'San Vicente y las Granadinas' },
  { code: 'LC', dialCode: '+1',   name: 'Santa Lucía' },
  { code: 'ST', dialCode: '+239', name: 'Santo Tomé y Príncipe' },
  { code: 'SN', dialCode: '+221', name: 'Senegal' },
  { code: 'RS', dialCode: '+381', name: 'Serbia' },
  { code: 'SC', dialCode: '+248', name: 'Seychelles' },
  { code: 'SL', dialCode: '+232', name: 'Sierra Leona' },
  { code: 'SG', dialCode: '+65',  name: 'Singapur' },
  { code: 'SY', dialCode: '+963', name: 'Siria' },
  { code: 'SO', dialCode: '+252', name: 'Somalia' },
  { code: 'LK', dialCode: '+94',  name: 'Sri Lanka' },
  { code: 'ZA', dialCode: '+27',  name: 'Sudáfrica' },
  { code: 'SD', dialCode: '+249', name: 'Sudán' },
  { code: 'SS', dialCode: '+211', name: 'Sudán del Sur' },
  { code: 'SE', dialCode: '+46',  name: 'Suecia' },
  { code: 'CH', dialCode: '+41',  name: 'Suiza' },
  { code: 'SR', dialCode: '+597', name: 'Surinam' },
  { code: 'TH', dialCode: '+66',  name: 'Tailandia' },
  { code: 'TW', dialCode: '+886', name: 'Taiwán' },
  { code: 'TZ', dialCode: '+255', name: 'Tanzania' },
  { code: 'TJ', dialCode: '+992', name: 'Tayikistán' },
  { code: 'TL', dialCode: '+670', name: 'Timor-Leste' },
  { code: 'TG', dialCode: '+228', name: 'Togo' },
  { code: 'TO', dialCode: '+676', name: 'Tonga' },
  { code: 'TT', dialCode: '+1',   name: 'Trinidad y Tobago' },
  { code: 'TN', dialCode: '+216', name: 'Túnez' },
  { code: 'TM', dialCode: '+993', name: 'Turkmenistán' },
  { code: 'TR', dialCode: '+90',  name: 'Turquía' },
  { code: 'TV', dialCode: '+688', name: 'Tuvalu' },
  { code: 'UA', dialCode: '+380', name: 'Ucrania' },
  { code: 'UG', dialCode: '+256', name: 'Uganda' },
  { code: 'UY', dialCode: '+598', name: 'Uruguay' },
  { code: 'UZ', dialCode: '+998', name: 'Uzbekistán' },
  { code: 'VU', dialCode: '+678', name: 'Vanuatu' },
  { code: 'VA', dialCode: '+379', name: 'Ciudad del Vaticano' },
  { code: 'VE', dialCode: '+58',  name: 'Venezuela' },
  { code: 'VN', dialCode: '+84',  name: 'Vietnam' },
  { code: 'YE', dialCode: '+967', name: 'Yemen' },
  { code: 'ZM', dialCode: '+260', name: 'Zambia' },
  { code: 'ZW', dialCode: '+263', name: 'Zimbabue' },
  { code: 'MK', dialCode: '+389', name: 'Macedonia del Norte' },
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

      <div class="phone-country-wrapper">

        <div class="phone-country-display" aria-hidden="true">
          <span :class="`fi fis fi-${selectedCountry.code.toLowerCase()}`" />
          <span class="phone-dial-code">{{ selectedCountry.dialCode }}</span>
        </div>

        <select
          v-model="selectedCode"
          :disabled="disabled"
          class="phone-country-select"
          aria-label="Código de país"
        >
          <option
            v-for="country in countries"
            :key="country.code"
            :value="country.code"
          >
            {{ country.name }} ({{ country.dialCode }})
          </option>
        </select>

      </div>

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

.phone-country-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-shrink: 0;
  cursor: pointer;
}

.phone-country-display {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0 0.75rem;
  pointer-events: none;
}

.phone-dial-code {
  font-size: var(--font-size-body-sm);
  color: var(--color-text-body-default);
}

.phone-country-select {
  position: absolute;
  inset: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
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
