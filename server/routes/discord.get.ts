export default defineEventHandler((event) => {
  return sendRedirect(event, 'https://discord.gg/6mRPXyCamB', 302)
})