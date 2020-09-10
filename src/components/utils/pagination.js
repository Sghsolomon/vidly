import _ from "lodash";

export function pagination(item, currentPage, pageSize) {
  const startIndex = (currentPage - 1) * pageSize;
  //   const a = _.slice(item, startIndex);
  //   const b = _.take(a, pageSize);
  //return b;
  return _(item).slice(startIndex).take(pageSize).value();
}
