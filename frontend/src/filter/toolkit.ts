import type IFilterValue from "@/filter/IFilterValue"


export function group(...args: IFilterValue[]): IFilterValue {
	const labels: string[] = []
	const values: any[] = []

	for (const arg of args) {
		labels.push(arg.label)
		values.push(arg.value)
	}

	return {
		label: labels.join(", "),
		value: values,
	}
}
