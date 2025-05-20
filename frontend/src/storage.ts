import type IFilter from "@/filter/IFilter"
import type MultiFilter from "@/filter/MultiFilter"

import { writable } from "svelte/store"


export const filter = writable<IFilter | null>(null)
export const newFilterParent = writable<MultiFilter | null>(null)
export const isFilterCreateDialogOpen = writable<boolean>(false)
