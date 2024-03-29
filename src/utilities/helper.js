import { DATE_FORMAT, MONTH_NAME, MONTH_NAME_SHORT } from "../Constants";

export default class Helper {

  static formatDate(inputDate, format = DATE_FORMAT.MMM_YYYY) {
    let dateObj = new Date(inputDate);
    let result = inputDate;
    // 2019 September
    if (format === DATE_FORMAT.YYYY_MMMM) {
      const month = MONTH_NAME[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      result = `${year} ${month}`;
    }
    // 2019 Sep
    else if (format === DATE_FORMAT.YYYY_MMM) {
      const month = MONTH_NAME_SHORT[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      result = `${year} ${month}`;
    }
    // 15 September 2019
    else if (format === DATE_FORMAT.DD_MMMM_YYYY) {
      const date = ('0' + dateObj.getDate()).slice(-2);
      const month = MONTH_NAME[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      result = `${date} ${month} ${year}`;
    }
    // September 2019
    else if (format === DATE_FORMAT.MMMM_YYYY) {
      const month = MONTH_NAME[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      result = `${month} ${year}`;
    }
    // Sep 2019
    else if (format === DATE_FORMAT.MMM_YYYY) {
      const month = MONTH_NAME_SHORT[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      result = `${month} ${year}`;
    }
    // 2019.09.15
    else if (format === DATE_FORMAT.YYYY_MM_DD__DOT) {
      const date = ('0' + dateObj.getDate()).slice(-2);
      const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
      const year = dateObj.getFullYear();
      result = `${year}.${month}.${date}`;
    }
    // 15.09.2019
    else if (format === DATE_FORMAT.DD_MM_YYYY__DOT) {
      const date = ('0' + dateObj.getDate()).slice(-2);
      const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
      const year = dateObj.getFullYear();
      result = `${date}.${month}.${year}`;
    }
    // 2019-09-15
    else if (format === DATE_FORMAT.YYYY_MM_DD__DASH) {
      const date = ('0' + dateObj.getDate()).slice(-2);
      const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
      const year = dateObj.getFullYear();
      result = `${year}-${month}-${date}`;
    }
    // 15-09-2019
    else if (format === DATE_FORMAT.DD_MM_YYYY__DASH) {
      const date = ('0' + dateObj.getDate()).slice(-2);
      const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
      const year = dateObj.getFullYear();
      result = `${date}-${month}-${year}`;
    }

    return result;
  }

  // static stringifyDateProperties(srcObject, dataFormat = DATE_FORMAT.YYYY_MM_DD__DASH) {
  //   if (srcObject instanceof Date) {
  //     return this.formatDate(srcObject, dataFormat);
  //   } else if (srcObject instanceof Array) {
  //     for (let element of srcObject) {
  //       element = this.stringifyDateProperties(element);
  //     }
  //     return { ...srcObject };
  //   } else if (srcObject instanceof Object) {
  //     for (let prop in srcObject) {
  //       srcObject[prop] = this.stringifyDateProperties(srcObject[prop]);
  //     }
  //     return { ...srcObject };
  //   }
  //   return srcObject;
  // }

  static getPlainObject(object) {
    return JSON.parse(JSON.stringify(object));
  }

}