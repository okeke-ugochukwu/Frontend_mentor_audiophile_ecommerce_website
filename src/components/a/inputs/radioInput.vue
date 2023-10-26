<template>
	<div>
		<div>
			<input
				type="radio"
            v-bind="$attrs" 
				class="opacity-0 absolute w-0 h-0 peer"
            :value="props.value"
				:id="props.id"
            @change="emit('select', props.value)"
				:name="props.group"
			/>

			<label
				:for="props.id"
				class="
               peer-checked:[&>div>div]:block cursor-pointer
               border border-ad-grey rounded-lg px-4 py-[18px] text-sm font-bold 
               leading-[normal] tracking-[-0.25px] text-black hover:border-ad-brown
               flex items-center gap-4
            "
			>
				<!-- >>RADIO CIRCLE -->
				<div class=" w-4 h-4 rounded-[100%] border border-ad-grey grid place-items-center">
					<div class="w-[10px] h-[10px] rounded-[100%] bg-ad-brown hidden"></div>
				</div>

				<!-- >>RADIO TEXT -->
				<span class="block">
					{{ props.label }}
				</span>
			</label>
		</div>
	</div>
</template>

<script>
export default {
	name: "RadioInput",

	props: {
		label: { type: [String, Boolean], default: false },
		group: { type: String, default: "" },
      id: { tpe: String, default: ""},
      value: { tpe: String, default: ""},
		modelValue: { type: String, default: "" },
	},

	setup(props, { emit }) {


		return {
         props, emit
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