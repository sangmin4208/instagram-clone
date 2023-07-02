export const AppPath = {
  home: '/',
  signIn: '/sign-in',
  search: '/search',
  createPost: '/create-post',
  profile: '/profile',
  userDetail: (slug: string) => `/users/${slug}`,
}
