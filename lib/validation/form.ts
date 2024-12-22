const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SPAM_WORDS = ['viagra', 'casino', 'lottery', 'winner']

export const validateEmail = (email: string) => {
  if (!email) return 'Email is required'
  if (!EMAIL_REGEX.test(email)) return 'Please enter a valid email address'
}

export const validateName = (name: string) => {
  if (!name) return 'Name is required'
  if (name.length < 2) return 'Name must be at least 2 characters long'
  if (name.length > 50) return 'Name must be less than 50 characters'
}

export const validateMessage = (message: string) => {
  if (!message) return 'Message is required'
  if (message.length < 10) return 'Message must be at least 10 characters long'
  if (SPAM_WORDS.some(word => message.toLowerCase().includes(word))) {
    return 'Message contains prohibited content'
  }
}