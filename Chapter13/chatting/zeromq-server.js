import { createServer } from 'http'
import staticHandler from 'serve-handler'
import ws from 'ws'
import yargs from 'yargs'
import zmq from 'zeromq'

const server = createServer((req, res) => {
    return staticHandler(req, res, { public: 'www '})
})

let pubSocket
async function initalizeSockets () {
    pubSocket = new zmq.Publisher()
    await pubSocker.bind(`tcp://localhost:${yargs.argv.pub}`)

    const subSocket = new zmq.Subscriber()
    const subPorts = [].concat(yargs.argv.sub)
    for (const port of subPorts) {
        console.log(`Subscribing to ${port}`)
        subSocket.connect(`tcp://localhost:${port}`)
    }
    subSocket.connect('chat')

    for await (const [msg] of subSocket) {
        console.log(`Message from another server: ${msg}`)
        broadcast(msg.toString().split(` `)[1])
    }
}

initalizeSockets()



const wss = new ws.Server({ server })
wss.on('connection', client => {
    console.log(`Client connected`)
    client.on('message', msg => {
        console.log(`Message: ${msg}`)
        broadcast(msg)
        pubSocket.send(`chat ${msg}`)
    })
})
function broadcast(msg) {
    for (const client of wss.clients) {
        if (client.readyState === ws.OPEN) {
            client.send(msg)
        }
    }
}

server.listen(process.args[2] || 8080)