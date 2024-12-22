export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) return 'Email is required'
  if (!emailRegex.test(email)) return 'Please enter a valid email address'
}

export const validateName = (name: string) => {
  if (!name) return 'Name is required'
  if (name.length < 2) return 'Name must be at least 2 characters long'
}