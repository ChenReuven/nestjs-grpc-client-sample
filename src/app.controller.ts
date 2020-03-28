import { Controller, Logger, Post, Body, OnModuleInit } from '@nestjs/common';
import { IGrpcService } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
  private logger = new Logger('AppController');

  @Client(microserviceOptions)
  private client: ClientGrpc;

  private grpcService: IGrpcService;

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post('add')
  async accumulate(@Body('data') data: number[])  {
    this.logger.log(`Adding ${data.toString()}`);
    return this.grpcService.accumulate({ data });
  }
}
