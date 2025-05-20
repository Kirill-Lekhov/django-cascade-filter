import "./app.css"
import App from "./App.svelte"

import { mount } from "svelte"


const app = mount(App, {
	target: document.getElementById("__cascade-filter__editor")!,
})

export default app
