<template>
	<div class="flex flex-col gap-[9px]">
		<label
			:for="props.group"
			class="text-xs text-black font-bold leading-[normal] tracking-[-0.214px] flex items-center justify-between"
			:class="{ invalid: error.isShown }"
		>
			<span v-if="label"> {{ props.label }}</span>
			<span v-if="error.isShown"> {{ error.mssg }} </span>
		</label>

		<input
			class="
				block w-full border border-ad-grey rounded-lg px-6 py-[18px] text-sm font-bold leading-[normal] tracking-[-0.25px] 
				placeholder-[#00000066] text-black focus:border-ad-brown focus:text-black caret-ad-brown
			"
			:class="{ invalid: error.isShown }"
			:id="props.group"
			:name="props.group"
			:type="props.type"
			required
			ref="inputRef"
			v-bind="$attrs"
			@input="VALIDATE_INPUT($event)"
         @keypress="HANDLE_KEYUP"
		/>
	</div>
</template>

<script>
import { ref } from "vue";

export default {
	name: "TextInput",

	props: {
		label: { type: [String, Boolean], default: false },
		group: { type: String, default: "" },
		modelValue: { type: String, default: "" },
		type: { type: String, default: "text" },
		auxType: { type: [String, Boolean], default: "null"},
		anyText: { type: Boolean, default: false },
		textOnly: { type: Boolean, default: false },
		numberOnly: { type: Boolean, default: false },
	},

	setup(props, { emit }) {
		const error = ref({
			isShown: false,
			mssg: null,
		});

		const VALIDATE_INPUT = (e) => {
			const val = e.target.value;
			
			if (val && val !== '' && val !== ' ') {
				switch (true) {
					case props.auxType === 'alphaNumeric':
						EMIT_VALUE(val)
						console.log("🚀 ~ file: textInput.vue:55 ~ setup ~ val:", val)
						break;

					case props.auxType === 'alpha':
						console.log("🚀 ~ file: textInput.vue:55 ~ setup ~ val:", val) 
						!( /^[A-Za-z\s]+$/.test(val) )
							? (SHOW_ERROR("Wrong format"), EMIT_VALUE())
							: EMIT_VALUE(val);
						break;
                  
                  case props.group === "phoneNumber":
						!( /^[0-9\-+]+$/.test(val) )
							? (SHOW_ERROR("Wrong format"), EMIT_VALUE())
							: EMIT_VALUE(val);
						break;

					case props.auxType === 'numeric':
						!( /^[0-9]+$/.test(val) )
							? (SHOW_ERROR("Wrong format"), EMIT_VALUE())
							: EMIT_VALUE(val);
						break;

					case props.type === "email":
						!( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) )
							? (SHOW_ERROR("Wrong format"), EMIT_VALUE())
							: EMIT_VALUE(val);
						break;	
				}
			}
			else {
				console.log(val);
				
				EMIT_VALUE(' ')
			}
		};

		const SHOW_ERROR = (mssg) => {
			error.value = {
				isShown: true,
				mssg: mssg,
			};
		};

		const REMOVE_ERROR = () => {
			error.value = {
				isShown: false,
				mssg: null,
			};
		};

		const EMIT_VALUE = (val) => {
			if(val) {
				REMOVE_ERROR();
				emit("update:modelValue", val.trim());
			}
			else {
				emit("update:modelValue", '');
			}
		}

		return {
			error,
			props,
			VALIDATE_INPUT,
		};
	},
};
</script>

<style lang="scss" scoped>
	input.invalid {
		border: 1px solid #cd2c2c;
	}

	label.invalid {
		color: #cd2c2c;
	}
</style>