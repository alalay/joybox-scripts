#!/usr/bin/env node

// 开启子进程，js是单线程
// ❓为什么要开子进程执行任务
// 💡为了并行
const spawn = require('cross-spawn')
// 获取命令行参数, slice(2)从第三个元素开始截取
const args = process.argv.slice(2)
const script = args[0] // "build"
spawn.sync(
  process.execPath, // node可执行文件
  [require.resolve('../scripts/' + script)],
  { stdio: 'inherit' } // 父子进程共享输入输出
)

console.log('done')
