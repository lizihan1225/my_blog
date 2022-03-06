// JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个

// function scheduler1(promises, limit) {
//     const pool = promises.slice(0, limit).map(({delay, str}, index) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 console.log(str)
//                 resolve(index)
//             }, delay)
//         })
//     })
//     let p = Promise.race(pool)
//     for(let i = limit; i < promises.length; i++) {
//         p = p.then((index) => {
//             pool[index] = new Promise((resolve) => {
//                 const { delay, str } = promises[i]
//                 setTimeout(() => {
//                     console.log(str)
//                     resolve(index)
//                 }, delay)
//             })
//             return Promise.race(pool)
//         })
//     }
//     return p
// }
// class Scheduler {
//     constructor(limit) {
//         this.tasks = []
//         this.limit = limit
//         setTimeout(() => {
//             scheduler1(this.tasks, this.limit)
//         }, 0)
//     }
//     addTask = (delay, str) =>  {
//         this.tasks.push({delay, str})
//     }
// }
// const scheduler = new Scheduler(2)
// const addTask = scheduler.addTask
class Scheduler {
    constructor(limit) {
        this.tasks = []
        this.limit = limit
        this.runCount = 0
    }
    add(delay, order) {
        const promiseCreator = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(order)
                    resolve()
                }, delay)
            })
        }
        this.tasks.push(promiseCreator)
    }
    start() {
        for(let i = 0; i < this.limit; i++) {
            this.request()
        }
    }
    request() {
        if (!this.tasks.length || this.runCount >= this.limit) {
            return
        }
        this.runCount++
        this.tasks.shift()().then(() => {
            this.runCount--
            this.request()
        })
    }
}
const scheduler = new Scheduler(2);
const addTask = (time, order) => {
  scheduler.add(time, order);
};

addTask(1000,"1");
addTask(500,"2");
addTask(300,"3");
addTask(400,"4");
scheduler.start()
// 的输出顺序是：2 3 1 4
// 2种思路 Promise.race(pool).then(p => Promise.race(pool))