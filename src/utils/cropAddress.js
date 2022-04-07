export function cropAddress(string = "", range = 10) {
  const [start, end] = [
    string?.substr(0, range),
    string?.substr(string?.length - range, string?.length - 1),
    //
  ];

  return start + "..." + end;
}
