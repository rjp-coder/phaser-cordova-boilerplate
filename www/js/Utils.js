class Utils {

  static formatTime(t) {
    let s = t / 1000;
    let mins = Math.floor(s / 60);
    s = s % 60;
    s = Math.floor(s * 1000) / 1000;
    let ss = s + "";
    let h = Math.floor(mins / 60);
    mins = mins % 60;
    let minsStr = mins + "";
    if (mins) ss = (s + "").padStart(2, "0");
    if (h) minsStr = minsStr.padStart(2, "0");
    return (h ? (h + ":") : "") + (mins ? (minsStr + ":") : "") + ss;
  }
}

export default Utils