interface MyObject {
  [key: string]: string | undefined;
}

export function emptyStrings(obj: MyObject): boolean {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key]?.trim() === '') {
        return true; // 빈 문자열을 발견하면 true 반환
      }
    }
  }
  return false; // 빈 문자열이 없으면 false 반환
}
