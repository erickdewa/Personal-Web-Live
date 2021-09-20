export default function ({ store, redirect }) {
	/*
		Jika belum login akan diredirect ke login
	*/
	if(!store.$auth.$state.loggedIn) {
		return redirect('/auth/login')
	}
}
