export class Formatter {
  static getInitials(name: string) {
    const initials = name
      ?.split(" ")
      .map((word) => word.at(0)?.toLocaleUpperCase())
      .join("");

    return initials;
  }

  static splitArray<T>(array: T[], parts: number = 2): T[][] {
    const result: T[][] = [];
    const partSize = Math.ceil(array.length / parts);

    for (let i = 0; i < parts; i++) {
      result.push(array.slice(i * partSize, (i + 1) * partSize));
    }

    return result;
  }
}
