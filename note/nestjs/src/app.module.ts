import { AppController } from './app.controller'
import { Module } from '@nestjs/common'

// @Module是组织代码的基本单元，将相关的组件比如控制器、服务器、组织者 组合在一起
@Module({
    controllers: [AppController]
})
export class AppModule {

}