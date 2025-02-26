class TaskScheduler{
    constructor(maxTasks=2) {
        this.running=0
        this.taskQueues=[]
        this.maxTasks=maxTasks
    }
    addTask(task){
        return new Promise((resolve)=>{
            this.taskQueues.push({task,resolve})
            this.schedule()
        })
    }
    schedule(){
        if(this.running>this.maxTasks||this.taskQueues.length===0){
            return
        }
        const {task,resolve}=this.taskQueues.shift()
        this.running++
        task.then(()=>{
            this.running--
            resolve()
            this.schedule()
        })
    }
}
//任务调度限制其的变量