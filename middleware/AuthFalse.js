export default function ({ store, redirect }) {
	/*
		Jika sudah login akan diredirect ke home
	*/
	if(store.$auth.$state.loggedIn) {
		return redirect('/')
	}
}
