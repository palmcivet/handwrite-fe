# Promise/A+

- [Promise/A+](#promisea)
    - [规范](#规范)
    - [思路](#思路)
    - [参考阅读](#参考阅读)

## 规范

[Promise/A+](https://promisesaplus.com/)

## 思路

- 使用箭头函数：箭头函数内部的 *this* 指向运行时的环境，不能通过任何方式改变其指向，即使是 `call()`、`apply()` 或 `bind()` 也无效

## 参考阅读

- [从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节](https://juejin.cn/post/6945319439772434469)
