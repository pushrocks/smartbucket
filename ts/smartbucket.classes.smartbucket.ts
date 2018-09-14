import * as plugins from './smartbucket.plugins';

export interface ISmartBucketConfig {
  provider: 'google';
  projectId: string;
  bucketName: string;
};

export class SmartBucket {
  config: ISmartBucketConfig;
  private _googleBucket
  /**
   * the constructor of SmartBucket
   */
  constructor(configArg: ISmartBucketConfig) {
    this.config = configArg;
    
  }

  /**
   * initializes the Smartbucket
   */
  async init() {
    if(this.config.provider === 'google') {
      const storage = new plugins.googleCloudStorage.Storage({
        projectId: this.config.projectId,
      })
      storage.createBucket(this.config.bucketName, () => {})
    }
  }
}
