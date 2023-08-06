import { createServer } from 'http'
import { cpus } from 'os'
import cluster from 'cluster'


if (cluster.isMaster) {
    const availableCpus = cpus()
    console.log(`Clustering to ${availableCpus.length} processes`)
    availableCpus.forEach(() => cluster.fork()) // 이 땐 isWorker가 true로 실행됨
} else {
    const { pid } = process
    const server = createServer((req, res) => {
        let i = 1e7
        // cpu 작업 시뮬레이션
        while (i > 0) { i-- }

        console.log(`Handling request from ${pid}`)
        res.end(`Hello from ${pid}\n`)
    })
    server.listen(8080, () => console.log(`Started at ${pid}`))
}

