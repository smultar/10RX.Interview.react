// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(request, response) {
  request.status(200).json({ status: 'Generic Message' })
}
