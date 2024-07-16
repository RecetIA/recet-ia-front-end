export class Formatter {
  static getInitials(name: string) {
    const initials = name
      ?.split(" ")
      .map((word) => word.at(0)?.toLocaleUpperCase())
      .join("");

    return initials;
  }
}
