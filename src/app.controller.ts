import { Controller, Get } from '@nestjs/common';
import * as Docker from 'dockerode';
import { AppService } from './app.service';

const docker = new Docker();
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/containers')
  async getContainers() {
    const containers = await Promise.all(
      (await docker.listContainers()).map(async (containerInfo) => {
        const container = docker.getContainer(containerInfo.Id);
        const containerInspect = await container.inspect();
        return {
          id: containerInfo.Id,
          name: containerInspect.Name,
          status: containerInfo.State,
        };
      }),
    );

    return containers;
  }
}
