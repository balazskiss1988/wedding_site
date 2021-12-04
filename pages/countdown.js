function daysLeft() {
   const weddingDate = new Date("2022-05-14")
   const now = new Date()

   return Math.ceil((weddingDate.getTime() - now.getTime()) / (1000 * 3600 * 24));
}

export default daysLeft