export class Utils{
  static sleep(ms: number = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}