export class Queue {
  private lastJob?: Promise<any>;

  push(job: () => Promise<any>): Promise<any> {
    const work = async () => {
      if (this.lastJob) {
        await this.lastJob;
      }
      return job();
    };
    this.lastJob = work();
    return this.lastJob;
  }
}
