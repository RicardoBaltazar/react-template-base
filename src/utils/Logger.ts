export class Logger {
  private debugOn = process.env.REACT_APP_DEBUG_ON === 'true';
  private static instance?: Logger = undefined;

  private constructor() {}

  static getInstance() {
    if (!this.instance) this.instance = new Logger();
    return this.instance;
  }

  log(msg: any) {
    if (this.debugOn) console.log(msg);
  }

  warn(msg: any) {
    if (this.debugOn) console.warn(msg);
  }

  info(msg: any) {
    if (this.debugOn) console.info(msg);
  }

  error(msg: any) {
    console.error(msg);
  }
}

export const logger = Logger.getInstance();
