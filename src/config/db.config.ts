import mongoose from 'mongoose'

export const dbConect =  (env: string)=> {
  let CDN = ''

  switch (env) {
    case 'development':
      CDN = process.env.CDN_DEV_DB as string

      // DB events handlers
      mongoose.connection.once('open', () => {
        console.log(`DB :  Database online   (${env})`)
      })

      mongoose.connection.once('disconnected', () => {
        console.log(`\n DB :  Database offline   (${env})`)
      })

      mongoose.connection.on('error', () => {
        console.error('Error conecting to the database')
      })
      break

    case 'test':
      CDN = process.env.CDN_TEST_DB as string
      break

    case 'production':
      CDN = process.env.CDN_PROD_DB as string
      break

    default:
      throw new Error(
        ' You need to create a.env file in the root of ypur project and defined CDN_DEV_DB (development) || CDN_TEST_DB (test) || CDN_PROD_DB (production)'
      )
  }

  // Initial conection
      return mongoose.connect(CDN, {
    autoCreate: true,
    bufferCommands: true
  })

 
}
